"use client"

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"

const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "#" },
    { name: "Produk", href: "#" },
    { name: "Kontak", href: "#" }
]

export default function Navbar() {
    const [menuState, setMenuState] = useState(false);
    const pathName = usePathname();
    return (
        <>
            <header>
                <nav
                    data-state={menuState && 'active'}
                    className="fixed top-0 left-0 right-0 z-20 w-full bg-chart-3 backdrop-blur lg:dark:bg-transparent">
                    <div className="m-auto container px-6">
                        <div className="flex flex-wrap items-center justify-between gap-6 px-2 py-4 lg:gap-0 lg:py-3">
                            <div className="flex w-full justify-between lg:w-auto">
                                <Link
                                    href="/"
                                    aria-label="home"
                                    className="flex items-center space-x-2">
                                    <Image
                                        src="/img/nexativelogo.webp"
                                        alt="Logo"
                                        width={40}
                                        height={40}
                                    />
                                </Link>

                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-secondary" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                                </button>
                            </div>

                            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-xl border border-border/30 p-4 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                                <div className="lg:pr-4">
                                    <ul className="text-base md:text-lg lg:flex lg:gap-8 lg:space-y-0">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={item.href}
                                                    className={`
                                                        block duration-150 p-4 md:px-4 md:py-2 rounded-lg ps-4
                                                        ${pathName === item.href
                                                            ? "bg-secondary text-white"
                                                            : "text-secondary hover:text-accent-foreground md:hover:bg-secondary/80 md:hover:text-white hover:bg-muted"
                                                        }
                                                    `}
                                                >
                                                    <span>{item.name}</span>
                                                    <hr className="block md:hidden mt-2 md:mt-0 border border-secondary/30" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}