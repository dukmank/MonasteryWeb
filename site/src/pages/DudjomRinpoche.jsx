import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner.jsx";

const SECTIONS = [
  {
    eyebrow: "The Treasure Revealer",
    title: "Conditions for His Holiness' Rebirth",
    paras: [
      "His Holiness was recognized as the incarnation of Dudjom Lingpa (1835-1904), the famous discoverer of many concealed teachings or “treasures” (Terma), particularly those related to the practice of Vajrakilaya (Dorje Phurba), amounting to twenty-one volumes. It had been Dudjom Lingpa’s intention to visit southern Tibet to reveal the sacred land of Pemakod, but being unable to do so, he predicted that his successor would be born there and would reveal it himself. Za-Pokhung Tulku Gyurme Ngedon Wangpo, who was a holder of the teachings of Dudjom Lingpa, and Lama Thubten Chonjor of Ling came to Pemakod and enthroned him. Gradually the disciples of the previous Dudjom came and paid their respects to him.",
    ],
  },
  {
    eyebrow: "Mastery of the Tradition",
    title: "His Holiness' Intensive Studies",
    paras: [
      "His Holiness Dudjom Rinpoche studied with the most outstanding lamas of his time, beginning his studies with Khenpo Aten in Pemakod. He studied many texts and commentaries, such as the Dom Sum (Three Precepts), Chod Juk, etc. It was said by Lama Konrab that at the age of five, His Holiness started discovering Ter. When he was eight years old, he began to study Shantideva's \"Bodhicaryavatara\" with his teacher Urgyen Chogyur Gyamtso, a disciple of the great Patrul Rinpoche (1808-1887).",
      "He studied for sixteen years with Za-Pokhung Tulku Gyurme Ngedon Wangpo and had great revelations on the teachings of Dzogpa Chenpo. From Jamyang Khyentse Chokyi Lodro, he received the tantric teachings (Gyud, Lung, and Men-Ngag) of the “Sangwa Nyingthik”. He received further Dzogchen teachings from Jedrung Thinley Jampai Jungne (Dudjom Namkai Dorje) of Riwoche.",
      "In his teens, His Holiness Dudjom Rinpoche attended the great monastic universities of Central Tibet, such as Mindrolling, Dorje Drak and Tarje Tingpoling, as well as those of East Tibet, including Kathok and Dzogchen. It was to Mindrolling that His Holiness returned to perfect his understanding of the Nyingma tradition. Thus it was from the Mindrolling Vajracarya, Dorzim Namdrol Gyamtso, that His Holiness learned all the rituals, mandalas, songs, dance and music of Terdak Lingpa, along with many other teachings. There were many other great teachers from whom His Holiness had received all the teachings of the Nyingma School of Tibetan Buddhism.",
      "From Togden Tenpa, His Holiness received both the wang and lung of the “Dzogchen Nyingtig Yabshi”, which was the lineage of the Great Khenpo Nyoshul Lungtok Tenpai Nyima. From Jedrung Rinpoche of Riwoche, His Holiness received the “Kangyur” lung, “Dam Ngag Dzod”, the seventeen “Sangchen Ngepai” tantras, “Nyingthig Yabshi”, and so on, as well as all the teachings of Dzogpa Chenpo. His Holiness received them completely and was considered his teacher’s heart son. From Tulku Kunzang Thekchog Tenpai Gyaltsan, His Holiness also received many deep and important teachings. From Ngagtsun Gendun Gyamtso, His Holiness received all the teachings of Pema Lingpa, the “Dzod Dun”, or the Seven Treasures of Longchenpa (1303-1363), among many others.",
      "Furthermore, from the Great Khenpo Jamde, Pande Odzer (a disciple of Mipham Rinpoche, 1848-1912), His Holiness received the “Nyingma Kama”, “Kagyed” empowerments, Sangye Lingpa’s “Lama Gongdu” and “Sangwa Nyingpo” according to the Zur tradition, as well as the cycle of the “Osel Sangwa Nyingthig”. His Holiness also received many tantra commentaries like the great commentaries of Mipham himself, the “Nyingthig Yabshi”, and so on. His Holiness considered Khenpo Jamde as his second kindest Lama and took many vows of Pratimoksha, of Bodhisattva, and of Vajrayana from him.",
      "His Holiness also received teachings from the great beings who were disciples of the Great Khenpo Nyoshul Lungtok Tenpai Nyima: Khenpo Ngawang Palzang, Chadral Sangye Dorje, Lama Urgyen Rigdzin, Kathok Chagtsa Tulku, Pulung Sangye Tulku, and Gyurme Phendei Ozer, among others. His Holiness received teachings from them and he also gave teachings to them as well.",
    ],
  },
  {
    eyebrow: "",
    title: "His Holiness’ Great Realizations",
    paras: [
      "Taking his practice very seriously, His Holiness Dudjom Rinpoche went to a secret place called Kenpa Jong (or Phuntsok Gatsel), and accomplished the Dorje Phurba of “Dudjom Namchag Pudri”. At Buddha Tse Phuk, His Holiness did Tse-Drup and his Tse-chang boiled. He further received the auspicious signs when he was practicing the “mind-treasure” (gongter) of Dudul Drollo. When in Paro Tak-Tshang (the Tiger’s Nest), His Holiness Dudjom Rinpoche rediscovered the “Pudri Rekpung”, the “Tsokye Thugthig” and the “Khandro Thugthig”, for which he wrote down the main parts. In short, in all these important holy places where he practiced, His Holiness always experienced the signs of accomplishment.",
    ],
  },
  {
    eyebrow: "",
    title: "His Holiness’ Writings",
    paras: [
      "His Holiness Dudjom Rinpoche was world famous as a very prolific author and a scholar. His writings are celebrated for the encyclopedic knowledge they display of all the traditional branches of Buddhist learning, including poetics, history, medicine, astrology and philosophy. A writer of inspirational poetry of compelling beauty, His Holiness had a special genius for expressing the meaning and realization of Dzogpa Chenpo with a crystal-like lucidity.",
      "His Holiness’ “Collected Works” (Sungbum), numbering twenty-five volumes, did not include his complete output. Among the most widely read of his works are the “Fundamentals of the Buddhist Teachings” and “History of the Nyingma School of Tibetan Buddhism”, which he composed soon after his arrival in India. These works have now been translated into English by Gyurme Dorje and Matthew Kapstein and published by Wisdom Publications. His Holiness’ Chinese spiritual representative Lama Sonam Chokyi Gyaltsan (alias Guru Lau Yui-che), with the help of Ming-chu Tulku, also translated it into Chinese, published by the Secret Vehicle Publications in Taiwan.",
      "Another important and major part of His Holiness’ work was the revision, correction and editing of many ancient and modern texts, including the fifty-eight volumes of the whole of the Canonical Teachings of the Nyingma School (“Nyingma Kama”), a venture which he began at the age of seventy-four, just as Jamgon Kongtrul had collected the Terma teachings. His Holiness’ own private library contains the largest collection of precious manuscripts and books outside of Tibet.",
    ],
  },
  {
    eyebrow: "Regent of Guru Rinpoche",
    title: "Spreading the Holy Dharma",
    paras: [
      "Unique in having received the transmission of all the existing teachings of the immensely rich Nyingma tradition, His Holiness Dudjom Rinpoche was famous in particular as a Great Terton (treasure revealer), whose Termas are now widely taught and practiced, and as the leading exponent of Dzogpa Chenpo. Indeed, His Holiness was regarded as the living embodiment of Guru Rinpoche and His Representative (Regent) in this contemporary time. A Master of masters, His Holiness was acknowledged by the leading Tibetan lamas as possessing the greatest power and blessing in communicating the nature of mind, and it was to him that they sent their students when prepared for this “Mind-direct” transmission. His Holiness Dudjom Rinpoche was, indeed, the teacher of many of the most prominent lamas still alive and active today.",
      "As his teachers had prophesized, His Holiness gave the “Rinchen Terdzod” (“Treasury of Precious Termas”) ten times, Pema Lingpa’s “Pedling Cho Kor” three times, the “Kangyur” and “Nyingma Gyudbum”, the Drupwang of “Kagyed”, “Jatson Podruk”, the complete empowerment and transmission of the “Nyingma Kama”, as well as teachings according to his own Terma (“Dudjom Tersar”) tradition, and innumerable other important teachings.",
      "His Holiness Dudjom Rinpoche’s main area of activity was in Central Tibet, where he maintained the Mindroling tradition, and especially at Pema Choling and his other seats in the Kongpo and Powo regions of southern Tibet. In Pemakod, His Holiness established many new monasteries and two colleges for both Gelong (ordained monks) and Ngagpa (yogis). In the Kongpo region, His Holiness reconstructed the Thadul Buchu Lhakhang, and close to it he built anew the monastery of Zangdok Palri. He also erected anew the tantric center of Lama Ling.",
      "While in Tibet, His Holiness Dudjom Rinpoche proclaimed His Holiness Chadral Sangye Dorje Rinpoche as his “Vajra Regent” (Dorje Gyaltsap) of the Dudjom Tersar Lineage. Furthermore, His Holiness Dudjom Rinpoche became renowned throughout Tibet for the brilliance of his spiritual achievements and wisdom, for his compassionate Bodhisattva activities, as well as for his unsurpassed scholarship in all aspects of the traditional arts and sciences.",
      "Upon leaving Tibet, His Holiness Dudjom Rinpoche settled in Kalimpong, India in 1958, and then later in Kathmandu, Nepal in 1973. When the Tibetan culture was at a difficult time, His Holiness played a key role in its renaissance among the refugee community, both through his teachings and his writings. He established a number of vital communities of practitioners in India and Nepal. At Tsopema (Rewalsar), His Holiness established a retreat center; at Darjeeling, His Holiness established Tsechu Gompa; in Orissa, he founded Dundul Rabten Ling; and in Kalimpong, His Holiness founded the Zangdok Palri Monastery. Near the Great Stupa at Boudhanath, Nepal, His Holiness also erected the Orgyen Dhonag Chöling Gompa. He also actively encouraged the study of the Nyingma tradition at the Tibetan Institute for Higher Studies in Sarnath.",
      "In other parts of the world, His Holiness Dudjom Rinpoche had also made tremendous progress in various Dharma activities. He founded many Dharma centers in the West, including Dorje Nyingpo and Orgyen Samye Choling in France, and Yeshe Nyingpo and Orgyen Cho Dzong in the United States. Over the last one-and-a-half-decades of his life, His Holiness Dudjom Rinpoche devoted much of his time to teaching in the West where he has successfully established the Nyingma tradition. In his first world-wide tour in 1972, His Holiness Dudjom Rinpoche visited the center of his Chinese spiritual representative Lama Sonam Chokyi Gyaltsan in Hong Kong, and also visited London at the invitation of Ven. Sogyal Rinpoche.",
    ],
  },
  {
    eyebrow: "Legacy through Family",
    title: "His Holiness' Family Life",
    paras: [
      "His Holiness Dudjom Rinpoche manifested as a householder with family, married twice. His first wife was called Sangyum Kusho Tseten Yudron, and they had altogether six children, including two daughters and four sons.",
      "Their eldest daughter, the late Dechen Yudron, lived in Lhasa, Tibet, where she took care of Lama Ling, His Holiness Dudjom Rinpoche’s seat in Kongpo. Their eldest son Kyabje Dungsay Thinley Norbu Rinpoche (1931-2011), was a great Nyingma scholar and master like his father, and was also the father of Dzongsar Jamyang Khyentse Rinpoche III. Thinley Norbu Rinpoche was the emanation of Kunkhyen Longchen Rabjam, as well as the rebirth of Terton Drime Ozer, the eldest son of Dudjom Lingpa. In his youth, Thinley Norbu Rinpoche studied for nine years at Mindrolling monastery and received many teachings from many great saints throughout Tibet, besides his own father. He resided in Delhi, New York.",
      "Their second son was Dola Tulku Jigmed Chokyi Nyima Rinpoche of mainly the Sakya lineage, and was the father of Kyabje Dudjom Yangsi Rinpoche until he passed away in Xining, Qinghai in the year 2000. Their second daughter, Pema Yudron, lives near Dola Rinpoche in Gha Chiku Dho-Kham, Tibet. Their third son, Pende Norbu, was also a tulku and passed away in Nepal. Their fourth son, Dorje Palzang, went to school in Beijing in the late fifties but was unfortunately killed during the Cultural Revolution.",
      "His Holiness Dudjom Rinpoche’s second wife was Sangyum Kusho Rigdzin Wangmo, who married Dudjom Rinpoche while they were still in Tibet. Their first child was the Dekyong Yeshe Wangmo, who was recognized as an incarnate dakini and was believed to be an emanation of Yeshe Tsogyal. She passed away when she was very young. The other children were Chimey Wangmo (their second eldest daughter), Shenphen Dawa Rinpoche (1950-2018), and Tsering Penzom, their younger daughter. His Holiness Shenphen Dawa Norbu Rinpoche devoted his life to spreading his father’s teachings in both Europe and the United States.",
    ],
  },
  {
    eyebrow: "Mahaparinirvana",
    title: "His Holiness’ Parinirvana",
    paras: [
      "Jamgon Kongtrul Lodrö Thaye, who led a life encompassing the activities of one hundred tertons (treasure revealers), has said that Mopa Od Thaye (His Holiness Dudjom Rinpoche’s future incarnation as the last Buddha of this Light Aeon) will have the activity of one thousand Buddhas. That this great being will perform the activity of all his previous lives and have many disciples is all due to his own power of Bodhicitta and prayers. As the Lord Buddha Shakyamuni, even though enlightened, performed the illusory activity of passing away for the benefit of worldly beings, likewise His Holiness Dudjom Rinpoche entered into Mahaparinirvana on January 17, 1987.",
    ],
  },
];

