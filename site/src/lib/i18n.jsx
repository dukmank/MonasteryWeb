import { createContext, useContext, useState, useEffect } from "react";
import { TIB } from "./translations.js";

const LangCtx = createContext({ lang: "EN", setLang: () => {} });
export const useLang = () => useContext(LangCtx);

// Pick a CMS document's field for the active language. Falls back to the
// English field when the Tibetan (`<field>_bo`) value is missing.
export function localized(doc, field, lang) {
  if (!doc) return "";
  if (lang === "TIB") return doc[`${field}_bo`] || doc[field] || "";
  return doc[field] || "";
}

// Original-value stores so we can restore English when toggling back.
const TEXT_ORIG = new WeakMap(); // textNode -> original nodeValue
const ATTR_ORIG = new WeakMap(); // element -> Map(attr -> original value)
const TRANSLATABLE_ATTRS = ["placeholder", "alt", "title", "aria-label"];
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"]);

// Build a whitespace-normalized index so dictionary keys still match even when
// JSX collapses internal newlines/indentation in rendered text nodes.
const norm = (s) => s.replace(/\s+/g, " ").trim();
const NORM_TIB = {};
for (const k in TIB) NORM_TIB[norm(k)] = TIB[k];

function lookup(raw) {
  if (!raw) return null;
  const key = norm(raw);
  if (!key) return null;
  const tib = NORM_TIB[key];
  if (!tib || tib === key) return null;
  // preserve leading/trailing whitespace of the original node
  const lead = raw.match(/^\s*/)[0];
  const trail = raw.match(/\s*$/)[0];
  return lead + tib + trail;
}

function translateTree(root, toTib) {
  if (!root) return;

  // --- text nodes ---
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const p = node.parentElement;
      if (!p || SKIP_TAGS.has(p.tagName)) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const textNodes = [];
  let n;
  while ((n = walker.nextNode())) textNodes.push(n);

  for (const node of textNodes) {
    if (toTib) {
      if (!TEXT_ORIG.has(node)) {
        const t = lookup(node.nodeValue);
        if (t != null) {
          TEXT_ORIG.set(node, node.nodeValue);
          node.nodeValue = t;
        }
      }
    } else if (TEXT_ORIG.has(node)) {
      node.nodeValue = TEXT_ORIG.get(node);
      TEXT_ORIG.delete(node);
    }
  }

  // --- translatable attributes ---
  for (const attr of TRANSLATABLE_ATTRS) {
    root.querySelectorAll(`[${attr}]`).forEach((el) => {
      if (toTib) {
        const t = lookup(el.getAttribute(attr));
        if (t != null) {
          let m = ATTR_ORIG.get(el);
          if (!m) ATTR_ORIG.set(el, (m = new Map()));
          if (!m.has(attr)) {
            m.set(attr, el.getAttribute(attr));
            el.setAttribute(attr, t);
          }
        }
      } else {
        const m = ATTR_ORIG.get(el);
        if (m && m.has(attr)) {
          el.setAttribute(attr, m.get(attr));
          m.delete(attr);
        }
      }
    });
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "EN");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const root = document.getElementById("root");
    const toTib = lang === "TIB";
    document.documentElement.classList.toggle("lang-tib", toTib);

    let raf = 0;
    const run = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => translateTree(root, toTib));
    };
    run();

    // Re-apply after React re-renders / route changes / async content.
    const observer = new MutationObserver(() => run());
    observer.observe(root, { childList: true, subtree: true, characterData: true });

    // Catch late async content (e.g. Firestore-loaded news/gallery) that may
    // settle after the last mutation, beating the observer.
    const timers = [250, 800, 1800, 3500].map((ms) => setTimeout(run, ms));

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, [lang]);

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}
