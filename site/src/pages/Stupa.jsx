import PageBanner from "../components/PageBanner.jsx";

export default function Stupa() {
  return (
    <div className="page-stupa">
      <style>{`
        .page-stupa { font-family: 'Work Sans', sans-serif; background-color: #FAF7F2; color: #1A1410; }
        .page-stupa h1, .page-stupa h2, .page-stupa h3, .page-stupa h4 { font-family: 'Noto Serif', serif; font-weight: 400; }
        .page-stupa .eyebrow {
            font-family: 'Work Sans', sans-serif;
            font-size: 11px;
            font-weight: 500;
            color: #8B6B1A;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }
        .page-stupa .editorial-border {
            border: 0.5px solid rgba(180, 130, 50, 0.2);
        }
        .page-stupa .maroon-overlay {
            background: linear-gradient(to bottom, rgba(92, 21, 32, 0.2), rgba(92, 21, 32, 0.75));
        }
      `}</style>
      <PageBanner
        image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782642811/monastery/xsgfv7sqey54t00zyap3.jpg"
        eyebrow="Sacred Architecture"
        title="Dundul Chorten"
        trail={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "The Dundul Chorten" }]}
      />
      {/* Block B: Origins and Construction (White) */}
      <section className="bg-white py-2xl md:py-4xl px-base md:px-3xl">
        <div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl md:gap-4xl items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/5] overflow-hidden rounded-xl editorial-border shadow-lg">
              <img loading="lazy" decoding="async" alt="The Dundul Chorten" className="w-full h-full object-cover" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782642814/monastery/ctzz1bw4g1mc49z83jvl.jpg" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-cream p-4 editorial-border rounded-lg hidden md:block max-w-[220px]">
              <p className="font-sans text-[12px] text-ink-mid italic leading-relaxed">Kyabje Dudjom Rinpoche, visionary behind the Chorten's founding.</p>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-lg">
            <span className="eyebrow">The Founding</span>
            <h2 className="text-[28px] md:text-[32px] text-maroon leading-tight">Origins and Construction</h2>
            <div className="space-y-base text-ink-mid text-[15px] md:text-[16px] leading-[1.7]">
              <p>On the 4th day of the 6th Tibetan month in 1970, Kyabje Dudjom Rinpoche received a letter from His Holiness the 14th Dalai Lama and the Tibetan Government-in-Exile. On behalf of the Tibetan people, Kyabje Dudjom Rinpoche was requested to build a sacred stupa (chorten) for the benefit of Tibet's religious and temporal affairs and to help pacify the harmful influences associated with Dolgyal (Dorje Shugden).</p>
              <p>That same year, Kyabje Rinpoche traveled to Odisha to personally select and finalize the site for the stupa. He chose a vacant area on the far left side of Camp No. 3, situated at the foot of an elephant-shaped hill. After determining the location, he entrusted the construction and completion of the project to Lama Sherab Dorje Rinpoche and Lama Dorje Namgyal Rinpoche.</p>
              <p>As part of the sacred preparations, one hundred thousand miniature Dorje Drolö tsatsas were created through the collective efforts of the monks of Dundul Raptenling and local Tibetan residents. The principal Dorje Drolö statue was commissioned in Kalimpong and crafted by a Bhutanese artisan under the direct guidance and supervision of Kyabje Dudjom Rinpoche.</p>
              <p>When the statue was completed the following year, Tulku Tsephel traveled to Kalimpong to bring it to Dundul Raptenling. Although Kyabje Dudjom Rinpoche was unable to accompany him, he instructed Tulku Tsephel that the rabney (consecration ceremony) should be performed in Kalimpong and assured them that they should feel as though he were personally present with them at Dundul Raptenling.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Block D: The Consecration Miracle (Dark Maroon Band) */}
      <section className="bg-maroon-dark text-gold-light py-2xl md:py-4xl px-base relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <i className="ti ti-sun text-[320px]"></i>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-lg">
            <i className="ti ti-sun text-gold text-4xl"></i>
          </div>
          <span className="eyebrow !text-gold mb-base block">A Miraculous Event</span>
          <h2 className="text-[28px] md:text-[32px] mb-lg text-white">The Consecration Miracle</h2>
          <div className="space-y-lg text-gold-light/90 text-lg leading-[1.8]">
            <p>On the fifteenth day of the fourth lunar month, during the sacred month of Saka Dawa, the main Dorje Drolö statue was installed within the Dundul Chorten. Lamas, tulkus, and lay practitioners gathered to perform the consecration ceremony.</p>
            <p className="italic text-xl md:text-2xl font-serif text-white py-2 border-y border-gold/20">
              At approximately ten or eleven o'clock in the morning, while the assembled lamas and tulkus were conducting the rabney using white rice grains, a remarkable event occurred. Multicolored grains known as levang descended from the sky, which many interpreted as a sign of Kyabje Dudjom Rinpoche's blessings.
            </p>
            <p>Many people collected these blessed grains and preserved them as sacred objects of blessing and good fortune. This event remains one of the most cherished accounts associated with the Dundul Chorten.</p>
          </div>
        </div>
      </section>
      {/* Block B: A Source of Blessings (Cream) */}
      <section className="bg-cream py-2xl md:py-4xl px-base md:px-3xl">
        <div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl md:gap-4xl items-center">
          <div className="space-y-lg">
            <span className="eyebrow">Spiritual Healing</span>
            <h2 className="text-[28px] md:text-[32px] text-maroon">A Source of Blessings</h2>
            <div className="space-y-base text-ink-mid text-[15px] md:text-[16px] leading-[1.7]">
              <p>Over the years, many stories have emerged of local residents receiving blessings and benefits through their connection with the stupa. As a place of refuge and devotion, the Dundul Chorten has long been regarded as a source of healing and protection.</p>
              <p>There have been numerous accounts of people suffering from illness who made offerings by whitewashing the stupa and subsequently experienced remarkable recoveries. Such stories have strengthened the faith of devotees and deepened the reputation of the stupa as a place of extraordinary blessing.</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-xl editorial-border shadow-md">
              <img loading="lazy" decoding="async" alt="The Dundul Chorten at dusk" className="w-full h-full object-cover" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782642813/monastery/xgt0adyafdbky9qs8yq3.jpg" />
            </div>
          </div>
        </div>
      </section>
      {/* Block G: Portrait Grid (Great Masters) */}
      <section className="bg-white py-2xl md:py-4xl px-base md:px-3xl">
        <div className="max-w-max-width mx-auto">
          <div className="text-center mb-xl">
            <span className="eyebrow">Sacred Visits</span>
            <h2 className="text-[28px] md:text-[32px] text-maroon mt-2">Great Masters Who Blessed These Grounds</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-lg editorial-border aspect-[3/4]">
              <img loading="lazy" decoding="async" alt="H.H. the 14th Dalai Lama" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782642815/monastery/wxd3yr7wc987s0rhoz1t.jpg" />
              <div className="absolute inset-0 bg-maroon/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-base text-center">
                <h3 className="font-serif text-lg text-gold-light">H.H. the 14th Dalai Lama</h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-gold-light/80 mt-2">Supreme Head of Tibetan Buddhism</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg editorial-border aspect-[3/4]">
              <img loading="lazy" decoding="async" alt="Sakya Gonma Rinpoche" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782642817/monastery/txuakre3ihygxnxpcfcl.jpg" />
              <div className="absolute inset-0 bg-maroon/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-base text-center">
                <h3 className="font-serif text-lg text-gold-light">Sakya Gonma Rinpoche</h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-gold-light/80 mt-2">Supreme Lineage Holder of the Sakya Lineage</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg editorial-border aspect-[3/4]">
              <img loading="lazy" decoding="async" alt="Kyabje Chatral Rinpoche" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782642818/monastery/yxrv5j9imnmtmbc2xusb.jpg" />
              <div className="absolute inset-0 bg-maroon/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-base text-center">
                <h3 className="font-serif text-lg text-gold-light">Kyabje Chatral Rinpoche</h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-gold-light/80 mt-2">Dzogchen Master &amp; Ascetic</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg editorial-border aspect-[3/4]">
              <img loading="lazy" decoding="async" alt="Tarthang Rinpoche" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782642820/monastery/t8bye4nzw9a4wwnycadl.jpg" />
              <div className="absolute inset-0 bg-maroon/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-base text-center">
                <h3 className="font-serif text-lg text-gold-light">Tarthang Rinpoche</h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-gold-light/80 mt-2">Founder of the Nyingma Institute</p>
              </div>
            </div>
          </div>
          <p className="text-center text-ink-mid text-[15px] leading-[1.8] mt-xl max-w-3xl mx-auto">
            Many eminent Buddhist masters have visited the Dundul Chorten to offer prayers and pay their respects. His Holiness Dudjom Jigdral Yeshe Dorje Rinpoche himself wrote about the immense benefits and blessings associated with the Dundul Chorten. Dungse Thinley Norbu Rinpoche also composed writings praising its significance and spiritual power.
          </p>
        </div>
      </section>
      {/* Block E: Annual Ceremonies (Cream) */}
      <section className="bg-cream-dark py-2xl md:py-4xl text-center px-base">
        <div className="max-w-3xl mx-auto">
          <div className="mb-lg">
            <i className="ti ti-calendar-event text-gold text-4xl"></i>
          </div>
          <h2 className="text-[28px] md:text-[32px] text-maroon mb-lg">Annual Ceremonies</h2>
          <div className="text-ink-mid text-[15px] md:text-[16px] leading-[1.8] mb-xl space-y-base">
            <p>
              Each year, Dundul Raptenling Monastery conducts the Drolö Tsogkhor at the Dundul Chorten on the 4th day of the 6th Tibetan month, coinciding with Chökhor Düchen, the anniversary commemorating Shakyamuni Buddha's first turning of the Wheel of Dharma.
            </p>
            <p>On the fifteenth day of the month of Vaisakha (Saka Dawa), devotees gather to make offerings of food and beverages to all participants and visitors.</p>
          </div>
          <div className="h-[1px] w-24 bg-gold/30 mx-auto mb-lg relative">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cream-dark px-sm text-gold text-xs">✦</span>
          </div>
          <p className="font-sans text-[12px] text-gold-dark italic">All are welcome to join these ceremonies in person or through sponsored prayers.</p>
        </div>
      </section>
      {/* Block B: Community Support (White) */}
      <section className="bg-white py-2xl md:py-4xl px-base md:px-3xl">
        <div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl md:gap-4xl items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-video overflow-hidden rounded-xl editorial-border shadow-lg">
              <img loading="lazy" decoding="async" alt="Community ceremony at the Dundul Chorten" className="w-full h-full object-cover" src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782642812/monastery/ifne6ufxyx6mulmwusrz.jpg" />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-lg">
            <span className="eyebrow">Stewardship</span>
            <h2 className="text-[28px] md:text-[32px] text-maroon">Community Support</h2>
            <div className="space-y-base text-ink-mid text-[15px] md:text-[16px] leading-[1.7]">
              <p>The continued care and maintenance of the Dundul Chorten has also been supported by members of the local community. Tsultrim-la of Camp No. 3 renovated the inner circumambulation path and installed prayer wheels (mani wheels), while Palmo-la of Camp No. 3 provided lighting to support practitioners performing kora during the early morning and evening hours.</p>
              <p>Today, the Dundul Chorten remains one of the most revered sacred monuments of Dundul Raptenling Monastery—a place of pilgrimage, prayer, blessing, and unwavering devotion to Guru Padmasambhava in the form of Dorje Drolö.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
