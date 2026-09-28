import PageBanner from "../components/PageBanner.jsx";

export default function Apps() {
  return (
    <div className="page-apps">
      <style>{`
        .page-apps {
            background-color: #f9f9f9;
        }
        .page-apps .silk-texture {
            background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23000000'/%3E%3C/svg%3E");
            opacity: 0.03;
        }
        .page-apps .maroon-gradient {
            background: linear-gradient(135deg, #570000 0%, #800000 100%);
        }
      `}</style>
      <main>
        <PageBanner
          image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520069/monastery/coikszcpwqkoed2vjr1j.jpg"
          eyebrow="Mobile Offerings"
          title="Digital Sanctuary"
          trail={[{ label: "Home", to: "/" }, { label: "Projects" }, { label: "Digital Apps" }]}
        />
        {/* Block C Variant: App Grid */}
        <section className="bg-surface-container-low py-24 px-8 md:px-24 relative overflow-hidden">
          <div className="absolute inset-0 silk-texture"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-stretch">
            {/* Nyingma Calendar Card */}
            <div className="group flex flex-col items-start space-y-8 bg-surface p-10 md:p-14 rounded-xl shadow-[0_20px_40px_rgba(87,0,0,0.06)] hover:translate-y-[-8px] transition-all duration-500">
              <img loading="lazy" decoding="async" alt="Nyingmapa Calendar app" className="w-full rounded-xl shadow-lg" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1783405636/monastery/oo6mbjxorrz02xgsu8zk.jpg" />
              <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold">Nyingmapa Calendar</h2>
                <p className="font-body text-lg leading-relaxed text-on-surface-variant">
                  A comprehensive digital guide to the sacred days, lunar cycles, and festival dates of the Nyingma tradition. Features daily wisdom, ritual reminders, and astrological insights to keep your practice aligned with the celestial rhythms.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4 w-full">
                <a href="https://apps.apple.com/us/app/nyingmapa-calendar/id6764128758" target="_blank" rel="noreferrer" className="flex-1 min-w-[200px] maroon-gradient text-on-primary py-4 px-8 rounded-full font-label font-bold text-label-md tracking-widest uppercase hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">apps</span>
                  App Store
                </a>
                <a href="https://play.google.com/store/apps/details?id=org.vajralotusfoundation.nyingmapacalendar" target="_blank" rel="noreferrer" className="flex-1 min-w-[200px] bg-secondary-container text-on-secondary-container py-4 px-8 rounded-full font-label font-bold text-label-md tracking-widest uppercase hover:brightness-105 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">play_arrow</span>
                  Google Play
                </a>
              </div>
            </div>
            {/* NamkhaZoe Card */}
            <div className="group flex flex-col items-start space-y-8 bg-surface p-10 md:p-14 rounded-xl shadow-[0_20px_40px_rgba(87,0,0,0.06)] hover:translate-y-[-8px] transition-all duration-500">
              <img loading="lazy" decoding="async" alt="NamkhaZoe app" className="w-full rounded-xl shadow-lg" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1783405637/monastery/yqho5m6t9ijoritokz4x.webp" />
              <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold">NamkhaZoe</h2>
                <p className="font-body text-lg leading-relaxed text-on-surface-variant">
                  The digital treasury of Tibetan Buddhism. Access sacred texts, commentaries, and ritual instructions for study and practice, wherever you go. A portable library for the modern practitioner.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4 w-full">
                <a href="https://namkhazoe.com/" target="_blank" rel="noreferrer" className="flex-1 min-w-[200px] maroon-gradient text-on-primary py-4 px-8 rounded-full font-label font-bold text-label-md tracking-widest uppercase hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">apps</span>
                  App Store
                </a>
                <a href="https://namkhazoe.com/" target="_blank" rel="noreferrer" className="flex-1 min-w-[200px] bg-secondary-container text-on-secondary-container py-4 px-8 rounded-full font-label font-bold text-label-md tracking-widest uppercase hover:brightness-105 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">play_arrow</span>
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Block E: Call to Action */}
        <section className="bg-surface py-32 px-8 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-display text-4xl md:text-5xl text-primary font-bold mb-8 italic tracking-tight">
              From Ancient Wisdom to Modern Life
            </h2>
            <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-12">
              In the spirit of the Buddha's teachings, we aspire to connect the wisdom of the ancient lineage with the tools of the modern world, making the light of the Dharma more accessible to modern generations.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="h-[1px] w-12 bg-outline-variant"></div>
              <span className="material-symbols-outlined text-secondary text-3xl" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
              <div className="h-[1px] w-12 bg-outline-variant"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
