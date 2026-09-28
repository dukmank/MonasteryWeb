import { Link } from "react-router-dom";

// Standard page banner used across all interior pages.
// - Hero image with maroon overlay, centered eyebrow + title.
// - Breadcrumb ALWAYS rendered in its own bar BELOW the banner.
// `trail` is an array of { label, to? } — the last item is the current page.
export default function PageBanner({ image, eyebrow, title, subtitle, trail = [] }) {
  return (
    <>
      <header className="relative h-[300px] sm:h-[360px] md:h-[420px] flex items-center justify-center overflow-hidden bg-maroon-dark">
        {image && (
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={image}
            alt={typeof title === "string" ? title : ""}
          />
        )}
        <div className="absolute inset-0 bg-maroon-dark/70 z-10"></div>
        <div className="relative z-20 text-center px-6 max-w-3xl">
          {eyebrow && (
            <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] text-gold mb-4 block">
              {eyebrow}
            </span>
          )}
          <h1 className="font-page-banner text-[28px] sm:text-[34px] md:text-page-banner text-white">{title}</h1>
          {subtitle && (
            <p className="font-display italic text-gold text-lg sm:text-xl mt-3">{subtitle}</p>
          )}
          <div className="w-12 h-px bg-gold/50 mx-auto mt-6"></div>
        </div>
      </header>

      <nav className="bg-cream-dark/40 border-b border-gold/10">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex flex-wrap items-center gap-2 font-caption text-caption text-ink-light">
          {trail.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && (
                <span className="material-symbols-outlined text-[14px] opacity-50">chevron_right</span>
              )}
              {c.to ? (
                <Link className="hover:text-maroon transition-colors" to={c.to}>{c.label}</Link>
              ) : i === trail.length - 1 ? (
                <span className="text-maroon font-medium">{c.label}</span>
              ) : (
                <span>{c.label}</span>
              )}
            </span>
          ))}
        </div>
      </nav>
    </>
  );
}
