import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, DEFAULT_IMAGE, getSeo } from "../lib/seo.js";
import { trackPageView } from "../lib/analytics.js";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Writes title, description, canonical and share tags. Also used by pages whose
// content loads later (NewsDetail) to replace the route defaults.
export function applySeo({ title, description, path, image }) {
  const url = SITE_URL + path;
  document.title = title;
  setMeta("name", "description", description);
  setCanonical(url);
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:url", url);
  setMeta("property", "og:image", image || DEFAULT_IMAGE);
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
  setMeta("name", "twitter:image", image || DEFAULT_IMAGE);
}

// Render on "not found" states: the SPA answers every URL with HTTP 200, so this
// keeps missing pages out of Google's index. Removed again on unmount.
export function NoIndex() {
  useEffect(() => {
    const el = document.createElement("meta");
    el.setAttribute("name", "robots");
    el.setAttribute("content", "noindex");
    document.head.appendChild(el);
    return () => el.remove();
  }, []);
  return null;
}

// Keeps <title> and meta tags in sync with the current route.
export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    const seo = getSeo(pathname);
    applySeo({ ...seo, path: seo.canonical || pathname });
    trackPageView(pathname, seo.title);
  }, [pathname]);

  return null;
}
