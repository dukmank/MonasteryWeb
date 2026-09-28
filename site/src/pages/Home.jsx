import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listPublished } from "../lib/content.js";
import { cld } from "../lib/cloudinary.js";
import { useLang, localized } from "../lib/i18n.jsx";

const IMG = {
  hero: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1786318624/monastery/swpytecsk7ftgfwrz3j4.jpg",
  founder: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782603855/monastery/udlyk8itxwu3tsdgtsl5.jpg",
  p1: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782603855/monastery/udlyk8itxwu3tsdgtsl5.jpg",
  p2: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782603856/monastery/vf7kntbqfxq7aiyi8dlv.jpg",
  p3: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782519985/monastery/qqicbuwfebaqs5qwffe2.jpg",
  p4: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782519985/monastery/t8k57cxnrbdixttqko1r.jpg",
  p5: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782519986/monastery/kkxflsj2vdu2nsbqfups.jpg",
  news1: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782519987/monastery/ud0tlaxmiehrvcrdazli.jpg",
  news2: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782519988/monastery/ocysuxvcvxvashsohop3.jpg",
  news3: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782519988/monastery/mf2hfga4pqcodelams8u.jpg",
  zp: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782519989/monastery/gqrkfakdzpjqses8b7ci.jpg",
  zp2: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782519990/monastery/jxven7xqvpl2f1wlq7cw.jpg",
  zp3: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782519992/monastery/dkg9vlgci7gtkshae6an.jpg",
};

const sangha = [
  ["United States", "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782806750/monastery/wstrxsy6bucgsooi0q7t.jpg"],
  ["Canada", "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782806751/monastery/iwwvvpyll4qqoiglognt.jpg"],
  ["Vietnam", "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782806753/monastery/txz4ekbgnwdjdibivdcz.jpg"],
  ["Hong Kong", "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782806754/monastery/uz09sox98m7q6ylzes8x.jpg"],
  ["Malaysia", "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782806755/monastery/xol8luvidpabbcl4yy8w.jpg"],
  ["Singapore", "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782806756/monastery/wg4jq4ywoangtfmm9b4g.jpg"],
  ["India", "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782806757/monastery/td4wtn5ekmp3fn27215s.jpg"],
  ["Nepal", "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782806758/monastery/emvuoxuubrb7i0afsucz.jpg"],
  ["Netherlands", "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782806761/monastery/fshygfqfrn9gtpnfsouy.jpg"],
  ["Italy", "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782806762/monastery/x71wcq5vk7wirwvmgxst.jpg"],
  ["Spain", "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782806764/monastery/gd7pjqrj9efjtwxgwwne.jpg"],
  ["Switzerland", "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782806765/monastery/hbr15rhhs1uqrogdx9ge.jpg"],
  ["France", "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782806767/monastery/j00nlddfefhfbcqltx2p.jpg"],
];

const pillars = [
  [IMG.p1, "H.H. Dudjom Rinpoche II", "Founder", "/dudjom-rinpoche"],
  [IMG.p2, "Chagdud Tulku Rinpoche", "First President", "/presidents"],
  [IMG.p3, "H.H. Shenphen Dawa Norbu Rinpoche", "Shedra Founder", "/shedra"],
  [IMG.p4, "Lama Sonam Tashi Rinpoche", "Current President", "/presidents/lama-sonam-tashi-rinpoche"],
  [IMG.p5, "The Dundul Chorten", "Sacred Stupa", "/stupa"],
];

