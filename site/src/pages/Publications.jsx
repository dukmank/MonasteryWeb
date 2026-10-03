import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner.jsx";
import { listPublished } from "../lib/content.js";
import { cld } from "../lib/cloudinary.js";
import { useLang, localized } from "../lib/i18n.jsx";
import RichText from "../components/RichText.jsx";

function badgeClassFor(badge) {
  const b = (badge || "").toLowerCase();
  if (b.includes("new")) return "bg-maroon-mid text-white";
  if (b.includes("pdf") || b.includes("digital")) return "bg-gold text-white";
  return "bg-maroon text-gold-light";
}

const publications = [
  {
    badgeLabel: "COLLECTION",
    badgeClass: "bg-maroon text-gold-light",
    eyebrow: "Mandala Book Collection",
    title: "Dudjom Tersar Lineage Mandala Book Collection",
    coverImage:
      "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782808891/monastery/i0sknkucatgnybtfneyf.jpg",
    alt: "A premium, hardbound sacred book with a deep maroon cover featuring a gold-embossed mandala of the Dudjom Tersar lineage. The book rests on a clean, light cream surface, with soft light catching the metallic gold leaf detailing. The composition is elegant and editorial, emphasizing the craftsmanship and spiritual significance of the publication.",
    meta: (
      <>
        <p className="font-caption text-caption"><strong>Author:</strong> H.H. Dudjom Rinpoche</p>
        <p className="font-caption text-caption"><strong>Compiled by:</strong> Lama Sonam Tashi Rinpoche &amp; Dechen Dorje Rinpoche</p>
        <p className="font-caption text-caption italic">Editions: 2021 (1st), 2026 (2nd)</p>
      </>
    ),
    link: "#",
  },
  {
    badgeLabel: "DIGITAL PDF",
    badgeClass: "bg-gold text-white",
    eyebrow: "Bilingual Sadhana",
    title: "Granting Wishes for the Fortunate One",
    coverImage:
      "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782808892/monastery/p2gubaq9yn1ewz1fxk9b.jpg",
    alt: "A high-quality digital rendering of a Tibetan text format (Pecha style) for Guru Padmasambhava Heart Sadhana. The text features elegant Tibetan calligraphy alongside English translation, displayed on a high-end tablet screen with a soft focus background of a temple interior. The colors are dominated by ritual red and deep gold, reflecting the sacred nature of the digital PDF publication.",
    meta: (
      <>
        <p className="font-caption text-caption"><strong>Format:</strong> Tibetan and English</p>
        <p className="font-caption text-caption"><strong>Compiled by:</strong> Lama Sonam Tashi Rinpoche</p>
        <p className="font-caption text-caption italic">Release: 2026</p>
      </>
    ),
    link: "#",
  },
  {
    badgeLabel: "DIGITAL PDF",
    badgeClass: "bg-gold text-white",
    eyebrow: "Ritual Texts",
    title: "The Excellent Jewel Vase of Prosperity",
    coverImage:
      "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782808893/monastery/goeqnq6imq2g7jflng1m.jpg",
    alt: "A clean, minimalist book cover for a Tibetan ritual text titled 'The Excellent Jewel Vase of Prosperity'. The cover features traditional Tibetan block-print style graphics of ritual incense offerings and prosperity symbols. The color palette is composed of ivory paper tones, deep maroon inks, and subtle gold accents, framed against a natural stone background with soft, dappled morning sunlight.",
    meta: (
      <>
        <p className="font-caption text-caption"><strong>Format:</strong> Tibetan Only</p>
        <p className="font-caption text-caption"><strong>Compiled by:</strong> Lama Sonam Tashi Rinpoche</p>
        <p className="font-caption text-caption italic">Release: 2026</p>
      </>
    ),
    link: "#",
  },
  {
    badgeLabel: "NEW RELEASE",
    badgeClass: "bg-maroon-mid text-white",
    eyebrow: "Shastra & Practice",
    title: "Lingdro Rechen Rolmo",
    coverImage:
      "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520061/monastery/kiagiqbebi9reu1mo7qr.jpg",
    alt: "A scholarly, elegant book cover for 'Lingdro Rechen Rolmo' by Mipham Rinpoche. The design is modern yet respectful of tradition, using clean white space, refined serif typography, and a centered small gold Dharma wheel icon. The book is photographed at a slight angle on a dark wood table, highlighting the sophisticated matte finish and the deep red spine.",
    meta: (
      <>
        <p className="font-caption text-caption"><strong>Author:</strong> Mipham Rinpoche</p>
        <p className="font-caption text-caption"><strong>Compiled by:</strong> Lama Sonam Tashi</p>
        <p className="font-caption text-caption italic">Release: 2026</p>
      </>
    ),
    link: "#",
  },
];

