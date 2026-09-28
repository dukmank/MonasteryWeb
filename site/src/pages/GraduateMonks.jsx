import PageBanner from "../components/PageBanner.jsx";

const CLASS_2024 = [
  { name: "Sherap Dorjee Kunphel", img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782627749/monastery/wad2lcf0pbkc2dncwjlc.jpg" },
  { name: "Sherap Tenpe Dakpo", img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782627750/monastery/kauvnlif1xykwm7kkmsj.jpg" },
  { name: "Younten Dorjee", img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782627751/monastery/cvn95yjzqb9haql8sdwl.jpg" },
  { name: "Jampal Tashi", img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782627752/monastery/hm21qhdc8xtouzp5oonh.jpg" },
];

const CLASS_2021 = [
  { name: "Gyurmey Dorjee", img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782627753/monastery/wqk8okuqslb3wb3gdvnz.jpg" },
  { name: "Tsering Choephel", img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782627754/monastery/raegcsrg9idimee1farq.jpg" },
  { name: "Nyima Gyaltsen", img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782627755/monastery/aneeoo4z4wwkqno7txfh.jpg" },
  { name: "Tsering Namgyal", img: "https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782627756/monastery/pgzuifn13dbbufes46o1.jpg" },
];

function MonkCard({ monk, year }) {
  return (
    <div className="group relative bg-white border-[0.5px] border-gold/20 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-[3/4] overflow-hidden bg-cream">
        <img loading="lazy" decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={monk.name}
          src={monk.img}
        />
      </div>
      <div className="p-lg">
        <h3 className="font-card-title text-card-title text-maroon mb-xs">{monk.name}</h3>
        <p className="font-caption text-caption text-ink-mid">Acharya Graduate · {year}</p>
      </div>
    </div>
  );
}

export default function GraduateMonks() {
  return (
    <div className="page-graduate">
      <PageBanner
        image=""
        eyebrow="Monastic Education"
        title="Our Graduate Monks"
        trail={[{ label: "Home", to: "/" }, { label: "The Monastery" }, { label: "Graduate Monks" }]}
      />

      {/* Class of 2024 */}
      <section className="py-4xl px-base lg:px-3xl max-w-max-width mx-auto">
        <div className="mb-3xl">
          <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase tracking-widest block mb-xs">Class of 2024</span>
          <h2 className="font-section-heading text-section-heading text-maroon">Graduates of 2024</h2>
          <div className="h-0.5 w-16 bg-gold mt-sm"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-xl">
          {CLASS_2024.map((m) => (
            <MonkCard key={m.name} monk={m} year="2024" />
          ))}
        </div>
      </section>

      {/* Class of 2021 */}
      <section className="bg-cream py-4xl">
        <div className="max-w-max-width mx-auto px-base lg:px-3xl">
          <div className="mb-3xl">
            <span className="font-label-eyebrow text-label-eyebrow text-gold uppercase tracking-widest block mb-xs">Class of 2021</span>
            <h2 className="font-section-heading text-section-heading text-maroon">Graduates of 2021</h2>
            <div className="h-0.5 w-16 bg-gold mt-sm"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-xl">
            {CLASS_2021.map((m) => (
              <MonkCard key={m.name} monk={m} year="2021" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
