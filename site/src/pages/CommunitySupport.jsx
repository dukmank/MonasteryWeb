import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner.jsx";

// Real monastery outreach photos (folder "4- community support").
const IMG_BANNER = "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782884827/monastery/flsilmnvctcmitgnrvch.jpg";
const IMG_FOOD = "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782884828/monastery/oq8vyi8ov3gon03d5wm7.jpg";
const IMG_COVID = "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782884830/monastery/lbit4og4l1bwk5muvf8u.jpg";

export default function CommunitySupport() {
  return (
    <div className="page-community">
      <style>{`
        .page-community .bg-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(180, 130, 50, 0.05) 1px, transparent 0);
          background-size: 40px 40px;
        }
      `}</style>

      <PageBanner
        image={IMG_BANNER}
        eyebrow="Compassion in Action"
        title="Community Support"
        trail={[{ label: "Home", to: "/" }, { label: "Projects" }, { label: "Community Support" }]}
      />

      {/* Emergency Food Relief (Block B) */}
      <section className="py-2xl md:py-4xl bg-surface bg-pattern">
        <div className="max-w-max-width mx-auto px-lg md:px-3xl grid md:grid-cols-2 gap-xl items-center">
          <div className="order-2 md:order-1">
            <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase tracking-widest mb-2 block">Nurturing Our Neighbors</span>
            <h2 className="font-section-heading text-section-heading text-primary mb-6">Emergency Food Relief</h2>
            <p className="font-body-md text-body-md text-ink-mid mb-6 leading-relaxed">
              Our monastery's monks distributed 250 dry ration packages containing rice, dal, oil, and spices to households in needy and backward areas. Funded by Lama Sonam Tashi's students from Singapore, this initiative reached brothers and sisters struggling during the lockdown.
            </p>
            <p className="font-body-md text-body-md text-ink-mid italic border-l-2 border-gold pl-4 mb-6">
              "May not one being remain hungry."
            </p>
            <p className="font-body-md text-body-md text-ink-mid">
              We extend our gratitude to the local police outpost in Chandragiri for their guidance and coordination throughout this distribution effort.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-2 border-[0.5px] border-gold/20 rounded-xl transition-all group-hover:-inset-3"></div>
              <img
                alt="Food distribution initiative"
                className="rounded-xl shadow-lg w-full aspect-video md:aspect-square object-cover relative z-10"
                src={IMG_FOOD}
              />
            </div>
          </div>
        </div>
      </section>

      {/* COVID-19 Health Initiatives (Block B reversed) */}
      <section className="py-2xl md:py-4xl bg-cream">
        <div className="max-w-max-width mx-auto px-lg md:px-3xl grid md:grid-cols-2 gap-xl items-center">
          <div>
            <div className="relative group">
              <div className="absolute -inset-2 border-[0.5px] border-gold/20 rounded-xl transition-all group-hover:-inset-3"></div>
              <img
                alt="Medical relief for health workers"
                className="rounded-xl shadow-lg w-full aspect-video md:aspect-square object-cover relative z-10"
                src={IMG_COVID}
              />
            </div>
          </div>
          <div className="pl-0 md:pl-8">
            <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase tracking-widest mb-2 block">Protecting the Sangha</span>
            <h2 className="font-section-heading text-section-heading text-primary mb-6">COVID-19 Health Initiatives</h2>
            <p className="font-body-md text-body-md text-ink-mid mb-6 leading-relaxed">
              To counter the spread of COVID-19, Lama Sonam Tashi and his students sponsored masks for all Tibetan community members and monasteries in the Phuntsokling, Odisha settlement.
            </p>
            <p className="font-body-md text-body-md text-ink-mid mb-6 leading-relaxed">
              They also distributed PPE sets to health workers, doctors, and staff at Menlha Hospital. We extend our deepest gratitude to the Menlha staff for their selfless and hard work during these challenging times.
            </p>
            <div className="flex items-center gap-4 text-gold">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
              <span className="font-button-text uppercase tracking-widest text-caption">Serving Frontline Heroes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Centered CTA Band (Block E) */}
      <section className="py-2xl md:py-4xl bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <span className="material-symbols-outlined text-[300px]">diversity_3</span>
        </div>
        <div className="max-w-3xl mx-auto px-lg text-center relative z-10">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-gold/30"></div>
            <span className="material-symbols-outlined text-gold">star_rate</span>
            <div className="h-[1px] w-12 bg-gold/30"></div>
          </div>
          <h2 className="font-section-heading text-section-heading text-primary mb-4">Support Our Outreach</h2>
          <p className="font-subheading text-subheading text-ink-mid mb-10 max-w-xl mx-auto">
            Your generosity allows us to continue these vital services for those in need and uphold the pillars of universal compassion.
          </p>
          <Link
            to="/support"
            className="inline-block bg-gold hover:bg-gold-dark text-maroon-dark font-button-text px-10 py-4 rounded-lg transition-all duration-300 shadow-sm transform hover:-translate-y-1"
          >
            Make an Offering
          </Link>
        </div>
      </section>
    </div>
  );
}
