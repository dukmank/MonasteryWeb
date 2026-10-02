import { Link, useParams, useLocation } from "react-router-dom";
import { getMaster } from "../data/masters.js";

export default function MasterDetail() {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const master = getMaster(slug);

  if (!master) {
    return (
      <div className="py-4xl px-base text-center max-w-max-width mx-auto">
        <h1 className="font-section-heading text-section-heading text-maroon mb-lg">
          Not Found
        </h1>
        <p className="font-body-md text-ink-mid mb-xl">
          We could not find the biography you were looking for.
        </p>
        <Link
          className="inline-block bg-maroon text-gold-light px-xl py-md rounded-DEFAULT font-button-text hover:bg-maroon-dark transition-all duration-300 uppercase"
          to="/"
        >
          Return Home
        </Link>
      </div>
    );
  }

  const isPresident = pathname.startsWith("/presidents");
  const listPath = isPresident ? "/presidents" : "/vajra-masters";
  const listLabel = isPresident ? "Presidents" : "Vajra Masters";

  return (
    <div className="page-master-detail">
      <style>{`
        .page-master-detail .thangka-border {
            border: 0.5px solid rgba(180, 130, 50, 0.2);
        }
        .page-master-detail .hero-overlay {
            background: linear-gradient(to bottom, rgba(92, 21, 32, 0.9), rgba(92, 21, 32, 0.7));
        }
      `}</style>

      {/* Maroon Banner */}
      <section className="relative h-[360px] flex items-center justify-center overflow-hidden bg-maroon-dark">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 text-center px-base">
          <span className="font-label-eyebrow text-label-eyebrow text-gold tracking-widest block uppercase mb-md">
            {master.role}
          </span>
          <h1 className="font-page-banner text-page-banner text-white md:text-hero-title">
            {master.name}
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-max-width mx-auto px-base md:px-3xl pt-xl">
        <nav className="flex items-center space-x-2 text-ink-light font-caption uppercase tracking-widest">
          <Link className="hover:text-gold transition-colors" to="/">
            Home
          </Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <Link className="hover:text-gold transition-colors" to={listPath}>
            {listLabel}
          </Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span className="text-maroon">{master.name}</span>
        </nav>
      </div>

      {/* Two-column content */}
      <section className="py-3xl px-base md:px-3xl max-w-max-width mx-auto">
        <div className="grid md:grid-cols-[2fr_3fr] gap-3xl items-start">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/40"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/40"></div>
            <div className="overflow-hidden thangka-border rounded-lg shadow-lg">
              <img loading="lazy" decoding="async"
                alt={`Portrait of ${master.name}`}
                className="w-full aspect-[3/4] object-cover"
                src={master.portrait}
              />
            </div>
          </div>

          <div className="space-y-lg">
            <div className="space-y-md">
              {master.bio.map((para, i) =>
                typeof para === "string" ? (
                  <p key={i} className="font-body-lg text-body-lg text-ink-mid leading-relaxed">
                    {para}
                  </p>
                ) : (
                  <h2 key={i} className="font-section-heading text-subheading text-maroon pt-lg">
                    {para.h}
                  </h2>
                )
              )}
            </div>
            <Link
              className="inline-flex items-center gap-sm text-maroon font-button-text hover:text-gold transition-colors uppercase"
              to={listPath}
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back to {listLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
