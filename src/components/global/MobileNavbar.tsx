"use client"

import { NAVBAR_LINKS } from "@/lib/navbar-constants";
import { getLinkProps } from "@/lib/navbar-utils";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

const MobileNavbar = () => {
    const [isShowing, setIsShowing] = useState<boolean>(false);

    return (
        <div className="block lg:hidden">
            <div
                className="cursor-pointer"
                onClick={() => setIsShowing(!isShowing)}
            >
                <i className={cn(
                    isShowing 
                        ? "fa-regular fa-bars-staggered text-xl"
                        : "fa-regular fa-bars text-xl"
                )} />
            </div>

            <AnimatePresence>
                {isShowing && (
                    <motion.div
                        className="fixed top-[90px] right-0 w-[300px] h-fit 
                        bg-secondary shadow-lg p-4 sm:p-6 z-[9999]"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 15 }}
                        transition={{ 
                            duration: 0.35,
                            ease: "easeOut"
                        }}
                    >
                        <ul className="relative z-50">
                            <NavbarLinks 
                                closeState={isShowing}
                                closeMenuFn={setIsShowing}
                            />
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const NavbarLinks = ({
    closeState,
    closeMenuFn,
}: {
    closeState: boolean,
    closeMenuFn: Dispatch<SetStateAction<boolean>>
}) => {
    const pathname = usePathname();

    return (
        NAVBAR_LINKS.map((link) => {
            const { href, textColor, isBlocked } = getLinkProps(
                link.label,
                pathname,
            );

            return (
                <li 
                    key={link.path}
                    className="relative w-auto h-[35px] flex 
                    justify-start items-center z-50"
                >
                    <Link 
                        href={href} 
                        className={cn( 
                            `w-full h-full small-title flex justify-start
                            items-center px-3 hover:text-subtle duration-200`,
                            textColor
                        )}
                        onClick={() => isBlocked ? null : closeMenuFn(!closeState)}
                    >
                        {link.label}
                    </Link>
                </li>
            );
        })
    );
};

export default MobileNavbar;
