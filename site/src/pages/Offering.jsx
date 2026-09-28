import { useEffect } from "react";
import PageBanner from "../components/PageBanner.jsx";

function Row({ label, value }) {
  return (
    <div className="flex justify-between items-baseline gap-4 py-2 border-b border-outline-variant/30 last:border-0">
      <span className="text-[10px] uppercase tracking-widest text-ink-light shrink-0">{label}</span>
      <span className="text-[14px] text-ink-mid font-mono text-right break-all">{value}</span>
    </div>
  );
}

export default function Offering() {
  // Load the Donorbox embed script once.
  useEffect(() => {
    if (document.querySelector('script[src="https://donorbox.org/widgets.js"]')) return;
    const s = document.createElement("script");
    s.src = "https://donorbox.org/widgets.js";
    s.type = "module";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="page-offering">
      <style>{`
        .page-offering h1, .page-offering h2, .page-offering h3, .page-offering h4 { font-family: 'Noto Serif', serif; }
        .page-offering .accent-bar { border-left: 3px solid #C49A2A; }
      `}</style>

      <PageBanner
        image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520072/monastery/wocwwpny7tf75yv8zfx9.jpg"
        eyebrow="Support the Monastery"
        title="Sacred Offering Instructions"
        trail={[{ label: "Home", to: "/" }, { label: "Make Offering" }]}
      />

      {/* Tashi Delek */}
      <section className="py-16 bg-white border-b border-outline-variant">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-12 h-12 bg-gold rounded-lg grid place-items-center mx-auto mb-6">
            <i className="ti ti-check text-white text-2xl"></i>
          </div>
          <h2 className="text-3xl sm:text-4xl text-maroon mb-4">Tashi Delek</h2>
          <p className="text-ink-mid leading-relaxed">
            Thank you for your generosity. If you wish to support the monastery, please follow the donation instructions below. Your support sustains our lineage and spiritual community.
          </p>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-14 sm:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <div className="accent-bar pl-4 mb-10">
            <h3 className="text-xl text-ink">Sponsor &amp; Offering Instructions</h3>
          </div>

          {/* Domestic */}
          <div className="bg-white rounded-xl border border-gold/20 shadow-sm p-6 sm:p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <i className="ti ti-building-bank text-maroon text-2xl"></i>
              <h4 className="text-lg text-maroon">Domestic Offering (India)</h4>
            </div>
            <p className="text-[13px] text-ink-light leading-relaxed mb-6">
              Direct bank transfer for donors within India. Please ensure all details are entered correctly for monastery records.
            </p>
            <div className="space-y-1">
              <Row label="Account Name" value="Dundul Raptenling Monastery" />
              <Row label="Bank Name" value="Canara Bank" />
              <Row label="Account Number" value="0284101002037" />
              <Row label="IFSC Code" value="CNRB0000284" />
              <Row label="SWIFT Code" value="CNRBINBBBFD" />
              <Row label="UPI ID" value="55173129002037@cnrb" />
            </div>
            <p className="text-[12px] text-ink-mid italic bg-cream rounded-lg px-4 py-3 mt-6">
              Note: Kindly mention "Offering" or the specific Puja name in the remarks section of your transfer.
            </p>
          </div>

          {/* International */}
          <div className="bg-white rounded-xl border border-gold/20 shadow-sm overflow-hidden">
            <div className="bg-maroon text-gold-light px-6 sm:px-8 py-5 flex items-center gap-3">
              <i className="ti ti-world text-2xl"></i>
              <h4 className="text-lg text-gold-light">International Offerings</h4>
            </div>
            <div className="p-6 sm:p-8">
              <div className="bg-maroon/5 border border-maroon/10 rounded-lg p-4 mb-8">
                <h5 className="text-maroon font-semibold mb-1">Vajra Lotus Foundation (501c3)</h5>
                <p className="text-[13px] text-ink-light leading-relaxed">
                  Tax-deductible support for US-based donors. Our international partner facilitates global generosity with full transparency.
                </p>
              </div>

              <div className="mb-8">
                <p className="text-[12px] uppercase tracking-widest text-gold-dark font-semibold mb-3">1. PayPal (Online)</p>
                <Row label="Email" value="vajralotusfoundation@gmail.com" />
                <p className="text-[12px] text-ink-light italic mt-2">Instruction: Please include your name and donation purpose.</p>
              </div>

              <div className="mb-8">
                <p className="text-[12px] uppercase tracking-widest text-gold-dark font-semibold mb-3">2. Wire Transfer</p>
                <Row label="Bank Name" value="Bank of America" />
                <Row label="Account Name" value="Vajra Lotus Foundation" />
                <Row label="Account Number" value="325288249393" />
                <Row label="Routing (Wire)" value="026009593" />
                <Row label="SWIFT / BIC" value="BOFAUS3N" />
                <Row label="Account Type" value="Checking" />
              </div>

              <div>
                <p className="text-[12px] uppercase tracking-widest text-gold-dark font-semibold mb-3">3. Check</p>
                <Row label="Payable To" value="Vajra Lotus Foundation" />
                <Row label="Mailing Address" value="1924 E St, Hayward, CA 94541, USA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate online (Donorbox) */}
      <section id="donate-online" className="py-14 sm:py-16 bg-white border-y border-outline-variant scroll-mt-28">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-[11px] text-gold-dark tracking-widest uppercase mb-2 block">Online Donation Portal</span>
            <h2 className="text-2xl sm:text-3xl text-ink">Donate Online</h2>
            <p className="text-[13px] text-ink-light mt-3">Secure payment via PayPal and credit/debit card.</p>
          </div>
          <div className="bg-cream rounded-xl border border-gold/20 p-3 sm:p-4 shadow-sm">
            <dbox-widget
              campaign="dundul-raptenling-monastery-puja-offerings"
              type="donation_form"
              enable-auto-scroll="true"
            ></dbox-widget>
          </div>
          <noscript>
            <p className="text-center text-ink-light text-sm mt-4">Please enable JavaScript to load the donation form.</p>
          </noscript>
        </div>
      </section>

      {/* Quote banner */}
      <section className="relative h-[320px] flex items-center overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover" alt="Himalayan monastery" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520072/monastery/wocwwpny7tf75yv8zfx9.jpg" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/90 via-maroon-dark/70 to-transparent"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-8 w-full">
          <h2 className="text-2xl sm:text-3xl text-gold-light font-serif italic mb-3">"Giving is the most sacred of rituals."</h2>
          <p className="text-white/80 max-w-md leading-relaxed">
            Every offering directly supports the preservation of Buddhist philosophy and the daily sustenance of our practitioners.
          </p>
        </div>
      </section>
    </div>
  );
}
