"use client";

import { useGalleryContext } from "@/contexts/gallery.context";
import { PORTFOLIO_IMAGES } from "@/lib/portfolio-constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

const Gallery = () => {
    const { disableGallery, selectedImage } = useGalleryContext();
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Preload adjacent images whenever currentIndex changes
    useEffect(() => {
        const preloadImage = (index: number) => {
            const img = PORTFOLIO_IMAGES[index];
            if (!img) return;
            
            // Create optimized URL matching Next.js Image component's request
            const params = new URLSearchParams();
            params.set('url', encodeURIComponent(img.src));
            params.set('w', '2000');
            params.set('q', '75');
            const optimizedUrl = `/_next/image?${params.toString()}`;
            
            const imgElement = new window.Image();
            imgElement.src = optimizedUrl;
        };

        // Preload next and previous images
        const nextIndex = (currentIndex + 1) % PORTFOLIO_IMAGES.length;
        const prevIndex = currentIndex === 0 ? PORTFOLIO_IMAGES.length - 1 : currentIndex - 1;
        
        preloadImage(nextIndex);
        preloadImage(prevIndex);
    }, [currentIndex]);

    // Set initial index when an image is selected
    useEffect(() => {
        if (selectedImage) {
            const index = PORTFOLIO_IMAGES.findIndex((img) => img.src === selectedImage);
            if (index !== -1) setCurrentIndex(index);
        }
    }, [selectedImage]);

    // Navigation handlers
    const handleNext = () => setCurrentIndex(prev => (prev + 1) % PORTFOLIO_IMAGES.length);
    const handlePrev = () => setCurrentIndex(prev => (prev === 0 ? PORTFOLIO_IMAGES.length - 1 : prev - 1));

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventScrollOnSwipe: true,
        trackTouch: true,
    });

    const buttonVariants = {
        hidden: (direction: "left" | "right") => ({
            opacity: 0,
            x: direction === "left" ? "-100%" : "100%",
        }),
        visible: {
            opacity: 1,
            x: "0%",
            transition: { duration: 0.5, ease: "easeInOut" },
        },
    };

    return (
        <motion.div
            {...swipeHandlers}
            className={cn(
                `w-screen h-screen fixed left-0 top-0 bg-background z-[9999]
                flex justify-center items-center`,
                selectedImage ? "visible" : "invisible"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: selectedImage ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {selectedImage && (
                <>
                    <motion.button
                        onClick={handlePrev}
                        className="w-20 h-20 absolute left-5 top-1/2
                        transform -translate-y-1/2 z-10 hidden lg:flex
                        justify-center items-center hover:text-subtle
                        duration-300 text-base"
                        custom="left"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={buttonVariants}
                    >
                        <i className="fa-regular fa-arrow-left" />
                    </motion.button>

                    <Image
                        alt="Selected image"
                        src={PORTFOLIO_IMAGES[currentIndex].src}
                        width={2000}
                        height={2000}
                        priority
                        className="w-screen sm:w-auto max-w-[100vw]
                        h-auto sm:h-screen max-h-screen object-cover"
                    />

                    <motion.button
                        onClick={handleNext}
                        className="w-20 h-20 absolute right-5 top-1/2
                        transform -translate-y-1/2 z-10 hidden lg:flex
                        justify-center items-center hover:text-subtle
                        duration-300 text-base"
                        custom="right"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={buttonVariants}
                    >
                        <i className="fa-regular fa-arrow-right" />
                    </motion.button>

                    <div
                        onClick={disableGallery}
                        className="fixed top-1 right-6 text-3xl
                        cursor-pointer px-4 py-1.5 hover:text-subtle
                        duration-300"
                    >
                        <i className="fa-sharp fa-solid fa-xmark" />
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default Gallery;