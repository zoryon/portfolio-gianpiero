"use client";

import { cn } from "@/lib/utils";
import React from "react";

const ScrollArea = ({
    children,
    className,
}: {
    children: React.ReactNode,
    className?: string,
}) => {
    return (
        <div
            className={cn(
                "xl:scroll-area overflow-y-auto h-full scroll-smooth",
                className
            )}
        >
            {children}
        </div>
    );
};

export default ScrollArea;