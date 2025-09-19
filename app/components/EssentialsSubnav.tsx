"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const items = [
    {href: "/essentials", label:"Universal Values"},
    {href: "/essentials/what-is", label:"What is ..."},
    {href:"/essentials/how-to", label:"How to ..."},
    {href:"/essentials/meditations", label:"Meditations"},
    {href:"/essentials/interviews", label:"Interviews"},

]


export default function EssentialsSubnav() {
    const path = usePathname();
    return (
        <nav className="flex items-right px-6 py-3 shadow">
            <ul className="flex max-w-6xl gap-6 px-4">
                {items.map(i => (
                    <li key={i.href}>
                        <Link href={i.href} className={`${path === i.href ? "border-b-2 border-red-500" : "text-gray-600"}`}>{i.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}