import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner.jsx";

export default function Presidents() {
  return (
    <div className="page-presidents">
      <style>{`
        .page-presidents .thangka-border {
            border: 0.5px solid rgba(180, 130, 50, 0.2);
        }
        .page-presidents .hero-overlay {
            background: linear-gradient(to bottom, rgba(92, 21, 32, 0.9), rgba(92, 21, 32, 0.7));
        }
        .page-presidents .dharma-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .page-presidents .dharma-divider::before, .page-presidents .dharma-divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: rgba(196, 154, 42, 0.3);
        }
        .page-presidents .dharma-divider span {
            padding: 0 16px;
            color: #C49A2A;
        }
      `}</style>
      <PageBanner
        image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520014/monastery/ymulbuzq8y1nbchtzkkd.jpg"
        eyebrow="Spiritual Leadership"
        title="Presidents of the Monastery"
        trail={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Our Presidents" }]}
      />
      {/* Introduction Section (Block B) */}
      <section className="py-4xl px-base md:px-3xl max-w-max-width mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-section-heading text-section-heading text-maroon mb-xl">A Legacy of Visionary Leadership</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-xl"></div>
          <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
            The spiritual governance of Dundul Raptenling Monastery is guided by a succession of enlightened masters, a tradition formalized in 1962. Following the direct appointment of our inaugural President by the Supreme Head of the Nyingmapa, Kyabje Dudjom Rinpoche, the monastery has maintained an unbroken chain of leadership. These masters have not only preserved the ancient Dudjom Tersar lineage but have also expanded its reach, bridging the wisdom of the East with the spiritual search of the modern world.
          </p>
        </div>
      </section>
      {/* Biographies Section 1: Chagdud Tulku Rinpoche (White Background) */}
      <section className="bg-white py-4xl border-t border-outline-variant/30">
        <div className="max-w-max-width mx-auto px-base md:px-3xl grid md:grid-cols-2 gap-3xl items-center">
          <Link to="/presidents/chagdud-tulku-rinpoche" className="relative order-2 md:order-1 block group">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/40"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/40"></div>
            <div className="overflow-hidden thangka-border shadow-sm">
              <img loading="lazy" decoding="async" alt="Portrait of Chagdud Tulku Rinpoche" className="w-full aspect-[4/5] object-cover filter grayscale-[0.1] hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782643898/monastery/hmk8xtrlwhmqlp73fpy3.jpg" />
            </div>
            <div className="mt-lg text-center">
              <span className="font-label-eyebrow text-label-eyebrow text-gold tracking-widest block uppercase">First President</span>
              <h3 className="font-section-heading text-subheading text-maroon">Chagdud Tulku Rinpoche</h3>
              <p className="text-ink-light font-caption mt-xs">1930 — 2002</p>
            </div>
          </Link>
          <div className="order-1 md:order-2 space-y-lg">
            <div className="space-y-md">
              <p className="font-body-md text-body-md text-ink-mid">
                Chagdud Tulku Rinpoche (1930–2002) was born as Padma Gargyi Wangchuk in Kham, Eastern Tibet, and was recognized at the age of three as the incarnation of the previous Chagdud Tulku. He received teachings and empowerments from great masters including Dzongsar Khyentse Chökyi Lodrö, Dilgo Khyentse, and Kyabje Dudjom Jigdral Yeshe Dorje.
              </p>
              <p className="font-body-md text-body-md text-ink-mid">
                After escaping Tibet in 1959, he lived and practiced in India and Nepal before moving to the United States in 1979. From 1992, he played an important role in spreading Tibetan Buddhism in Brazil and throughout the West, inspiring numerous Dharma centers, including Rigzin Ling and Khadro Ling. He passed away in Brazil in 2002 and remained in meditation for more than five days after his passing.
              </p>
            </div>
            <Link to="/presidents/chagdud-tulku-rinpoche" className="inline-flex items-center gap-sm bg-maroon text-gold-light px-xl py-md rounded-DEFAULT font-button-text hover:bg-maroon-dark transition-all duration-300 uppercase group">
              Read Full Bio
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
      {/* Biographies Section 2: Kongtul Tsephel Rinpoche (Cream Background) */}
      <section className="bg-cream py-4xl">
        <div className="max-w-max-width mx-auto px-base md:px-3xl grid md:grid-cols-2 gap-3xl items-center">
          <div className="space-y-lg">
            <div className="space-y-md">
              <p className="font-body-md text-body-md text-ink-mid">
                Tulku Tsephel Rinpoche (1926–2010) was born in Kongpo, Tibet, and recognized as the reincarnation of Tulku Rangbar Rinpoche. He studied at Mindrolling Monastery and later served Kyabje Dudjom Rinpoche for twelve years, receiving extensive teachings, empowerments, and transmissions.
              </p>
              <p className="font-body-md text-body-md text-ink-mid">
                After coming to India, he settled in Odisha at the request of Dudjom Rinpoche and served Dundul Raptenling Monastery, becoming its fifth President around 1975. He played an important role in establishing the monastery’s first Shedra and was renowned for his knowledge of astronomy and divination.
              </p>
              <p className="font-body-md text-body-md text-ink-mid">
                He passed away in 2010 and remained in tukdam for five days. Following his cremation, sacred ringsel and a rainbow-colored bone were discovered, and prayers were offered for his swift reincarnation.
              </p>
            </div>
            <Link to="/presidents/kongtul-tsephel-rinpoche" className="inline-flex items-center gap-sm bg-maroon text-gold-light px-xl py-md rounded-DEFAULT font-button-text hover:bg-maroon-dark transition-all duration-300 uppercase group">
              Read Full Bio
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <Link to="/presidents/kongtul-tsephel-rinpoche" className="relative block group">
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold/40"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-gold/40"></div>
            <div className="overflow-hidden thangka-border shadow-sm">
              <img loading="lazy" decoding="async" alt="Portrait of Kongtul Tsephel Rinpoche" className="w-full aspect-[4/5] object-cover filter brightness-[0.98] hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782643899/monastery/hlrnkpeebnpqf6rgxkfr.jpg" />
            </div>
            <div className="mt-lg text-center">
              <span className="font-label-eyebrow text-label-eyebrow text-gold tracking-widest block uppercase">Second President</span>
              <h3 className="font-section-heading text-subheading text-maroon">Kongtul Tsephel Rinpoche</h3>
              <p className="text-ink-light font-caption mt-xs">1926 — 2010</p>
            </div>
          </Link>
        </div>
      </section>
      {/* Biographies Section 3: Lama Sonam Tashi Rinpoche (White Background) */}
      <section className="bg-white py-4xl">
        <div className="max-w-max-width mx-auto px-base md:px-3xl grid md:grid-cols-2 gap-3xl items-center">
          <Link to="/presidents/lama-sonam-tashi-rinpoche" className="relative order-2 md:order-1 block">
            <div className="overflow-hidden thangka-border bg-surface-container-low group relative">
              <img loading="lazy" decoding="async" alt="Portrait of Lama Sonam Tashi Rinpoche" className="w-full aspect-[4/5] object-cover opacity-95 transition-all duration-700 group-hover:scale-105" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782643900/monastery/oedajdlcav9i98m9mv2l.jpg" />

            </div>
            <div className="mt-lg text-center">
              <span className="font-label-eyebrow text-label-eyebrow text-gold tracking-widest block uppercase">Current President</span>
              <h3 className="font-section-heading text-subheading text-maroon">Lama Sonam Tashi Rinpoche</h3>
              <p className="text-ink-light font-caption mt-xs">Born 1987</p>
            </div>
          </Link>
          <div className="order-1 md:order-2 space-y-lg">
            <div className="space-y-md">
              <p className="font-body-md text-body-md text-ink-mid">
                Lama Sonam Tashi was born in 1987 and trained in the Dudjom lineage from a young age. He studied at Nepal Dudjom Monastery and Dundul Raptenling Monastery, where he received training in Tibetan language, scriptures, rituals, and sacred dances.
              </p>
              <p className="font-body-md text-body-md text-ink-mid">
                Since taking responsibility for Dundul Raptenling Monastery, he has played a central role in its revival, supporting monastic education, recruiting monks, developing facilities, and preserving the Dudjom Tersar tradition. He has received numerous empowerments and transmissions from renowned masters, including Kyabje Dudjom Yangsi Rinpoche, Dzongsar Khyentse Rinpoche, Chatral Rinpoche, and His Holiness the Dalai Lama.
              </p>
              <p className="font-body-md text-body-md text-ink-mid">
                He has also authored and published works on the Dudjom tradition, organized major Dharma practices and empowerments, and continues to oversee the monastery's educational activities and the ongoing Zangdok Palri project.
              </p>
            </div>
            <Link to="/presidents/lama-sonam-tashi-rinpoche" className="inline-flex items-center gap-sm bg-maroon text-gold-light px-xl py-md rounded-DEFAULT font-button-text hover:bg-maroon-dark transition-all duration-300 uppercase group">
              Read Full Bio
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
