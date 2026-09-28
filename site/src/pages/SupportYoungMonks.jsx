import PageBanner from "../components/PageBanner.jsx";

const DONATION_URL = "https://www.zeffy.com/en-US/donation-form/help-shape-the-future-of-dharma-support-young-monks-at-dundul-raptenling-monastery";
const IMG_QUOTE = "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520072/monastery/wocwwpny7tf75yv8zfx9.jpg";

function Row({ label, value, dark }) {
  return (
    <div className={`flex justify-between items-baseline gap-4 py-2 border-b last:border-0 ${dark ? "border-gold-light/15" : "border-outline-variant/30"}`}>
      <span className={`text-[10px] uppercase tracking-widest shrink-0 ${dark ? "text-gold-light/60" : "text-ink-light"}`}>{label}</span>
      <span className={`text-[14px] font-mono text-right break-all ${dark ? "text-gold-light" : "text-ink-mid"}`}>{value}</span>
    </div>
  );
}

export default function SupportYoungMonks() {
  return (
    <div className="page-support-young">
      <style>{`
        .page-support-young h1, .page-support-young h2, .page-support-young h3, .page-support-young h4, .page-support-young h5 { font-family: 'Noto Serif', serif; }
        .page-support-young .accent-bar { border-left: 3px solid #C49A2A; }
      `}</style>

      <PageBanner
        eyebrow="Support the Monastery"
        title="Support Young Monks"
        trail={[{ label: "Home", to: "/" }, { label: "Support", to: "/support" }, { label: "Support Young Monks" }]}
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

          {/* International (maroon card) */}
          <div className="bg-maroon-dark rounded-xl shadow-sm overflow-hidden text-gold-light">
            <div className="px-6 sm:px-8 py-5 flex items-center gap-3 border-b border-gold-light/10">
              <i className="ti ti-world text-2xl text-gold"></i>
              <h4 className="text-lg text-gold-light">International Offerings</h4>
            </div>
            <div className="p-6 sm:p-8">
              <div className="bg-black/15 border border-gold-light/10 rounded-lg p-4 mb-8">
                <h5 className="text-gold font-semibold mb-1">Vajra Lotus Foundation (501c3)</h5>
                <p className="text-[13px] text-gold-light/70 leading-relaxed">
                  Tax-deductible support for US-based donors. Our international partner facilitates global generosity with full transparency.
                </p>
              </div>

              <div className="mb-8">
                <p className="text-[12px] uppercase tracking-widest text-gold font-semibold mb-3">1. PayPal (Online)</p>
                <Row dark label="Email" value="vajralotusfoundation@gmail.com" />
                <p className="text-[12px] text-gold-light/60 italic mt-2">Instruction: Please include your name and donation purpose.</p>
              </div>

              <div className="mb-8">
                <p className="text-[12px] uppercase tracking-widest text-gold font-semibold mb-3">2. Wire Transfer</p>
                <Row dark label="Bank Name" value="Bank of America" />
                <Row dark label="Account Name" value="Vajra Lotus Foundation" />
                <Row dark label="Account Number" value="325288249393" />
                <Row dark label="Routing (Wire)" value="026009593" />
                <Row dark label="SWIFT / BIC" value="BOFAUS3N" />
                <Row dark label="Account Type" value="Checking" />
              </div>

              <div className="mb-8">
                <p className="text-[12px] uppercase tracking-widest text-gold font-semibold mb-3">3. Check</p>
                <Row dark label="Payable To" value="Vajra Lotus Foundation" />
                <Row dark label="Mailing Address" value="1924 E St, Hayward, CA 94541, USA" />
              </div>

              <a
                href={DONATION_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-gold text-maroon-dark font-medium tracking-widest uppercase text-[13px] rounded-lg shadow-md hover:bg-gold-dark transition-all active:scale-[0.98]"
              >
                Online Donation Portal <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section className="relative h-[320px] flex items-center overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover" alt="Himalayan monastery" src={IMG_QUOTE} />
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
