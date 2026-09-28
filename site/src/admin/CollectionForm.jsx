import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { COLLECTIONS, emptyDoc } from "./collections.js";
import { getOne, createItem, updateItem } from "../lib/content.js";
import { uploadImage, uploadFile, cloudinaryEnabled } from "../lib/cloudinary.js";

function ImageField({ field, value, onChange }) {
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState("");

  const onFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError("");
    setProgress(0);
    try {
      const url = await uploadImage(file, { onProgress: setProgress });
      onChange(url);
    } catch (err) {
      setError(err.message);
    } finally {
      setProgress(null);
    }
  };

  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-widest text-ink-light mb-2">{field.label}</label>
      <div className="flex gap-4 items-start">
        <div className="w-28 h-28 rounded bg-cream-dark overflow-hidden shrink-0 grid place-items-center">
          {value ? (
            <img src={value} alt="" className="w-full h-full object-cover" />
          ) : (
            <span className="material-symbols-outlined text-ink-light">image</span>
          )}
        </div>
        <div className="flex-1 space-y-2">
          {cloudinaryEnabled && (
            <label className="inline-flex items-center gap-2 bg-cream border border-gold/30 px-3 py-2 rounded-sm text-sm cursor-pointer hover:bg-gold-light transition-colors">
              <span className="material-symbols-outlined text-[18px]">upload</span>
              Upload image
              <input type="file" accept="image/*" className="hidden" onChange={onFile} />
            </label>
          )}
          {progress !== null && (
            <div className="h-1.5 bg-cream-dark rounded overflow-hidden">
              <div className="h-full bg-gold transition-all" style={{ width: `${progress}%` }} />
            </div>
          )}
          <input
            type="url"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="or paste an image link: https://…"
            className="w-full border-b border-cream-dark focus:border-gold outline-none py-1.5 text-sm bg-transparent"
          />
          {!cloudinaryEnabled && (
            <p className="text-[11px] text-ink-light">Cloudinary is not configured — you can only paste an image link for now.</p>
          )}
          {error && <p className="text-error text-xs">{error}</p>}
        </div>
      </div>
    </div>
  );
}

function ImagesField({ field, value, onChange }) {
  const list = Array.isArray(value) ? value : [];
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState("");

  const onFiles = async (e) => {
    const files = [...(e.target.files || [])];
    if (!files.length) return;
    setError("");
    const urls = [...list];
    for (let i = 0; i < files.length; i++) {
      try {
        const url = await uploadImage(files[i], {
          onProgress: (p) => setProgress({ i: i + 1, total: files.length, pct: p }),
        });
        urls.push(url);
        onChange([...urls]);
      } catch (err) {
        setError(err.message);
      }
    }
    setProgress(null);
    e.target.value = "";
  };

  const remove = (idx) => onChange(list.filter((_, i) => i !== idx));

  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-widest text-ink-light mb-2">{field.label}</label>
      <div className="flex flex-wrap gap-3">
        {list.map((url, i) => (
          <div key={i} className="relative w-24 h-24 rounded overflow-hidden bg-cream-dark">
            <img src={url} alt="" className="w-full h-full object-cover" />
            <button
              type="button"
              onClick={() => remove(i)}
              className="absolute top-1 right-1 bg-ink/70 text-white rounded-full w-6 h-6 grid place-items-center"
              title="Remove this image"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
        ))}
        {cloudinaryEnabled && (
          <label className="w-24 h-24 rounded border border-dashed border-gold/40 grid place-items-center cursor-pointer hover:bg-gold-light text-ink-light">
            <span className="material-symbols-outlined">add_photo_alternate</span>
            <input type="file" accept="image/*" multiple className="hidden" onChange={onFiles} />
          </label>
        )}
      </div>
      {progress && (
        <p className="text-xs text-ink-light mt-2">Uploading image {progress.i}/{progress.total} ({progress.pct}%)…</p>
      )}
      {error && <p className="text-error text-xs mt-1">{error}</p>}
      {!cloudinaryEnabled && (
        <p className="text-[11px] text-ink-light mt-1">Cloudinary is not configured, so uploading multiple images is not available yet.</p>
      )}
    </div>
  );
}

function FileField({ field, value, onChange }) {
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState("");

  const onFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError("");
    setProgress(0);
    try {
      const url = await uploadFile(file, { onProgress: setProgress });
      onChange(url);
    } catch (err) {
      setError(err.message);
    } finally {
      setProgress(null);
      e.target.value = "";
    }
  };

  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-widest text-ink-light mb-2">{field.label}</label>
      <div className="space-y-2">
        {cloudinaryEnabled && (
          <label className="inline-flex items-center gap-2 bg-cream border border-gold/30 px-3 py-2 rounded-sm text-sm cursor-pointer hover:bg-gold-light transition-colors">
            <span className="material-symbols-outlined text-[18px]">upload_file</span>
            Upload PDF
            <input type="file" accept="application/pdf,.pdf" className="hidden" onChange={onFile} />
          </label>
        )}
        {value && (
          <a href={value} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-maroon hover:text-gold break-all">
            <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span> {value.split("/").pop()} ↗
          </a>
        )}
        {progress !== null && (
          <div className="h-1.5 bg-cream-dark rounded overflow-hidden">
            <div className="h-full bg-gold transition-all" style={{ width: `${progress}%` }} />
          </div>
        )}
        <input
          type="url"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="or paste a PDF link: https://…"
          className="w-full border-b border-cream-dark focus:border-gold outline-none py-1.5 text-sm bg-transparent"
        />
        {error && <p className="text-error text-xs">{error}</p>}
      </div>
    </div>
  );
}

