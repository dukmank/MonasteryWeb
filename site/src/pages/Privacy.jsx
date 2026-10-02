export default function Privacy() {
  return (
    <div className="bg-cream min-h-screen">
      <header className="relative bg-maroon text-gold-light py-4xl">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] mb-base block text-gold">Legal</span>
          <h1 className="font-page-banner text-page-banner mb-md">Privacy Policy</h1>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-lg"></div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-2xl md:py-4xl">
        <div className="prose prose-stone max-w-none font-body-md text-ink-mid leading-relaxed space-y-8">
          <section>
            <h2 className="font-subheading text-subheading text-maroon mb-3">Information We Collect</h2>
            <p>We collect information you provide directly to us, such as your name and email address when you contact us, request a puja, subscribe to our newsletter, or make a donation.</p>
          </section>
          <section>
            <h2 className="font-subheading text-subheading text-maroon mb-3">How We Use Your Information</h2>
            <p>We use your information to respond to your inquiries, process puja requests and donations, send you updates you have requested, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.</p>
          </section>
          <section>
            <h2 className="font-subheading text-subheading text-maroon mb-3">Data Security</h2>
            <p>We take reasonable measures to protect your personal information. Donation and form data are processed through secure, trusted services.</p>
          </section>
          <section>
            <h2 className="font-subheading text-subheading text-maroon mb-3">Contact</h2>
            <p>If you have questions about this Privacy Policy, please contact us at <a className="text-maroon hover:text-maroon-dark underline" href="mailto:contact@dundulraptenling.org">contact@dundulraptenling.org</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
