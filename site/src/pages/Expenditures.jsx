import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner.jsx";

export default function Expenditures() {
  return (
    <div className="page-expenditures">
      <style>{`
        .page-expenditures .sacred-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, #C49A2A, transparent);
            position: relative;
        }
        .page-expenditures .sacred-divider::after {
            content: '✦';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: #fcf9f4;
            padding: 0 10px;
            color: #C49A2A;
            font-size: 14px;
        }
        .page-expenditures .editorial-shadow {
            box-shadow: 0 4px 20px -4px rgba(92, 21, 32, 0.08);
        }
      `}</style>

      <PageBanner
        image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520050/monastery/yb1whspissnqmkp5vkeo.jpg"
        eyebrow="Financial Transparency"
        title="Monastery Expenditures"
        trail={[{ label: "Home", to: "/" }, { label: "Support" }, { label: "Monastery Expenditures" }]}
      />

      {/* Intro Section (Background: White) */}
      <section className="bg-white py-4xl px-base">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="sacred-divider mb-xl w-32 mx-auto"></div>
          <h2 className="font-section-heading text-section-heading text-maroon mb-lg">Sustaining the Holy Sangha</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl leading-relaxed">
            The Dundul Raptenling Monastery serves as a sanctuary for spiritual growth and preservation of ancient wisdom.
            Maintaining this sacred space and supporting our resident monastics requires consistent financial resources.
            We believe in complete transparency, ensuring that every contribution directly sustains the spiritual and
            physical well-being of the community that upholds the Dharma.
          </p>
          <div className="sacred-divider mt-xl w-32 mx-auto"></div>
        </div>
      </section>

      {/* Expenditures Grid (Background: Cream) */}
      <section className="bg-cream py-4xl px-base">
        <div className="max-w-max-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
            {/* Food */}
            <article className="bg-white p-xl rounded-lg border border-gold/10 editorial-shadow transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-maroon-light rounded-full flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-maroon">restaurant</span>
              </div>
              <h3 className="font-card-title text-card-title text-maroon mb-sm">Food &amp; Nutrition</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We spend about ₹200,000 each month on food for seventy monks and ten staff members. On special occasions, we host up to 100 people.
              </p>
            </article>
            {/* Electricity */}
            <article className="bg-white p-xl rounded-lg border border-gold/10 editorial-shadow transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-maroon-light rounded-full flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-maroon">bolt</span>
              </div>
              <h3 className="font-card-title text-card-title text-maroon mb-sm">Utility &amp; Power</h3>
              <div className="space-y-2 font-body-md text-on-surface-variant">
                <div className="flex justify-between border-b border-outline-variant/30 pb-1">
                  <span>Electricity</span>
                  <span className="font-medium text-maroon">₹20,000/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Water Supply</span>
                  <span className="font-medium text-maroon">₹15,000/mo</span>
                </div>
              </div>
            </article>
            {/* Medical */}
            <article className="bg-white p-xl rounded-lg border border-gold/10 editorial-shadow transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-maroon-light rounded-full flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-maroon">medical_services</span>
              </div>
              <h3 className="font-card-title text-card-title text-maroon mb-sm">Healthcare</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Odisha is malaria prone; annual expenses are approximately ₹200,000. Serious cases require travel to a city hospital 90 km away.
              </p>
            </article>
            {/* Staff & Teachers */}
            <article className="bg-white p-xl rounded-lg border border-gold/10 editorial-shadow transition-transform hover:-translate-y-1 lg:row-span-2">
              <div className="w-12 h-12 bg-maroon-light rounded-full flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-maroon">badge</span>
              </div>
              <h3 className="font-card-title text-card-title text-maroon mb-md">Staff &amp; Teachers</h3>
              <div className="space-y-4 font-body-md text-on-surface-variant">
                <div className="space-y-2">
                  <h4 className="font-label-eyebrow text-[10px] text-gold uppercase tracking-wider">Academic Salaries</h4>
                  <div className="flex justify-between border-b border-outline-variant/30 pb-1">
                    <span>Lopons</span>
                    <span className="font-medium text-maroon">₹200,000/yr</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/30 pb-1">
                    <span>Teachers</span>
                    <span className="font-medium text-maroon">₹150,000/yr</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-label-eyebrow text-[10px] text-gold uppercase tracking-wider">Operations (Monthly)</h4>
                  <div className="flex justify-between border-b border-outline-variant/30 pb-1">
                    <span>Cook</span>
                    <span className="font-medium text-maroon">₹10,000</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/30 pb-1">
                    <span>Accountant</span>
                    <span className="font-medium text-maroon">₹20,000</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/30 pb-1">
                    <span>Groundskeeper</span>
                    <span className="font-medium text-maroon">₹10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Store Keeper</span>
                    <span className="font-medium text-maroon">₹10,000</span>
                  </div>
                </div>
              </div>
            </article>
            {/* Ritual Offerings */}
            <article className="bg-white p-xl rounded-lg border border-gold/10 editorial-shadow transition-transform hover:-translate-y-1 lg:row-span-2">
              <div className="w-12 h-12 bg-maroon-light rounded-full flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-maroon">self_improvement</span>
              </div>
              <h3 className="font-card-title text-card-title text-maroon mb-md">Ritual Offerings</h3>
              <div className="space-y-4 font-body-md text-on-surface-variant text-[14px]">
                <div>
                  <p className="font-semibold text-maroon mb-2">Monthly Pujas (₹25,000 ea)</p>
                  <p className="italic text-on-surface-variant/80">Guru Rinpoche Day, Dakini Day, etc.</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-maroon border-b border-outline-variant/30 pb-1">Annual Rituals</p>
                  <ul className="space-y-1">
                    <li className="flex justify-between"><span>Gutor</span> <span className="font-medium">₹100,000</span></li>
                    <li className="flex justify-between"><span>Parinirvana Pujas</span> <span className="font-medium">₹100,000</span></li>
                    <li className="flex justify-between"><span>Hayagriva</span> <span className="font-medium">₹100,000</span></li>
                    <li className="flex justify-between"><span>Smoke Offering</span> <span className="font-medium">₹25,000</span></li>
                    <li className="flex justify-between"><span>Droe-Loe</span> <span className="font-medium">₹25,000</span></li>
                    <li className="flex justify-between"><span>16 Arhats</span> <span className="font-medium">₹25,000</span></li>
                  </ul>
                </div>
                <p className="text-[11px] leading-tight text-on-surface-variant/70 italic border-t border-outline-variant/30 pt-2">Note: Monthly pujas are often sponsored; others rely on general donations.</p>
              </div>
            </article>
            {/* Education & Robes */}
            <article className="bg-white p-xl rounded-lg border border-gold/10 editorial-shadow transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-maroon-light rounded-full flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-maroon">book</span>
              </div>
              <h3 className="font-card-title text-card-title text-maroon mb-sm">Education &amp; Robes</h3>
              <div className="space-y-2 font-body-md text-on-surface-variant">
                <div className="flex justify-between border-b border-outline-variant/30 pb-1">
                  <span>Robes (Yearly)</span>
                  <span className="font-medium text-maroon">₹2,50,000</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/30 pb-1">
                  <span>Stationery</span>
                  <span className="font-medium text-maroon">₹1,50,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Footwear</span>
                  <span className="font-medium text-maroon">₹25,000</span>
                </div>
              </div>
            </article>
            {/* Miscellaneous */}
            <article className="bg-white p-xl rounded-lg border border-gold/10 editorial-shadow transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-maroon-light rounded-full flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-maroon">category</span>
              </div>
              <h3 className="font-card-title text-card-title text-maroon mb-sm">Miscellaneous</h3>
              <div className="space-y-2 font-body-md text-on-surface-variant">
                <div className="flex justify-between border-b border-outline-variant/30 pb-1">
                  <span>Losar Pocket Money</span>
                  <span className="font-medium text-maroon">₹500/monk</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/30 pb-1">
                  <span>Personal Essentials</span>
                  <span className="font-medium text-maroon">₹30,000/yr</span>
                </div>
                <div className="flex justify-between">
                  <span>Gen. Maintenance</span>
                  <span className="font-medium text-maroon">₹4,500/mo</span>
                </div>
              </div>
            </article>
            {/* Major Maintenance */}
            <article className="bg-white p-xl rounded-lg border border-gold/10 editorial-shadow transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-maroon-light rounded-full flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-maroon">format_paint</span>
              </div>
              <h3 className="font-card-title text-card-title text-maroon mb-sm">Major Maintenance</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Preserving our heritage requires cyclical maintenance. We budget approximately ₹6,00,000 every 3 years for complete painting and whitewashing of the complex.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action Band (Background: Maroon) */}
      <section className="relative bg-maroon py-4xl px-base overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <pattern height="20" id="sacred-pattern" patternUnits="userSpaceOnUse" width="20">
                <path className="text-white" d="M10 0 L20 10 L10 20 L0 10 Z" fill="currentColor"></path>
              </pattern>
            </defs>
            <rect fill="url(#sacred-pattern)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <h2 className="font-section-heading text-section-heading text-gold-light mb-lg">Contribute to our Daily Mandala</h2>
          <p className="font-body-lg text-white/80 mb-2xl">
            Your kindness sustains the lifeblood of our spiritual community. Every drop of generosity creates ripples of merit across the Dharma field.
          </p>
          <Link to="/support" className="inline-block px-4xl py-lg bg-gold text-maroon-dark font-button-text rounded-lg hover:bg-gold-light transition-all uppercase tracking-[0.15em] text-[16px] font-semibold shadow-lg">Support Our Monastery</Link>
        </div>
      </section>
    </div>
  );
}
