"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const items = [
  { href: "/advanced-studies/lamrim", label: "Lam-rim" },
  { href: "/advanced-studies/science-of-mind", label: "Science of Mind" },
  { href: "/advanced-studies/abhidharma-tenets", label: "Abhidharma & Tenet Systems" },
  { href: "/advanced-studies/vajrayana", label: "Vajrayana" },
  { href: "/advanced-studies/prayers-rituals", label: "Prayers & Rituals" },
  { href: "/advanced-studies/history-culture", label: "History & Culture" },
];

export default function AdvancedStudiesSubNav() {
  const path = usePathname();
  return (
    <nav className="flex shadow">
      <ul className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4">
        {items.map(i => {
          const active = path.startsWith(i.href);
          return (
            <li key={i.href}>
              <Link
                href={i.href}
                className={`block py-3 ${active ? "font-semibold text-amber-700" : "text-gray-700 hover:text-amber-700"}`}

              >
                {i.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
