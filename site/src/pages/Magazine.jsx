import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listPublished } from "../lib/content.js";
import { useLang, localized } from "../lib/i18n.jsx";
import { cld } from "../lib/cloudinary.js";
import PageBanner from "../components/PageBanner.jsx";
import RichText from "../components/RichText.jsx";

// Magazine PDFs hosted on Cloudinary (same place as admin PDF uploads).
// Used as a fallback when the CMS link is empty or still points at the old
// WordPress host (dundulraptenling.org/wp-content/... — no longer served).
const MAG_PDF = {
  2019: "https://res.cloudinary.com/dvhwombxw/image/upload/v1783478514/monastery/ybekcphgklzykrymtlnz.pdf",
  2021: "https://res.cloudinary.com/dvhwombxw/image/upload/v1783478520/monastery/n9ukx1z0xgkht5wa0cyq.pdf",
  2022: "https://res.cloudinary.com/dvhwombxw/image/upload/v1783478523/monastery/ul18afui5c8q3cpilffq.pdf",
  2024: "https://res.cloudinary.com/dvhwombxw/image/upload/v1783478527/monastery/ydvxin5bsjj11mnof5kq.pdf",
  2025: "https://res.cloudinary.com/dvhwombxw/image/upload/v1783478530/monastery/k0jjduf92egqj02xzjqk.pdf",
};
const resolvePdf = (year, url) => {
  const y = Number(String(year).replace(/\D/g, "")) || 0;
  if (!url || /wp-content/i.test(url)) return MAG_PDF[y] || url || "";
  return url;
};

const issues = [
  {
    year: "Issue 2024",
    alt: "Editorial magazine cover for the 2024 issue of Dundul Raptenling Monastery. The 9:16 portrait image showcases a detailed macro shot of a golden Dharma Wheel in the soft morning sunlight. The design is minimalist, focusing on traditional Tibetan monastic colors of maroon and gold, evoking a sense of deep spiritual history and reverence.",
    img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520056/monastery/nobb2omlxuatxypcim4w.jpg",
  },
  {
    year: "Issue 2023",
    alt: "Monastic magazine cover design for the 2023 annual issue. The 9:16 portrait image features a young monk studying ancient scriptures by the light of a butter lamp in a candlelit temple. The colors are dominated by warm golden glows and deep crimson shadows, creating a cinematic and devotional atmosphere aligned with a Sacred Editorial style.",
    img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520055/monastery/qhe4ogdoa0mblxcprozj.jpg",
  },
  {
    year: "Issue 2022",
    alt: "2022 Monastery Magazine cover in a 9:16 portrait layout. The image captures the colorful prayer flags fluttering against a clear blue Himalayan sky, framed by the white walls of the monastery architecture. The lighting is crisp and natural. The editorial layout uses sophisticated serif fonts and a refined color palette of maroon, gold, and white.",
    img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520054/monastery/on1p0ohoxt6znvj0klkb.jpg",
  },
  {
    year: "Issue 2021",
    alt: "The 2021 edition magazine cover for the Sacred Monastery. This 9:16 portrait features a contemplative landscape of a stupa at sunset, with long shadows and a rich orange sky. The visual language is deeply rooted in monastic tradition, using a sophisticated grid, gold-leaf lettering effects, and a dominant maroon border that defines the editorial aesthetic.",
    img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520054/monastery/vvn92on4hgtshqb4pijg.jpg",
  },
  {
    year: "Issue 2019",
    alt: "2019 historical archive magazine cover for the Dundul Raptenling Monastery. The 9:16 portrait image depicts a close-up of incense smoke curling in front of a sacred thangka painting. The style is classic editorial, utilizing a heavy 1200px container logic with generous whitespace and a color palette of gold, deep red, and soft cream.",
    img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520053/monastery/fgc1pgkbrlpm6lz2f6gh.jpg",
  },
];

