"use client"

import { SKILLS_ARRAY } from "@/lib/skills-constants";
import { SkillType } from "@/types/skill.type";
import { motion } from "framer-motion";

const SkillsDisplay = () => {
    return (
        <div className="flex flex-col justify-center gap-5 mb-8">
            {SKILLS_ARRAY.map(skill => {
                return (
                    <Skill
                        key={skill.title}
                        skill={skill}
                    />
                );
            })}
        </div>
    );
}

export const Skill = ({
    skill,
}: {
    skill: SkillType,
}) => {
    return (
        <div className="w-full flex flex-col gap-2">
            {/* skill title & percentage */}
            <div 
                className="w-full italic text-xs font-bold
                flex justify-between items-center"
            >
                <div>{skill.title}</div>
                <div>{skill.percentage}%</div>
            </div>

            {/* skill percentage bar bg */}
            <div
                className="w-full h-[6px] bg-black"
            >
                {/* actual percentage bar */}
                <motion.div
                    className="h-full bg-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.8 }}
                />
            </div>
        </div>
    );
}

export default SkillsDisplay;