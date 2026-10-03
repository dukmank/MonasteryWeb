// Rich-text helpers for CMS fields of type "richtext" (bold, italic, lists, links).
// Values are stored as a small whitelist of HTML. Older values are plain text with
// line breaks; toSafeHtml() turns those into paragraphs, so both kinds render.

const ALLOWED = new Set(["P", "BR", "STRONG", "EM", "U", "UL", "OL", "LI", "A"]);
const RENAME = { B: "STRONG", I: "EM", DIV: "P" };
const BLOCK_DROP = new Set(["SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "TEMPLATE", "NOSCRIPT", "SVG", "MATH"]);
const SAFE_HREF = /^(https?:|mailto:|tel:|\/|#)/i;

const escapeHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const looksLikeHtml = (s) => /<\/?(p|br|strong|b|em|i|u|ul|ol|li|a|div)\b/i.test(s);

// Plain text (old CMS values) -> paragraphs; single line breaks become <br>.
function plainToHtml(s) {
  return s
    .split(/\n{2,}/)
    .map((para) => para.trim())
    .filter(Boolean)
    .map((para) => `<p>${escapeHtml(para).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

function cleanNode(node, doc) {
  const out = doc.createDocumentFragment();
  for (const child of [...node.childNodes]) {
    if (child.nodeType === 3) {
      out.appendChild(doc.createTextNode(child.nodeValue));
      continue;
    }
    if (child.nodeType !== 1) continue;
    let tag = child.tagName.toUpperCase();
    if (BLOCK_DROP.has(tag)) continue;
    // Pasted Word/Docs text marks bold/italic with inline styles on spans.
    const style = (child.getAttribute("style") || "").toLowerCase();
    tag = RENAME[tag] || tag;
    const inner = cleanNode(child, doc);
    if (!ALLOWED.has(tag)) {
      let wrapped = inner;
      if (/font-weight:\s*(bold|[6-9]00)/.test(style)) {
        const s = doc.createElement("strong");
        s.appendChild(wrapped);
        wrapped = s;
      }
      if (/font-style:\s*italic/.test(style)) {
        const e = doc.createElement("em");
        e.appendChild(wrapped);
        wrapped = e;
      }
      out.appendChild(wrapped); // unwrap: keep the text, drop the tag
      continue;
    }
    const el = doc.createElement(tag.toLowerCase());
    if (tag === "A") {
      const href = (child.getAttribute("href") || "").trim();
      if (!SAFE_HREF.test(href)) {
        out.appendChild(inner);
        continue;
      }
      el.setAttribute("href", href);
      if (/^https?:/i.test(href)) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    }
    el.appendChild(inner);
    // Empty paragraphs (left around lists by the browser editor) only add gaps.
    if ((tag === "P" || tag === "LI") && !el.textContent.trim()) continue;
    out.appendChild(el);
  }
  return out;
}

// Any stored value (HTML or plain text) -> safe HTML for rendering or editing.
export function toSafeHtml(value) {
  const s = typeof value === "string" ? value.trim() : "";
  if (!s) return "";
  if (!looksLikeHtml(s)) return plainToHtml(s);
  if (typeof DOMParser === "undefined") return plainToHtml(s.replace(/<[^>]*>/g, ""));
  const doc = new DOMParser().parseFromString(`<body>${s}</body>`, "text/html");
  const box = doc.createElement("div");
  box.appendChild(cleanNode(doc.body, doc));
  return box.innerHTML;
}

// Text content only (for "is it empty?" checks and short previews).
export function richTextToPlain(value) {
  const html = toSafeHtml(value);
  if (!html) return "";
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|li)>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .trim();
}

// Editor output -> value to store: safe HTML, or "" when nothing is left
// (so empty language boxes still count as empty and get auto-translated).
export function normalizeRichText(html) {
  const safe = toSafeHtml(html);
  return richTextToPlain(safe) ? safe : "";
}