// Biography note and sources (from the original biography).
const BIO_NOTE = "This biography was updated in August of 2020 by Dr. Nora Post with invaluable suggestions offered by Lama Yeshi Phuntsok.";

const REFERENCES = [
  "[1] A short biography of His Holiness Dudjom Rinpoche is the Rigpa Shedra Wiki entry that appears on the Tersar.org website of Yeshe Nyingpo and Orgyen Chö Dzong: https://www.rigpawiki.org/index.php?title=Dudjom_Rinpoche. An additional short online biography of His Holiness Dudjom Rinpoche written by Lama Yeshi Phuntsok of the Dudjom Troma Foundation is found on their website (link included here with his kind permission): https://dudjomtroma.org/lineage/",
  "[2] Nyoshul Khenpo Jamyang Dorje’s “History of the Dzogchen Secret Quintessence, Life Stories of the Vidyadharas of the Lineage”, in Terry Clifford, ed. (1988) The Lamp of Liberation: 1-5.",
  "[3] Gyurme Dorje’s “His Holiness Dudjom Rinpoche (1904- 1987)” in The Middle Way, vol. 62, no. 1 (May 1987): 25-28.",
  "[4] “His Holiness Dudjom Rinpoche 1904-1987”, in Vajradhatu Sun, vol. 8, no. 3 (Feb./ March, 1987): 1-3.",
  "[5] “The Passing of His Holiness Dudjom Rinpoche”, in Snow Lion (Spring 1987): 3.",
  "[6] Personal Interview with Bhakha Tulku Rinpoche in Pharping (Yangleshod), Nepal on September 18, 1997.",
];

