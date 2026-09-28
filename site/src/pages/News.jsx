import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listPublished } from "../lib/content.js";
import { useNewsletter } from "../lib/useNewsletter.js";
import { useLang, localized } from "../lib/i18n.jsx";
import { cld } from "../lib/cloudinary.js";
import PageBanner from "../components/PageBanner.jsx";

const articles = [
  {
    category: "Ritual",
    date: "October 24, 2024",
    title: "Sacred Sand Mandala Creation for the Harvest Moon",
    excerpt: "Monks from the Gaden Shartse Monastery will spend seven days meticulously crafting a Medicine Buddha mandala from colored sand, culminating in a dissolution ceremony.",
    img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520051/monastery/sbkwgxc3j0tltg3aisj5.jpg",
    alt: "A close-up high-resolution editorial photograph of a Buddhist ritual with vibrant silk banners and traditional butter lamps flickering in a dimly lit temple. Warm golden light catches the smoke from incense swirling in the air. The mood is reverent and ancient, emphasizing the rich textures and deep maroon robes of the monks in the soft-focus background.",
  },
  {
    category: "Institutional",
    date: "October 18, 2024",
    title: "Expansion of the Digital Archive Project",
    excerpt: "A new partnership with the National Library has allowed for the high-definition scanning of over 500 rare woodblock prints dating back to the 14th century.",
    img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520052/monastery/a26hiccfvjrw3acuqljr.jpg",
    alt: "An expansive aerial view of a grand monastic library filled with thousands of hand-wrapped scripture boxes in a traditional Tibetan architectural setting. Golden light filters through high windows, illuminating dust motes and creating long dramatic shadows across the polished wooden floors. The style is scholarly, prestigious, and deeply historical, using a color palette of warm browns, maroons, and golds.",
  },
  {
    category: "Community",
    date: "October 12, 2024",
    title: "Annual Dharma Gathering in Kathmandu",
    excerpt: "Thousands gathered for the 15th annual wisdom festival, featuring public teachings on compassion and the official opening of the new community clinic.",
    img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520052/monastery/ekd83dd8hz7pgzmlwgny.jpg",
    alt: "A portrait-style editorial photo of a smiling elderly Tibetan master sharing tea with a diverse group of young students in a sunlit mountain garden. The background features colorful prayer flags fluttering against a clear blue sky. The lighting is bright and optimistic, reflecting a mood of connection and community wisdom. The visual style is modern, minimalist, and deeply human.",
  },
];

// Order matches the admin category options so filter tabs stay in sync.
const CATEGORY_ORDER = ["Announcement", "Event", "Publication", "Ritual", "Community", "Institutional"];

