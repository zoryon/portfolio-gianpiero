"use client"

import { NAVBAR_LINKS } from "@/lib/navbar-constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const DesktopNavbar = () => {
    return (
        <ul className="hidden lg:flex justify-center items-center gap-2">
            <NavbarLinks />
        </ul>
    )
}

const NavbarLinks = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const pathname = usePathname()
    
    return (
        NAVBAR_LINKS.map((link, i) => {
            const isActive = link.path === pathname
            const shouldAnimate = i === hoveredIndex

            return (
                <li
                    key={link.path}
                    className="relative w-auto h-[90px] flex 
                    justify-center items-center"
                >
                    <Link
                        href={link.path}
                        className={cn(
                            `w-full h-[45px] uppercase text-[0.7rem] leading-[0.9rem]
                            font-bold flex justify-center items-center px-2
                            duration-200 relative`,
                            isActive ? "text-subtle" : "text-foreground"
                        )}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {link.label}

                        <motion.div
                            className="absolute bottom-0 left-0 w-full 
                            h-[1px] bg-foreground"
                            initial={{ opacity: 0 }}
                            animate={{
                                width: shouldAnimate ? "100%" : "0%",
                                opacity: 1
                            }}
                            transition={{
                                opacity: { duration: 1.5, ease: "easeInOut" },
                                width: { duration: 0.3, ease: "easeInOut" }, 
                            }}
                        />
                    </Link>
                </li>
            )
        })
    );
};

export default DesktopNavbar