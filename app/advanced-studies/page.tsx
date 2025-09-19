import Link from "next/link";
import AdvancedStudiesSubNav from "../components/AdvancedStudiesSubNav";

const topics = [
    {
        href: "/advanced-studies/lamrim",
        title: "Lam-rim",
        desc: "Learn more fully about the graded path to enlightenment.",
      },
      {
        href: "/advanced-studies/science-of-mind",
        title: "Science of Mind",
        desc: "Discover how your mind works.",
      },
      {
        href: "/advanced-studies/abhidharma-tenets",
        title: "Abhidharma & Tenet Systems",
        desc: "Gain a systematic understanding of life.",
      },
      {
        href: "/advanced-studies/vajrayana",
        title: "Vajrayana",
        desc: "Understand tantra, mahamudra, dzogchen, and more.",
      },
      {
        href: "/advanced-studies/prayers-rituals",
        title: "Prayers & Rituals",
        desc: "Daily practices, liturgies, and how to use them.",
      },
      {
        href: "/advanced-studies/history-culture",
        title: "History & Culture",
        desc: "People, places, and the development of traditions.",
      },
];

export default function AdvancedStudies() {
    return (
        <main>
            <AdvancedStudiesSubNav />
            <section className="px-6 py-10">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mb-4 text-4xl font-bold">Advanced Studies</h1>
                    <p className="text-lg text-gray-700">
                        Deepen your understanding of Buddhist teachings.
                    </p>
                </div>

                <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
                    {topics.map(t => (
                        <li key={t.href} className="rounded-xl bg-white p-6 shadow hover:bg-amber-50">
                            <Link href={t.href}>
                            <h2 className="text-xl font-semibold">{t.title}</h2>
                            <p className="mt-2 text-gray-600">{t.desc}</p>
                            </Link>
                        </li>))}
                </ul>
            </section>

        </main>
    )
}