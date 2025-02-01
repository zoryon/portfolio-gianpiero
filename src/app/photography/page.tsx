"use client";

import { PORTFOLIO_IMAGES } from "@/lib/portfolio-constants";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useGalleryContext } from "@/contexts/gallery.context";

const PhotographyPage = () => {
    return (
        <section
            className="columns-1 sm:columns-2 lg:columns-4
            overflow-x-hidden gap-2 px-1 sm:px-5 space-y-2"
        >
            <PortfolioItems />
        </section>
    )
}

const PortfolioItems = React.memo(() => {
    const { enableGallery } = useGalleryContext();

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        PORTFOLIO_IMAGES.map((image, i) => {
            const isHovered: boolean = i === hoveredIndex;

            return (
                <motion.div
                    key={i}
                    className={cn(
                        "overflow-hidden relative transition-opacity duration-100",
                        !isMounted ? "opacity-0" : "opacity-100"
                    )}
                    onHoverStart={() => setHoveredIndex(i)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    onClick={() => setHoveredIndex(isHovered ? null : i)}
                >
                    <motion.div
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full h-auto origin-center z-10"
                    >
                        <Image
                            alt={image.filter}
                            src={image.src}
                            width={1000}
                            height={1000}
                            loading="lazy"
                            unoptimized={false}
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>

                    {/* top right search button */}
                    <motion.div
                        animate={{ 
                            opacity: isHovered ? 0.8 : 0,
                            scale: hoveredIndex === i ? 1 : 0,
                        }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute top-5 right-5 bg-foreground rounded-full size-10 
                        flex justify-center items-center text-background text-xs
                        cursor-pointer"
                        onClick={() => enableGallery({ src: image.src })}
                    >
                        <i className="fa-regular fa-magnifying-glass"></i>
                    </motion.div>

                    {/* bottom shadow effect */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent" />
                    </motion.div>
                </motion.div>
            );
        })
    );
});


export default PhotographyPage;