export default function Publications() {
  const [docs, setDocs] = useState(null);
  const { lang } = useLang();

  useEffect(() => {
    let alive = true;
    listPublished("publications").then((d) => {
      if (alive && d) setDocs(d);
    });
    return () => { alive = false; };
  }, []);

  const items = docs
    ? docs.map((d) => {
        const title = localized(d, "title", lang);
        const author = localized(d, "author", lang);
        const compiledBy = localized(d, "compiledBy", lang);
        const format = d.format || "";
        const editions = d.editions || "";
        const description = localized(d, "description", lang);
        const category = d.category || "Publication";
        const badge = d.badge || category;
        return {
          badgeLabel: badge.toUpperCase(),
          badgeClass: badgeClassFor(badge),
          eyebrow: category,
          title,
          coverImage: cld(d.coverImage || ""),
          alt: title,
          meta: (
            <>
              {author && <p className="font-caption text-caption"><strong>Author:</strong> {author}</p>}
              {format && <p className="font-caption text-caption"><strong>Format:</strong> {format}</p>}
              {compiledBy && <p className="font-caption text-caption"><strong>Compiled by:</strong> {compiledBy}</p>}
              {editions && <p className="font-caption text-caption italic">{editions}</p>}
              {!author && !format && !compiledBy && !editions && description && (
                <RichText value={description} className="font-caption text-caption" />
              )}
            </>
          ),
          buyLink: d.buyLink || d.link || "https://dharmagifts.shop/",
          readLink: d.readLink || d.link || "https://namkhazoe.com/",
        };
      })
    : null;

  const data = items ?? publications;

  return (
    <div className="page-publications">
      <style>{`
        .page-publications .text-gold-gradient {
            background: linear-gradient(to bottom, #C49A2A, #8B6B1A);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .page-publications .sacred-border {
            border: 0.5px solid rgba(180, 130, 50, 0.2);
        }
        .page-publications .ornament-divider::after {
            content: "✦";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 0 1rem;
            color: #C49A2A;
            font-size: 14px;
        }
        .page-publications {
            background-color: #FAF7F2;
        }
      `}</style>
      <PageBanner
        image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782808889/monastery/f2faztvqg3zaetynq87p.jpg"
        eyebrow="Media & News"
        title="Sacred Publications"
        trail={[{ label: "Home", to: "/" }, { label: "Media" }, { label: "Publications" }]}
      />
      {/* Main Content Section */}
      <main className="max-w-max-width mx-auto px-lg py-4xl bg-cream">
        {/* Intro Text */}
        <div className="max-w-3xl mb-3xl">
          <h2 className="font-section-heading text-section-heading text-maroon mb-base">Preserving the Dharma</h2>
          <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
            The Dundul Raptenling Monastery's publishing department is dedicated to the preservation and dissemination of the Dudjom Tersar lineage. Our collection includes rare ritual texts, philosophical commentaries, and digital archives compiled under the guidance of our venerable masters.
          </p>
        </div>
        {/* Publications Grid (3-column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {data.map((p) => (
            <article key={p.title} className="bg-white sacred-border rounded-lg overflow-hidden flex flex-col group transition-transform hover:-translate-y-1">
              <div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
                <img loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt={p.alt} src={p.coverImage} />
                <div className={`absolute top-4 right-4 ${p.badgeClass} font-label-eyebrow px-3 py-1 rounded-sm`}>{p.badgeLabel}</div>
              </div>
              <div className="p-lg flex flex-col flex-grow">
                <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase mb-xs">{p.eyebrow}</span>
                <h3 className="font-card-title text-card-title text-ink font-semibold mb-sm">{p.title}</h3>
                <div className="space-y-2 mb-lg text-ink-light">
                  {p.meta}
                </div>
                <div className="mt-auto grid grid-cols-1 gap-sm">
                  <a className="w-full bg-maroon text-gold-light py-sm text-center font-button-text text-button-text rounded transition-colors hover:bg-maroon-dark" href={p.buyLink || p.link} target="_blank" rel="noreferrer">Buy Online</a>
                  <a className="w-full border border-maroon text-maroon py-sm text-center font-button-text text-button-text rounded transition-colors hover:bg-maroon-light flex items-center justify-center gap-xs" href={p.readLink || p.link} target="_blank" rel="noreferrer">
                    <span className="material-symbols-outlined text-sm">auto_stories</span>
                    Digital Reading
                  </a>
                </div>
              </div>
            </article>
          ))}
          {/* Additional Placeholder for Asymmetry */}
          <div className="lg:col-span-2 bg-maroon-dark/5 rounded-lg flex items-center justify-center p-2xl border border-dashed border-gold/30">
            <div className="text-center">
              <span className="material-symbols-outlined text-4xl text-gold mb-base">auto_awesome</span>
              <h4 className="font-subheading text-subheading text-maroon-dark mb-sm">Upcoming Publications</h4>
              <p className="font-body-md text-ink-light max-w-sm mx-auto">We are currently working on several new bilingual editions of the Dudjom Tersar treasures. Join our mailing list for release updates.</p>
            </div>
          </div>
        </div>
      </main>
      {/* Support Banner */}
      <section className="bg-maroon text-gold-light py-3xl overflow-hidden relative">
        <div className="max-w-max-width mx-auto px-lg relative z-10 flex flex-col md:flex-row items-center justify-between gap-xl">
          <div className="text-center md:text-left">
            <h2 className="font-section-heading text-section-heading mb-sm">Sponsor a Sacred Text</h2>
            <p className="font-body-lg text-body-lg text-gold-light/80 max-w-xl">Support the meticulous work of translation and publication. Your generosity helps bring the light of wisdom to the world.</p>
          </div>
          <Link className="bg-gold hover:bg-gold-dark text-maroon-dark px-2xl py-base rounded font-button-text text-button-text font-bold transition-all whitespace-nowrap shadow-xl" to="/support">
            Become a Patron
          </Link>
        </div>
        {/* Decorative Watermark */}
        <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[300px] text-white opacity-5 pointer-events-none" style={{ fontVariationSettings: "'FILL' 1" }}>top_panel_close</span>
      </section>
    </div>
  );
}
