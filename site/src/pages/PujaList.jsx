import { useState, useEffect } from "react";
import { trackEvent } from "../lib/analytics.js";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner.jsx";
import { PUJA_LIST, PUJA_CATEGORIES, PUJA_PURPOSES, pujaCategoryId } from "../data/pujaList.js";
import { createItem } from "../lib/content.js";
import { addToMailerLite } from "../lib/mailerlite.js";
import { useLang } from "../lib/i18n.jsx";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const fmt = (n) => {
  const num = Number(n);
  return Number.isFinite(num) ? num.toLocaleString("en-IN") : n;
};

const FAQ = [
  {
    q: "How do I request a puja online?",
    a: "Choose a puja from the list below, then fill in the Puja Request Form with your name, email, the name(s) the prayers are for, and your intention. The monastery will reply by email with the next steps.",
  },
  {
    q: "Can I request a puja from outside India?",
    a: "Yes. You can request a puja from anywhere in the world. The puja is performed by the monks at Dundul Raptenling Monastery in Odisha, India, and dedicated to the names and intention you send.",
  },
  {
    q: "Who can a puja be dedicated to?",
    a: "You can dedicate a puja to yourself, family members, friends, someone who is ill, or a loved one who has passed away. Enter their name(s) in the Dedication field.",
  },
  {
    q: "What does the puja offering cover?",
    a: "The listed amounts are suggested offerings in Indian Rupees. They help cover food, ritual materials, and support for the monks who perform the puja.",
  },
  {
    q: "Which puja should I choose?",
    a: "Choose by purpose: health and healing, long life, removing obstacles, or caring for the deceased. If you are unsure, select Other in the form and describe your situation in the Intention field.",
  },
];


// showName: false in Tibetan mode, where the English name would be translated
// into the same Tibetan title already shown above it.
function PujaCard(p, showName) {
  return (
    <div key={`${p.cat}-${p.si}`} className="p-6 rounded-lg border border-outline-variant bg-white transition-all hover:shadow-md flex flex-col">
      <div className="flex justify-between items-start gap-3 mb-3">
        <span className="font-serif text-maroon/70 text-base leading-snug">{p.tib}</span>
        <span className="text-gold-dark font-semibold whitespace-nowrap">₹{fmt(p.amount)}</span>
      </div>
      {showName && p.en && <h4 className="text-[16px] text-ink leading-snug mb-3">{p.en}</h4>}
      <div className="flex items-center justify-between mt-auto pt-1">
        <span className="flex items-center gap-2 text-[11px] text-ink-light uppercase tracking-wider"><i className="ti ti-calendar text-gold"></i> {p.days}</span>
      </div>
    </div>
  );
}

