import { createContext, useContext, useState, useEffect } from "react";
import { TIB } from "./translations.js";

const LangCtx = createContext({ lang: "EN", setLang: () => {} });
export const useLang = () => useContext(LangCtx);

// Site languages. `code` is stored in localStorage ("TIB" kept for backwards
// compatibility), `html` is the <html lang> value, `label` is shown in its own script.
export const LANGUAGES = [
  { code: "EN", short: "EN", html: "en", label: "English" },
  { code: "VI", short: "VI", html: "vi", label: "Tiếng Việt" },
  { code: "ZH", short: "ZH", html: "zh-HK", label: "繁體中文" },
  { code: "HI", short: "HI", html: "hi", label: "हिन्दी" },
  { code: "TIB", short: "BO", html: "bo", label: "བོད་ཡིག" },
  { code: "OR", short: "OR", html: "or", label: "ଓଡ଼ିଆ" },
];

// English -> language dictionaries. Tibetan is bundled; the others load on demand.
const LOADERS = {
  ZH: () => import("./i18n/zh.json"),
  VI: () => import("./i18n/vi.json"),
  OR: () => import("./i18n/or.json"),
  HI: () => import("./i18n/hi.json"),
};

// Site language -> suffix of the CMS field that holds that language.
const CMS_SUFFIX = { TIB: "bo", ZH: "zh", VI: "vi", HI: "hi", OR: "or" };

// Pick a CMS document's field for the active language (`<field>_<suffix>`),
// falling back to the English field when that language is empty.
export function localized(doc, field, lang) {
  if (!doc) return "";
  const sfx = CMS_SUFFIX[lang];
  return (sfx && doc[`${field}_${sfx}`]) || doc[field] || "";
}

// Original-value stores so we can restore English when switching language.
const TEXT_ORIG = new WeakMap(); // textNode -> original English nodeValue
const TEXT_APPLIED = new WeakMap(); // textNode -> value we wrote (detects React re-renders)
const ATTR_ORIG = new WeakMap(); // element -> Map(attr -> original value)
const TRANSLATABLE_ATTRS = ["placeholder", "alt", "title", "aria-label"];
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"]);

// Build a whitespace-normalized index so dictionary keys still match even when
// JSX collapses internal newlines/indentation in rendered text nodes.
const norm = (s) => s.replace(/\s+/g, " ").trim();
const indexDict = (d) => {
  const out = {};
  for (const k in d) out[norm(k)] = d[k];
  return out;
};
const DICTS = { TIB: indexDict(TIB) };

async function loadDict(code) {
  if (code === "EN") return null;
  if (!DICTS[code] && LOADERS[code]) DICTS[code] = indexDict((await LOADERS[code]()).default);
  return DICTS[code] || null;
}

function lookup(dict, raw) {
  if (!raw || !dict) return null;
  const key = norm(raw);
  if (!key) return null;
  const t = dict[key];
  if (!t || t === key) return null;
  // preserve leading/trailing whitespace of the original node
  const lead = raw.match(/^\s*/)[0];
  const trail = raw.match(/\s*$/)[0];
  return lead + t + trail;
}

// Translate every text node / attribute under `root` with `dict`
// (null = restore English).
function translateTree(root, dict) {
  if (!root) return;

  // --- text nodes ---
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const p = node.parentElement;
      if (!p || SKIP_TAGS.has(p.tagName) || p.closest("[data-no-translate]")) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const textNodes = [];
  let n;
  while ((n = walker.nextNode())) textNodes.push(n);

  for (const node of textNodes) {
    // React may have replaced the text since we translated it: treat it as new English.
    if (TEXT_ORIG.has(node) && node.nodeValue !== TEXT_APPLIED.get(node)) {
      TEXT_ORIG.delete(node);
      TEXT_APPLIED.delete(node);
    }
    const orig = TEXT_ORIG.has(node) ? TEXT_ORIG.get(node) : node.nodeValue;
    const t = lookup(dict, orig);
    if (t != null) {
      if (!TEXT_ORIG.has(node)) TEXT_ORIG.set(node, orig);
      if (node.nodeValue !== t) node.nodeValue = t;
      TEXT_APPLIED.set(node, t);
    } else if (TEXT_ORIG.has(node)) {
      node.nodeValue = orig;
      TEXT_ORIG.delete(node);
      TEXT_APPLIED.delete(node);
    }
  }

  // --- translatable attributes ---
  for (const attr of TRANSLATABLE_ATTRS) {
    root.querySelectorAll(`[${attr}]`).forEach((el) => {
      let m = ATTR_ORIG.get(el);
      const orig = m && m.has(attr) ? m.get(attr) : el.getAttribute(attr);
      const t = lookup(dict, orig);
      if (t != null) {
        if (!m) ATTR_ORIG.set(el, (m = new Map()));
        if (!m.has(attr)) m.set(attr, orig);
        if (el.getAttribute(attr) !== t) el.setAttribute(attr, t);
      } else if (m && m.has(attr)) {
        el.setAttribute(attr, orig);
        m.delete(attr);
      }
    });
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("lang");
    return LANGUAGES.some((l) => l.code === saved) ? saved : "EN";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const root = document.getElementById("root");
    const meta = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];
    const html = document.documentElement;
    html.lang = meta.html;
    for (const l of LANGUAGES) html.classList.toggle(`lang-${l.html.split("-")[0]}`, l.code === lang);
    html.classList.toggle("lang-tib", lang === "TIB"); // existing Tibetan styles

    let raf = 0;
    let dict = null;
    let cancelled = false;
    const run = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => translateTree(root, dict));
    };
    loadDict(lang).then((d) => {
      if (cancelled) return;
      dict = d;
      run();
    });
    run(); // restore English immediately while a dictionary loads

    // Re-apply after React re-renders / route changes / async content.
    const observer = new MutationObserver(() => run());
    observer.observe(root, { childList: true, subtree: true, characterData: true });

    // Catch late async content (e.g. Firestore-loaded news/gallery) that may
    // settle after the last mutation, beating the observer.
    const timers = [250, 800, 1800, 3500].map((ms) => setTimeout(run, ms));

    return () => {
      cancelled = true;
      observer.disconnect();
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, [lang]);

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}
