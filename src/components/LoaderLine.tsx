"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderLineProps {
    trigger: boolean;
    onComplete: () => void;
}

const LoaderLine = ({ trigger, onComplete }: LoaderLineProps) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (trigger && !shouldAnimate) {
            setShouldAnimate(true);
        }
    }, [trigger, shouldAnimate]);

    return (
        <motion.div
            className="hidden md:block relative w-[150px] h-[1px]
            bg-gray-300 overflow-hidden -z-10"
        >
            <motion.div
                className="absolute top-0 left-0 h-full bg-secondary"
                initial={{ width: "0%" }}
                animate={shouldAnimate ? { width: "100%" } : { width: "0%" }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                }}
                onAnimationComplete={() => {
                    setShouldAnimate(false);
                    onComplete();
                }}
            />
        </motion.div>
    );
}

export default LoaderLine;