"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import LoaderLine from "@/components/LoaderLine";
import Link from "next/link";
import Title from "@/components/Title";
import AnimatedButton from "@/components/AnimatedButton";

export default function Home() {
  const [shouldAnimateLine, setShouldAnimateLine] = useState<boolean>(false)
  const [shouldAnimateOthers, setShouldAnimateOthers] = useState<boolean>(false)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  const handleAnimationComplete = () => {
    setIsAnimating(false)
  }

  const arrowVariants = {
    initial: { x: 0, },
    hover: { x: 20, },
  }

  const iconVariants = {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="overflow-hidden sm:px-5">
      <div className="relative text-background">
        <div
          className="w-full h-[calc(100vh-90px)] 
          sm:h-[calc(100vh-90px-20px)] relative -z-10"
        >
          <Image
            alt="home background"
            src="/images/bg/home-bg.jpg"
            width={5000}
            height={5000}
            className="w-full h-full object-cover select-none
            filter-whitish object-right pointer-events-none"
          />
        </div>

        <div
          className="w-[85%] h-[55%] md:h-[70%] lg:h-[78%]
          absolute left-[4%] md:left-[9%] top-[85px] md:top-[95px]"
        >
          <div className="relative w-full h-full">
            {/* top left - follow section */}
            <section
              className="absolute left-0 top-0 tracking-widest
              hidden md:flex flex-col gap-5 cursor-pointer"
              onMouseEnter={() => {
                setShouldAnimateOthers(true)
                if (!isAnimating) {
                  setShouldAnimateLine(true);
                  setIsAnimating(true);
                }
              }}
              onMouseLeave={() => {
                setShouldAnimateLine(false)
                setShouldAnimateOthers(false)
              }}
            >
              {/* follow text */}
              <div className="flex items-center gap-8 smallest-title">
                <span>follow</span>
                <motion.i
                  className="fa-regular fa-arrow-right text-xs"
                  initial="initial"
                  animate={shouldAnimateOthers ? "hover" : "initial"}
                  variants={arrowVariants}
                  transition={{ duration: 0.3 }}
                />

                {/* brand icons */}
                <motion.div
                  className="flex items-center gap-5 text-sm ml-2"
                  initial="initial"
                  animate={shouldAnimateOthers ? "visible" : "initial"}
                  variants={iconVariants}
                >
                  <Link
                    href="https://www.instagram.com/gianproduction_/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </motion.div>
              </div>
            </section>

            {/* top right - loader line */}
            <section className="absolute top-0 right-0">
              <LoaderLine
                trigger={shouldAnimateLine}
                onComplete={handleAnimationComplete}
              />
            </section>

            {/* bottom left - title and paragraph */}
            <section className="absolute left-0 bottom-2 sm:bottom-14">
              <div className="small-title"></div>
              <Title title={"weddings"} />
              <p
                className="max-w-[400px] text-xs mt-2 mb-10 sm:mb-16 tracking-tight 
                leading-[1.4rem] font-bold"
              >
                &quot;Lascia che il tuo giorno speciale diventi un&apos;
                opera d&apos;arte senza tempo.{" "}
                Fotografia e video per matrimoni che raccontano emozioni&quot;
              </p>
              <AnimatedButton
                text="richiedi preventivo"
                path="/contatti"
                width={190}
              />
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