export default function Magazine() {
  const [docs, setDocs] = useState(null);
  const { lang } = useLang();

  useEffect(() => {
    let alive = true;
    listPublished("magazine").then((d) => {
      if (alive && d) setDocs(d);
    });
    return () => { alive = false; };
  }, []);

  const items = docs
    ? (() => {
        const yr = (y) => Number(String(y).replace(/\D/g, "")) || 0;
        const sorted = [...docs].sort((a, b) => yr(b.year) - yr(a.year));
        return sorted.map((d) => ({
          year: d.year || "",
          title: localized(d, "title", lang),
          description: localized(d, "description", lang),
          coverImage: cld(d.coverImage || ""),
          pdfUrl: resolvePdf(d.year, d.pdfUrl),
          featured: d.featured === true,
        }));
      })()
    : null;

  const featured = items ? items.find((i) => i.featured) ?? items[0] : null;
  const archive = items
    ? items.filter((i) => i !== featured).map((d) => ({ year: `Issue ${d.year}`, alt: d.title, img: d.coverImage, pdfUrl: d.pdfUrl }))
    : issues;

  return (
    <div className="page-magazine">
      <style>{`
        .page-magazine .text-gold-gradient {
          background: linear-gradient(to right, #C49A2A, #F9F3E3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .page-magazine .custom-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .page-magazine .custom-divider::before, .page-magazine .custom-divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: rgba(196, 154, 42, 0.2);
        }
        .page-magazine .custom-divider span {
          margin: 0 16px;
          color: #C49A2A;
          font-size: 14px;
        }
      `}</style>

      <PageBanner
        image=""
        eyebrow="Media"
        title="Monastery Magazine"
        trail={[{ label: "Home", to: "/" }, { label: "Media & News" }, { label: "Magazine" }]}
      />

      {/* Featured Issue (Block D) */}
      <section className="bg-maroon-dark relative overflow-hidden">
        {/* Subtle Watermark Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <span className="material-symbols-outlined text-[600px] text-gold">yard</span>
        </div>
        <div className="max-w-max-width mx-auto px-4 sm:px-3xl py-4xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3xl items-center">
            <div className="order-2 md:order-1">
              <span className="font-label-eyebrow text-label-eyebrow text-gold-light uppercase tracking-[0.2em] mb-md block">Featured Latest Issue</span>
              <h3 className="font-hero-title text-[32px] sm:text-[40px] lg:text-hero-title text-gold-light mb-lg leading-tight">
                {featured ? featured.title || `Annual Magazine ${featured.year}` : "Annual Magazine 2025"}
              </h3>
              {featured && featured.description ? (
                <RichText value={featured.description} className="font-body-lg text-body-lg text-gold-light/80 mb-xl max-w-lg" />
              ) : (
                <p className="font-body-lg text-body-lg text-gold-light/80 mb-xl max-w-lg">
                  Explore the profound insights from our recent pilgrimages, monastic life updates, and exclusive interviews with the Venerable masters of the Dundul Raptenling lineage. A journey through sacred silence and communal wisdom.
                </p>
              )}
              <div className="flex flex-wrap gap-base">
                <a
                  href={featured && featured.pdfUrl ? featured.pdfUrl : "#"}
                  target={featured && featured.pdfUrl ? "_blank" : undefined}
                  rel="noreferrer"
                  className="bg-maroon hover:bg-maroon-mid text-gold-light px-xl py-base font-button-text text-button-text uppercase transition-all duration-300 rounded-[4px] shadow-lg flex items-center gap-sm"
                >
                  Read Online
                  <span className="material-symbols-outlined text-[18px]">auto_stories</span>
                </a>
                <a
                  href={featured && featured.pdfUrl ? featured.pdfUrl : "#"}
                  target={featured && featured.pdfUrl ? "_blank" : undefined}
                  rel="noreferrer"
                  className="border border-gold/40 hover:border-gold text-gold-light px-xl py-base font-button-text text-button-text uppercase transition-all duration-300 rounded-[4px] flex items-center gap-sm"
                >
                  Download PDF
                  <span className="material-symbols-outlined text-[18px]">download</span>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] aspect-[9/16] shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 border-[0.5px] border-gold/20">
                <img loading="lazy" decoding="async"
                  alt={featured ? featured.title || "Magazine Cover" : "Magazine Cover 2025"}
                  className="w-full h-full object-cover rounded-sm"
                  src={featured && featured.coverImage ? featured.coverImage : "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520056/monastery/nobb2omlxuatxypcim4w.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issues Grid (Block C) */}
      <section className="bg-surface py-4xl">
        <div className="max-w-max-width mx-auto px-4 sm:px-3xl">
          <div className="custom-divider mb-4xl">
            <span>ARCHIVE OF WISDOM</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-xl">
            {archive.map((issue) => (
              <div key={issue.year} className="group border-[0.5px] border-gold/20 bg-white p-base flex flex-col hover:shadow-xl transition-all duration-500">
                <div className="relative overflow-hidden aspect-[9/16] mb-lg bg-cream">
                  <img loading="lazy" decoding="async"
                    alt={`Magazine Cover ${issue.year.replace("Issue ", "")}`}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    data-alt={issue.alt}
                    src={issue.img}
                  />
                </div>
                <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase mb-xs">{issue.year}</span>
                <h4 className="font-card-title text-card-title text-maroon mb-lg">Dundul Raptenling Annual Magazine</h4>
                <div className="mt-auto flex items-center gap-base pt-md border-t border-outline-variant/10">
                  <a
                    href={issue.pdfUrl || "#"}
                    target={issue.pdfUrl ? "_blank" : undefined}
                    rel="noreferrer"
                    className="bg-maroon text-gold-light px-lg py-sm font-button-text text-button-text uppercase hover:bg-maroon-mid transition-colors flex-1 text-center"
                  >
                    Read Online
                  </a>
                  <a
                    href={issue.pdfUrl || "#"}
                    target={issue.pdfUrl ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-maroon p-sm hover:bg-maroon-light transition-colors flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined">download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
