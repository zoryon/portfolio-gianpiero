"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AnimatedButton = ({
    text,
    path,
    width,
    disabled,
    onClick,
}: {
    text: string,
    path: string,
    width: number,
    disabled: boolean,
    onClick?: () => void,
}) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const strWidth = width.toString() + "px";
    const strHoverWidth = (width + 20).toString() + "px";

    const buttonVariants = {
        initial: { width: strWidth },
        hover: {
            width: strHoverWidth,
            transition: {
                duration: 0.3,
            },
        },
    }

    const lineVariants = {
        initial: {
            width: "0px",
        },
        hover: {
            width: "10px",
            transition: {
                duration: 0.4,
            },
        },
    }

    return (
        <Link
            href={`${path}`}
            onClick={() => {
                if (!disabled && onClick) onClick();
            }}
        >
            <motion.div
                className="w-fit h-[45px] flex justify-end items-center 
                cursor-pointer bg-secondary smallest-title relative text-background
                px-3 hover:opacity-90"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                animate={isHover ? "hover" : "initial"}
                variants={buttonVariants}
                style={{ overflow: "hidden" }}
            >
                {/* fixed text */}
                <span className="absolute left-[37px]">{text}</span>

                {/* line on hover */}
                <motion.div
                    className="w-0 h-[1px] bg-background"
                    animate={isHover ? "hover" : "initial"}
                    variants={lineVariants}
                />
            </motion.div>
        </Link>
    );
};

export default AnimatedButton;
