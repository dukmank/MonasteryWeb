import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from "../components/PageBanner.jsx";

const PORTRAIT_URL = "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520008/monastery/sbyzjwroqczzniuiygbd.jpg";

export default function LamaSonamTashi() {
  return (
    <>
      <style>{`
        .sacred-pattern {
          background-image: radial-gradient(#C49A2A 0.5px, transparent 0.5px);
          background-size: 24px 24px;
          opacity: 0.05;
        }
        .editorial-border {
          border: 0.5px solid rgba(180, 130, 50, 0.2);
        }
      `}</style>

      <PageBanner
        image={PORTRAIT_URL}
        eyebrow="Current President"
        title="Lama Sonam Tashi Rinpoche"
        trail={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Our Presidents", to: "/presidents" }, { label: "Lama Sonam Tashi" }]}
      />

      {/* Early Life & Lineage */}
      <section className="py-16 sm:py-20 bg-[#fcf9f4]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="max-w-3xl">
            <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase mb-4 block">Origins &amp; Heritage</span>
            <h2 className="font-section-heading text-2xl sm:text-section-heading text-[#7B1E2A] mb-6">Early Life &amp; Noble Lineage</h2>
            <div className="space-y-4">
              <p className="font-body-lg text-body-lg text-[#564242]">
                Lama Sonam Tashi was born on August 11, 1987 to father Champon Lama Dorjee Thinley and mother Nyima Youdon. His name was bestowed upon him by his grandfather, Aumtse Chenpo Dutse Dorjee, who had been appointed the Dudjom Tersar's cham (vajra dance) teacher by His Holiness Kyabje Dudjom Rinpoche. His father succeeded his own father as cham master and umdzé.
              </p>
              <p className="font-body-md text-body-md text-[#564242]">
                Sonam Tashi went to the Nepal Dudjom Monastery in 1990 to study the Dudjom lineage, attended the Central School for Tibetans at Chandagiri from 1996, and joined Dundul Raptenling Monastery in 1999, where he learned Tibetan grammar, spelling, Lo-zin and studied the Nyingma sutras. He received the Dudjom rituals from his master the late Lama Pema Choeying, and completed his ritual studies with Lopön Jamyang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initial Responsibility */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 flex flex-col sm:flex-row sm:justify-end">
          <div className="max-w-3xl">
            <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase mb-4 block">The Call to Service</span>
            <h2 className="font-section-heading text-2xl sm:text-section-heading text-[#7B1E2A] mb-6">Initial Responsibility &amp; Restoration</h2>
            <div className="space-y-4">
              <p className="font-body-lg text-body-lg text-[#564242]">
                During the decline of Dundul Raptenling in about 2005, Lama Sonam began sharing responsibilities with the incumbent president, Tulku Tsephel. At his request, Lama Sonam toured India to raise funds to resurrect the monastery, assembling about fifteen new monks.
              </p>
              <p className="font-body-md text-body-md text-[#564242]">
                Seeing the need for physical resurgence, Rinpoche spearheaded ambitious fundraising campaigns. His efforts were instrumental in the resurrection of Dundul Raptenling, ensuring that the sacred site could continue to serve as a beacon for practitioners and scholars alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Resurgence */}
      <section className="py-16 sm:py-20 bg-[#5C1520] relative overflow-hidden">
        <div className="sacred-pattern absolute inset-0"></div>
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 relative z-10 text-center">
          <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase mb-6 block">Pillars of the Sangha</span>
          <h2 className="font-section-heading text-2xl sm:text-section-heading text-[#F9F3E3] mb-8">Leadership &amp; Institutional Resurgence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#7B1E2A]/20 rounded-lg border border-[#C49A2A]/10">
              <div className="font-hero-title text-gold mb-3 text-4xl">2010</div>
              <h3 className="font-card-title text-card-title text-[#F9F3E3] mb-2">Full Responsibility</h3>
              <p className="font-body-md text-body-md text-[#F9F3E3]/70">When Tulku Tsephel passed away in 2010, the entire responsibility for the monastery fell upon his shoulders. He contacted high lamas for help; since then the monastery's finances have stabilized.</p>
            </div>
            <div className="p-6 bg-[#7B1E2A]/20 rounded-lg border border-[#C49A2A]/10">
              <div className="font-hero-title text-gold mb-3 text-4xl">2016</div>
              <h3 className="font-card-title text-card-title text-[#F9F3E3] mb-2">Dormitory Construction</h3>
              <p className="font-body-md text-body-md text-[#F9F3E3]/70">Built a new dormitory and classroom building through the generous sponsorship of Dungsey Garab Dorjee Rinpoche, and acquired some seventy lama-dancing masks and costumes.</p>
            </div>
            <div className="p-6 bg-[#7B1E2A]/20 rounded-lg border border-[#C49A2A]/10">
              <div className="font-hero-title text-gold mb-3 text-4xl">Ritual</div>
              <h3 className="font-card-title text-card-title text-[#F9F3E3] mb-2">Sacred Arts Sponsorship</h3>
              <p className="font-body-md text-body-md text-[#F9F3E3]/70">Acquired new thrones and ritual implements, and produced a video of the Dudjom Tersar cham for the preservation of sacred vajra dances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Empowerments & Transmissions */}
      <section className="py-16 sm:py-20 bg-[#fcf9f4]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase mb-4 block">Transmission Lineage</span>
            <h2 className="font-section-heading text-2xl sm:text-section-heading text-[#7B1E2A]">Empowerments &amp; Transmissions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="editorial-border p-8 bg-white text-center hover:bg-[#F0EAE0] transition-all duration-300">
              <div className="text-gold text-4xl mb-4">✦</div>
              <h3 className="font-card-title text-card-title text-[#7B1E2A] mb-2">Nyingma Kama</h3>
              <p className="font-caption text-caption text-[#564242]">Received the complete oral transmission and empowerments of the Nyingma Kama from lineage masters.</p>
            </div>
            <div className="editorial-border p-8 bg-white text-center hover:bg-[#F0EAE0] transition-all duration-300">
              <div className="text-gold text-4xl mb-4">📜</div>
              <h3 className="font-card-title text-card-title text-[#7B1E2A] mb-2">Dudjom Tersar</h3>
              <p className="font-caption text-caption text-[#564242]">Extensive empowerments of the Dudjom Treasure teachings from Kyabje Terton Namkha Drimed Rabjam Rinpoche and others.</p>
            </div>
            <div className="editorial-border p-8 bg-white text-center hover:bg-[#F0EAE0] transition-all duration-300">
              <div className="text-gold text-4xl mb-4">📖</div>
              <h3 className="font-card-title text-card-title text-[#7B1E2A] mb-2">Rinchen Terdzö</h3>
              <p className="font-caption text-caption text-[#564242]">Received the Rinchen Terdzö from Kyabje Drupwang Pema Norbu Rinpoche and the complete lung of the Dudjom treasure lineage.</p>
            </div>
            <div className="editorial-border p-8 bg-white text-center hover:bg-[#F0EAE0] transition-all duration-300">
              <div className="text-gold text-4xl mb-4">☸</div>
              <h3 className="font-card-title text-card-title text-[#7B1E2A] mb-2">Dzogchen Teachings</h3>
              <p className="font-caption text-caption text-[#564242]">Direct transmissions from Kyabje Dzongsar Jamyang Khyentse Rinpoche and Kyabje Dudjom Yangsi Rinpoche, among many others.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Vision & Humanitarian Response */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2] border-y border-[#dcc0c0]/20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="max-w-3xl">
            <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase mb-4 block">Compassion in Action</span>
            <h2 className="font-section-heading text-2xl sm:text-section-heading text-[#7B1E2A] mb-6">Global Vision &amp; Humanitarian Response</h2>
            <div className="space-y-6">
              <p className="font-body-lg text-body-lg text-[#564242]">
                With the blessings of Kyabje Dudjom Yangsi Rinpoche, Rinpoche began visiting other countries in 2019, helping to provide resources for the new library and the ongoing Zangdok Palri construction project.
              </p>
              <div className="bg-white/50 p-6 rounded-lg editorial-border">
                <h4 className="font-button-text text-button-text text-[#7B1E2A] uppercase mb-2 flex items-center gap-2">
                  <span className="text-gold">✚</span>
                  Pandemic Response
                </h4>
                <p className="font-body-md text-body-md text-[#564242]">
                  During the COVID-19 lockdown, Rinpoche provided rations and food staples for almost 1,000 households and PPE for doctors and nurses in his area, demonstrating that true dharma practice is inseparable from social action.
                </p>
              </div>
              <p className="font-body-md text-body-md text-[#564242]">
                His completion of the Monastic Library stands as a testament to his vision of merging ancient wisdom with modern accessibility for the next generation of practitioners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Distinguished Achievements */}
      <section className="py-16 sm:py-20 bg-[#FDF9ED]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 text-center">
          <div className="mb-6 flex justify-center text-gold">
            <span className="text-5xl">◈</span>
          </div>
          <h2 className="font-section-heading text-2xl sm:text-section-heading text-[#7B1E2A] mb-8">Distinguished Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7B1E2A] text-[#F9F3E3] flex items-center justify-center font-bold">01</div>
              <div>
                <h3 className="font-card-title text-card-title text-[#7B1E2A] mb-2">Publication of 'Kunphel Yigsu Theb'</h3>
                <p className="font-body-md text-body-md text-[#564242]">A landmark editorial project documenting Tibetan handwriting and the ritual liturgical protocols of the Dudjom tradition for future generations. He has also published the Dudjom Comprehensive Mandala, the Dudjom Solka, and a Rime daily prayer book.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7B1E2A] text-[#F9F3E3] flex items-center justify-center font-bold">02</div>
              <div>
                <h3 className="font-card-title text-card-title text-[#7B1E2A] mb-2">Troma Tsogpa Leadership</h3>
                <p className="font-body-md text-body-md text-[#564242]">Rinpoche oversees the newly formed Troma Tsogpa, serving as the spiritual director and leading a monthly Chöd gathering for practitioners of the Troma Nagmo Chöd tradition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
