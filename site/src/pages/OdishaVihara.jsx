import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner.jsx";

export default function OdishaVihara() {
  return (
    <div className="page-odisha">
      <style>{`
        .page-odisha .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .page-odisha { background-color: #fcf9f4; color: #1c1c19; font-family: 'Work Sans', sans-serif; }
        .page-odisha .text-eyebrow { font-family: 'Work Sans', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #8B6B1A; }
      `}</style>
      <PageBanner
        image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520037/monastery/rmgatd9gv28wcehks20o.jpg"
        eyebrow="Monastic Life"
        title="Odisha Dudjom Vihara"
        trail={[{ label: "Home", to: "/" }, { label: "The Monastery" }, { label: "Odisha Dudjom Vihara" }]}
      />
      {/* Rhythm 1: White Section - Academic Excellence */}
      <section className="py-3xl bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-eyebrow">Academic Excellence</span>
              <h2 className="font-section-heading text-ink-mid">Preserving Scholastic Traditions</h2>
              <p className="font-body-lg text-ink-mid/90">Our monastic college stands as a beacon of wisdom, preserving the ancient Nyingmapa scholastic traditions. Here, the mind is refined through rigorous debate, analytical meditation, and the study of the Five Great Sciences.</p>
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex flex-wrap gap-4">
                  <a href="https://youtu.be/35ciOgo00aI" target="_blank" rel="noreferrer" className="bg-maroon text-gold-light px-6 py-3 rounded-lg flex items-center gap-2 font-button-text uppercase tracking-wider hover:bg-maroon-mid transition-all shadow-sm">
                    <span className="ti ti-player-play-filled"></span> Become a Monk
                  </a>
                  <a href="https://youtu.be/GMS-75D7wn4" target="_blank" rel="noreferrer" className="bg-gold text-white px-6 py-3 rounded-lg flex items-center gap-2 font-button-text uppercase tracking-wider hover:bg-gold-dark transition-all shadow-sm">
                    <span className="ti ti-player-play-filled"></span> A Day of a Monk
                  </a>
                </div>
                <Link to="/shedra" className="border border-maroon text-maroon px-6 py-3 rounded-lg font-button-text uppercase tracking-wider hover:bg-maroon-light transition-all w-fit font-medium flex items-center gap-2">
                  Shenphen Shedrubling Shedra <span className="ti ti-chevrons-right"></span>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-surface-variant">
                <img loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520038/monastery/ohoy0c2f99mgwtvmn6k3.jpg" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cream p-6 rounded-lg border border-gold/20 shadow-xl hidden md:block max-w-xs">
                <h4 className="font-card-title text-maroon mb-2">A Day in Monastic Life</h4>
                <p className="font-caption text-ink-light">From 04:30 AM Morning Liturgy to 19:00 PM Evening Chanting, the rhythm of practice never ceases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Rhythm 2: Cream Section - Graduate Monks */}
      <section className="py-3xl bg-cream">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 text-center">
          <span className="text-eyebrow mb-3 block">Class of 2024</span>
          <h2 className="font-section-heading text-ink-mid mb-6">Graduate Monks</h2>
          <p className="mb-16 font-body-md text-ink-light max-w-2xl mx-auto">
            The Lopons graduate after 7 years of primary classes, preliminary practices, and 9 years of monastic college.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {/* Monk 1 */}
            <div className="group">
              <div className="aspect-square overflow-hidden rounded-xl mb-4 border border-gold/10 shadow-sm">
                <img loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782627749/monastery/wad2lcf0pbkc2dncwjlc.jpg" />
              </div>
              <h3 className="font-card-title text-ink-mid text-sm mb-1">Sherap Dorjee Kunphel</h3>
              <span className="text-[10px] text-gold-dark uppercase tracking-widest font-semibold block leading-tight">Acharya Graduate: <br/>Year 2024</span>
            </div>
            {/* Monk 2 */}
            <div className="group">
              <div className="aspect-square overflow-hidden rounded-xl mb-4 border border-gold/10 shadow-sm">
                <img loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782627750/monastery/kauvnlif1xykwm7kkmsj.jpg" />
              </div>
              <h3 className="font-card-title text-ink-mid text-sm mb-1">Sherap Tenpe Dakpo</h3>
              <span className="text-[10px] text-gold-dark uppercase tracking-widest font-semibold block leading-tight">Acharya Graduate: <br/>Year 2024</span>
            </div>
            {/* Monk 3 */}
            <div className="group">
              <div className="aspect-square overflow-hidden rounded-xl mb-4 border border-gold/10 shadow-sm">
                <img loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782627751/monastery/cvn95yjzqb9haql8sdwl.jpg" />
              </div>
              <h3 className="font-card-title text-ink-mid text-sm mb-1">Younten Dorjee</h3>
              <span className="text-[10px] text-gold-dark uppercase tracking-widest font-semibold block leading-tight">Acharya Graduate: <br/>Year 2024</span>
            </div>
            {/* Monk 4 */}
            <div className="group">
              <div className="aspect-square overflow-hidden rounded-xl mb-4 border border-gold/10 shadow-sm">
                <img loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782627752/monastery/hm21qhdc8xtouzp5oonh.jpg" />
              </div>
              <h3 className="font-card-title text-ink-mid text-sm mb-1">Jampal Tashi</h3>
              <span className="text-[10px] text-gold-dark uppercase tracking-widest font-semibold block leading-tight">Acharya Graduate: <br/>Year 2024</span>
            </div>
            {/* View More */}
            <Link to="/graduate-monks" className="group flex flex-col items-center justify-center p-6 border border-gold/10 rounded-xl bg-white/40 hover:bg-white/80 transition-colors">
              <span className="material-symbols-outlined text-maroon text-4xl opacity-30 mb-3">group</span>
              <h3 className="font-card-title text-ink-mid text-sm mb-1">View More</h3>
              <span className="text-[10px] text-gold-dark uppercase tracking-widest font-semibold">Graduates</span>
            </Link>
          </div>
          <Link to="/graduate-monks" className="bg-maroon text-gold-light px-10 py-3 rounded-lg font-button-text uppercase tracking-wider hover:bg-maroon-mid transition-all shadow-md inline-block">View All Graduates</Link>
        </div>
      </section>
      {/* Rhythm 3: Dark Maroon Section - Lingdro */}
      <section className="py-3xl bg-maroon-dark text-gold-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><pattern height="80" id="motif" patternUnits="userSpaceOnUse" width="80" x="0" y="0"><circle cx="40" cy="40" fill="#C49A2A" r="1"></circle></pattern><rect fill="url(#motif)" height="100%" width="100%"></rect></svg>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-eyebrow text-gold">Sacred Tradition</span>
              <h2 className="font-section-heading text-gold-light leading-tight">Lingdro: The Sacred Dance of King Gesar</h2>
              <p className="font-body-lg text-gold-light/80">Lingdro (Lingdro Dechen Rolmo) is a sacred Vajrayana dance tradition rooted in the epic of King Gesar of Ling. More than a cultural performance, Lingdro is a profound spiritual practice—a skillful means to embody the Dharma, purify obscurations, and move toward awakening through movement, rhythm, and devotion.</p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-gold mt-0.5">verified</span>
                  <p className="font-body-md text-gold-light/70 italic">Lingdro expresses the epic of King Gesar as a sacred dance, serving as a path of Dharma practice.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-gold mt-0.5">verified</span>
                  <p className="font-body-md text-gold-light/70 italic">Initiated in Odisha with Pha Norsang’s offering before Dudjom Rinpoche.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-6">
                <a href="https://youtube.com/playlist?list=PL8D99Njg-U17JhM5WQeiEGiRUGK7KPZMd" target="_blank" rel="noreferrer" className="bg-gold text-white px-8 py-3 rounded-lg font-button-text uppercase tracking-wider hover:bg-gold-dark transition-all shadow-lg">
                  Lingdro Album by Lama Sonam Tashi Rinpoche
                </a>
                <Link to="/gallery" className="border border-gold-light/30 text-gold-light px-8 py-3 rounded-lg font-button-text uppercase tracking-wider hover:bg-white/10 transition-all">
                  View Gallery
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-4xl border border-gold/20 rotate-1">
                <img loading="lazy" decoding="async" className="w-full aspect-[4/5] object-cover" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782642392/monastery/v9jb9lzsnkshygecmtxt.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Rhythm 4: White Section - The Dundul Chorten */}
      <section className="py-3xl bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 text-center">
          <span className="text-eyebrow mb-3 block">Sacred Architecture</span>
          <h2 className="font-section-heading text-ink-mid mb-12">The Dundul Chorten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="flex flex-col text-left group">
              <div className="h-56 overflow-hidden rounded-xl mb-6 shadow-md">
                <img loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520043/monastery/osdwgwygykrbdn8mwti2.jpg" />
              </div>
              <span className="text-eyebrow text-[10px] mb-2">Sacred Origin</span>
              <h4 className="font-subheading text-ink-mid mb-3">Construction &amp; Blessings</h4>
              <p className="font-caption text-ink-light leading-relaxed">In 1970, established by Dudjom Rinpoche to protect and benefit all beings, overseeing its sacred location and ritual construction.</p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col text-left group">
              <div className="h-56 overflow-hidden rounded-xl mb-6 shadow-md">
                <img loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520044/monastery/ofdww8j3rt0ahjz8uidk.jpg" />
              </div>
              <span className="text-eyebrow text-[10px] mb-2">Miraculous Signs</span>
              <h4 className="font-subheading text-ink-mid mb-3">Living Faith</h4>
              <p className="font-caption text-ink-light leading-relaxed">Auspicious signs during consecration, where devotees have witnessed sacred rice and experienced profound healing.</p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col text-left group">
              <div className="h-56 overflow-hidden rounded-xl mb-6 shadow-md">
                <img loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520045/monastery/tafobqeowzzsjqpshvgd.jpg" />
              </div>
              <span className="text-eyebrow text-[10px] mb-2">Daily Practice</span>
              <h4 className="font-subheading text-ink-mid mb-3">Ritual &amp; Kora</h4>
              <p className="font-caption text-ink-light leading-relaxed">The stupa remains a living center of annual ceremonies, daily circumambulation, and merit-making for the local community.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
