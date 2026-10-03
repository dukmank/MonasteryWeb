import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner.jsx";
import { PUJA_LIST, PUJA_PURPOSES, pujaCategoryId } from "../data/pujaList.js";
import { useLang } from "../lib/i18n.jsx";

// Real monastery photos (folder "7-support and get involved").
const IMG_BANNER = "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782886008/monastery/ckc89ooiysnngs1kuaiq.jpg";
const IMG_BAND = "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782970365/monastery/vk8gyzxzba7synedx0yh.jpg";

const fmt = (n) => {
  const x = Number(n);
  return Number.isFinite(x) ? x.toLocaleString("en-IN") : n;
};

// Prices come from PUJA_LIST (matched by category + si) so they stay in sync with /puja.
const FEATURED = [
  { cat: "Removing Obstacle Rituals", si: "28", tib: "ཞི་ཁྲོ་གནས་སྟོང་།", name: "100 time of 100 peaceful & Wrathful deties", desc: "Clearing obstacles and nurturing wisdom." },
  { cat: "Removing Obstacle Rituals", si: "2", tib: "ཕུར་པ་སྟོང་ཟློག་རྒྱས་པ།", name: "1000 times Averting obstacle through kilaya – long version", desc: "Ritual for healing and physical wellbeing." },
  { cat: "Removing Obstacle Rituals", si: "38", tib: "བསང་གསོལ་ཉིན་ཚོགས།", name: "Smoke and Mahakala puja for whole day", desc: "Smoke cleansing for environment and protection." },
].map((f) => ({ ...f, amount: PUJA_LIST.find((p) => p.cat === f.cat && p.si === f.si)?.amount }));

const MONTHLY = [
  { icon: "ti-calendar-event", title: "Tse-Chu (10th day)", desc: "Guru Tshechu (Guru Rinpoche's 10th Day) is held regularly every month." },
  { icon: "ti-sparkles", title: "Nyer-Nga (25th day)", desc: "On the 25th of every month, a gathering of the dakinis — a ritual feast offering." },
  { icon: "ti-moon", title: "Nam Khang (30th day)", desc: "Held on the 30th day of the month, with peaceful and wrathful deities." },
];

const ANNUAL = [
  { icon: "ti-flame", title: "Drubchen", desc: "Every year, as usual, the great adept holds a feast for the yidam deities in a sequential manner." },
  { icon: "ti-sparkles", title: "Troma Bumtshok", desc: "Annually, over three days, the Great Feast Offering of the Hundred Thousand (Tröma Krodi Kali) Wrathful Ones (Tröma Bum Tsok Chenmo) is performed as an elaborate ganachakra ritual." },
  { icon: "ti-heart", title: "Black Hayagriva-Yangthroe Dokpa", desc: "The annual four-day ritual of Dokpa and Tang Rak, with a communal feast, based on the treasure teachings of the Black Wrathful Hayagriva from the Mind treasures of Trakthung Dudjom Lingpa." },
  { icon: "ti-book", title: "Translated Words of the Buddha & Commentaries Reading", desc: "Every year the monks of the monastery read the precious Kangyur Rinpoche and Tengyur Rinpoche." },
  { icon: "ti-flag", title: "Tren Da Tse-Chu (3 days)", desc: "From the 8th to the 10th day of the fifth Tibetan month, Guru Rinpoche's birthday celebration is observed by the monastery's monks for three days." },
  { icon: "ti-cloud", title: "Zamling Chisang (Universal Smoke Offering)", desc: "On the 15th day of the fifth Tibetan month, the monastic assembly performs (Gyak Ngön Lha Sang) incense offering and the Universal Smoke Offering ceremony." },
  { icon: "ti-building-arch", title: "Droe-Loe Tsongkhor at the Dundul Stupa", desc: "On the 4th day of the sixth Tibetan month — the great occasion when the Buddha first turned the Wheel of Dharma — a Dorje Drolod tsok offering and circumambulation are performed at the Dudul Chorten." },
  { icon: "ti-users", title: "16 Arhats Puja on Buddha's Descent", desc: "On the 22nd day of the ninth Tibetan month, marking the Buddha's Descent from Heaven, the ritual of the Sixteen Arhats (Neten Chudrug) is performed." },
  { icon: "ti-star", title: "Dudjom Gongtsok (Parinirvana Vajrasattva Puja)", desc: "On the anniversary of His Holiness Kyabje Dudjom Sangye Pema Zhepa Rinpoche's parinirvana, a tsok offering is performed through the practice of Vajrasattva (Guru Yoga combined with Vajrasattva)." },
  { icon: "ti-feather", title: "Gutor (Vajrakilaya Dokpa) — 4 days", desc: "From the 27th to the 30th day of the 12th Tibetan month, through the practice of Dorje Phurba (Vajrakilaya), the Gu-tor ritual, sacred Vajra dances (Cham), and Dok Phang ceremonies are performed to pacify outer, inner, and secret obstacles." },
  { icon: "ti-circle", title: "Kyabje Dudjom Yangsi Rinpoche Parinirvana Puja", desc: "On the anniversary of His Holiness Kyabje Dudjom Sangye Pema Zhepa Rinpoche's parinirvana, a tsok offering is performed through the practice of Vajrasattva Lama Chöd." },
];

