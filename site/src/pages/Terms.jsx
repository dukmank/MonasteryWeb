export default function Terms() {
  return (
    <div className="bg-cream min-h-screen">
      <header className="relative bg-maroon text-gold-light py-4xl">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] mb-base block text-gold">Legal</span>
          <h1 className="font-page-banner text-page-banner mb-md">Terms of Use</h1>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-lg"></div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-2xl md:py-4xl">
        <div className="prose prose-stone max-w-none font-body-md text-ink-mid leading-relaxed space-y-8">
          <section>
            <h2 className="font-subheading text-subheading text-maroon mb-3">Acceptance of Terms</h2>
            <p>By accessing and using the Dundul Raptenling Monastery website, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use this website.</p>
          </section>
          <section>
            <h2 className="font-subheading text-subheading text-maroon mb-3">Use of Content</h2>
            <p>All content on this website — including text, images, teachings, and publications — is provided for educational and devotional purposes. Sacred materials are shared with respect for the Dudjom Tersar lineage. You may not reproduce or distribute content for commercial purposes without written permission.</p>
          </section>
          <section>
            <h2 className="font-subheading text-subheading text-maroon mb-3">Donations</h2>
            <p>Donations made through this website support the monastery, its monks, and ongoing projects. Donations are voluntary and, unless otherwise stated, non-refundable.</p>
          </section>
          <section>
            <h2 className="font-subheading text-subheading text-maroon mb-3">Contact</h2>
            <p>For questions regarding these terms, please contact us at <a className="text-maroon hover:text-maroon-dark underline" href="mailto:contact@dundulraptenling.org">contact@dundulraptenling.org</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
