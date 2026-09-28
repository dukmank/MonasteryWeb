import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner.jsx";

export default function Shedra() {
  return (
    <div className="page-shedra">
      <style>{`
        .page-shedra .sacred-divider::before, .page-shedra .sacred-divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: rgba(196, 154, 42, 0.3);
        }
        .page-shedra .bento-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
        }
      `}</style>
      <PageBanner
        image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520028/monastery/cll1htaqn3ahkjnvgbl2.jpg"
        eyebrow="Monastic Education"
        title="Shenphen Shedrubling Shedra"
        trail={[{ label: "Home", to: "/" }, { label: "The Monastery" }, { label: "Shenphen Shedrubling Shedra" }]}
      />
      {/* 4. Block B (Text + Image) - Lineage Revival */}
      <section className="py-2xl md:py-4xl bg-surface">
        <div className="px-lg md:px-3xl max-w-max-width mx-auto grid md:grid-cols-2 gap-3xl items-center">
          <div className="order-2 md:order-1">
            <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase mb-sm block">Lineage Revival</span>
            <h2 className="font-section-heading text-section-heading text-maroon mb-lg">Reviving the Monastic Community</h2>
            <p className="font-body-lg text-body-lg text-ink-mid mb-base">
              In 1997, Dungsey Shenphen Dawa Norbu Rinpoche visited Dundul Raptenling Monastery and recruited twenty-two new monks. Following the instructions of the late H.H. Dudjom Rinpoche, Dungsey Rinpoche aimed to revive the monastic community.
            </p>
            <p className="font-body-lg text-body-lg text-ink-mid">
              Between 1997 and 2007, under the guidance of His Eminence, the monastery focused on establishing a solid foundation for spiritual practice and monastic discipline, ensuring the continuity of the precious Dudjom Tersar lineage.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-xl overflow-hidden border-[0.5px] border-gold/20 shadow-sm">
            <img loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover" alt="A group of young Tibetan monks in traditional maroon robes engaged in a lively debate in an open-air monastery courtyard" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520029/monastery/ixtt8shyzretsqerqtgg.jpg" />
          </div>
        </div>
      </section>
      {/* 5. Block B Reversed (Text + Image) - Leadership */}
      <section className="py-2xl md:py-4xl bg-cream">
        <div className="px-lg md:px-3xl max-w-max-width mx-auto grid md:grid-cols-2 gap-3xl items-center">
          <div className="rounded-xl overflow-hidden border-[0.5px] border-gold/20 shadow-sm">
            <img loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover" alt="A dignified portrait of a Tibetan Lama in serene meditation" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520029/monastery/cfnjpj73wvlhbspfj4tp.jpg" />
          </div>
          <div>
            <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase mb-sm block">Leadership</span>
            <h2 className="font-section-heading text-section-heading text-maroon mb-lg">Renewed Growth and Leadership</h2>
            <p className="font-body-lg text-body-lg text-ink-mid mb-base">
              In 2008, Lama Sonam Tashi was able to recruit fifteen new monks, further strengthening the monastic sangha. This period marked a significant turning point in the monastery's organizational and educational growth.
            </p>
            <p className="font-body-lg text-body-lg text-ink-mid">
              Under new leadership, the monastery expanded its vision, focusing not only on traditional rituals but also on a comprehensive educational curriculum that would prepare the monks for modern challenges while preserving ancient wisdom.
            </p>
          </div>
        </div>
      </section>
      {/* 6. Block D (Dark Maroon Band) - Dalai Lama */}
      <section className="py-2xl md:py-4xl bg-maroon-dark text-gold-light">
        <div className="px-lg md:px-3xl max-w-max-width mx-auto text-center max-w-4xl">
          <div className="flex justify-center mb-base">
            <span className="material-symbols-outlined text-gold text-4xl">history_edu</span>
          </div>
          <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase mb-sm block">Spiritual Guidance</span>
          <h2 className="font-section-heading text-section-heading text-gold-light mb-lg">His Holiness the Dalai Lama's Visit</h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mb-lg"></div>
          <p className="font-body-lg text-body-lg text-gold-light/90 italic leading-relaxed">
            "In 2009, Dundul Raptenling Monastery hosted His Holiness the 14th Dalai Lama. During this auspicious visit, His Holiness emphasized the importance of rigorous study and the preservation of the Buddhist philosophical tradition, providing invaluable inspiration for the establishment of the Shedra."
          </p>
        </div>
      </section>
      {/* 7. Block B (Text + Image) - Facilities */}
      <section className="py-2xl md:py-4xl bg-surface">
        <div className="px-lg md:px-3xl max-w-max-width mx-auto grid md:grid-cols-2 gap-3xl items-center">
          <div>
            <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase mb-sm block">Facilities</span>
            <h2 className="font-section-heading text-section-heading text-maroon mb-lg">The New Shedra Facilities</h2>
            <p className="font-body-lg text-body-lg text-ink-mid mb-base">
              In March 2020, a new educational and residential complex was inaugurated: Rinzin Jamyang Gaypai Gatsal. This state-of-the-art facility provides a dedicated environment for deep study and contemplation.
            </p>
            <p className="font-body-lg text-body-lg text-ink-mid">
              The complex includes modern classrooms, an extensive library of sacred texts, and comfortable living quarters for the students and teachers, ensuring that the physical environment supports the spiritual and intellectual pursuits of the Shedra.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border-[0.5px] border-gold/20 shadow-sm relative group">
            <img loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" alt="A modern monastic residential and educational building featuring traditional Tibetan architectural elements" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520030/monastery/mdvjm4zf7yurumtyqz4f.jpg" />
          </div>
        </div>
      </section>
      {/* 8. Block C (Curriculum Grid) */}
      <section className="py-2xl md:py-4xl bg-cream">
        <div className="px-lg md:px-3xl max-w-max-width mx-auto">
          <div className="text-center mb-2xl">
            <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase mb-sm block">Academic Path</span>
            <h2 className="font-section-heading text-section-heading text-maroon">Curriculum</h2>
            <div className="flex items-center justify-center mt-md space-x-sm sacred-divider opacity-50">
              <span className="material-symbols-outlined text-gold text-lg">brightness_7</span>
            </div>
          </div>
          <div className="bento-grid">
            {/* Shung */}
            <div className="bg-surface p-xl rounded-lg border-[0.5px] border-gold/20 hover:border-maroon/30 transition-all group">
              <div className="text-maroon mb-md"><span className="material-symbols-outlined text-3xl">auto_stories</span></div>
              <h3 className="font-card-title text-card-title text-maroon mb-sm">Shung</h3>
              <p className="font-body-md text-body-md text-ink-mid">Rigorous study of primary Buddhist philosophical scriptures and root texts.</p>
            </div>
            {/* Rituals */}
            <div className="bg-surface p-xl rounded-lg border-[0.5px] border-gold/20 hover:border-maroon/30 transition-all">
              <div className="text-maroon mb-md"><span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>prayer_times</span></div>
              <h3 className="font-card-title text-card-title text-maroon mb-sm">Dudjom Tersar Rituals</h3>
              <p className="font-body-md text-body-md text-ink-mid">Training in the specific liturgical and ritual traditions of the lineage.</p>
            </div>
            {/* Languages */}
            <div className="bg-surface p-xl rounded-lg border-[0.5px] border-gold/20 hover:border-maroon/30 transition-all">
              <div className="text-maroon mb-md"><span className="material-symbols-outlined text-3xl">translate</span></div>
              <h3 className="font-card-title text-card-title text-maroon mb-sm">English &amp; Tibetan</h3>
              <p className="font-body-md text-body-md text-ink-mid">Comprehensive language studies to facilitate global communication and textual analysis.</p>
            </div>
            {/* Mandala */}
            <div className="bg-surface p-xl rounded-lg border-[0.5px] border-gold/20 hover:border-maroon/30 transition-all">
              <div className="text-maroon mb-md"><span className="material-symbols-outlined text-3xl">grid_view</span></div>
              <h3 className="font-card-title text-card-title text-maroon mb-sm">Sand Mandala</h3>
              <p className="font-body-md text-body-md text-ink-mid">The sacred art of creating complex geometric mandalas using colored sand.</p>
            </div>
            {/* Arts */}
            <div className="bg-surface p-xl rounded-lg border-[0.5px] border-gold/20 hover:border-maroon/30 transition-all">
              <div className="text-maroon mb-md"><span className="material-symbols-outlined text-3xl">palette</span></div>
              <h3 className="font-card-title text-card-title text-maroon mb-sm">Thread Weaving</h3>
              <p className="font-body-md text-body-md text-ink-mid">Specialized training in the traditional weaving techniques used for ritual objects.</p>
            </div>
            {/* Technology */}
            <div className="bg-surface p-xl rounded-lg border-[0.5px] border-gold/20 hover:border-maroon/30 transition-all">
              <div className="text-maroon mb-md"><span className="material-symbols-outlined text-3xl">laptop_mac</span></div>
              <h3 className="font-card-title text-card-title text-maroon mb-sm">Computer Classes</h3>
              <p className="font-body-md text-body-md text-ink-mid">Digital literacy and modern tools to support translation and documentation work.</p>
            </div>
            {/* Torma */}
            <div className="bg-surface p-xl rounded-lg border-[0.5px] border-gold/20 hover:border-maroon/30 transition-all">
              <div className="text-maroon mb-md"><span className="material-symbols-outlined text-3xl">restaurant</span></div>
              <h3 className="font-card-title text-card-title text-maroon mb-sm">Torma Making</h3>
              <p className="font-body-md text-body-md text-ink-mid">The ritual art of sculpting traditional sacrificial cakes from barley flour.</p>
            </div>
            {/* Dance */}
            <div className="bg-surface p-xl rounded-lg border-[0.5px] border-gold/20 hover:border-maroon/30 transition-all">
              <div className="text-maroon mb-md"><span className="material-symbols-outlined text-3xl">self_improvement</span></div>
              <h3 className="font-card-title text-card-title text-maroon mb-sm">Vajra Dancing</h3>
              <p className="font-body-md text-body-md text-ink-mid">Training in Cham, the sacred masked dances performed during religious festivals.</p>
            </div>
            {/* Astrology */}
            <div className="bg-surface p-xl rounded-lg border-[0.5px] border-gold/20 hover:border-maroon/30 transition-all">
              <div className="text-maroon mb-md"><span className="material-symbols-outlined text-3xl">nights_stay</span></div>
              <h3 className="font-card-title text-card-title text-maroon mb-sm">Tibetan Astrology</h3>
              <p className="font-body-md text-body-md text-ink-mid">Study of traditional celestial calculations and their spiritual significance.</p>
            </div>
          </div>
        </div>
      </section>
      {/* 9. Block E (Centered CTA) */}
      <section className="py-2xl md:py-4xl bg-surface relative overflow-hidden">
        {/* Decorative watermark */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[300px] text-maroon" style={{ fontVariationSettings: "'FILL' 1" }}>filter_vintage</span>
        </div>
        <div className="px-lg md:px-3xl max-w-max-width mx-auto text-center relative z-10">
          <div className="flex justify-center mb-lg">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-maroon-light text-maroon border border-maroon/10">
              <span className="material-symbols-outlined text-2xl">verified_user</span>
            </div>
          </div>
          <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase mb-sm block">Join the Sangha</span>
          <h2 className="font-section-heading text-section-heading text-maroon mb-lg">Admission and Study</h2>
          <div className="max-w-2xl mx-auto bg-gold-light/30 p-xl rounded-xl border border-gold/10 mb-2xl">
            <p className="font-body-lg text-body-lg text-ink-mid">
              Dundul Raptenling Monastery welcomes all interested individuals who wish to dedicate themselves to the Buddhist path. Applicants are required to undergo a period of preliminary practice and submit necessary documentation for enrollment in the Shedra program.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-base">
            <Link to="/contact" className="bg-maroon text-gold-light px-2xl py-base rounded font-button-text text-button-text uppercase tracking-widest hover:bg-maroon-mid transition-all shadow-md active:scale-95">
              Contact Us
            </Link>
            <Link to="/support" className="border-[1.5px] border-maroon text-maroon px-2xl py-base rounded font-button-text text-button-text uppercase tracking-widest hover:bg-maroon/5 transition-all active:scale-95">
              Support the Shedra
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