export default function PujaList() {
  const { lang } = useLang();
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState({});

  const [pf, setPf] = useState({ puja: "", name: "", email: "", dedication: "", intention: "" });
  const [pStatus, setPStatus] = useState("idle");
  const setField = (k) => (e) => setPf((f) => ({ ...f, [k]: e.target.value }));
  const [newsletter, setNewsletter] = useState(false);
  const submitPuja = async (e) => {
    e.preventDefault();
    if (pStatus === "sending") return;
    setPStatus("sending");
    const payload = {
      name: pf.name,
      email: pf.email,
      subject: "Puja Request: " + (pf.puja || "—"),
      message: `Puja: ${pf.puja}\nDedication: ${pf.dedication}\nIntention: ${pf.intention}`,
    };
    try { await createItem("messages", { ...payload, type: "puja_request" }); } catch (err) { console.warn(err?.message); }
    // Add the requester to MailerLite ("Website: Puja requests", + newsletter if ticked)
    await addToMailerLite({ email: pf.email, name: pf.name, source: "puja", newsletter, puja: pf.puja });
    try {
      if (WEB3FORMS_KEY) {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ access_key: WEB3FORMS_KEY, from_name: pf.name || "Website", ...payload }),
        });
      }
    } catch (err) { console.warn(err?.message); }
    trackEvent("generate_lead", { form_name: "puja_request", puja: pf.puja, newsletter_opt_in: newsletter });
    setPStatus("sent");
    setPf({ puja: "", name: "", email: "", dedication: "", intention: "" });
    setNewsletter(false);
  };

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;
  const filtered = PUJA_LIST.filter(
    (p) => !q || p.en.toLowerCase().includes(q) || p.tib.includes(query.trim())
  );
  const grouped = PUJA_CATEGORIES
    .map((cat) => ({ cat, items: PUJA_LIST.filter((p) => p.cat === cat) }))
    .filter((g) => g.items.length > 0);
  const toggle = (cat) => setExpanded((e) => ({ ...e, [cat]: !e[cat] }));

  // FAQ structured data for Google (in the prerendered head of /puja only).
  useEffect(() => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    });
    document.head.appendChild(el);
    return () => el.remove();
  }, []);

  return (
    <div className="page-puja">
      <style>{`
        .page-puja .watermark-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l2 10 10 2-10 2-2 10-2-10-10-2 10-2z' fill='%23C49A2A' fill-opacity='0.05'/%3E%3C/svg%3E");
        }
        .page-puja h1, .page-puja h2, .page-puja h3, .page-puja h4 { font-family: 'Noto Serif', serif; }
      `}</style>
      <PageBanner
        image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520072/monastery/wocwwpny7tf75yv8zfx9.jpg"
        eyebrow="Ritual Offerings"
        title="Request a Puja Online"
        trail={[{ label: "Home", to: "/" }, { label: "Support" }, { label: "Puja Request" }]}
      />

      {/* Intro */}
      <section className="py-20 bg-white border-b border-outline-variant">
        <div className="max-w-[800px] mx-auto px-base sm:px-lg text-center">
          <p className="text-base sm:text-lg text-ink-mid mb-6 leading-relaxed">
            Request a puja online from Dundul Raptenling Monastery, a Nyingma monastery of the Dudjom Tersar lineage in Odisha, India. Our monks perform each puja at the monastery and dedicate it to the names and intention you send, wherever you live.
          </p>
          <p className="text-base sm:text-lg text-ink-mid mb-10 leading-relaxed">
            By requesting a Puja, one creates a profound karmic connection with the Sangha and invokes the blessings of the Enlightened Beings for the benefit of all sentient beings. Whether for health, prosperity, or the transition of a loved one, these ancient rituals are performed with meticulous care by our monastic community.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a href="#puja-request" className="bg-gold hover:bg-gold-dark text-white text-[14px] px-8 sm:px-12 py-4 transition-all shadow-lg rounded-[4px] uppercase tracking-[0.15em] font-medium">
              Request a Puja
            </a>
            <span className="text-[12px] text-ink-light italic">All offerings directly support the monastery and the resident monks.</span>
          </div>
        </div>
      </section>

      {/* Choose a puja by purpose */}
      <section className="py-16 sm:py-20 bg-white border-b border-outline-variant">
        <div className="max-w-max-width mx-auto px-base sm:px-lg">
          <div className="text-center mb-10">
            <span className="text-[11px] text-gold-dark tracking-widest uppercase mb-2 block">Pujas by Purpose</span>
            <h2 className="text-2xl sm:text-3xl text-ink font-normal">Choose a Puja for Your Intention</h2>
            <div className="h-[1px] w-16 bg-gold mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PUJA_PURPOSES.map((p) => {
              const items = PUJA_LIST.filter((x) => x.cat === p.cat);
              const from = Math.min(...items.map((x) => Number(x.amount)).filter(Number.isFinite));
              return (
                <div key={p.cat} className="p-6 sm:p-8 rounded-lg border border-outline-variant bg-cream flex flex-col">
                  <i className={`ti ${p.icon} text-gold text-3xl mb-3`}></i>
                  <h3 className="text-xl text-maroon mb-3">{p.title}</h3>
                  <p className="text-[14px] text-ink-mid leading-relaxed mb-5">{p.desc}</p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[12px] text-ink-light uppercase tracking-wider">{items.length} pujas · from ₹{fmt(from)}</span>
                    <a
                      href={`#${pujaCategoryId(p.cat)}`}
                      onClick={() => setExpanded((e) => ({ ...e, [p.cat]: true }))}
                      className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-maroon hover:text-gold-dark"
                    >
                      See pujas <i className="ti ti-arrow-down"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sacred Puja Prayer Books — link to dedicated page */}
      <section className="py-16 sm:py-20 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 watermark-pattern opacity-30"></div>
        <div className="max-w-max-width mx-auto px-base sm:px-lg relative z-10 text-center">
          <span className="text-[11px] text-gold-dark tracking-widest uppercase mb-2 block">Essential Resources</span>
          <h2 className="text-2xl sm:text-3xl text-ink font-normal">Sacred Puja Prayer Books</h2>
          <div className="h-[1px] w-16 bg-gold mx-auto mt-4 mb-10"></div>
          <Link to="/prayer-books" className="inline-flex items-center gap-2 bg-maroon text-gold-light text-[13px] px-10 py-4 rounded-[4px] uppercase tracking-[0.15em] font-medium hover:bg-maroon-dark transition-colors shadow-md">
            View Sacred Prayer Books <i className="ti ti-arrow-up-right"></i>
          </Link>
        </div>
      </section>

      {/* Full Puja Catalogue */}
      <section id="full-catalogue" className="py-16 sm:py-20 bg-white border-y border-outline-variant scroll-mt-28">
        <div className="max-w-max-width mx-auto px-base sm:px-lg">
          <div className="mb-10 text-center">
            <span className="text-[11px] text-gold-dark tracking-widest uppercase mb-2 block">Complete Catalogue</span>
            <h2 className="text-2xl sm:text-3xl text-ink font-normal">Full Puja List</h2>
            <div className="h-[1px] w-16 bg-gold mx-auto mt-4"></div>
            <p className="text-[13px] text-ink-light mt-4">{PUJA_LIST.length} sacred pujas &amp; prayers · offerings in Indian Rupees (₹)</p>
          </div>

          <div className="relative w-full md:w-96 mx-auto mb-12">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search puja by name…"
              className="w-full border border-outline-variant rounded-[4px] py-3 pl-10 pr-4 text-[13px] text-ink focus:outline-none focus:border-gold"
            />
            <i className="ti ti-search absolute left-3 top-1/2 -translate-y-1/2 text-gold"></i>
          </div>

          {searching ? (
            filtered.length === 0 ? (
              <div className="px-6 py-12 text-center text-ink-light text-sm">Không tìm thấy puja phù hợp với “{query}”.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p) => PujaCard(p, lang !== "TIB"))}
              </div>
            )
          ) : (
            <div className="space-y-14">
              {grouped.map(({ cat, items }) => {
                const isOpen = expanded[cat];
                const visible = isOpen ? items : items.slice(0, 3);
                return (
                  <div key={cat} id={pujaCategoryId(cat)} className="scroll-mt-28">
                    <div className="text-center mb-6">
                      <span className="text-[11px] text-gold-dark tracking-widest uppercase font-medium">{cat}</span>
                      <div className="h-[1px] w-12 bg-gold/40 mx-auto mt-2"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {visible.map((p) => PujaCard(p, lang !== "TIB"))}
                    </div>
                    {items.length > 3 && (
                      <div className="text-center mt-6">
                        <button onClick={() => toggle(cat)} className="inline-flex items-center gap-2 border border-maroon text-maroon hover:bg-maroon hover:text-gold-light transition-all px-8 py-3 rounded-[4px] text-[12px] uppercase tracking-[0.15em] font-medium">
                          {isOpen ? (
                            <>Show Less <i className="ti ti-chevron-up"></i></>
                          ) : (
                            <>Show More <span className="normal-case tracking-normal opacity-70">({items.length - 3} more)</span> <i className="ti ti-chevron-down"></i></>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          <p className="text-[12px] text-ink-light italic text-center mt-6 max-w-2xl mx-auto">
            The listed amounts are suggested offerings and help cover food, ritual materials, and support for the monks conducting the puja. Please contact us to arrange a puja or if you have any questions.
          </p>
        </div>
      </section>

      {/* Puja Request Form */}
      <section id="puja-request" className="py-16 sm:py-20 bg-cream scroll-mt-28">
        <div className="max-w-[640px] mx-auto px-base sm:px-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl text-ink font-normal">Puja Request Form</h2>
            <div className="h-[1px] w-16 bg-gold mx-auto mt-4"></div>
          </div>

          <div className="bg-white border border-outline-variant rounded-lg p-6 sm:p-10">
            {pStatus === "sent" ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full border-2 border-gold grid place-items-center mx-auto mb-6 text-gold">
                  <i className="ti ti-check text-2xl"></i>
                </div>
                <h3 className="text-xl sm:text-2xl text-maroon mb-3">Your request has been sent.</h3>
                <p className="text-[13px] text-ink-light leading-relaxed">Our monastery will contact you via your email for next steps.</p>
                <button onClick={() => setPStatus("idle")} className="mt-6 text-[12px] uppercase tracking-[0.15em] text-gold-dark hover:text-maroon transition-colors">
                  Submit another request
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={submitPuja}>
                <div>
                  <label className="block text-[13px] font-medium text-ink-mid mb-1.5">Puja Selection *</label>
                  <select required value={pf.puja} onChange={setField("puja")} className="w-full bg-white border border-outline-variant rounded-[6px] px-4 py-2.5 text-[14px] focus:ring-1 focus:ring-gold focus:border-gold outline-none">
                    <option value="">Select a Puja Ceremony</option>
                    {PUJA_LIST.map((p) => {
                      const label = p.en || p.tib;
                      return <option key={`${p.cat}-${p.si}`} value={label}>{label}</option>;
                    })}
                    <option value="Other">Other (state in intention)</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-ink-mid mb-1.5">Your Name *</label>
                    <input value={pf.name} onChange={setField("name")} className="w-full bg-white border border-outline-variant rounded-[6px] px-4 py-2.5 text-[14px] focus:ring-1 focus:ring-gold focus:border-gold outline-none" required type="text" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-ink-mid mb-1.5">Email *</label>
                    <input value={pf.email} onChange={setField("email")} className="w-full bg-white border border-outline-variant rounded-[6px] px-4 py-2.5 text-[14px] focus:ring-1 focus:ring-gold focus:border-gold outline-none" required type="email" />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-ink-mid mb-1.5">Dedication Name(s) *</label>
                  <input value={pf.dedication} onChange={setField("dedication")} className="w-full bg-white border border-outline-variant rounded-[6px] px-4 py-2.5 text-[14px] focus:ring-1 focus:ring-gold focus:border-gold outline-none" placeholder="Who are these prayers for?" required type="text" />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-ink-mid mb-1.5">Intention</label>
                  <textarea value={pf.intention} onChange={setField("intention")} className="w-full bg-white border border-outline-variant rounded-[6px] px-4 py-2.5 text-[14px] min-h-[100px] focus:ring-1 focus:ring-gold focus:border-gold outline-none" placeholder="Briefly state the purpose…"></textarea>
                </div>
                <label className="flex items-start gap-3 text-[13px] text-ink-mid cursor-pointer">
                  <input type="checkbox" checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} className="mt-0.5 accent-maroon" />
                  <span>Send me news and updates from the monastery</span>
                </label>
                <button type="submit" disabled={pStatus === "sending"} className="w-full py-4 bg-maroon text-gold-light font-medium tracking-[0.15em] uppercase text-[13px] rounded-[4px] shadow-md hover:bg-maroon-dark transition-all">
                  {pStatus === "sending" ? "Sending…" : "Submit Request"}
                </button>
              </form>
            )}

            {/* Have any questions? */}
            <div className="mt-10 pt-8 border-t border-outline-variant/40 text-center">
              <h4 className="text-lg text-ink mb-2">Have any questions?</h4>
              <p className="text-[13px] text-ink-light mb-5 leading-relaxed">Our monastic office is here to assist you with your ritual requests and offerings.</p>
              <Link to="/contact" className="inline-block border border-gold text-gold-dark px-8 py-3 rounded-[4px] text-[12px] uppercase tracking-[0.15em] hover:bg-gold hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (also published as FAQPage structured data above) */}
      <section className="py-16 sm:py-20 bg-white border-b border-outline-variant">
        <div className="max-w-[760px] mx-auto px-base sm:px-lg">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl text-ink font-normal">Puja Requests: Frequently Asked Questions</h2>
            <div className="h-[1px] w-16 bg-gold mx-auto mt-4"></div>
          </div>
          <div className="divide-y divide-outline-variant/60 border-y border-outline-variant/60">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex justify-between items-center gap-4 cursor-pointer list-none text-[16px] text-ink">
                  <h3 className="font-normal">{q}</h3>
                  <i className="ti ti-plus text-gold group-open:rotate-45 transition-transform"></i>
                </summary>
                <p className="mt-3 text-[14px] text-ink-mid leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicate Merit CTA */}
      <section className="py-16 sm:py-24 bg-gold-light border-b border-outline-variant">
        <div className="max-w-[600px] mx-auto px-base sm:px-lg text-center">
          <div className="mb-6 flex justify-center opacity-70">
            <svg aria-hidden="true" fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="23" stroke="#C49A2A" strokeWidth="1"></circle>
              <path d="M24 10V38M10 24H38M14 14L34 34M34 14L14 34" stroke="#C49A2A" strokeWidth="0.5"></path>
              <circle cx="24" cy="24" fill="#7B1E2A" r="4"></circle>
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl text-ink mb-6">Dedicate Merit for Others</h2>
          <p className="text-[15px] text-ink-mid mb-10 leading-relaxed">
            Whether it's a simple offering or a grand ceremony, your request helps sustain the sacred tradition and benefits all beings. Every prayer requested is dedicated specifically to your chosen intentions.
          </p>
          <a href="#puja-request" className="inline-block bg-maroon text-gold-light px-10 py-4 rounded-[4px] text-[12px] uppercase tracking-[0.15em] font-medium hover:bg-maroon-dark transition-colors">
            Request a Puja
          </a>
        </div>
      </section>
    </div>
  );
}
