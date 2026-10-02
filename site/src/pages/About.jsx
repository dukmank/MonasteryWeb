
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner.jsx";

export default function About() {
  return (
    <div className="page-about">
      <style>{`
        .page-about .silk-texture {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 30-15 30L15 30z' fill='%237B1E2A' fill-opacity='0.015' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
      `}</style>
      <PageBanner
        image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782519998/monastery/qqkjghywcwrnxs9ryigd.jpg"
        eyebrow="ABOUT US"
        title="Dundul Raptenling Monastery"
        trail={[{ label: "Home", to: "/" }, { label: "About" }]}
      />
      {/* History (Block B) */}
      <section className="bg-white py-4xl px-lg">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2xl items-center">
          <div>
            <span className="text-[11px] font-medium tracking-[0.2em] text-gold-dark uppercase mb-4 block font-label">OUR ORIGINS</span>
            <h2 className="font-headline text-section-heading text-on-surface mb-xl leading-tight">The History of Dundul Raptenling Monastery</h2>
            <div className="space-y-base text-on-surface-variant leading-relaxed text-body-lg font-body">
              <p>
                Our mission is to preserve and uphold the authentic teachings of the Dudjom Tersar lineage, as established by Dudjom Jigdral Yeshe Dorje, and to ensure their continuity for future generations. Rooted in the legacy of Dundul Raptenling Monastery, we are dedicated to supporting the education and well-being of monks, maintaining traditional practices, and protecting the sacred Dharma from decline.
              </p>
              <p>Through study, practice, and community, we strive to keep this living lineage vibrant—benefiting all beings and sustaining the wisdom of the Buddha in the modern world.</p>
              <Link to="/history" className="mt-lg border border-gold/40 text-on-surface px-lg py-sm rounded-lg text-[13px] font-medium hover:border-gold hover:bg-gold-light transition-all font-label uppercase tracking-wider inline-block">
                Read full history
              </Link>
            </div>
          </div>
          <div className="relative">
            <img loading="lazy" decoding="async" alt="Monastic Heritage" className="rounded-xl w-full h-[450px] object-cover shadow-xl border border-outline-variant/30" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782519999/monastery/zwxarrtf98c4disfdpib.jpg" />
          </div>
        </div>
      </section>
      {/* Dudjom Rinpoche Section (Cream Background) */}
      <section className="bg-cream-dark py-4xl px-lg">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-2xl items-center">
          <div className="md:col-span-6 lg:col-span-7">
            <div className="relative group">
              <img loading="lazy" decoding="async" alt="H.H. Dudjom Rinpoche" className="rounded-xl shadow-2xl border-4 border-white w-full aspect-square object-cover" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782519999/monastery/dxu5yggbeknsxsh9w95q.jpg" />
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-5">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gold-dark uppercase mb-4 block font-label">SPIRITUAL LINEAGE</span>
            <h2 className="font-headline text-section-heading text-maroon mb-1">H.H. Dudjom Rinpoche</h2>
            <p className="text-gold-dark font-medium italic text-sm mb-lg font-label">(1904 - 1987)</p>
            <div className="text-on-surface text-body-lg leading-relaxed space-y-base font-body">
              <p>His Holiness Dudjom Rinpoche was one of the greatest masters of Tibetan Buddhism and the supreme head of the Nyingma school in modern times. Recognized as the incarnation of the great tertön Dudjom Lingpa, he was renowned as a realized master, prolific scholar, and revealer of profound teachings known as the Dudjom Tersar.</p>
              <p>Widely regarded as a living embodiment of Guru Rinpoche, his life was dedicated to teaching, writing, and guiding countless practitioners on the path to realization.</p>
              <Link className="inline-flex items-center gap-2 text-maroon font-semibold border-b border-gold/40 pb-1 text-sm mt-lg hover:border-maroon transition-all group font-label" to="/dudjom-rinpoche">
                Full Biography <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Spirituality & Leadership (White Silk Texture Background) */}
      <section className="py-4xl px-lg bg-white silk-texture">
        <div className="max-w-[1200px] mx-auto text-center mb-2xl">
          <span className="text-[11px] font-medium tracking-[0.2em] text-gold-dark uppercase mb-4 block font-label">SPIRITUALITY &amp; LEADERSHIP</span>
          <div className="flex items-center justify-center gap-base mb-xl">
            <div className="h-px bg-gold/30 flex-grow max-w-[120px]"></div>
            <h3 className="font-headline text-subheading text-on-surface">Presidents</h3>
            <div className="h-px bg-gold/30 flex-grow max-w-[120px]"></div>
          </div>
          {/* Presidents Portrait Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-xl mb-3xl max-w-[1000px] mx-auto">
            {/* President 1 */}
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-base shadow-lg border border-surface-container-highest">
                <img loading="lazy" decoding="async" alt="Chagdud Tulku Rinpoche" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782519984/monastery/kuprw5quwkr3f1b5pv7i.png" />
              </div>
              <h4 className="font-headline text-card-title text-on-surface mb-1">Chagdud Tulku Rinpoche</h4>
              <p className="text-gold-dark text-[10px] uppercase tracking-widest font-medium font-label">1st President</p>
            </div>
            {/* President 2 */}
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-base shadow-lg border border-surface-container-highest">
                <img loading="lazy" decoding="async" alt="Kongtul Tsephei Rinpoche" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520000/monastery/ruhtszy7jgc3mklqokwa.jpg" />
              </div>
              <h4 className="font-headline text-card-title text-on-surface mb-1">Kongtul Tsephei Rinpoche</h4>
              <p className="text-gold-dark text-[10px] uppercase tracking-widest font-medium font-label">2nd President</p>
            </div>
            {/* President 3 */}
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-base shadow-lg border border-surface-container-highest">
                <img loading="lazy" decoding="async" alt="Lama Sonam Tashi Rinpoche" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520001/monastery/roih0mmcyruepfw2gie9.jpg" />
              </div>
              <h4 className="font-headline text-card-title text-on-surface mb-1">Lama Sonam Tashi Rinpoche</h4>
              <p className="text-gold-dark text-[10px] uppercase tracking-widest font-medium font-label">3rd President - Current</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-base mb-xl">
            <div className="h-px bg-gold/30 flex-grow max-w-[120px]"></div>
            <h3 className="font-headline text-subheading text-on-surface">Vajra Masters</h3>
            <div className="h-px bg-gold/30 flex-grow max-w-[120px]"></div>
          </div>
          {/* Vajra Masters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-xl max-w-[1000px] mx-auto">
            {/* Master 1 */}
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-base shadow-lg border border-surface-container-highest">
                <img loading="lazy" decoding="async" alt="Chagdud Tulku Rinpoche" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782519984/monastery/kuprw5quwkr3f1b5pv7i.png" />
              </div>
              <h4 className="font-headline text-[16px] text-on-surface mb-1">Chagdud Tulku Rinpoche</h4>
              <p className="text-gold-dark text-[10px] uppercase tracking-widest font-medium font-label">1st Vajra Master</p>
            </div>
            {/* Master 2 */}
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-base shadow-lg border border-surface-container-highest">
                <img loading="lazy" decoding="async" alt="Lama Sherab Dorje Rinpoche" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520002/monastery/o8arcw7oo9rtmlgvgrfm.jpg" />
              </div>
              <h4 className="font-headline text-[16px] text-on-surface mb-1">Lama Sherab Dorje Rinpoche</h4>
              <p className="text-gold-dark text-[10px] uppercase tracking-widest font-medium font-label">2nd Vajra Master</p>
            </div>
            {/* Master 3 */}
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-base shadow-lg border border-surface-container-highest">
                <img loading="lazy" decoding="async" alt="Khenchen Tulku Shekar Rinpoche" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520003/monastery/jjpq8bb1hyn7f65og4zt.jpg" />
              </div>
              <h4 className="font-headline text-[16px] text-on-surface mb-1">Khenchen Tulku Shekar Rinpoche</h4>
              <p className="text-gold-dark text-[10px] uppercase tracking-widest font-medium font-label">Temporary Vajra Master</p>
            </div>
            {/* Master 4 */}
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-base shadow-lg border border-surface-container-highest">
                <img loading="lazy" decoding="async" alt="Lama Dorje Nagyal Rinpoche" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520003/monastery/xrgxroky1daqxtx5rj1t.jpg" />
              </div>
              <h4 className="font-headline text-[16px] text-on-surface mb-1">Lama Dorje Nagyal Rinpoche</h4>
              <p className="text-gold-dark text-[10px] uppercase tracking-widest font-medium font-label">3rd Vajra Master</p>
            </div>
            {/* Master 5 */}
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-base shadow-lg border border-surface-container-highest">
                <img loading="lazy" decoding="async" alt="Kongtul Tsephei Rinpoche" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520004/monastery/iiwi34bdb5eh2noycnks.jpg" />
              </div>
              <h4 className="font-headline text-[16px] text-on-surface mb-1">Kongtul Tsephei Rinpoche</h4>
              <p className="text-gold-dark text-[10px] uppercase tracking-widest font-medium font-label">4th Vajra Master</p>
            </div>
            {/* Master 6 */}
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-base shadow-lg border border-surface-container-highest">
                <img loading="lazy" decoding="async" alt="Lama Jamphel Sherap Rinpoche" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520005/monastery/zcsh2jezbriribkyxbpp.jpg" />
              </div>
              <h4 className="font-headline text-[16px] text-on-surface mb-1">Lama Jamphel Sherap Rinpoche</h4>
              <p className="text-gold-dark text-[10px] uppercase tracking-widest font-medium font-label">5th Vajra Master</p>
            </div>
            {/* Master 7 */}
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-base shadow-lg border border-surface-container-highest">
                <img loading="lazy" decoding="async" alt="Lama Kelsang Nyima Rinpoche" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520006/monastery/oq8jq80w70tnmxtf6yuq.jpg" />
              </div>
              <h4 className="font-headline text-[16px] text-on-surface mb-1">Lama Kelsang Nyima Rinpoche</h4>
              <p className="text-gold-dark text-[10px] uppercase tracking-widest font-medium font-label">6th Vajra Master</p>
            </div>
          </div>
        </div>
      </section>
      {/* Administrative Council (Cream Background) */}
      <section className="bg-surface-container py-4xl px-lg">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-2xl">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gold-dark uppercase mb-4 block font-label">GOVERNANCE</span>
            <h2 className="font-headline text-section-heading text-on-surface mb-base">Administrative Council</h2>
            <p className="text-on-surface-variant max-w-2xl text-body-md">The dedicated individuals ensuring the ethical and structural integrity of our sacred institution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-base">
            {/* Executive Leadership List */}
            <div className="md:col-span-6 bg-white p-2xl rounded-xl border border-outline-variant/30 shadow-sm">
              <h4 className="font-headline text-subheading text-maroon mb-xl">Executive Leadership</h4>
              <ul className="space-y-0 text-on-surface font-body">
                <li className="flex justify-between items-center py-base border-b border-surface-container">
                  <span className="font-medium text-body-lg">Lopon Nyima Gyaltsen</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label">Chairman</span>
                </li>
                <li className="flex justify-between items-center py-base border-b border-surface-container">
                  <span className="font-medium text-body-lg">Lopon Yonten Dorje</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label">Vice Chairman</span>
                </li>
                <li className="flex justify-between items-center py-base">
                  <span className="font-medium text-body-lg">Tashi Tsering</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label">Accountant</span>
                </li>
              </ul>
            </div>
            {/* Stewardship Cards */}
            <div className="md:col-span-3 bg-maroon text-gold-light p-2xl rounded-xl flex flex-col justify-between shadow-lg group hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-4xl mb-xl">account_balance</span>
              <div>
                <h4 className="font-headline text-lg mb-base">Financial Stewardship</h4>
                <p className="text-gold-light/80 text-xs leading-relaxed font-body">Ensuring 100% transparency in all donation handling and project funding.</p>
              </div>
            </div>
            <div className="md:col-span-3 bg-gold-light text-gold-dark p-2xl rounded-xl flex flex-col justify-between border border-gold/30 shadow-md group hover:bg-white transition-colors">
              <span className="material-symbols-outlined text-4xl mb-xl text-gold-dark">handshake</span>
              <div>
                <h4 className="font-headline text-lg mb-base">Community Liaison</h4>
                <p className="text-gold-dark/80 text-xs leading-relaxed font-body">Direct contact for global chapters and affiliate dharma centers.</p>
              </div>
            </div>
            {/* Member Cards Row */}
            <div className="md:col-span-4 bg-white/50 p-base rounded-xl text-center border border-outline-variant/30 mt-sm">
              <div className="text-on-surface font-medium text-body-lg font-body">Pema Namgyal</div>
              <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1 font-label">Member</div>
            </div>
            <div className="md:col-span-4 bg-white/50 p-base rounded-xl text-center border border-outline-variant/30 mt-sm">
              <div className="text-on-surface font-medium text-body-lg font-body">Tsewang Namgyal</div>
              <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1 font-label">Member</div>
            </div>
            <div className="md:col-span-4 bg-white/50 p-base rounded-xl text-center border border-outline-variant/30 mt-sm">
              <div className="text-on-surface font-medium text-body-lg font-body">Karma</div>
              <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1 font-label">Member</div>
            </div>
          </div>
          <div className="mt-2xl text-center">
            <Link to="/board-members" className="bg-maroon text-gold-light px-2xl py-base rounded-lg text-[13px] font-medium tracking-[0.04em] uppercase transition-all hover:bg-maroon-mid shadow-md font-label inline-block">
              View Board of Committee Members
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
