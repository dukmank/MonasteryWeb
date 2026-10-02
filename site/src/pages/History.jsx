import PageBanner from "../components/PageBanner.jsx";

export default function History() {
  return (
    <div className="page-history">
      <style>{`
        .page-history .maroon-overlay {
            background: linear-gradient(rgba(92, 21, 32, 0.75), rgba(92, 21, 32, 0.85));
        }
        .page-history .sacred-divider {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 1px;
            background-color: rgba(196, 154, 42, 0.2);
            margin: 2rem 0;
        }
        .page-history .sacred-divider::after {
            content: '✦';
            color: #C49A2A;
            background-color: inherit;
            padding: 0 1rem;
            font-size: 14px;
            position: absolute;
            background: transparent;
        }
      `}</style>
      <PageBanner
        image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520021/monastery/uzv19a5p0i2tumj0p3si.jpg"
        eyebrow="SPIRITUAL LINEAGE"
        title="Our Sacred History"
        trail={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "History" }]}
      />

      {/* The Foundation */}
      <section className="bg-surface py-2xl md:py-4xl border-b border-outline-variant/10">
        <div className="max-w-max-width mx-auto px-base lg:px-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
            <div className="lg:col-span-4 mb-lg lg:mb-0">
              <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase mb-md block">Historical Journey</span>
              <h2 className="font-section-heading text-section-heading text-maroon mb-base leading-snug">The Foundation</h2>
              <div className="sacred-divider !justify-start"></div>
            </div>
            <div className="lg:col-span-8">
              <div className="prose prose-stone max-w-none space-y-lg">
                <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed first-letter:text-4xl first-letter:font-subheading first-letter:text-maroon first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  Before 1959 in Tibet, His Holiness Dudjom Jigdral Yeshe Dorje established Rigzin Ghatseling Monastery at Buchu in the Kongpo region of Tibet and founded the first Lama Lingpa community. During this period, many accomplished masters, great ngakpas, and fully ordained monks (gelongs) emerged among His Holiness's disciples, and the Dudjom Tersar lineage flourished.
                </p>
                <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
                  Following the events of 1959, Tibetans lost their homeland and sought refuge in India. During this difficult period of exile and displacement, His Holiness recognized the urgent need to establish a monastery to prevent the degeneration of the Buddha's teachings. To preserve the Nyingma lineage, His Holiness the 14th Dalai Lama requested Kyabje Dudjom Rinpoche Jigdral Yeshe Dorje to serve as the Supreme Head of the Nyingma tradition.
                </p>
                <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
                  Keeping His Holiness the Dalai Lama's request deeply in his heart, Kyabje Dudjom Rinpoche resolved to establish a monastery. With the support of the Government of Odisha in acquiring land and the guidance of the Tibetan Government-in-Exile, he chose Odisha as the location for Dundul Raptenling Monastery.
                </p>
                <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
                  Kyabje Dudjom Rinpoche selected Odisha because, according to the Hevajra Tantra, it is one of the Twenty-Four Great Sacred Places. Odisha is also regarded as the celestial abode of Oddiyana. Kyabje Rinpoche sent a letter to the Tibetan community of Pemako, the sacred region of southern Tibet, explaining his vision to establish a Nyingma monastery and settlement in Odisha and inviting them to join him. Many responded to his call.
                </p>
                <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
                  In 1961, Kyabje Rinpoche bestowed the name Dundul Raptenling upon the monastery established at Camp No. 3 of the Odisha Tibetan Refugee Settlement. Initially, the monastery could accommodate approximately one hundred members of the sangha. A sacred assembly of statues representing the Cho-Long-Trul Sum—Amitabha, Avalokiteshvara, and Guru Padmasambhava—was installed. Troma was placed on the far right and Dorje Drolö on the far left. As in Tibet, many practitioners devoted themselves to meditation retreat.
                </p>
                <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
                  Under the supervision of Lama Sherab Dorje Rinpoche and Lama Dorje Namgyal Rinpoche, construction of a three-story tsuglagkhang (monastery temple) began around 1969. Due to limited financial resources, the project required another ten years to complete. These same constraints also prevented the monastery from being built exactly according to Kyabje Rinpoche's original design. On February 3, 1979, His Holiness the 14th Dalai Lama consecrated and inaugurated the newly completed Dundul Raptenling Monastery.
                </p>
                <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
                  Over the years, Kyabje Dudjom Rinpoche's sons and grandsons, including Kyabje Shenphen Dawa Norbu Rinpoche, Kyabje Dzongsar Khyentse Rinpoche, Kyabje Garab Dorje Rinpoche, and many other disciples of His Holiness Dudjom Rinpoche, have helped protect and preserve the monastery and its lineage.
                </p>
                <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
                  Today, the unmistaken reincarnation of His Holiness Dudjom Rinpoche has appeared as Kyabje Dudjom Sangye Pema Shepa Rinpoche. As foretold in prophecy:
                </p>
                <blockquote className="p-lg bg-cream border-l-4 border-gold italic font-subheading text-subheading text-ink-mid my-xl leading-relaxed">
                  "In his former life, he was Vajradhara Jigdral Yeshe Dorje.<br />
                  In a future life, he will be Sugata Desheg Moepa Thaye.<br />
                  In this present lifetime, he is the ascetic yogi, the crown ornament of the teachings.<br />
                  To you, Sangye Pema Shepa, I supplicate."
                </blockquote>
                <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
                  In accordance with this prophetic verse, Kyabje Dudjom Sangye Pema Shepa Rinpoche is the spiritual head and supreme holder of the monastic seat of Dundul Raptenling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divine Architecture */}
      <section className="bg-cream py-2xl md:py-4xl">
        <div className="max-w-max-width mx-auto px-base lg:px-3xl">
          <div className="flex flex-col items-center text-center mb-3xl">
            <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase mb-md block">The Three Realms of Enlightenment</span>
            <h2 className="font-section-heading text-section-heading text-maroon mb-base">Divine Architecture</h2>
            <div className="sacred-divider mx-auto w-1/3"></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-lg text-center">
            <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
              The top floor is known as Choe ku shingkham (heaven). It has a statue of Choeku Woe Pak May [Amitabha]. On the right side is Dorsem yab yum, on the left is a Guru Tso-Gye-Thuk-Thig statue.
            </p>
            <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
              The middle floor is known as Longku Zhingkham. At its center stands a ten-foot-high statue of Avalokiteshvara (Chak Tong Chen Tong, the Thousand-Armed Avalokiteshvara). To the right is Jampelyang (Manjushri), and to the left is Vajrapani. In front of Avalokiteshvara is a statue of Kyabje Dudjom Jigdral Yeshe Dorje. To the right are Kyabje Rinpoche's private chambers, including both the master and smaller bedrooms. To the left is the monastery library, which preserves many important collections of Buddhist scriptures and lineage treasures, including the Gyalwa Kangyur and Tengyur, Nyingma Gyübum, Nyingma Kama, Rinchen Terdzö, Dudjom Rinpoche Kathang, and various collected works of other great lineage masters.
            </p>
            <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
              The ground floor is known as Tulku Zhingkham. At its center is a statue of Shakyamuni Buddha. To the right of Buddha is Guru Nangsi Zilnön, and further to the right is Guru Dorje Drolö. To the left of Buddha is Tamdrin Yangthrö (Hayagriva), and further left is Palchen Dorje Zhönnu Phurpa (Vajrakilaya).
            </p>
          </div>
          <div className="mt-3xl lg:mt-4xl">
            <div className="relative w-full aspect-[21/9] overflow-hidden">
              <img loading="lazy" decoding="async" className="w-full h-full object-cover" data-alt="Detailed close-up of intricate Tibetan temple architecture during golden hour." src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520022/monastery/oxqwdcgghc5hi1mdhhr6.jpg" />
              <div className="absolute inset-0 bg-maroon-dark/20 flex items-end p-xl">
                <p className="text-gold-light font-caption italic max-w-lg">Every corner of Dundul Raptenling is arranged according to the sacred symbolism of the enlightened realms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Sacred Location */}
      <section className="bg-surface py-2xl md:py-4xl">
        <div className="max-w-max-width mx-auto px-base lg:px-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3xl items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/40"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/40"></div>
              <img loading="lazy" decoding="async" className="w-full h-auto shadow-2xl relative z-10" data-alt="Aerial view of Dundul Raptenling Monastery nestled among the holy mountains of the Phuntsok Ling settlement." src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782630123/monastery/aurntk0zyqqcxsebfbtx.png" />
            </div>
            <div className="flex flex-col gap-lg">
              <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase block">Auspicious Connection to Oḍḍiyāna</span>
              <h2 className="font-section-heading text-section-heading text-maroon leading-tight">The Sacred Location</h2>
              <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
                The location of Dundul Raptenling Monastery is regarded as exceptionally auspicious and is recognized as one of the most sacred places for the dissemination of Vajrayana Buddhism in the sublime land of Oḍḍiyāna, India.
              </p>
              <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
                The monastery is situated at Camp No. 3 of the Phuntsok Ling Tibetan Settlement in Odisha. According to sacred geography, it is surrounded by holy mountains, including the mountain of Vajravarahi to the south and the Three Families of the Victorious Ones to the west.
              </p>
              <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
                Because of its connection to Oḍḍiyāna and its auspicious setting, Dundul Raptenling has become a place where the teachings of the Nyingma tradition continue to flourish. The monastery is revered as Dundul Raptenling, the Seat of Old Father Jigdral Yeshe Dorje, and remains a center for study, practice, retreat, and the preservation of the Dudjom lineage for future generations.
              </p>
              <div className="flex flex-wrap gap-md mt-base">
                <span className="px-md py-sm bg-cream text-maroon border border-gold/20 font-button-text text-button-text uppercase tracking-wider">Camp No. 3</span>
                <span className="px-md py-sm bg-cream text-maroon border border-gold/20 font-button-text text-button-text uppercase tracking-wider">Holy Mountains</span>
                <span className="px-md py-sm bg-cream text-maroon border border-gold/20 font-button-text text-button-text uppercase tracking-wider">Oḍḍiyāna Connection</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
