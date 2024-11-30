import { ABOUT_BOTTOMBAR_LINKS } from "@/lib/about-bottombar-constants";
import Link from "next/link";

const AboutBottombar = () => {
    return (
        <div
            className="w-full h-[80px] fixed xl:absolute left-0 bottom-0
            bg-secondary flex justify-center items-center gap-8
            text-background"
        >
            {ABOUT_BOTTOMBAR_LINKS.map((link, i) => {
                return (
                    <Link
                        key={link.title + i}
                        className="small-title"
                        href={link.href}
                    >
                        {link.title}
                    </Link>
                )
            })}
        </div>
    );
}

export default AboutBottombar;