export default function Home() {
  // Latest News — auto-synced from the News page (Firestore "news" collection).
  const { lang } = useLang();
  const [newsItems, setNewsItems] = useState(null);
  useEffect(() => {
    let alive = true;
    listPublished("news").then((docs) => {
      if (!alive || !docs) return;
      setNewsItems(
        docs.slice(0, 3).map((d) => [
          cld(d.coverImage || ""),
          [d.category, localized(d, "date", lang)].filter(Boolean).join(" · "),
          localized(d, "title", lang),
          localized(d, "excerpt", lang) || localized(d, "body", lang),
          `/news/${d.id}`,
        ])
      );
    });
    return () => { alive = false; };
  }, [lang]);

  const latestNews = newsItems ?? [
    [IMG.news1, "Announcement · March 2025", "The 1st Lopon Graduation Certification Event", "Celebrating the achievements of our scholars who have completed their rigorous studies in Buddhist philosophy.", "/graduate-monks"],
    [IMG.news2, "Publication · November 2025", "Annual Monastery Magazine Release", "The fifth volume of our monastery magazine is now available, featuring teachings and community stories.", "/magazine"],
    [IMG.news3, "Announcement · Dec 2024", "Annual Dudjom Throema Bhumtsok", "Community members gathered for the annual year-end clearing rituals and sacred dances.", "/news"],
  ];

  return (
    <div className="page-home">
      <style>{`
        .page-home .hero-gradient {
          background: linear-gradient(to top, rgba(92,21,32,0.95) 0%, rgba(92,21,32,0.4) 50%, transparent 100%);
        }
      `}</style>

      {/* Hero */}
      <section className="relative h-[680px] w-full overflow-hidden">
        <img loading="lazy" decoding="async" alt="Dundul Raptenling Monastery Front View" className="w-full h-full object-cover" src={IMG.hero} />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6">
          <span className="eyebrow text-gold mb-3 block">Sacred Lineage Preservation</span>
          <h1 className="text-5xl md:text-7xl text-white font-serif mb-6 leading-[1.1] max-w-3xl">
            Dundul Raptenling Monastery
          </h1>
          <p className="text-white/80 text-lg max-w-[540px] mb-10 leading-relaxed font-sans">
            Dedicated to preserving the profound Dudjom Tersar lineage and the wisdom of Guru Padmasambhava through authentic practice and study.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/history" className="bg-maroon text-white px-8 py-3.5 text-[12px] font-semibold tracking-[0.2em] uppercase hover:bg-maroon-mid transition-all">
              Our History
            </Link>
            <Link to="/puja" className="border border-white/40 text-white px-8 py-3.5 text-[12px] font-semibold tracking-[0.2em] uppercase hover:bg-white/10 transition-all">
              Request a Puja
            </Link>
          </div>
        </div>
      </section>

      {/* Intro 60/40 */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 items-start">
          <div className="space-y-8">
            <span className="eyebrow">Preserving the Living Dharma</span>
            <h2 className="text-4xl text-ink font-serif leading-tight">Establishing the Wisdom for Future Generations</h2>
            <div className="space-y-6 text-ink-mid text-[17px] leading-[1.8] font-sans">
              <p>Before 1959, in Tibet, His Holiness Dudjom Jigdral Yeshe Dorje established Rigzin Ghatseling Monastery in Kongpo. Following the events of 1959, His Holiness recognized the urgent need to prevent the degeneration of the Dharma in exile.</p>
              <p>With the support of the Government of Odisha and guidance from the Tibetan Government-in-Exile, he founded <strong>Dundul Raptenling Monastery</strong> in Orissa—a sacred place dedicated to the study and practice of the Nyingma tradition.</p>
              <p>Today, the monastery continues to nurture young monks, preserving ancient wisdom and ensuring the Dharma remains alive for generations to come.</p>
            </div>
            <Link to="/history" className="group inline-flex items-center gap-2 text-maroon text-[13px] font-semibold tracking-widest uppercase mt-4">
              Read our full history
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
              <img loading="lazy" decoding="async" alt="H.H. Dudjom Rinpoche" className="w-full h-full object-cover" src={IMG.founder} />
            </div>
            <div className="mt-6 bg-cream p-8 rounded-sm border-l-[3px] border-gold">
              <p className="italic text-ink-mid text-sm leading-relaxed font-serif">
                “In this degenerate age, when the teachings are in decline, it is essential to rely on authentic spiritual masters and to practice the Dharma correctly.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Pillars */}
      <section className="py-24 bg-cream px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="eyebrow">Our Spiritual Pillars</span>
            <h2 className="text-4xl text-ink font-serif mt-3">Masters of the Lineage</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {pillars.map(([img, name, role, to]) => (
              <Link key={name} to={to} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-sm mb-4">
                  <img loading="lazy" decoding="async" alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={img} />
                </div>
                <h3 className="font-serif text-base text-ink mb-1 group-hover:text-maroon transition-colors">{name}</h3>
                <span className="eyebrow text-[10px] text-ink-light">{role}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="eyebrow">Latest news &amp; events</span>
              <h2 className="text-4xl text-ink font-serif mt-3">Updates from the Community</h2>
            </div>
            <Link to="/news" className="border border-gold text-ink text-[11px] font-semibold tracking-widest uppercase px-6 py-2.5 hover:bg-gold hover:text-white transition-all">
              View Archive
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {latestNews.map(([img, meta, title, body, to]) => (
              <Link key={title} to={to} className="group cursor-pointer bg-white block">
                <div className="overflow-hidden mb-6 aspect-video">
                  <img loading="lazy" decoding="async" alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={img} />
                </div>
                <div className="px-2">
                  <span className="eyebrow text-[10px]">{meta}</span>
                  <h4 className="text-xl font-serif text-ink mt-3 mb-4 leading-snug group-hover:text-maroon transition-colors">{title}</h4>
                  <p className="text-ink-light text-[14px] leading-relaxed line-clamp-3">{body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects: Zangdok Palri */}
      <section className="bg-maroon-dark text-white py-24 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="z-10">
            <span className="eyebrow text-gold">Ongoing projects</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 leading-tight">Construction of the Glorious Zangdok Palri</h2>
            <p className="text-white/70 text-base leading-relaxed mb-10 max-w-lg">
              We are currently constructing the Glorious Copper-Colored Mountain, a physical manifestation of Guru Rinpoche's pure land. This architectural masterpiece will house sacred relics and serve as a meditation center.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="https://zangdokpalriodisha.com" target="_blank" rel="noreferrer" className="bg-maroon text-white border border-maroon px-8 py-3.5 text-[12px] font-semibold tracking-widest uppercase hover:bg-maroon-mid transition-all">
                Learn More
              </a>
              <a href="https://zangdokpalriodisha.com/final-phase" target="_blank" rel="noreferrer" className="border border-white/30 text-white px-8 py-3.5 text-[12px] font-semibold tracking-widest uppercase hover:bg-white/10 transition-all">
                Donate Now
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 aspect-[16/9] rounded-sm overflow-hidden shadow-2xl">
              <img loading="lazy" decoding="async" alt="Zangdok Palri Render" className="w-full h-full object-cover" src={IMG.zp} />
            </div>
            <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
              <img loading="lazy" decoding="async" alt="Construction detail" className="w-full h-full object-cover" src={IMG.zp2} />
            </div>
            <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
              <img loading="lazy" decoding="async" alt="Roof Detail" className="w-full h-full object-cover" src={IMG.zp3} />
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-24 bg-cream px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <span className="material-symbols-outlined text-gold text-4xl">favorite</span>
          </div>
          <h2 className="text-4xl text-ink font-serif mb-6">Support Young Monks</h2>
          <p className="text-ink-mid text-base leading-relaxed mb-10">
            Your generous contributions ensure that our monastery remains a home for 100+ monks, providing food, healthcare, and traditional education.
          </p>
          <Link to="/support" className="inline-block bg-gold text-white px-10 py-4 text-[13px] font-semibold tracking-[0.2em] uppercase hover:bg-gold-dark transition-all shadow-md">
            Make a Donation
          </Link>
        </div>
      </section>

      {/* Global Sangha */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="eyebrow">Global Sangha Community</span>
            <h2 className="text-4xl text-ink font-serif mt-3">Uniting Practitioners Worldwide</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 overflow-hidden rounded-sm">
            {sangha.map(([label, img]) => (
              <div key={label} className="relative group h-40 overflow-hidden cursor-pointer">
                {img ? (
                  <img loading="lazy" decoding="async" alt={`Sangha ${label}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" src={img} />
                ) : (
                  <div className="w-full h-full bg-cream-dark flex flex-col items-center justify-center text-ink-light/50">
                    <span className="material-symbols-outlined text-3xl">image</span>
                    <span className="text-[8px] uppercase tracking-widest mt-1">Photo coming</span>
                  </div>
                )}
                <div className="absolute bottom-3 left-3 bg-black/40 px-2 py-0.5 text-[8px] text-white tracking-widest uppercase font-semibold">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