export default function News() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [docs, setDocs] = useState(null);
  const [page, setPage] = useState(1);
  const { email, setEmail, status, subscribe } = useNewsletter();
  const { lang } = useLang();

  useEffect(() => {
    let alive = true;
    listPublished("news").then((d) => {
      if (alive && d) setDocs(d);
    });
    return () => { alive = false; };
  }, []);

  const mapDoc = (d) => ({
    id: d.id,
    category: d.category || "Announcement",
    date: localized(d, "date", lang),
    title: localized(d, "title", lang),
    excerpt: localized(d, "excerpt", lang) || localized(d, "body", lang),
    body: localized(d, "body", lang),
    img: cld(d.coverImage || ""),
    alt: localized(d, "title", lang),
    images: Array.isArray(d.images) ? d.images.filter(Boolean).map(cld) : [],
  });

  const items = docs ? docs.map(mapDoc) : null;

  const data = items ?? articles;

  // Filter tabs derived from the categories actually present — always in sync.
  const present = [...new Set(data.map((a) => a.category))];
  const filters = [
    "All",
    ...CATEGORY_ORDER.filter((c) => present.includes(c)),
    ...present.filter((c) => !CATEGORY_ORDER.includes(c)),
  ];

  const PAGE_SIZE = 6;
  const filtered = data.filter((a) => activeFilter === "All" || a.category === activeFilter);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const pageItems = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  useEffect(() => { setPage(1); }, [activeFilter]);

  return (
    <div className="page-news">
      <style>{`
        .page-news .sacred-divider::after {
            content: '✦';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            background: inherit;
            padding: 0 10px;
            color: #C49A2A;
            font-size: 14px;
        }
      `}</style>

      <PageBanner
        image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520050/monastery/ynpgdhtoee8nomjljlwq.jpg"
        eyebrow="Media"
        title="News & Events"
        trail={[{ label: "Home", to: "/" }, { label: "Media & News" }, { label: "News" }]}
      />

      {/* Filter Bar (Block J) */}
      <section className="bg-surface py-xl border-b border-outline-variant/10">
        <div className="max-w-max-width mx-auto px-base md:px-3xl flex flex-wrap items-center justify-center gap-base md:gap-xl">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={
                activeFilter === f
                  ? "font-nav-link text-nav-link uppercase text-maroon border-b-2 border-gold pb-1 px-base"
                  : "font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-maroon transition-colors px-base"
              }
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* News Grid (Block C) */}
      <main className="py-4xl bg-white">
        <div className="max-w-max-width mx-auto px-base md:px-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-xl">
            {pageItems.map((a) => (
              <article key={a.title} className="group bg-white border border-gold/20 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                <div className="relative overflow-hidden h-56 sm:h-64">
                  <img loading="lazy" decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={a.img}
                    alt={a.alt}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-maroon text-gold-light font-label-eyebrow px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm">{a.category}</span>
                  </div>
                </div>
                <div className="p-lg flex flex-col flex-grow">
                  <p className="font-caption text-ink-light mb-2">{a.date}</p>
                  <h3 className="font-card-title text-card-title text-maroon mb-base group-hover:text-gold transition-colors">{a.title}</h3>
                  <p className="font-body-md text-ink-mid line-clamp-3 mb-base">{a.excerpt}</p>
                  {a.images && a.images.length > 0 && (
                    <div className="grid grid-cols-4 gap-1.5 mb-xl">
                      {a.images.slice(0, 4).map((src, i) => (
                        <div key={i} className="aspect-square overflow-hidden rounded-sm bg-cream">
                          <img loading="lazy" decoding="async" src={src} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-auto">
                    <Link
                      to={a.id ? `/news/${a.id}` : "/news"}
                      className="font-button-text text-maroon hover:text-gold transition-colors flex items-center gap-xs uppercase"
                    >
                      Read More <span className="material-symbols-outlined text-[14px]" data-icon="arrow_forward">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Pagination (Block I) */}
      {totalPages > 1 && (
        <section className="bg-white pb-4xl">
          <div className="max-w-max-width mx-auto px-base flex justify-center items-center gap-base">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={current === 1}
              className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 text-ink-light hover:border-maroon hover:text-maroon transition-all disabled:opacity-30 disabled:hover:border-outline-variant/30 disabled:hover:text-ink-light"
            >
              <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={
                  "w-10 h-10 flex items-center justify-center border font-nav-link transition-all " +
                  (n === current
                    ? "border-maroon bg-maroon text-white"
                    : "border-outline-variant/30 text-ink-light hover:border-maroon hover:text-maroon")
                }
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={current === totalPages}
              className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 text-ink-light hover:border-maroon hover:text-maroon transition-all disabled:opacity-30 disabled:hover:border-outline-variant/30 disabled:hover:text-ink-light"
            >
              <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
            </button>
          </div>
        </section>
      )}

      {/* Newsletter Section (Block E Style) */}
      <section className="bg-cream-dark py-4xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <span className="material-symbols-outlined text-[400px] text-maroon" data-icon="auto_stories">auto_stories</span>
        </div>
        <div className="max-w-md mx-auto px-base text-center relative z-10">
          <span className="font-label-eyebrow text-gold uppercase tracking-[0.2em] mb-4 block">Preserve Wisdom</span>
          <h2 className="font-section-heading text-section-heading text-maroon mb-base">Subscribe to the Archives</h2>
          <p className="font-body-md text-ink-mid mb-xl">Join our global community and receive monthly updates on rare teachings, ritual events, and digitization milestones.</p>
          <form className="flex flex-col md:flex-row gap-base" onSubmit={subscribe}>
            <input
              className="flex-grow bg-white border border-outline-variant rounded-lg px-base py-3 focus:ring-2 focus:ring-gold focus:border-gold outline-none font-body-md disabled:opacity-50"
              placeholder="Email Address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "sending"}
            />
            <button
              type="submit"
              disabled={status !== "idle"}
              className="bg-maroon text-gold-light font-button-text uppercase tracking-widest px-xl py-3 rounded-lg hover:bg-maroon-dark transition-colors whitespace-nowrap shadow-md disabled:opacity-60"
            >
              {status === "sent" ? "Subscribed ✓" : status === "sending" ? "Sending..." : "Subscribe"}
            </button>
          </form>
          <p className="font-caption text-ink-light mt-base opacity-70">Respecting your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}
