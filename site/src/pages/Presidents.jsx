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
                Born in 1930 in the Tromthar region of Kham, Tibet, Chagdud Tulku Rinpoche was recognized as the sixteenth incarnation of the Chagdud line at the age of three. His early years were spent in rigorous monastic training, receiving profound empowerments and instructions from the most accomplished masters of the Nyingma tradition.
              </p>
              <p className="font-body-md text-body-md text-ink-mid">
                After escaping from Tibet in 1959, Rinpoche dedicated his life to the survival of the Dharma. He served the Tibetan community in India and Nepal before his pioneering mission to the West. In 1979, he moved to the United States and eventually Brazil, establishing the Chagdud Gonpa Foundation and Khadro Ling.
              </p>
              <p className="font-body-md text-body-md text-ink-mid">
                His presidency was marked by a tireless commitment to the Dudjom Tersar lineage, translating sacred texts, and building temples that serve as beacons of peace in both North and South America. His legacy remains a testament to the indestructible nature of enlightened mind.
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
                Kongtul Tsephel Rinpoche was born in 1926 in the valley of Powo, Tibet. Known for his unwavering devotion and administrative brilliance, he served as a personal attendant to Kyabje Dudjom Rinpoche for over twelve years, absorbing the essence of the lineage through proximity and profound service.
              </p>
              <p className="font-body-md text-body-md text-ink-mid">
                In 1975, he was appointed as the 5th President of the monastery, taking on the monumental task of stabilizing the monastic community in exile. His leadership was instrumental in the establishment of the Shedra (Monastic College) in Odisha, India, ensuring that the intellectual and contemplative rigor of the Nyingma school would be preserved for future generations.
              </p>
              <p className="font-body-md text-body-md text-ink-mid">
                Rinpoche's tenure was characterized by the 'Shedra model' of leadership—a focus on textual study alongside ritual practice. He was a master of the inner yogas and a compassionate administrator who cared deeply for every monk under his guidance.
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
              <p className="text-ink-light font-caption mt-xs">1926 — 2005</p>
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
                <strong>Lama Sonam Tashi Rinpoche</strong> is the head of Dundul Raptenling Monastery in Odisha, India, and a devoted holder of the Dudjom Tersar lineage. Trained from a young age in the Dudjom tradition, he studied Tibetan language, Buddhist scriptures, rituals, sacred dances, and lineage practices under many respected masters. He has received numerous empowerments, oral transmissions, and instructions from great lineage holders, including Kyabje Dudjom Yangsi Rinpoche, Kyabje Dzongsar Khyentse Rinpoche, Kyabje Chatral Rinpoche, Kyabje Garab Dorje Rinpoche, Kyabje Namkha Drimed Rabjam Rinpoche, Kyabje Shechen Rabjam Rinpoche, and His Holiness the 14th Dalai Lama.
              </p>
              <p className="font-body-md text-body-md text-ink-mid">
                Since assuming responsibility for Dundul Raptenling Monastery during a period of great difficulty, Lama Sonam Tashi Rinpoche has played a central role in reviving and strengthening the monastery. Through his leadership, new monks were recruited, monastic education was restored, and major facilities were completed, including classrooms, dormitories, a computer room, library, office, and a large teaching hall. He has also organized important empowerments, drupchens, Troma gatherings, and lineage ceremonies, while continuing to teach Buddhist texts, rituals, cham dances, and Dudjom Tersar practices to monks and lay practitioners.
              </p>
              <p className="font-body-md text-body-md text-ink-mid">
                Today, he continues to guide Dundul Raptenling Monastery, support the education of the sangha, preserve the Dudjom lineage, and oversee major Dharma projects, including the ongoing construction of Zangdok Palri.
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
