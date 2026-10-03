import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listPublished } from "../lib/content.js";
import { useLang, localized } from "../lib/i18n.jsx";
import { cld } from "../lib/cloudinary.js";
import PageBanner from "../components/PageBanner.jsx";
import RichText from "../components/RichText.jsx";

const BOOKS = [
  {
    tag: "Foundational",
    title: "Dudjom Chochod",
    desc: "A foundational collection of daily prayers and offerings within the Dudjom Tersar tradition, serving as the heart of monastic practice.",
    img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520072/monastery/ruxw0rhy9ib9gwkgzjos.jpg",
    pdf: "",
    online: "",
  },
  {
    tag: "Daily Practice",
    title: "Dudjom Lhatsok Gyunkher",
    desc: "The daily practice for the assembly of deities, essential for practitioners seeking to align their mind with the enlightened state.",
    img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520073/monastery/zp64nbspafifeh7nd8jn.jpg",
    pdf: "",
    online: "",
  },
  {
    tag: "Complete Guide",
    title: "Prayer Book (Full Version)",
    desc: "Our comprehensive guide detailing the visualization, benefits, and sequence of all major rituals and monthly tsok offerings.",
    img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520073/monastery/j5shr39yybzpvtekf16l.jpg",
    pdf: "",
    online: "",
  },
];

function BookButtons({ pdf, online }) {
  const base = "flex items-center justify-center gap-2 py-3 rounded-[4px] uppercase text-[12px] tracking-widest font-medium transition-colors";
  return (
    <div className="grid grid-cols-2 gap-3">
      {pdf ? (
        <a href={pdf} target="_blank" rel="noreferrer" className={`${base} border border-maroon text-maroon hover:bg-maroon-light`}>
          <i className="ti ti-download"></i> PDF
        </a>
      ) : (
        <button type="button" disabled className={`${base} border border-maroon/30 text-maroon/40 cursor-not-allowed`}>
          <i className="ti ti-download"></i> PDF
        </button>
      )}
      {online ? (
        <a href={online} target="_blank" rel="noreferrer" className={`${base} bg-maroon text-gold-light hover:bg-maroon-dark`}>
          <i className="ti ti-eye"></i> Online
        </a>
      ) : (
        <button type="button" disabled className={`${base} bg-maroon/40 text-gold-light cursor-not-allowed`}>
          <i className="ti ti-eye"></i> Online
        </button>
      )}
    </div>
  );
}

export default function PrayerBooks() {
  const { lang } = useLang();
  const [docs, setDocs] = useState(null);

  useEffect(() => {
    let alive = true;
    listPublished("prayerbooks").then((d) => { if (alive && d) setDocs(d); });
    return () => { alive = false; };
  }, []);

  const items = docs
    ? [...docs]
        .sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0))
        .map((d) => ({
          tag: localized(d, "badge", lang) || d.badge || "",
          title: localized(d, "title", lang),
          desc: localized(d, "description", lang),
          img: cld(d.coverImage || ""),
          pdf: d.pdfUrl || "",
          online: d.onlineUrl || "",
        }))
    : BOOKS;

  return (
    <div className="page-prayer-books">
      <style>{`.page-prayer-books h1,.page-prayer-books h2,.page-prayer-books h3{font-family:'Noto Serif',serif;}`}</style>

      <PageBanner
        image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520072/monastery/wocwwpny7tf75yv8zfx9.jpg"
        eyebrow="Essential Resources"
        title="Sacred Puja Prayer Books"
        trail={[{ label: "Home", to: "/" }, { label: "Sacred Puja Requests", to: "/puja" }, { label: "Prayer Books" }]}
      />

      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-max-width mx-auto px-base sm:px-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((b) => (
              <div key={b.title} className="bg-white rounded-lg overflow-hidden border border-outline-variant/60 shadow-sm flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img loading="lazy" decoding="async" src={b.img} alt={b.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-gold text-maroon-dark text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm">{b.tag}</span>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-grow text-center">
                  <h3 className="text-[20px] text-maroon mb-3">{b.title}</h3>
                  <div className="mb-8 flex-grow"><RichText value={b.desc} className="text-[13px] text-ink-light leading-relaxed" /></div>
                  <BookButtons pdf={b.pdf} online={b.online} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/puja#puja-request" className="inline-flex items-center gap-3 bg-maroon text-gold-light px-12 py-5 rounded-[4px] uppercase tracking-[0.15em] font-medium text-[14px] hover:bg-maroon-dark transition-colors shadow-md">
              Request a Puja <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
