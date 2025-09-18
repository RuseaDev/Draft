import EssentialsSubnav from "../components/EssentialsSubnav";
import ArticleList from "../components/ArticleList";

const items = [
    {
        slug: "happy-mind-through-ethics",
        title: "Achieving a Happy Mind through Ethics",
        author: "The 14th Dalai Lama",
        blurb:
          "Secular ethics and warm-heartedness as the key to happiness.",
      },
      {
        slug: "lead-an-ethical-life",
        title: "How to Lead an Ethical Life",
        author: "The 14th Dalai Lama",
        blurb:
          "Help others if possible; at least do no harm.",
      },
      {
        slug: "inner-peace",
        title: "Achieving Peace through Inner Peace",
        author: "The 14th Dalai Lama",
        blurb:
          "World peace starts from inner peace and warm relations.",
      },
      {
        slug: "honesty-trust-friendship",
        title: "Honesty, Trust and Friendship",
        author: "The 14th Dalai Lama",
        blurb:
          "Sincere concern for others brings happiness to all.",
      },
]


export default function Essentials() {
    return (
        <>
        <EssentialsSubnav />

        <div className="mx-auto max-w-6xl px-4 py-4 text-sm text-gray-500">
            Essentials -- Universal Values
        </div>
        
        <section className="mx-auto max-w-3xl px-4 py-10 text-center">
            <img 
            src="/globe.svg"
            alt="Universal Values"
            className="mx-auto mb-6 h-6 w-6 opacity-80"></img>
            <h1 className="mb-4 text-4xl font-bold">Universal Values</h1>
            <p className="text-lg text-gray-700">
                Kindness, warmth, sincerity, and compassion are the foundation of a happy life.
            </p>
        </section>

        <ArticleList items={items} />
        </>
    )
}