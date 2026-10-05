const menu = [
  {
    name: "Butter Bun",
    detail: "Soft bun, a gloss of butter, still warm from the tray.",
    price: "$1.25",
    swatch: "bg-sun",
  },
  {
    name: "Jam Bun",
    detail: "Strawberry jam tucked into a golden, slightly sticky bun.",
    price: "$1.50",
    swatch: "bg-berry",
  },
  {
    name: "Cream Bun",
    detail: "A cloud of sweet cream in a bun split while it is hot.",
    price: "$2.00",
    swatch: "bg-sky",
  },
  {
    name: "Veg Bun",
    detail: "Spiced potato and peas, mild enough for an everyday snack.",
    price: "$1.75",
    swatch: "bg-leaf",
  },
  {
    name: "Egg Bun",
    detail: "Fluffy egg, a pinch of chili, folded into a toasted bun.",
    price: "$2.25",
    swatch: "bg-tomato",
  },
  {
    name: "Cheese Bun",
    detail: "Melted cheese under a toasted top. The stall favorite.",
    price: "$2.50",
    swatch: "bg-sun",
  },
] as const;

const reasons = [
  {
    title: "Baked through the day",
    text: "The tray is refilled from morning onward, so the bun you get is the one that just came out.",
    tone: "bg-sun text-ink",
  },
  {
    title: "Prices that stay kind",
    text: "Most buns sit between $1.25 and $2.50. A filling snack without a cafe bill.",
    tone: "bg-tomato text-white",
  },
  {
    title: "Walk up and go",
    text: "No app, no queue number. Point at the bun, pay, and keep walking.",
    tone: "bg-leaf text-white",
  },
] as const;

function BunMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <ellipse cx="32" cy="46" rx="22" ry="10" fill="#F4A259" />
      <path
        d="M10 40c0-14 10-26 22-26s22 12 22 26c0 2-20 6-22 6S10 42 10 40Z"
        fill="#FFD23F"
      />
      <path
        d="M16 36c2-10 8-16 16-16 6 0 11 4 14 10"
        fill="none"
        stroke="#fff7df"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="24" cy="30" r="2" fill="#C47A2B" />
      <circle cx="34" cy="26" r="2" fill="#C47A2B" />
      <circle cx="42" cy="32" r="2" fill="#C47A2B" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-20 border-b-4 border-ink bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-sun ring-4 ring-ink">
              <BunMark className="h-8 w-8" />
            </span>
            <span className="font-display text-2xl font-bold tracking-tight">
              Bun Stop
            </span>
          </a>
          <nav className="flex items-center gap-2 text-sm font-extrabold sm:gap-5 sm:text-base">
            <a href="#menu" className="rounded-full px-3 py-2 hover:bg-sun">
              Menu
            </a>
            <a href="#stall" className="rounded-full px-3 py-2 hover:bg-sun">
              Stall
            </a>
            <a
              href="#visit"
              className="rounded-full bg-ink px-4 py-2 text-sun hover:bg-berry"
            >
              Visit
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className="relative overflow-hidden">
          <div className="pointer-events-none absolute -left-16 top-10 h-48 w-48 rounded-full bg-berry/90" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-sky" />
          <div className="pointer-events-none absolute right-24 top-8 h-28 w-28 rounded-full bg-leaf" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold ring-4 ring-ink">
                <span className="h-3 w-3 rounded-full bg-tomato" />
                Neighborhood bun stall
              </p>
              <h1 className="mt-6 max-w-xl font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
                Warm buns.
                <span className="block text-tomato">Honest prices.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg font-semibold leading-relaxed text-ink/80">
                Bun Stop is a small stall with a full tray. Butter, jam, cream,
                and filled buns, sold for a price that still feels like a treat
                on the way home.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#menu"
                  className="rounded-full bg-tomato px-6 py-3 text-lg font-extrabold text-white ring-4 ring-ink hover:bg-berry"
                >
                  See today&apos;s buns
                </a>
                <a
                  href="#visit"
                  className="rounded-full bg-sun px-6 py-3 text-lg font-extrabold text-ink ring-4 ring-ink hover:bg-white"
                >
                  Find the stall
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -left-4 top-8 -rotate-6 rounded-2xl bg-berry px-4 py-3 font-display text-lg font-bold text-white ring-4 ring-ink">
                From $1.25
              </div>
              <div className="rounded-[2rem] bg-white p-6 ring-4 ring-ink">
                <div className="flex h-10 overflow-hidden rounded-t-2xl ring-4 ring-ink">
                  <span className="flex-1 bg-tomato" />
                  <span className="flex-1 bg-sun" />
                  <span className="flex-1 bg-leaf" />
                  <span className="flex-1 bg-sky" />
                  <span className="flex-1 bg-berry" />
                </div>
                <div className="mt-6 grid place-items-center rounded-3xl bg-cream py-6">
                  <BunMark className="h-36 w-36" />
                </div>
                <p className="mt-5 font-display text-3xl font-bold">
                  Butter bun
                </p>
                <p className="mt-1 font-semibold text-ink/70">
                  The one people stop for on the way to work.
                </p>
                <p className="mt-4 inline-block rounded-full bg-ink px-4 py-2 font-display text-2xl font-bold text-sun">
                  $1.25
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="bg-ink text-cream">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-extrabold uppercase tracking-[0.2em] text-sun">
                  The tray
                </p>
                <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
                  Today&apos;s buns
                </h2>
              </div>
              <p className="max-w-sm font-semibold text-cream/80">
                Prices stay on the card. If a bun sells out, the next batch is
                usually already in the oven.
              </p>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {menu.map((item) => (
                <li
                  key={item.name}
                  className="rounded-3xl bg-cream p-5 text-ink ring-4 ring-sun"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`mt-1 h-5 w-5 shrink-0 rounded-full ring-4 ring-ink ${item.swatch}`}
                    />
                    <span className="rounded-full bg-ink px-3 py-1 font-display text-lg font-bold text-sun">
                      {item.price}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold">
                    {item.name}
                  </h3>
                  <p className="mt-2 font-semibold leading-relaxed text-ink/75">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="stall" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            A stall, not a sit-down.
          </h2>
          <p className="mt-4 max-w-2xl text-lg font-semibold text-ink/75">
            We keep the menu short so every bun stays simple, fresh, and priced
            for a weekday.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {reasons.map((reason) => (
              <li
                key={reason.title}
                className={`rounded-3xl p-6 ring-4 ring-ink ${reason.tone}`}
              >
                <h3 className="font-display text-2xl font-bold">
                  {reason.title}
                </h3>
                <p className="mt-3 font-semibold leading-relaxed opacity-90">
                  {reason.text}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="visit" className="px-5 pb-16">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] ring-4 ring-ink md:grid-cols-2">
            <div className="bg-berry px-6 py-10 text-white sm:px-10">
              <p className="font-extrabold uppercase tracking-[0.2em] text-sun">
                Come by
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                Market Lane corner
              </h2>
              <p className="mt-4 max-w-md text-lg font-semibold text-white/90">
                Look for the striped awning beside the flower cart. If you can
                smell butter, you are close.
              </p>
              <dl className="mt-8 space-y-4 font-semibold">
                <div>
                  <dt className="text-sun">Hours</dt>
                  <dd>Monday–Saturday, 7:30am – 8:00pm</dd>
                  <dd>Sunday, 8:00am – 2:00pm</dd>
                </div>
                <div>
                  <dt className="text-sun">Pay</dt>
                  <dd>Cash or card at the window</dd>
                </div>
              </dl>
            </div>
            <div className="flex flex-col justify-between bg-sun p-6 text-ink sm:p-10">
              <div>
                <div className="flex h-12 overflow-hidden rounded-2xl ring-4 ring-ink">
                  <span className="flex-1 bg-tomato" />
                  <span className="flex-1 bg-white" />
                  <span className="flex-1 bg-leaf" />
                  <span className="flex-1 bg-white" />
                  <span className="flex-1 bg-sky" />
                  <span className="flex-1 bg-white" />
                  <span className="flex-1 bg-berry" />
                </div>
                <p className="mt-6 font-display text-3xl font-bold">
                  Two cream buns, $3.50
                </p>
                <p className="mt-2 font-semibold text-ink/80">
                  The weekday pair. Ask at the window while they last.
                </p>
              </div>
              <a
                href="#menu"
                className="mt-8 inline-flex w-fit rounded-full bg-ink px-6 py-3 text-lg font-extrabold text-sun hover:bg-berry"
              >
                Pick a bun
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t-4 border-ink bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 font-bold">
          <p className="flex items-center gap-2">
            <BunMark className="h-8 w-8" />
            Bun Stop
          </p>
          <p className="text-ink/70">Fresh buns. Fair prices. Open daily.</p>
        </div>
      </footer>
    </div>
  );
}