// Render URLs inside a text as links (same approach as NewsDetail).
function linkify(text) {
  return text.split(/(https?:\/\/[^\s]+?)(?=[.,;)]?(?:\s|$))/g).map((part, j) =>
    /^https?:\/\//.test(part) ? (
      <a key={j} href={part} target="_blank" rel="noreferrer" className="text-primary underline break-all hover:opacity-80">{part}</a>
    ) : (
      part
    )
  );
}

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
                It was predicted by Urgyen Dechen Lingpa that “in the future in Tibet, on the east of the Nine-Peaked Mountain, in the sacred Buddhafield of the self-originated Vajravarahi, there will be an emanation of Drogben, of royal lineage, named Jnana. His beneficial activities are in accord with the Vajrayana although he conducts himself differently, unexpectedly, as a little boy with astonishing intelligence.
              </p>
              <p>
                He will either discover new Terma or preserve the old Terma. Whoever has connections with him will be taken to Ngayab Ling (Zangdok Palri).”
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
                His Holiness Dudjom Rinpoche was born in the Wood Dragon year of the 15th Rabjung Cycle (June 10,1904), into a noble family in the southeastern Tibetan province of Pemakod, one of the four “hidden lands” of Guru Rinpoche. He was of royal Tsenpo lineage, descended from Nyatri Tsenpo and from Puwo Kanam Dhepa, the King of Powo.
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
      {/* Biography sections (long-form, from the original biography) */}
      {SECTIONS.map((sec, i) => (
        <section key={sec.title} className={(i % 2 === 0 ? "bg-white" : "bg-surface-container-low") + " py-20 px-6 md:px-12"}>
          <div className="max-w-3xl mx-auto">
            {sec.eyebrow && <span className="eyebrow mb-3">{sec.eyebrow}</span>}
            <h2 className="text-3xl font-headline text-on-surface mb-8">{sec.title}</h2>
            <div className="text-[17px] leading-relaxed text-on-surface/80 space-y-6 font-body">
              {sec.paras.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      ))}
      {/* Biography note & references */}
      <section className="bg-white pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto border-t border-primary/10 pt-10 font-body text-on-surface/70">
          <p className="text-[15px] italic mb-8">{BIO_NOTE}</p>
          <h3 className="eyebrow mb-4">References</h3>
          <ol className="space-y-3 text-[14px] leading-relaxed">
            {REFERENCES.map((r, i) => (
              <li key={i}>{linkify(r)}</li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
