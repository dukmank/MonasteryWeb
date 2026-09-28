import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner.jsx";

export default function DudjomRinpoche() {
  return (
    <div className="page-dudjom">
      <style>{`
        .page-dudjom { font-family: 'Work Sans', sans-serif; background-color: #fcf9f4; }

        .page-dudjom .eyebrow {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #7b1e2a;
            display: block;
        }

        .page-dudjom .drop-cap::first-letter {
            float: left;
            font-family: 'Noto Serif', serif;
            font-size: 4.5rem;
            line-height: 1;
            padding-right: 0.75rem;
            color: #7b1e2a;
            font-weight: 400;
        }

        .page-dudjom .content-container {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }

        .page-dudjom .banner-overlay {
            background: linear-gradient(to bottom, rgba(123, 30, 42, 0.4), rgba(123, 30, 42, 0.8));
        }
      `}</style>
      <PageBanner
        image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1783136224/monastery/hkkeoombqu6suwynrufj.png"
        eyebrow="Venerable Lineage"
        title="H.H. Dudjom Rinpoche (1904-1987)"
        trail={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Dudjom Rinpoche" }]}
      />
      {/* Section: Prediction (White BG) */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="content-container grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="eyebrow mb-3">Sacred Prediction</span>
            <h2 className="text-3xl font-headline text-on-surface mb-8">Prediction on His Holiness Dudjom Rinpoche</h2>
            <div className="text-[17px] leading-relaxed text-on-surface/80 space-y-6 font-body">
              <p className="drop-cap">
                It was predicted by Urgyen Dechen Lingpa that "in the future in Tibet, on the east of the Nine-Peaked Mountain, in the sacred Buddhafield of the self-originated Vajravarahi, there will be an emanation of Drogben, of royal lineage, named Jnana. His beneficial activities are in accord with the Vajrayana although he conducts himself differently, unexpectedly, as a little boy with astonishing intelligence.
              </p>
              <p>
                He will either discover new Terma or preserve the old Terma. Whoever has connections with him will be taken to Ngayab Ling (Zangdok Palri)."
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 border border-primary/10 rounded-lg group-hover:border-primary/20 transition-colors"></div>
            <img loading="lazy" decoding="async" alt="Formal portrait of H.H. Dudjom Rinpoche" className="relative z-10 w-full aspect-[3/4] object-cover rounded shadow-lg" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782636915/monastery/ocycrekbhfbnd2utdqin.jpg" />
          </div>
        </div>
      </section>
      {/* Section: Birth (Cream BG) */}
      <section className="bg-surface-container-low py-24 px-6 md:px-12">
        <div className="content-container grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <img loading="lazy" decoding="async" alt="H.H. Dudjom Rinpoche in his youth" className="w-full aspect-[3/4] object-cover rounded shadow-2xl" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782636916/monastery/kiyo4mlrrwvcci9dqowf.jpg" />
          </div>
          <div className="order-1 md:order-2">
            <span className="eyebrow mb-3">The Hidden Lands</span>
            <h2 className="text-3xl font-headline text-on-surface mb-8">His Holiness Dudjom Rinpoche's Birth</h2>
            <div className="text-[17px] leading-relaxed text-on-surface/80 space-y-6 font-body">
              <p>
                His Holiness Dudjom Rinpoche was born in the Wood Dragon year of the 15th Rabjung Cycle (June 10,1904), into a noble family in the southeastern Tibetan province of Pemakod, one of the four "hidden lands" of Guru Rinpoche. He was of royal Tsenpo lineage, descended from Nyatri Tsenpo and from Puwo Kanam Dhepa, the King of Powo.
              </p>
              <p>
                His father, Kathok Tulku Norbu Tenzing, was a famous tulku of the Pemakod region from Kathok Monastery. His mother, who had descended from Ratna Lingpa and belonged to the local members of the Pemakod tribe, was called Namgyal Drolma. His Holiness Dudjom Rinpoche has always been specially connected with the Kathok Monastery, as can be seen from his previous incarnations: his ninth manifestation was Dampa Dayshek (1122-1192) who founded the Kathok Monastery, and his fifteenth manifestation was Sonam Detsen who was responsible for the revitalization of the Kathok Monastery.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Block: Featured Quote (Dark Maroon) */}
      <section className="bg-primary py-24 px-6 md:px-12 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <span className="eyebrow text-surface-bright/70 mb-6">A Sacred Promise</span>
          <h3 className="text-3xl md:text-4xl font-headline italic leading-relaxed mb-8">
            "Whoever has connections with him will be taken to Ngayab Ling (Zangdok Palri)."
          </h3>
          <div className="w-16 h-px bg-white/30 mx-auto mb-8"></div>
          <p className="text-sm font-body tracking-wide opacity-60">Prediction by Urgyen Dechen Lingpa</p>
        </div>
      </section>
      {/* Section: Studies & Stats (White BG) */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="content-container grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            <div>
              <span className="eyebrow mb-3">The Treasure Revealer</span>
              <h2 className="text-3xl font-headline text-on-surface mb-8">Conditions for His Holiness' Rebirth</h2>
              <p className="text-[17px] leading-relaxed text-on-surface/80 font-body">
                His Holiness was recognized as the incarnation of Dudjom Lingpa (1835-1904), the famous discoverer of many concealed teachings or "treasures" (Terma), particularly those related to the practice of Vajrakilaya (Dorje Phurba), amounting to twenty-one volumes. It had been Dudjom Lingpa's intention to visit southern Tibet to reveal the sacred land of Pemakod, but being unable to do so, he predicted that his successor would be born there and would reveal it himself. Za-Pokhung Tulku Gyurme Ngedon Wangpo and Lama Thubten Chonjor of Ling came to Pemakod and enthroned him.
              </p>
            </div>
            <div>
              <span className="eyebrow mb-3">Mastery of the Tradition</span>
              <h2 className="text-3xl font-headline text-on-surface mb-8">His Holiness' Intensive Studies</h2>
              <div className="text-[17px] leading-relaxed text-on-surface/80 space-y-6 font-body">
                <p>
                  His Holiness Dudjom Rinpoche studied with the most outstanding lamas of his time, beginning his studies with Khenpo Aten in Pemakod. He studied many texts and commentaries, such as the Dom Sum (Three Precepts), Chod Juk, etc. It was said by Lama Konrab that at the age of five, His Holiness started discovering Ter. When he was eight years old, he began to study Shantideva's "Bodhicaryavatara" with his teacher Urgyen Chogyur Gyamtso, a disciple of the great Patrul Rinpoche (1808-1887).
                </p>
                <p>
                  He studied for sixteen years with Za-Pokhung Tulku Gyurme Ngedon Wangpo and had great revelations on the teachings of Dzogpa Chenpo. In his teens, His Holiness attended the great monastic universities of Central Tibet, such as Mindrolling, Dorje Drak and Tarje Tingpoling. Thus it was from the Mindrolling Vajracarya, Dorzim Namdrol Gyamtso, that His Holiness learned all the rituals, mandalas, songs, dance and music.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="sticky top-40 bg-surface-container-low border border-primary/5 p-10 space-y-12 text-center rounded">
              <div>
                <div className="text-4xl font-headline text-primary mb-1">5 yrs</div>
                <div className="eyebrow text-[10px]">First Terma Discovery</div>
              </div>
              <div className="w-8 h-px bg-primary/10 mx-auto"></div>
              <div>
                <div className="text-4xl font-headline text-primary mb-1">25 vol</div>
                <div className="eyebrow text-[10px]">Collected Works (Sungbum)</div>
              </div>
              <div className="w-8 h-px bg-primary/10 mx-auto"></div>
              <div>
                <div className="text-4xl font-headline text-primary mb-1">15th</div>
                <div className="eyebrow text-[10px]">Golden Incarnation</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Block: Writings CTA (Centered Cream Band) */}
      <section className="bg-surface-container-low py-24 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary text-3xl block mb-6">✦</span>
          <span className="eyebrow mb-3">The Author &amp; Scholar</span>
          <h2 className="text-3xl font-headline text-on-surface mb-6">World Famous Writings</h2>
          <p className="text-[17px] leading-relaxed text-on-surface/70 font-body mb-10">
            Celebrated for his encyclopedic knowledge and poetic beauty, His Holiness had a special genius for expressing the realization of Dzogpa Chenpo with crystal-like lucidity. His "History of the Nyingma School" remains a cornerstone of Buddhist scholarship.
          </p>
          <a className="inline-block bg-primary text-white px-10 py-4 rounded-full text-[13px] font-semibold hover:bg-on-primary-fixed-variant transition-all shadow-md" href="https://namkhazoe.com/" target="_blank" rel="noreferrer">
            Explore the Sungbum
          </a>
        </div>
      </section>
      {/* Section: Legacy & Family (White BG) */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="content-container grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-16">
            <div>
              <span className="eyebrow mb-3">Regent of Guru Rinpoche</span>
              <h2 className="text-3xl font-headline text-on-surface mb-8">Spreading the Holy Dharma</h2>
              <p className="text-[17px] leading-relaxed text-on-surface/80 font-body">
                Unique in having received the transmission of all existing Nyingma teachings, His Holiness was the leading exponent of Dzogpa Chenpo and a Great Terton. Indeed, His Holiness was regarded as the living embodiment of Guru Rinpoche and His Representative (Regent) in this contemporary time.
              </p>
            </div>
            <div>
              <span className="eyebrow mb-3">Legacy through Family</span>
              <h2 className="text-3xl font-headline text-on-surface mb-8">His Holiness' Family Life</h2>
              <p className="text-[17px] leading-relaxed text-on-surface/80 font-body">
                His Holiness Dudjom Rinpoche manifested as a householder with family, married twice. His first wife was called Sangyum Kusho Tseten Yudron. His second wife was Sangyum Kusho Rigdzin Wangmo. He had many children who became great scholars and masters in their own right, continuing his lineage and teachings across the world.
              </p>
            </div>
          </div>
          <div className="bg-surface-container-low p-12 rounded border-l-4 border-primary relative overflow-hidden">
            <i className="ti ti-building-monastery absolute -bottom-10 -right-10 text-[160px] text-primary/5 pointer-events-none"></i>
            <span className="eyebrow mb-4">Mahaparinirvana</span>
            <h2 className="text-2xl font-headline text-primary mb-8">The Final Passage</h2>
            <div className="relative z-10 font-body">
              <p className="text-[18px] leading-relaxed text-on-surface italic mb-8">
                "Mopa Od Thaye (His Holiness' future incarnation) will have the activity of one thousand Buddhas."
              </p>
              <p className="text-[16px] leading-relaxed text-on-surface/80 mb-6">
                His Holiness entered into Mahaparinirvana on January 17, 1987. His influence as the Supreme Head of the Nyingma School continues to illuminate the path for practitioners worldwide.
              </p>
              <div className="w-12 h-px bg-primary/20"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
