import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner.jsx";

export default function HostelProject() {
  return (
    <div className="page-hostel">
      <PageBanner
        image="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782808802/monastery/tpktyzlrsm0hfglkyx2i.jpg"
        eyebrow="Monastery Project"
        title="Hostel & Classroom Project"
        subtitle="Sey me mi Dhun Ling"
        trail={[{ label: "Home", to: "/" }, { label: "Projects" }, { label: "Hostel & Classroom Project" }]}
      />

      {/* A Multi-Purpose Sanctuary */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-headline text-primary mb-6 leading-tight">A Multi-Purpose Sanctuary</h2>
              <div className="space-y-5 text-on-surface text-base leading-relaxed font-light">
                <p>
                  Sey me mi Dhun Ling is a new multi-purpose building designed to support the growing monastic community. This sacred structure will house essential facilities, including modern classrooms for the Shedra, comfortable living quarters for the monks, and a dedicated library to preserve precious Dharma texts.
                </p>
                <p>
                  Every architectural detail reflects the spiritual lineage it serves, blending the ancient Nyingmapa aesthetic with modern sustainable building practices.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
              <img
                loading="lazy"
                decoding="async"
                src="https://res.cloudinary.com/dvhwombxw/image/upload/f_auto,q_auto/v1782808833/monastery/rhbw0nkvc3qryw661o7i.jpg"
                alt="Sey me mi Dhun Ling floor plan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vietnamese Sangha Sponsorship */}
      <section className="bg-primary-container py-14 sm:py-20 px-4 sm:px-8">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="md:flex-1">
            <h2 className="font-display text-2xl sm:text-3xl text-white mb-4 font-bold">
              Vietnamese Sangha Sponsorship
            </h2>
            <p className="font-body text-base text-white/90 leading-relaxed max-w-2xl">
              This project is graciously sponsored by the Vietnamese group of Lama Sonam Tashi Rinpoche. Their unwavering devotion and generosity are the foundation of this merit-making endeavor, ensuring a home for the Dharma for generations to come.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              to="/support"
              className="border border-white/40 text-white px-8 py-3 font-label uppercase tracking-[0.2em] text-sm hover:bg-white/10 transition-all duration-300 block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Support the Vision */}
      <section className="py-16 sm:py-20 bg-[#FDFBF7] text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-8">
          <div className="text-4xl mb-4">🏛️</div>
          <h2 className="text-3xl sm:text-4xl font-headline text-on-surface mb-5">Support the Vision</h2>
          <p className="text-on-surface/70 italic text-base leading-relaxed mb-8">
            "Your contributions help us complete the final phases of construction and equip the classrooms and library."
          </p>
          <Link
            to="/support"
            className="bg-primary text-white px-10 py-3 font-bold text-sm tracking-widest uppercase hover:bg-primary-container transition-all inline-block"
          >
            Make a Donation
          </Link>
        </div>
      </section>
    </div>
  );
}
