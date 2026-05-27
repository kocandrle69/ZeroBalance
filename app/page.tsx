import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f5f1ea] text-[#1c1c1c] overflow-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50">

        <div className="max-w-7xl mx-auto px-8">

          <div className="mt-5 flex items-center justify-between border-b border-black/5 pb-4">

            <div className="tracking-[0.38em] uppercase text-[11px] text-[#a88445]">
              Zero Balance Society
            </div>

            <nav className="hidden md:flex items-center gap-10 text-[14px] text-black/65">

              <a href="#">About</a>
              <a href="#">Philosophy</a>
              <a href="#">Community</a>
              <a href="#">India</a>
              <a href="#">Events</a>
              <a href="#">Contact</a>

            </nav>

            <button className="text-[14px] text-[#a88445] hover:text-black transition">
              Join
            </button>

          </div>

        </div>

      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        <div className="absolute inset-0">

          <Image
            src="/images/WEB1.png"
            alt="Community"
            fill
            priority
            className="object-cover"
          />

        </div>

        <div className="absolute inset-0 bg-[#f5f1ea]/72" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f1ea] via-[#f5f1ea]/75 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">

          <div className="max-w-2xl">

            <div className="uppercase tracking-[0.35em] text-xs text-[#b08a47] mb-8">
              Meditation • Philosophy • Community
            </div>

            <h1 className="text-6xl md:text-8xl leading-[0.92] tracking-[-0.05em] font-light mb-10">

              Meditation.
              <br />

              Culture.
              <br />

              <span className="text-[#b08a47]">
                Community.
              </span>

            </h1>

            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed max-w-xl mb-10">

              Zero Balance Society is a contemporary contemplative
              community inspired by meditation, authentic philosophy,
              cultural dialogue and conscious human connection.

            </p>

            <div className="flex flex-wrap gap-4">

              <button className="px-8 py-4 rounded-full bg-[#b08a47] text-white hover:bg-[#8e6d36] transition shadow-lg">
                Explore
              </button>

              <button className="px-8 py-4 rounded-full border border-neutral-300 bg-white/50 backdrop-blur-sm hover:bg-white transition">
                Upcoming Events
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ROOTS */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div className="relative">

            <div className="absolute inset-0 bg-[#efe7d6] rounded-[40px] blur-3xl opacity-60" />

            <div className="relative bg-[#f5f1e8]/80 rounded-[36px] p-12 border border-black/5 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">

              <img
                src="/images/main-sadhna.png"
                alt="Guru"
                className="w-full max-w-[420px] mx-auto object-contain"
              />

            </div>

          </div>

          <div>

            <div className="uppercase tracking-[0.32em] text-[11px] text-[#b7924e] mb-6">
              India • Roots • Philosophy
            </div>

            <h2 className="text-[64px] leading-[0.95] tracking-[-0.05em] font-light text-black mb-10">
              Rooted in authentic contemplative tradition.
            </h2>

            <div className="space-y-8 text-[20px] leading-[1.9] text-black/65">

              <p>
                Zero Balance Society is a contemporary contemplative community inspired by meditation, authentic Indian philosophy and conscious living.
              </p>

              <p>
                The society creates space for inner stillness, cultural dialogue, awareness and meaningful human connection.
              </p>

              <p>
                Its inspiration draws from traditions connected to the Karauli Shankar Mahadev Ashram in India.
              </p>

            </div>

            <img
              src="/images/KSM-Gold.png"
              alt="KSM"
              className="w-[160px] mt-14 opacity-80"
            />

          </div>

        </div>

      </section>

      {/* COMMUNITY */}
      <section className="relative py-40 overflow-hidden">

        <div className="absolute inset-0">

          <img
            src="/images/mant.png"
            alt="Community"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#f3ecdf]/82" />

        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">

          <div className="uppercase tracking-[0.35em] text-[11px] text-[#b7924e] mb-8">
            Community • Gatherings • Shared Experience
          </div>

          <h2 className="text-[82px] leading-[0.95] tracking-[-0.06em] font-light text-black mb-10">
            A living community.
            <br />
            Not a virtual movement.
          </h2>

          <p className="max-w-4xl mx-auto text-[24px] leading-[1.8] text-black/65">
            Meditation evenings, retreats, philosophical dialogue and journeys to India create opportunities for authentic shared experience and deeper human connection.
          </p>

        </div>

      </section>

      {/* EVENTS */}
      <section className="max-w-7xl mx-auto px-8 py-32">

        <div className="mb-16">

          <div className="uppercase tracking-[0.32em] text-[11px] text-[#b7924e] mb-5">
            Upcoming Events
          </div>

          <h2 className="text-[64px] leading-none tracking-[-0.05em] font-light">
            Gatherings & journeys.
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Prague Meditation Evening",
              date: "June 2026",
            },
            {
              title: "Summer Community Retreat",
              date: "August 2026",
            },
            {
              title: "India Journey 2026",
              date: "October 2026",
            },
          ].map((event) => (

            <div
              key={event.title}
              className="bg-[#f7f3eb] rounded-[30px] p-10 border border-black/5"
            >

              <div className="text-[#b7924e] text-sm mb-8 tracking-[0.18em] uppercase">
                {event.date}
              </div>

              <h3 className="text-[34px] leading-tight tracking-[-0.04em] mb-10">
                {event.title}
              </h3>

              <button className="text-black/60 hover:text-black transition">
                Learn more →
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/5 py-16">

        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between gap-10">

          <div>

            <div className="tracking-[0.35em] uppercase text-[11px] text-[#a88445] mb-6">
              Zero Balance Society
            </div>

            <p className="text-black/50 max-w-md leading-relaxed">
              Contemporary contemplative community inspired by meditation,
              philosophy and conscious living.
            </p>

          </div>

          <div className="text-black/40 text-sm">
            © 2026 Zero Balance Society
          </div>

        </div>

      </footer>

    </main>
  );
}