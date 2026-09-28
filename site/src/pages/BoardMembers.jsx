import PageBanner from "../components/PageBanner.jsx";

const I = (id, v) => `https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v${v}/monastery/${id}.jpg`;

const BOARD = [
  { name: "Kalsang Nyima", role: "President", img: I("q14g0roacuiofsthgvbo", "1782858917") },
  { name: "Kalsang Gyurmey", role: "Vice President", img: I("vdi5unnlkd2h2pf8kb38", "1782858916") },
  { name: "Sonam Tashi", role: "Secretary", img: I("q8hkpoyaradxgsq3cbwp", "1782858919") },
  { name: "Tashi Tsering", role: "Accountant", img: I("xfnsagl4jjabddpes7pu", "1782858922") },
  { name: "Choden Wangmo", role: "Member", img: I("hd9mv85319sqz4sxph7g", "1782858915") },
  { name: "Tenzin Gurmey", role: "Member", img: I("euglhslfdwfpcedpk4m2", "1782858924") },
  { name: "Tamding Wangchuk", role: "Member", img: I("rug2klfq25jye6jddi4c", "1782858920") },
  { name: "Lhamtso Dorjee", role: "Member", img: I("ab08bpaff30iukv7acup", "1782858918") },
  { name: "Tsering Choephel", role: "Member", img: I("yhlqrxs7pwnvgkaz7ly7", "1782858925") },
];

const EXECUTIVE = [
  { name: "Lopon Nyima Gyaltsen", role: "Chairman", img: I("fq3uuirkyhdhdh4peeej", "1782858929") },
  { name: "Lopon Yonten Dorje", role: "Vice Chairman", img: I("pdqenkzsasl5y484iabs", "1782858930") },
  { name: "Tashi Tsering", role: "Accountant", img: I("q98qd7srnvqlcufayuwy", "1782858932") },
  { name: "Pema Namgyal", role: "Member", img: I("xj0hraht1nwoazyelc9g", "1782858931") },
  { name: "Tsewang Namgyal", role: "Member", img: I("cwjbyehmpmh3xdiwcrmw", "1782858933") },
  { name: "Karma", role: "Member", img: I("xkxyawcmkcks17vfz0mb", "1782858927") },
];

function MemberCard({ name, role, img }) {
  return (
    <div className="bg-white rounded-lg border border-gold/20 overflow-hidden">
      <div className="aspect-square bg-maroon-light grid place-items-center overflow-hidden">
        {img ? (
          <img src={img} alt={name} className="w-full h-full object-cover" />
        ) : (
          <i className="ti ti-user text-maroon/30 text-5xl"></i>
        )}
      </div>
      <div className="px-4 py-3">
        <h3 className="font-serif text-ink text-[16px] leading-snug">{name}</h3>
        <span className="text-[11px] uppercase tracking-widest text-gold-dark font-medium">{role}</span>
      </div>
    </div>
  );
}

export default function BoardMembers() {
  return (
    <div className="page-board">
      <style>{`
        .page-board h1, .page-board h2, .page-board h3, .page-board h4 { font-family: 'Noto Serif', serif; }
      `}</style>

      <PageBanner
        eyebrow="About"
        title="Board Members of Monastery"
        trail={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Board Members" }]}
      />

      {/* Intro */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-base sm:px-lg text-center">
          <span className="text-[11px] text-gold-dark tracking-widest uppercase mb-3 block">Leadership</span>
          <h2 className="text-2xl sm:text-3xl text-ink mb-6">Board &amp; Executive Members</h2>
          <p className="text-ink-mid text-[15px] leading-relaxed">
            Dundul Raptenling Monastery is guided by a dedicated body of board members and executive members who work together to uphold the monastery's spiritual mission, administrative responsibilities, and long-term vision. Rooted in the blessings of the Dudjom Tersar lineage, the leadership team supports the preservation of Dharma teachings, monastic education, sacred ceremonies, community service, and the ongoing development of the monastery for future generations.
          </p>
        </div>
      </section>

      {/* Board Members */}
      <section className="pb-14 sm:pb-20 bg-white">
        <div className="max-w-max-width mx-auto px-base sm:px-lg">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl text-ink mb-4">Board Members</h2>
            <p className="text-ink-mid text-[14px] leading-relaxed">
              The Board Members provide guidance, oversight, and support for the monastery's major decisions, long-term planning, and institutional responsibilities. Their role is to help ensure that the monastery remains faithful to its spiritual purpose while maintaining transparency, stability, and continuity in its service to the sangha and wider community.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {BOARD.map((m) => (
              <MemberCard key={m.name + m.role} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-max-width mx-auto px-base sm:px-lg">
        <div className="h-[1px] bg-outline-variant/40"></div>
      </div>

      {/* Executive Members */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-max-width mx-auto px-base sm:px-lg">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl text-ink mb-4">Executive Members</h2>
            <p className="text-ink-mid text-[14px] leading-relaxed">
              The Executive Members are responsible for carrying out the daily administrative work and practical operations of the monastery. They help coordinate programs, ceremonies, facilities, communications, fundraising, community relations, and other essential activities that support the monastery's ongoing Dharma work. Together, the Board and Executive Members serve with devotion and responsibility to protect the monastery's heritage, support its present needs, and help carry its sacred vision into the future.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {EXECUTIVE.map((m) => (
              <MemberCard key={m.name + m.role} {...m} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
