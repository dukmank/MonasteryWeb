const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const cloudinaryEnabled = Boolean(CLOUD && PRESET);

/**
 * Insert auto-format + auto-quality transforms into a Cloudinary delivery URL
 * (serves WebP/AVIF + smart compression). Safe to call on any URL — returns
 * non-Cloudinary or already-transformed URLs unchanged.
 */
export function cld(url) {
  if (!url || typeof url !== "string") return url || "";
  if (!url.includes("res.cloudinary.com") || !url.includes("/image/upload/")) return url;
  if (/\/image\/upload\/[a-z]_/.test(url)) return url; // already has a transform
  return url.replace("/image/upload/", "/image/upload/f_auto,q_auto/");
}

/**
 * Downscale + re-compress a large image in the browser BEFORE upload, so we
 * don't store huge originals. Keeps PNG (transparency); leaves GIF/SVG/HEIC and
 * already-small files untouched. Falls back to the original on any failure.
 */
async function compressImage(file) {
  try {
    if (!file.type.startsWith("image/")) return file;
    if (file.type === "image/gif" || file.type === "image/svg+xml") return file;
    if (file.size < 600 * 1024) return file; // already small enough

    const MAX = 1920;
    let img, w, h;
    const bitmap = await createImageBitmap(file).catch(() => null);
    if (bitmap) {
      img = bitmap; w = bitmap.width; h = bitmap.height;
    } else {
      img = await new Promise((res, rej) => {
        const im = new Image();
        im.onload = () => res(im);
        im.onerror = rej;
        im.src = URL.createObjectURL(file);
      });
      w = img.naturalWidth; h = img.naturalHeight;
    }
    if (!w || !h) return file;

    const scale = Math.min(1, MAX / Math.max(w, h));
    const cw = Math.round(w * scale);
    const ch = Math.round(h * scale);
    const canvas = document.createElement("canvas");
    canvas.width = cw;
    canvas.height = ch;
    canvas.getContext("2d").drawImage(img, 0, 0, cw, ch);

    const type = file.type === "image/png" ? "image/png" : "image/jpeg";
    const blob = await new Promise((res) => canvas.toBlob(res, type, 0.85));
    if (!blob || blob.size >= file.size) return file; // no gain → keep original
    return new File([blob], file.name, { type });
  } catch {
    return file;
  }
}

/**
 * Upload an image File to Cloudinary using an UNSIGNED preset (no card needed).
 * Returns the secure HTTPS URL of the uploaded image.
 */
export async function uploadImage(file, { onProgress } = {}) {
  if (!cloudinaryEnabled) {
    throw new Error(
      "Cloudinary chưa được cấu hình. Điền VITE_CLOUDINARY_CLOUD_NAME và VITE_CLOUDINARY_UPLOAD_PRESET vào .env"
    );
  }

  // Defense-in-depth: only allow image files under a sane size before upload.
  if (file && file.type && !file.type.startsWith("image/")) {
    throw new Error("Chỉ chấp nhận tệp ảnh (JPG, PNG, WebP…).");
  }
  if (file && file.size > 15 * 1024 * 1024) {
    throw new Error("Ảnh quá lớn (tối đa 15MB). Vui lòng chọn ảnh nhỏ hơn.");
  }

  const optimized = await compressImage(file);

  const url = `https://api.cloudinary.com/v1_1/${CLOUD}/image/upload`;
  const form = new FormData();
  form.append("file", optimized);
  form.append("upload_preset", PRESET);

  // Use XHR so we can report upload progress.
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && onProgress) onProgress(Math.round((e.loaded / e.total) * 100));
    };
    xhr.onload = () => {
      try {
        const res = JSON.parse(xhr.responseText);
        if (xhr.status >= 200 && xhr.status < 300 && res.secure_url) resolve(res.secure_url);
        else reject(new Error(res?.error?.message || "Upload ảnh thất bại"));
      } catch {
        reject(new Error("Phản hồi Cloudinary không hợp lệ"));
      }
    };
    xhr.onerror = () => reject(new Error("Lỗi mạng khi upload ảnh"));
    xhr.send(form);
  });
}

/**
 * Upload any file (e.g. a PDF) to Cloudinary using the UNSIGNED preset.
 * No compression. Returns the secure HTTPS URL of the uploaded file.
 */
export async function uploadFile(file, { onProgress } = {}) {
  if (!cloudinaryEnabled) {
    throw new Error("Cloudinary is not configured (VITE_CLOUDINARY_CLOUD_NAME / VITE_CLOUDINARY_UPLOAD_PRESET).");
  }
  if (file && file.size > 25 * 1024 * 1024) {
    throw new Error("File too large (max 25MB).");
  }

  const url = `https://api.cloudinary.com/v1_1/${CLOUD}/auto/upload`;
  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", PRESET);

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && onProgress) onProgress(Math.round((e.loaded / e.total) * 100));
    };
    xhr.onload = () => {
      try {
        const res = JSON.parse(xhr.responseText);
        if (xhr.status >= 200 && xhr.status < 300 && res.secure_url) resolve(res.secure_url);
        else reject(new Error(res?.error?.message || "File upload failed"));
      } catch {
        reject(new Error("Invalid Cloudinary response"));
      }
    };
    xhr.onerror = () => reject(new Error("Network error during upload"));
    xhr.send(form);
  });
}

// News cover: the post's cover image, else its first extra photo, else the
// monastery front view (the cover image is optional in the CMS).
const NEWS_FALLBACK =
  "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1786318624/monastery/swpytecsk7ftgfwrz3j4.jpg";
export function newsCover(d, { fallback = true } = {}) {
  const first = Array.isArray(d?.images) ? d.images.find((x) => typeof x === "string" && x) : "";
  return cld(d?.coverImage || first || (fallback ? NEWS_FALLBACK : ""));
}
