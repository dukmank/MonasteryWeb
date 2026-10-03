import { useState, useEffect } from "react";
import { listPublished } from "../lib/content.js";
import { useLang, localized } from "../lib/i18n.jsx";
import { cld } from "../lib/cloudinary.js";
import PageBanner from "../components/PageBanner.jsx";

const FILTERS = ["All", "3D Mandala", "General", "Lingdro", "Monastery", "Zangdok Palri"];

const ITEMS = [
  {
    cat: "Monastery",
    wrap: "aspect-[3/4]",
    label: "Monastery Main Hall • Ritual",
    alt: "A serene wide-angle shot of a traditional Tibetan Buddhist monastery nestled in high Himalayan mountains. The architecture features vibrant maroon and white walls with golden rooftops reflecting the soft dawn light. The atmosphere is tranquil, misty, and majestic, capturing the spiritual essence of the sacred mountain retreat.",
    src: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520061/monastery/kqxn2qg5kyvbeknlu4jn.jpg",
  },
  {
    cat: "3D Mandala",
    wrap: "aspect-square lg:aspect-auto lg:h-[400px]",
    label: "Sacred Sands • 3D Mandala",
    alt: "Detailed close-up of a complex 3D Mandala sand painting inside the Dundul Raptenling Monastery. The sand is vibrant red, blue, and gold, arranged in sacred geometric patterns. Soft interior lighting highlights the delicate textures of the sand grains against a dark, reverent background, embodying centuries of artistic monastic tradition.",
    src: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520062/monastery/jy42zwabv6uuvaaeabkc.jpg",
  },
  {
    cat: "General",
    wrap: "aspect-[3/4] lg:mt-xl",
    label: "Library • Daily Study",
    alt: "A candid, high-fidelity portrait of a young Buddhist monk in traditional maroon robes, smiling gently while studying a sacred scripture. The lighting is warm and directional, streaming through a window, creating a scholarly and peaceful mood. The background is a blurred library of ancient scrolls and monastic books in the monastery.",
    src: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520063/monastery/vtinentw49c0icmrrudk.jpg",
  },
  {
    cat: "Zangdok Palri",
    wrap: "aspect-square",
    label: "Zangdok Palri • Sunset",
    alt: "Distant shot of the Zangdok Palri temple at Dundul Raptenling Monastery during the golden hour. The building's copper and gold details glow against a deep blue sky, surrounded by fluttering colorful prayer flags. The image uses a clean editorial composition with plenty of negative space to evoke a sense of spiritual peace and vastness.",
    src: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520064/monastery/ojvhdhkpp8fsxfnqzt3x.jpg",
  },
  {
    cat: "Lingdro",
    wrap: "aspect-square lg:aspect-[4/3] lg:col-span-2",
    label: "Lingdro • Sacred Dance Festival",
    alt: "Capturing a dynamic moment of the Lingdro dance, featuring monks in ornate, colorful costumes and fierce protective deity masks. The background shows the monastery courtyard with a cheering crowd of locals. The lighting is bright daylight, highlighting the intricate silk embroidery of the costumes and the dramatic motion of the ritual dance.",
    src: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520064/monastery/wcxw1m6bvikszdu9hbwo.jpg",
  },
  {
    cat: "Monastery",
    wrap: "aspect-square lg:-mt-xl",
    label: "Prayer Hall • Butter Lamps",
    alt: "Top-down artistic view of rows of butter lamps flickering in the dark prayer hall of the monastery. Each small flame creates a warm, golden glow against the dark brass lamps. The depth of field is shallow, creating a bokeh effect that emphasizes the ritualistic repetition and the contemplative atmosphere of the monastery at night.",
    src: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520065/monastery/bajikajef4zfvtvg97rr.jpg",
  },
  {
    cat: "Monastery",
    wrap: "aspect-[3/4]",
    label: "Architecture • Pillar Detail",
    alt: "Interior architecture of the monastery showing a grand hallway with intricately carved wooden pillars painted in traditional red and gold patterns. The floor is polished dark wood reflecting the ambient light. The style is minimalist and high-end, focusing on the craftsmanship and sacred geometry of the Tibetan architectural heritage.",
    src: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520066/monastery/u60uxl6qvaqo4ggwdahn.jpg",
  },
  {
    cat: "General",
    wrap: "aspect-square",
    label: "Communal Life • Kitchen",
    alt: "A wide view of the monastery kitchen where large copper pots of Tibetan tea are being prepared by monks. Steam rises into the shafts of sunlight coming through high vents. The setting is rustic yet orderly, showing the communal aspect of monastic life with a warm, earthy color palette of maroons, browns, and golds.",
    src: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520067/monastery/g63np0kiaegcxw18hwg4.jpg",
  },
  {
    cat: "General",
    wrap: "aspect-[4/5] lg:col-span-2",
    label: "Debate Courtyard • Wisdom",
    alt: "A group of senior monks engaged in a spirited philosophical debate in the courtyard. They are gesturing with their hands and clapping, following tradition. The background consists of the cream-colored walls of the monastery. The high-contrast lighting captures the intense intellectual energy and the deep devotion of the Gelug tradition.",
    src: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520068/monastery/uy729fi1iqecibfx7fjb.jpg",
  },
  {
    cat: "Monastery",
    wrap: "aspect-square",
    label: "Roof Detail • Dharma Wheel",
    alt: "A close-up of a golden Dharma Wheel ornament atop the monastery roof, set against a clear mountain sky. The gold surface is gleaming and reflects the bright sun. The image is composed with an editorial eye, emphasizing the clean lines and sacred symbolism of the Buddhist path in a modern, serene aesthetic.",
    src: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520068/monastery/dwolrwin1ouktvfr5p8k.jpg",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [docs, setDocs] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const { lang } = useLang();

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [lightbox]);

  useEffect(() => {
    let alive = true;
    listPublished("gallery").then((d) => {
      if (alive && d) setDocs(d);
    });
    return () => { alive = false; };
  }, []);

  const items = docs
    ? docs.map((d) => ({
        cat: d.category || "General",
        wrap: "aspect-square",
        label: localized(d, "caption", lang),
        alt: localized(d, "caption", lang) || `${d.category || "Gallery"} — Dundul Raptenling Monastery`,
        src: cld(d.image || ""),
      }))
    : null;

  const data = items ?? ITEMS;
  const visible = data.filter((it) => active === "All" || it.cat === active);

  return (
    <div className="page-gallery">
      <style>{`
        .page-gallery {
            background-color: #FAF7F2;
        }
        .page-gallery .editorial-shadow {
            box-shadow: 0 4px 20px -4px rgba(123, 30, 42, 0.08);
        }
        .page-gallery .active-filter::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 4px;
            background-color: #7B1E2A;
            border-radius: 50%;
        }
        .page-gallery .gallery-item:hover .overlay {
            opacity: 1;
        }
      `}</style>
      <PageBanner
        image=""
        eyebrow="Media"
        title="Photo Gallery"
        trail={[{ label: "Home", to: "/" }, { label: "Media & News" }, { label: "Gallery" }]}
      />
      {/* Filter Bar (Block J) */}
      <section className="py-2xl bg-cream">
        <div className="max-w-max-width mx-auto px-base lg:px-3xl">
          <div className="flex flex-wrap justify-center items-center gap-xl md:gap-2xl border-b border-outline-variant/20 pb-md">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`relative font-nav-link text-nav-link uppercase tracking-wider transition-colors ${
                  active === f ? "text-maroon font-bold active-filter" : "text-ink-mid hover:text-maroon"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Photo Mosaic (Block F) */}
      <main className="py-4xl bg-cream pt-0">
        <div className="max-w-max-width mx-auto px-base lg:px-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
            {visible.map((it, i) => (
              <div key={i} onClick={() => setLightbox(it)} className={`gallery-item relative group ${it.wrap} overflow-hidden rounded-lg bg-surface-container-high editorial-shadow cursor-pointer`}>
                <img loading="lazy" decoding="async" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={it.alt} src={it.src} />
                <div className="overlay absolute inset-x-0 bottom-0 p-lg bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300">
                  <span className="font-body-md text-[10px] text-white uppercase tracking-widest">{it.label}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination (Block I) */}
          <div className="mt-4xl flex justify-center items-center gap-base">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/30 text-maroon hover:bg-maroon hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-maroon text-white font-button-text">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/30 text-ink-mid hover:bg-maroon-light transition-all duration-300 font-button-text">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/30 text-ink-mid hover:bg-maroon-light transition-all duration-300 font-button-text">3</button>
            <span className="text-ink-light mx-xs">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/30 text-ink-mid hover:bg-maroon-light transition-all duration-300 font-button-text">8</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/30 text-maroon hover:bg-maroon hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </main>
      {/* Decorative Divider */}
      <div className="flex items-center justify-center py-2xl bg-cream">
        <div className="h-px w-24 bg-gold/30"></div>
        <div className="mx-lg text-gold-dark text-xl">✦</div>
        <div className="h-px w-24 bg-gold/30"></div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/85 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <figure className="max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
            />
            {lightbox.label && (
              <figcaption className="mt-4 text-center text-white/80 font-body-md text-[13px] uppercase tracking-widest">
                {lightbox.label}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </div>
  );
}
