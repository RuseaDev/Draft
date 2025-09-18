import Link from "next/link";

type Item = {slug:string; title: string; author:string; blurb: string};

export default function ArticleList({items}: {items: Item[]}) {
    return (
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-2">
            {items.map(a => (
                <Link key={a.slug} href={`/articles/${a.slug}`} className="group">
                    <h3 className="text-x font-semibold group-hover:text-red-600">
                        {a.title}
                    </h3>
                    <p className="text-sm text-gray-500">{a.author}</p>
                    <p className="mt-2 text-gray-700">{a.blurb}</p>
                </Link>
            ))}
        </div>
    )
}