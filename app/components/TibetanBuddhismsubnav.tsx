"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const tibetanLinks = [
    { href: "/tibetan-buddhism/about-buddhism", label: "About Buddhism" },
  { href: "/tibetan-buddhism/path-to-enlightenment", label: "Path to Enlightenment" },
  { href: "/tibetan-buddhism/mind-training", label: "Mind Training" },
  { href: "/tibetan-buddhism/tantra", label: "Tantra" },
  { href: "/tibetan-buddhism/audio-courses", label: "Audio Courses" },
  { href: "/tibetan-buddhism/original-texts", label: "Original Texts" },
  { href: "/tibetan-buddhism/spiritual-teachers", label: "Spiritual Teachers" },
];

export default function TibetanBuddhismsubnav() {
    const path = usePathname();
    return (
        <nav className="flex shadow">
            <ul className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-3">
                {tibetanLinks.map((link) => {
                    const active = path.startsWith(link.href);
                    return (
                        <li key={link.href}>
                            <Link href={link.href} className={`${active ? "text-red-500" : "text-gray-500"}`}>{link.label}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}