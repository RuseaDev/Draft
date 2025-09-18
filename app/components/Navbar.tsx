import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-3 shadow">
            <div className="font-bold text-xl">
                <Link href="/">STUDY BUDDHISM</Link></div>

            <div className="flex space-x-6">
                <Link href="/essentials">Essentials</Link>
                <Link href="/tibetan-buddhism">Tibetan Buddhism</Link>
                <Link href="/advanced-studies">Advanced Studies</Link>
                <Link href="/about-us">About Us</Link>
                <Link href="/" className="text-red-600">Donate</Link>
            </div>

            <div className="flex items-center space-x-4">
                <Link href="/glossary">Glossary</Link>
                <Link href="/video">Video</Link>
                <Link href="/courses">Courses</Link>
                <Link href="/" className="text-red-600">Account</Link>
                <input type="text" placeholder="Search" className="border px-2 py-1" />
            </div>
        </nav>
    )
}