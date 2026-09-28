import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner.jsx";
import { mastersByGroup } from "../data/masters.js";

export default function VajraMasters() {
  const vajraMasters = mastersByGroup("vajra");
  return (
    <div className="page-vajra">
      <style>{`
        .page-vajra .thangka-border {
            border: 0.5px solid rgba(180, 130, 50, 0.2);
        }
        .page-vajra .hero-overlay {
            background: linear-gradient(to bottom, rgba(92, 21, 32, 0.85), rgba(92, 21, 32, 0.65));
        }
        .page-vajra .dharma-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .page-vajra .dharma-divider::before, .page-vajra .dharma-divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: rgba(196, 154, 42, 0.3);
        }
        .page-vajra .dharma-divider span {
            padding: 0 16px;
            color: #C49A2A;
        }
      `}</style>
      <PageBanner
        image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520015/monastery/x1b29cd4sclzjt8o6it6.jpg"
        eyebrow="Spiritual Leadership"
        title="Our Vajra Masters"
        trail={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Our Vajra Masters" }]}
      />
      {/* Introduction Section */}
      <section className="py-4xl px-base md:px-3xl max-w-max-width mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-section-heading text-section-heading text-maroon mb-xl">Guardians of the Vajrayana Lineage</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-xl"></div>
          <p className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
            The Vajra Masters of Dundul Raptenling Monastery embody the living transmission of the Dudjom Tersar lineage. Through their realization, devotion, and lifelong dedication to the Dharma, they have preserved the sacred teachings, rituals, empowerments, and practices passed down from Guru Padmasambhava through generations of enlightened masters. As spiritual guides, they serve not only as teachers and lineage holders, but also as guardians of the monastery’s sacred vision—ensuring that the wisdom and blessings of the Vajrayana continue to flourish for future generations.
          </p>
        </div>
      </section>
      {/* Masters Grid */}
      <section className="bg-white py-4xl border-t border-outline-variant/30">
        <div className="max-w-max-width mx-auto px-base md:px-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3xl">
          {vajraMasters.map((m) => (
            <Link key={m.slug} to={`/vajra-masters/${m.slug}`} className="relative block group">
              <div className="overflow-hidden thangka-border shadow-sm">
                <img loading="lazy" decoding="async"
                  alt={`Portrait of ${m.name}`}
                  className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700"
                  src={m.portrait}
                />
              </div>
              <div className="mt-lg text-center">
                <span className="font-label-eyebrow text-label-eyebrow text-gold tracking-widest block uppercase">{m.role}</span>
                <h3 className="font-section-heading text-subheading text-maroon">{m.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* Ornament Divider */}
      <div className="py-2xl max-w-max-width mx-auto px-base">
        <div className="dharma-divider">
          <span className="material-symbols-outlined">settings_suggest</span>
        </div>
      </div>
    </div>
  );
}
