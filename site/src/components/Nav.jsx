import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV } from "../site.js";
import { useLang, LANGUAGES } from "../lib/i18n.jsx";

const LOGO =
  "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto,w_160/v1782276752/monastery/jcdpra8qbr4a3loloekk.png";

function DropdownItem({ item }) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className="block px-5 py-2.5 text-[13px] transition-colors text-ink-mid hover:text-maroon hover:bg-cream/60"
      >
        {item.label}
      </a>
    );
  }
  return (
    <NavLink
      to={item.to}
      className={({ isActive }) =>
        "block px-5 py-2.5 text-[13px] transition-colors " +
        (isActive ? "text-maroon bg-cream font-medium" : "text-ink-mid hover:text-maroon hover:bg-cream/60")
      }
    >
      {item.label}
    </NavLink>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const { lang, setLang } = useLang();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
    setMobileGroup(null);
  }, [pathname]);

  useEffect(() => {
    if (!langOpen) return;
    const onDown = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setLangOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-cream-dark">
        {/* Row 1: hamburger | logo+name | lang toggle */}
        <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-3 items-center">
          <div className="flex items-center">
            <button
              className="lg:hidden text-ink p-2 -ml-2"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <span className="material-symbols-outlined text-[26px]">menu</span>
            </button>
          </div>

          <Link to="/" className="flex items-center justify-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden shrink-0">
              <img loading="lazy" decoding="async" alt="Monastery Logo" className="h-10 w-10 object-contain" src={LOGO} />
            </div>
            <div className="text-center leading-none hidden sm:block">
              <span className="block font-serif text-lg leading-snug tracking-tight text-maroon group-hover:text-maroon-dark transition-colors">
                Dundul Raptenling Monastery
              </span>
              <span className="block text-[9px] font-sans font-medium uppercase tracking-[0.2em] text-ink-light mt-1">
                Nyingma Tradition · Dudjom Tersar
              </span>
            </div>
          </Link>

          <div className="flex justify-end items-center gap-4">
            {/* Support/Donate CTA — links to the donation/offering page */}
            <Link
              to="/support"
              className="hidden lg:flex items-center gap-1 bg-maroon text-white px-4 py-1.5 rounded-sm text-[10px] font-semibold tracking-widest uppercase hover:bg-maroon-mid transition-colors shadow-sm"
            >
              Support / Donate
            </Link>

            <div className="relative" data-no-translate ref={langRef}>
              <button
                type="button"
                aria-label="Language"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1 text-[11px] font-bold tracking-widest text-maroon hover:text-maroon-dark"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">language</span>
                {current.short}
              </button>
              {langOpen && (
                <ul role="listbox" aria-label="Language" className="absolute right-0 mt-2 w-40 bg-white border border-cream-dark rounded-sm shadow-lg py-1 z-50">
                  {LANGUAGES.map((l) => (
                    <li key={l.code} role="option" aria-selected={l.code === lang}>
                      <button
                        type="button"
                        lang={l.html}
                        onClick={() => {
                          setLang(l.code);
                          setLangOpen(false);
                        }}
                        className={
                          "w-full flex items-center gap-3 px-4 py-2 text-left text-[13px] hover:bg-cream " +
                          (l.code === lang ? "text-maroon font-semibold" : "text-ink")
                        }
                      >
                        <span className="w-6 text-[11px] font-bold tracking-widest">{l.short}</span>
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Row 2: main nav links — desktop only */}
        <div className="border-t border-cream-dark hidden lg:block">
          <div
            className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-center gap-7"
            onMouseLeave={() => setOpen(null)}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                "text-[13px] font-medium tracking-wide transition-colors " +
                (isActive ? "text-maroon" : "text-ink hover:text-maroon")
              }
            >
              Home
            </NavLink>

            {NAV.map((group) => {
              const active = group.items.some((i) => i.to && i.to === pathname);
              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setOpen(group.label)}
                >
                  {/* Group label — link if group has its own page, button otherwise */}
                  {group.to ? (
                    <Link
                      to={group.to}
                      className={
                        "flex items-center gap-1 text-[13px] font-medium tracking-wide transition-colors " +
                        (active || open === group.label || pathname === group.to ? "text-maroon" : "text-ink hover:text-maroon")
                      }
                    >
                      {group.label}
                      <span
                        className="material-symbols-outlined text-[16px] transition-transform duration-200"
                        style={{ transform: open === group.label ? "rotate(180deg)" : "none" }}
                      >
                        expand_more
                      </span>
                    </Link>
                  ) : (
                    <button
                      className={
                        "flex items-center gap-1 text-[13px] font-medium tracking-wide transition-colors " +
                        (active || open === group.label ? "text-maroon" : "text-ink hover:text-maroon")
                      }
                    >
                      {group.label}
                      <span
                        className="material-symbols-outlined text-[16px] transition-transform duration-200"
                        style={{ transform: open === group.label ? "rotate(180deg)" : "none" }}
                      >
                        expand_more
                      </span>
                    </button>
                  )}

                  {open === group.label && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72 z-50">
                      <div className="bg-white rounded-md shadow-[0_20px_45px_rgba(87,0,0,0.12)] border border-gold/15 overflow-hidden py-2">
                        {group.items.map((item) => (
                          <DropdownItem key={item.to || item.href} item={item} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                "text-[13px] font-medium tracking-wide transition-colors " +
                (isActive ? "text-maroon" : "text-ink hover:text-maroon")
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-[86%] max-w-sm bg-cream shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-5 h-16 border-b border-cream-dark shrink-0">
              <span className="font-serif text-maroon text-lg">Menu</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="overflow-y-auto flex-1 py-2">
              <NavLink to="/" className="block px-6 py-3 font-serif text-ink text-lg">
                Home
              </NavLink>

              {NAV.map((group) => (
                <div key={group.label} className="border-t border-cream-dark/60">
                  <button
                    className="w-full flex items-center justify-between px-6 py-3 font-serif text-ink text-lg"
                    onClick={() => setMobileGroup(mobileGroup === group.label ? null : group.label)}
                  >
                    {group.label}
                    <span
                      className="material-symbols-outlined text-xl"
                      style={{ transform: mobileGroup === group.label ? "rotate(180deg)" : "none" }}
                    >
                      expand_more
                    </span>
                  </button>
                  {mobileGroup === group.label && (
                    <div className="pb-2">
                      {group.to && (
                        <NavLink
                          to={group.to}
                          className={({ isActive }) =>
                            "block pl-9 pr-6 py-2.5 text-sm font-medium " +
                            (isActive ? "text-maroon" : "text-ink")
                          }
                        >
                          Overview
                        </NavLink>
                      )}
                      {group.items.map((item) =>
                        item.external ? (
                          <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="block pl-9 pr-6 py-2.5 text-sm text-ink-mid"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                              "block pl-9 pr-6 py-2.5 text-sm " +
                              (isActive ? "text-maroon font-medium" : "text-ink-mid")
                            }
                          >
                            {item.label}
                          </NavLink>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}

              <NavLink
                to="/contact"
                className="block px-6 py-3 font-serif text-ink text-lg border-t border-cream-dark/60"
              >
                Contact Us
              </NavLink>

              {/* Support/Donate — links to the donation/offering page */}
              <NavLink
                to="/support"
                className="block px-6 py-3 font-serif text-ink text-lg border-t border-cream-dark/60"
              >
                Support / Donate
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
