import { Link } from "react-router-dom";
import { useNewsletter } from "../lib/useNewsletter.js";

const SOCIAL = [
  { label: "Facebook", icon: "ti-brand-facebook", href: "https://facebook.com/odishadudjom.vihara" },
  { label: "Instagram", icon: "ti-brand-instagram", href: "https://instagram.com/odishadudjom" },
  { label: "YouTube", icon: "ti-brand-youtube", href: "https://youtube.com/@dundulraptenlingmonastery1826" },
];

export default function Footer() {
  const { email, setEmail, status, subscribe } = useNewsletter();

  return (
    <footer className="bg-maroon-dark text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        {/* Column 1: Monastery name + address + email + phone */}
        <div>
          <span className="font-serif text-lg text-gold block mb-6">Dundul Raptenling Monastery</span>
          <address className="not-italic text-white/60 text-xs leading-relaxed tracking-wider space-y-4">
            <p>
              T.R.S, Camp no. 3,<br />
              P.O. Mahendragada, District Gajapati,<br />
              Pin 761017, Odisha, India
            </p>
            <p className="flex items-center gap-2">
              <i className="ti ti-mail text-gold text-[15px] shrink-0"></i>
              <a className="hover:text-gold transition-colors" href="mailto:dundul.rapten@gmail.com">
                dundul.rapten@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <i className="ti ti-phone text-gold text-[15px] shrink-0"></i>
              <a className="hover:text-gold transition-colors" href="tel:06817291693">06817 291693</a>
            </p>
          </address>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <span className="eyebrow text-gold mb-8 block">Navigation</span>
          <ul className="space-y-4 text-white/60 text-xs tracking-wider">
            <li><Link className="hover:text-gold transition-colors" to="/about">About</Link></li>
            <li><Link className="hover:text-gold transition-colors" to="/odisha-vihara">Monastic Life</Link></li>
            <li>
              <a className="hover:text-gold transition-colors" href="https://vajralotusfoundation.org" target="_blank" rel="noreferrer">
                Nonprofit
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <span className="eyebrow text-gold mb-8 block">Support</span>
          <ul className="space-y-4 text-white/60 text-xs tracking-wider">
            <li><Link className="hover:text-gold transition-colors" to="/support">Donation</Link></li>
            <li><Link className="hover:text-gold transition-colors" to="/puja">Puja Request</Link></li>
            <li><Link className="hover:text-gold transition-colors" to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter + Social Media */}
        <div>
          <span className="eyebrow text-gold mb-8 block">Newsletter</span>
          <form onSubmit={subscribe} className="mb-8">
            <p className="text-white/60 text-xs leading-relaxed tracking-wider mb-4">
              Receive teachings, news, and event updates from the monastery.
            </p>
            <div className="flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                disabled={status === "sending"}
                className="flex-1 min-w-0 bg-white/10 border border-white/20 text-white text-xs px-3 py-2.5 rounded-l-sm placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status !== "idle"}
                className="bg-gold text-maroon-dark px-4 py-2.5 rounded-r-sm text-[10px] font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors shrink-0 disabled:opacity-60"
              >
                {status === "sent" ? "✓" : status === "sending" ? "..." : "Join"}
              </button>
            </div>
          </form>

          <span className="eyebrow text-gold mb-4 block">Social Media</span>
          <div className="flex items-center gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-colors"
              >
                <i className={`ti ${s.icon} text-[18px]`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar: Copyright | Terms of Use | Privacy Policy */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-white/40 tracking-[0.2em] uppercase">
          © 2025 Dundul Raptenling Monastery · All Rights Reserved
        </div>
        <div className="flex items-center gap-6 text-[10px] text-white/40 tracking-[0.2em] uppercase">
          <Link className="hover:text-gold transition-colors" to="/terms">Terms of Use</Link>
          <span className="opacity-30">·</span>
          <Link className="hover:text-gold transition-colors" to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