export default function CollectionForm() {
  const { coll: collKey, id } = useParams();
  const coll = COLLECTIONS[collKey];
  const navigate = useNavigate();
  const isNew = !id || id === "new";

  const [data, setData] = useState(() => (coll ? emptyDoc(coll) : {}));
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isNew || !coll) return;
    let alive = true;
    (async () => {
      const doc = await getOne(collKey, id);
      if (alive && doc) setData({ ...emptyDoc(coll), ...doc });
      if (alive) setLoading(false);
    })();
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collKey, id]);

  if (!coll) return <div className="p-8">Section not found.</div>;

  const set = (name, val) => setData((d) => ({ ...d, [name]: val }));

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      // keep only schema fields + published
      const payload = {};
      for (const f of coll.fields) {
        payload[f.name] = data[f.name] ?? (f.type === "bool" ? false : f.type === "images" ? [] : "");
        if (f.bilingual) payload[`${f.name}_bo`] = data[`${f.name}_bo`] ?? "";
      }
      if (isNew) await createItem(collKey, payload);
      else await updateItem(collKey, id, payload);
      navigate(`/admin/${collKey}`);
    } catch (err) {
      setError(err.message || "Failed to save");
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="grid place-items-center py-20 text-ink-light">
        <span className="material-symbols-outlined text-3xl animate-spin">progress_activity</span>
      </div>
    );
  }

  return (
    <div>
      <header className="bg-white border-b border-cream-dark px-8 h-16 flex items-center gap-3">
        <button onClick={() => navigate(`/admin/${collKey}`)} className="text-ink-light hover:text-maroon">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-serif text-xl text-maroon">
          {isNew ? "Add" : "Edit"} · {coll.labelVi}
        </h1>
      </header>

      <form onSubmit={submit} className="p-8 max-w-2xl space-y-6">
        {coll.fields.map((f) => {
          if (f.type === "image") {
            return <ImageField key={f.name} field={f} value={data[f.name]} onChange={(v) => set(f.name, v)} />;
          }
          if (f.type === "images") {
            return <ImagesField key={f.name} field={f} value={data[f.name]} onChange={(v) => set(f.name, v)} />;
          }
          if (f.type === "pdf") {
            return <FileField key={f.name} field={f} value={data[f.name]} onChange={(v) => set(f.name, v)} />;
          }
          if (f.type === "bool") {
            return (
              <label key={f.name} className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={!!data[f.name]}
                  onChange={(e) => set(f.name, e.target.checked)}
                  className="w-5 h-5 accent-maroon rounded"
                />
                <span className="text-sm text-ink">{f.label}</span>
              </label>
            );
          }
          if (f.type === "select") {
            return (
              <div key={f.name}>
                <label className="block text-[11px] font-semibold uppercase tracking-widest text-ink-light mb-2">{f.label}</label>
                <select
                  value={data[f.name] || ""}
                  onChange={(e) => set(f.name, e.target.value)}
                  className="w-full border border-cream-dark rounded-sm px-3 py-2 bg-white text-ink focus:border-gold outline-none"
                >
                  {f.options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
            );
          }
          if (f.type === "textarea") {
            return (
              <div key={f.name} className="space-y-2">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-widest text-ink-light mb-2">{f.label}</label>
                  <textarea
                    rows={f.rows || 4}
                    required={f.required}
                    value={data[f.name] || ""}
                    onChange={(e) => set(f.name, e.target.value)}
                    className="w-full border border-cream-dark rounded-sm px-3 py-2 bg-white text-ink focus:border-gold outline-none leading-relaxed"
                  />
                </div>
                {f.bilingual && (
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-maroon/70 mb-2">{f.label} · བོད་ཡིག (Tibetan)</label>
                    <textarea
                      rows={f.rows || 4}
                      value={data[`${f.name}_bo`] || ""}
                      onChange={(e) => set(`${f.name}_bo`, e.target.value)}
                      className="w-full border border-gold/30 rounded-sm px-3 py-2 bg-cream/40 text-ink focus:border-gold outline-none leading-relaxed"
                    />
                  </div>
                )}
              </div>
            );
          }
          // text | url
          return (
            <div key={f.name} className="space-y-2">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-widest text-ink-light mb-2">{f.label}</label>
                <input
                  type={f.type === "url" ? "url" : "text"}
                  required={f.required}
                  value={data[f.name] || ""}
                  onChange={(e) => set(f.name, e.target.value)}
                  className="w-full border-b-2 border-cream-dark focus:border-gold outline-none py-2 text-ink bg-transparent"
                />
              </div>
              {f.bilingual && (
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-widest text-maroon/70 mb-2">{f.label} · བོད་ཡིག (Tibetan)</label>
                  <input
                    type="text"
                    value={data[`${f.name}_bo`] || ""}
                    onChange={(e) => set(`${f.name}_bo`, e.target.value)}
                    className="w-full border-b-2 border-gold/30 focus:border-gold outline-none py-2 text-ink bg-cream/40 px-2"
                  />
                </div>
              )}
            </div>
          );
        })}

        {error && <p className="text-error text-sm">{error}</p>}

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={saving}
            className="bg-maroon text-white px-6 py-2.5 rounded-sm text-[12px] font-semibold tracking-widest uppercase hover:bg-maroon-mid transition-colors disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save"}
          </button>
          <button
            type="button"
            onClick={() => navigate(`/admin/${collKey}`)}
            className="px-6 py-2.5 rounded-sm text-[12px] font-semibold tracking-widest uppercase text-ink-mid hover:bg-cream-dark transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
