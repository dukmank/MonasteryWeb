import { useState } from "react";
import { createItem } from "../lib/content.js";
import PageBanner from "../components/PageBanner.jsx";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    // 1) Lưu vào admin inbox (Firestore) — best effort
    try {
      await createItem("messages", { ...form });
    } catch (err) {
      console.warn("save message:", err?.message);
    }

    // 2) Gửi email qua Web3Forms (nếu đã cấu hình key)
    try {
      if (WEB3FORMS_KEY) {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: form.subject || "New message from monastery website",
            from_name: form.name || "Website visitor",
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        });
      }
    } catch (err) {
      console.warn("web3forms:", err?.message);
    }

    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const sent = status === "sent";

  return (
    <div className="page-contact">
      <style>{`
        .page-contact {
            background-color: #fcf9f4;
        }
        .page-contact .sacred-pattern {
            background-image: radial-gradient(circle at 2px 2px, rgba(180, 130, 50, 0.05) 1px, transparent 0);
            background-size: 24px 24px;
        }
        .page-contact .editorial-shadow {
            box-shadow: 0 20px 40px rgba(87,0,0,0.06);
        }
      `}</style>
      <main>
        <PageBanner
          image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782520071/monastery/jtjgnogtqpvqcvehfsmq.jpg"
          eyebrow="Get in Touch"
          title="Contact Us"
          trail={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        />
        {/* Contact Layout (Block B variant) */}
        <section className="py-2xl md:py-4xl px-4 sm:px-8 max-w-[1200px] mx-auto sacred-pattern">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7 bg-white p-base sm:p-xl editorial-shadow rounded-xl border-[0.5px] border-gold/20">
              <h2 className="font-section-heading text-section-heading text-maroon mb-lg">Send us a Message</h2>
              <p className="font-body-md text-ink-light mb-xl">Whether you have questions about our monastic programs, puja requests, or how to support our projects, we are here to help.</p>
              <form className="space-y-lg" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                  <div className="space-y-xs">
                    <label className="font-label-eyebrow text-ink-mid block">FULL NAME</label>
                    <input
                      value={form.name}
                      onChange={set("name")}
                      required
                      className="w-full border border-stone-200 focus:border-gold focus:ring-1 focus:ring-gold/20 rounded-lg p-md transition-all font-body-md"
                      placeholder="Tenzin Gyatso"
                      type="text"
                    />
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-eyebrow text-ink-mid block">EMAIL ADDRESS</label>
                    <input
                      value={form.email}
                      onChange={set("email")}
                      required
                      className="w-full border border-stone-200 focus:border-gold focus:ring-1 focus:ring-gold/20 rounded-lg p-md transition-all font-body-md"
                      placeholder="name@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-xs">
                  <label className="font-label-eyebrow text-ink-mid block">SUBJECT</label>
                  <input
                    value={form.subject}
                    onChange={set("subject")}
                    className="w-full border border-stone-200 focus:border-gold focus:ring-1 focus:ring-gold/20 rounded-lg p-md transition-all font-body-md"
                    placeholder="Puja Request / Monastic Life Query"
                    type="text"
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-eyebrow text-ink-mid block">MESSAGE</label>
                  <textarea
                    value={form.message}
                    onChange={set("message")}
                    required
                    className="w-full border border-stone-200 focus:border-gold focus:ring-1 focus:ring-gold/20 rounded-lg p-md transition-all font-body-md"
                    placeholder="Your message here..."
                    rows="5"
                  ></textarea>
                </div>
                <button
                  className={`${sent ? "bg-green-600 text-white" : "bg-gold text-ink"} px-10 py-4 rounded-lg font-button-text text-button-text font-semibold hover:bg-gold-dark transition-all duration-300 shadow-lg inline-flex items-center gap-3 active:scale-95 group`}
                  type="submit"
                  disabled={status !== "idle"}
                >
                  {status === "idle" && (
                    <>
                      Send Message
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">send</span>
                    </>
                  )}
                  {status === "sending" && "Sending..."}
                  {status === "sent" && "Message Sent!"}
                </button>
              </form>
            </div>
            {/* Right Column: Contact Info Card */}
            <div className="lg:col-span-5">
              <div className="bg-cream-dark p-base sm:p-xl rounded-xl border-[0.5px] border-gold/30 h-full flex flex-col">
                <h3 className="font-subheading text-subheading text-maroon mb-xl">Monastery Information</h3>
                <div className="space-y-xl flex-grow">
                  {/* Address */}
                  <div className="flex gap-lg">
                    <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center flex-shrink-0">
                      <i className="ti ti-map-pin text-gold text-[24px]"></i>
                    </div>
                    <div>
                      <h4 className="font-label-eyebrow text-maroon-mid mb-xs">POSTAL ADDRESS</h4>
                      <p className="font-body-md text-ink-mid leading-relaxed">
                        Dundul Raptenling Monastery,<br />
                        T.R.S, Camp no. 3,<br />
                        P.O. Mahendragada, District Gajapati,<br />
                        Pin 761017, Odisha, India
                      </p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex gap-lg">
                    <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center flex-shrink-0">
                      <i className="ti ti-mail text-gold text-[24px]"></i>
                    </div>
                    <div>
                      <h4 className="font-label-eyebrow text-maroon-mid mb-xs">EMAIL</h4>
                      <a className="font-body-md text-ink-mid hover:text-maroon transition-colors" href="mailto:dundul.rapten@gmail.com">dundul.rapten@gmail.com</a>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex gap-lg">
                    <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center flex-shrink-0">
                      <i className="ti ti-phone text-gold text-[24px]"></i>
                    </div>
                    <div>
                      <h4 className="font-label-eyebrow text-maroon-mid mb-xs">PHONE</h4>
                      <p className="font-body-md text-ink-mid">06817 291693</p>
                    </div>
                  </div>
                  {/* WhatsApp */}
                  <div className="flex gap-lg">
                    <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center flex-shrink-0">
                      <i className="ti ti-brand-whatsapp text-gold text-[24px]"></i>
                    </div>
                    <div>
                      <h4 className="font-label-eyebrow text-maroon-mid mb-xs">WHATSAPP</h4>
                      <a className="font-body-md text-ink-mid hover:text-maroon transition-colors" href="https://wa.me/919937829693">+91 9937829693</a>
                    </div>
                  </div>
                </div>
                {/* Social Links */}
                <div className="mt-xl pt-xl border-t border-gold/20">
                  <h4 className="font-label-eyebrow text-maroon-mid mb-md">FOLLOW US</h4>
                  <div className="flex items-center gap-md">
                    <a
                      className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center hover:bg-gold/30 transition-colors"
                      href="https://facebook.com/odishadudjom.vihara"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                    >
                      <i className="ti ti-brand-facebook text-gold text-[24px]"></i>
                    </a>
                    <a
                      className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center hover:bg-gold/30 transition-colors"
                      href="https://instagram.com/odishadudjom"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                    >
                      <i className="ti ti-brand-instagram text-gold text-[24px]"></i>
                    </a>
                    <a
                      className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center hover:bg-gold/30 transition-colors"
                      href="https://youtube.com/@dundulraptenlingmonastery1826"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="YouTube"
                    >
                      <i className="ti ti-brand-youtube text-gold text-[24px]"></i>
                    </a>
                  </div>
                </div>
                {/* Ornamental Divider */}
                <div className="mt-xl pt-xl border-t border-gold/20 flex justify-center">
                  <span className="text-gold opacity-50">✦ ✦ ✦</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Location Map */}
        <section className="relative w-full">
          <iframe
            title="Dundul Raptenling Monastery location"
            className="w-full h-[400px] border-0 block"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            src="https://www.google.com/maps?q=7759%2BCFH%2C%20Padadigi%2C%20Odisha%20761017%2C%20India&output=embed"
          ></iframe>
          <a
            href="https://www.google.com/maps/search/?api=1&query=7759%2BCFH%2C%20Padadigi%2C%20Odisha%20761017%2C%20India"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-maroon text-gold-light text-[11px] uppercase tracking-widest font-medium px-4 py-2.5 rounded shadow-lg hover:bg-maroon-dark transition-colors inline-flex items-center gap-2"
          >
            <i className="ti ti-map-pin"></i> Open in Google Maps
          </a>
        </section>
      </main>
    </div>
  );
}