export default function Support() {
  const { lang } = useLang();
  return (
    <div className="page-community">
      <style>{`
        .page-community .text-shadow-sm { text-shadow: 0 2px 4px rgba(0,0,0,0.3); }
        .page-community .bg-pattern {
            background-image: radial-gradient(circle at 1px 1px, rgba(180, 130, 50, 0.05) 1px, transparent 0);
            background-size: 40px 40px;
        }
        .page-community .eyebrow { font-family: 'Work Sans', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #8B6B1A; }
      `}</style>

      <PageBanner
        image={IMG_BANNER}
        eyebrow="Compassion in Action"
        title="Support & Get Involved"
        trail={[{ label: "Home", to: "/" }, { label: "Support" }]}
      />

      {/* Section 1: Nurturing the Future of Dharma (centered CTA + image band) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white" id="donations">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <span className="eyebrow mb-3 block">Nurturing the Dharma</span>
          <h2 className="font-headline text-2xl sm:text-3xl text-ink-mid mb-6 leading-tight">Nurturing the Future of Dharma</h2>
          <p className="text-ink-mid max-w-2xl mx-auto text-[15px] leading-relaxed mb-10">Your contributions directly support the daily needs and education of over 100 monks, ensuring the preservation of the Nyingmapa lineage.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/support-young-monks" className="bg-maroon text-gold-light px-8 py-4 rounded font-medium uppercase tracking-widest text-[13px] shadow-md hover:bg-maroon-mid transition-all">
              Support Young Monks
            </Link>
            <Link to="/expenditures" className="border-[1.5px] border-maroon text-maroon px-8 py-4 rounded font-medium uppercase tracking-widest text-[13px] hover:bg-maroon-light transition-all inline-flex items-center gap-2">
              Learn more about monastery expenditures <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 mt-12 sm:mt-16">
          <img src={IMG_BAND} alt="Dundul Raptenling Monastery community" className="w-full h-[260px] sm:h-[420px] object-cover rounded-lg" />
        </div>
      </section>

      {/* Ornament divider */}
      <div className="bg-cream py-8 flex items-center justify-center">
        <div className="flex items-center gap-4 text-gold">
          <div className="h-[1px] w-16 bg-gold/30"></div>
          <span className="material-symbols-outlined">star_rate</span>
          <div className="h-[1px] w-16 bg-gold/30"></div>
        </div>
      </div>

      {/* Section 4: Sacred Puja Requests (Block B Reversed) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white" id="pujas">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div className="order-2 lg:order-1 bg-cream rounded-lg p-6 sm:p-10 border border-gold/10 shadow-sm self-start">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-headline text-ink-mid">Request a Puja Online</h3>
                <p className="text-ink-light text-[13px] mt-1">Choose a puja by purpose, then send your request on the puja page.</p>
              </div>
              <div className="space-y-3 mb-8">
                {PUJA_PURPOSES.map((p) => (
                  <Link
                    key={p.cat}
                    to={`/puja#${pujaCategoryId(p.cat)}`}
                    className="flex items-center gap-4 p-4 bg-white rounded border border-gold/20 hover:border-gold hover:shadow-sm transition-all"
                  >
                    <i className={`ti ${p.icon} text-gold text-2xl shrink-0`}></i>
                    <span className="font-headline text-[16px] text-ink-mid flex-1">{p.title}</span>
                    <i className="ti ti-arrow-right text-maroon"></i>
                  </Link>
                ))}
              </div>
              <Link to="/puja#puja-request" className="w-full py-4 bg-gold text-white hover:bg-gold-dark font-medium tracking-widest uppercase text-[13px] rounded shadow-md transition-all flex items-center justify-center">
                Request a Puja
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <span className="eyebrow mb-3 block">Ritual Offerings</span>
              <h2 className="font-headline text-2xl sm:text-3xl text-ink-mid mb-6 leading-tight">Sacred Puja Requests</h2>
              <p className="text-ink-mid mb-10 text-[15px] leading-relaxed">
                The monastic community performs daily ritual prayers (Pujas) for the benefit of all sentient beings. You may request a specific dedication for healing, protection, success, or for the deceased.
              </p>
              <div className="space-y-4 mb-10">
                {FEATURED.map((p) => (
                  <div key={p.name} className="p-5 bg-white border-l-4 border-gold rounded shadow-sm hover:shadow-md transition-all flex justify-between items-start gap-4">
                    <div>
                      <div className="font-serif text-maroon/70 text-[15px] leading-snug">{p.tib}</div>
                      {lang !== "TIB" && <h4 className="font-headline text-[16px] text-ink-mid leading-snug mt-0.5">{p.name}</h4>}
                      <p className="text-[12px] text-ink-light mt-1">{p.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-maroon font-bold leading-tight">{fmt(p.amount)}</div>
                      <div className="text-[10px] text-ink-light uppercase tracking-wider">INR</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/puja" className="w-full py-4 border border-maroon text-maroon font-medium uppercase text-[12px] tracking-widest rounded flex items-center justify-center hover:bg-maroon-light transition-all">
                Full Puja List <i className="ti ti-arrow-up-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Sponsor Monthly and Annual Pujas (Block C) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 text-center mb-10 sm:mb-16">
          <span className="eyebrow mb-3 block">Ritual Cycle</span>
          <h2 className="font-headline text-2xl sm:text-3xl text-ink-mid mb-4">Sponsor Monthly and Annual Pujas</h2>
          <p className="text-ink-light max-w-2xl mx-auto text-[15px] leading-relaxed">Support our significant yearly ritual cycles that bring immense merit and benefit to all beings throughout the calendar year.</p>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 space-y-16">
          {/* Monthly Pujas */}
          <div>
            <h3 className="font-headline text-xl sm:text-2xl text-ink-mid mb-8 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-gold"></span> Monthly Pujas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MONTHLY.map((m) => (
                <div key={m.title} className="bg-white p-6 sm:p-8 rounded-lg border border-gold/10 shadow-sm group hover:border-gold transition-colors">
                  <div className="w-12 h-12 bg-gold-light rounded-full flex items-center justify-center mb-5 text-gold group-hover:bg-maroon group-hover:text-white transition-colors">
                    <i className={`ti ${m.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-headline text-ink-mid mb-3">{m.title}</h3>
                  <p className="text-[12px] text-ink-light leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Annual Pujas */}
          <div>
            <h3 className="font-headline text-xl sm:text-2xl text-ink-mid mb-8 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-gold"></span> Annual Pujas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ANNUAL.map((a) => (
                <div key={a.title} className="bg-white p-6 sm:p-8 rounded-lg border border-gold/10 shadow-sm group hover:border-gold transition-colors">
                  <div className="w-12 h-12 bg-gold-light rounded-full flex items-center justify-center mb-5 text-gold group-hover:bg-maroon group-hover:text-white transition-colors">
                    <i className={`ti ${a.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-headline text-ink-mid mb-3 leading-tight">{a.title}</h3>
                  <p className="text-[12px] text-ink-light leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Outreach CTA (Block E) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <span className="material-symbols-outlined text-[300px]">diversity_3</span>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-gold/30"></div>
            <span className="material-symbols-outlined text-gold">star_rate</span>
            <div className="h-[1px] w-12 bg-gold/30"></div>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl text-ink-mid mb-4">Support our Sacred Rituals</h2>
          <p className="text-[15px] text-ink-mid mb-10 max-w-xl mx-auto leading-relaxed">
            Supporting the monastic assembly in these sacred rituals brings profound merit and helps sustain the light of wisdom for all sentient beings.
          </p>
          <Link to="/offering" className="inline-block bg-maroon hover:bg-maroon-dark text-gold-light font-medium px-10 py-4 rounded-lg transition-all duration-300 shadow-sm uppercase tracking-widest text-[13px]">
            Make Offering
          </Link>
        </div>
      </section>
    </div>
  );
}
