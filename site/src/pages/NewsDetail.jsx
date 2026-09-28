import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getOne } from "../lib/content.js";
import { useLang, localized } from "../lib/i18n.jsx";
import { cld } from "../lib/cloudinary.js";
import PageBanner from "../components/PageBanner.jsx";

export default function NewsDetail() {
  const { id } = useParams();
  const { lang } = useLang();
  const [doc, setDoc] = useState(undefined); // undefined = loading, null = not found

  useEffect(() => {
    let alive = true;
    window.scrollTo(0, 0);
    getOne("news", id)
      .then((d) => { if (alive) setDoc(d && d.published !== false ? d : null); })
      .catch(() => { if (alive) setDoc(null); });
    return () => { alive = false; };
  }, [id]);

  if (doc === undefined) {
    return <div className="py-4xl text-center text-ink-light">Loading…</div>;
  }

  if (!doc) {
    return (
      <div className="py-4xl text-center">
        <h1 className="font-section-heading text-section-heading text-maroon mb-base">Article not found</h1>
        <Link to="/news" className="text-maroon underline hover:text-gold">Back to News</Link>
      </div>
    );
  }

  const title = localized(doc, "title", lang);
  const date = localized(doc, "date", lang);
  const body = localized(doc, "body", lang) || localized(doc, "excerpt", lang);
  const images = Array.isArray(doc.images) ? doc.images.filter(Boolean).map(cld) : [];

  return (
    <div className="page-news-detail">
      <style>{`.page-news-detail h1,.page-news-detail h2,.page-news-detail h3{font-family:'Noto Serif',serif;}`}</style>

      <PageBanner
        image={cld(doc.coverImage || "")}
        eyebrow={doc.category || "News"}
        title={title}
        trail={[{ label: "Home", to: "/" }, { label: "News", to: "/news" }, { label: title }]}
      />

      <article className="max-w-3xl mx-auto px-base sm:px-lg py-4xl">
        {date && <p className="font-caption text-ink-light mb-lg">{date}</p>}

        <div className="font-body-md text-body-md text-ink-mid space-y-4 whitespace-pre-line leading-relaxed">
          {(body || "").split(/\n{2,}/).map((para, i) => (
            <p key={i}>
              {para.split(/(https?:\/\/[^\s]+)/g).map((part, j) =>
                /^https?:\/\//.test(part) ? (
                  <a key={j} href={part} target="_blank" rel="noreferrer" className="text-maroon underline break-all hover:text-gold">{part}</a>
                ) : (
                  part
                )
              )}
            </p>
          ))}
        </div>

        {images.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2xl">
            {images.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg bg-cream">
                <img loading="lazy" decoding="async" src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        <div className="mt-3xl pt-xl border-t border-outline-variant/30">
          <Link to="/news" className="inline-flex items-center gap-2 font-button-text text-maroon hover:text-gold transition-colors uppercase">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span> Back to News
          </Link>
        </div>
      </article>
    </div>
  );
}
