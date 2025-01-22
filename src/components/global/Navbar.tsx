"use client"

import Image from "next/image";
import { LeftDesktopNavbar, RightDesktopNavbar } from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav 
            className="w-screen h-[90px] fixed left-0 top-0 bg-background px-8 lg:px-20
            flex justify-between lg:justify-center items-center gap-20 z-[99]"
        >
            {/* left desktop navbar */}
            <LeftDesktopNavbar />

            {/* logo */}
            <Link href="/">
                <Image
                    alt="logo"
                    src="/images/logo/logo.png"
                    width={1000}
                    height={1000}
                    className="w-[160px] h-auto"
                    priority
                />
            </Link>

            {/* right desktop navbar */}
            <RightDesktopNavbar />

            {/* mobile and tablet navbar */}
            <MobileNavbar />
        </nav>
    )
}

export default Navbar;