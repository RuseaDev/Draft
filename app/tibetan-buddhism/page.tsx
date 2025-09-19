import Link from "next/link";
import TibetanBuddhismsubnav from "../components/TibetanBuddhismsubnav";

const steps = [
    {
        n: 1,
        title: "About Buddhism",
        desc:
          "Learn about Buddhism and the philosophy of happiness founded by the Buddha.",
        href: "/tibetan-buddhism/about-buddhism",
        color: "bg-neutral-900 text-white",
      },
      {
        n: 2,
        title: "Path to Enlightenment",
        desc:
          "Build a stable foundation by following a graded sequence of teachings, insights, and trainings.",
        href: "/tibetan-buddhism/path-to-enlightenment",
        color: "bg-red-500 text-white",
      },
      {
        n: 3,
        title: "Mind Training",
        desc: "Change your attitude through the mind-training methods.",
        href: "/tibetan-buddhism/mind-training",
        color: "bg-red-500 text-white",
      },
      {
        n: 4,
        title: "Tantra",
        desc:
          "Learn about Buddhist tantra—advanced methods for training the mind and realizing our full potential.",
        href: "/tibetan-buddhism/tantra",
        color: "bg-red-500 text-white",
      },
];

const bottom = [
    { href: "/tibetan-buddhism/audio-courses", title: "Audio Courses", desc: "Listen and learn on the go." },
    { href: "/tibetan-buddhism/original-texts", title: "Original Texts", desc: "Read source scriptures and translations." },
    { href: "/tibetan-buddhism/spiritual-teachers", title: "Spiritual Teachers", desc: "Discover teachers and lineages." },
];

export default function TibetanBuddhism() {
    return (
        <main>
            <TibetanBuddhismsubnav />

            <section className="px-6 py-12 text-center">
                <h1 className="mb-4 text-5xl font-bold">Tibetan Buddhism</h1>
                <p className="mx-auto max-w-4xl text-lg text-gray-700">
                    Tibetan Buddhism is a rich and diverse tradition that has evolved over centuries.
                </p>
            </section>

            <section className="px-6 pb-10">
                <ul className="mx-auto max-w-4xl border-l pl-6">
                    {steps.map((s, i) => (
                        <li key={s.n} className="relative ml-6 pb-10">
                            <span className={`absolute -left-11 top-9 flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold ${s.color}`}>{s.n}</span>
                            <Link href={s.href} className="group block"><h3 className="text-2xl font-semibold group-hover:text-amber-700">{s.title}</h3></Link>
                            <p className="mt-2 max-w-3xl text-gray-600">{s.desc}</p>
                        </li>
                    ))}
                
                </ul>

                <div className="mx-auto mt-4 max-w-4xl">
                    <Link href="/tibetan-buddhism/about-buddhism" 
                    className="inline-bock rounded-xl border border-red-500 px-6 py-3 text-lg font-semibold text-red-600 hover:bg-red-50">
                    Start Your Journey
                    </Link>
                </div>
            </section>

            <section className="px-6 pb-16">
                <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols:3">
                    {bottom.map((b) => (
                        <li key={b.href} className="rounded-xl bg-white p-6 shadow hover:bg-amber-50">
                            <Link href={b.href}>
                            <h4 className="text-xl font-semibold">{b.title}</h4></Link>
                            <p className="mt-2 text-gray-600">{b.desc}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}