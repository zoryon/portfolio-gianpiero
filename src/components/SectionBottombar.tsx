import { BottombarLink } from "@/types/bottombar-link.type";
import Link from "next/link";

const SectionBottombar = ({ array }: { array: BottombarLink[] }) => {
    return (
        <div
            className="w-full h-[80px] fixed xl:absolute left-0 bottom-0
            bg-background flex justify-center items-center gap-8
            text-foreground"
        >
            {array.map((link, i) => {
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

export default SectionBottombar;