import { cn } from "@/lib/utils"
import SectionTitle from "./SectionTitle"

const AboutSection = ({ 
    children,
    className,
    title,
    description,
} : {
    children: React.ReactNode,
    className?: string,
    title: string,
    description: string,
}) => {
    return (
        <section 
            className={cn(
                `sm:px-8 2xl:px-16 py-16 flex flex-col gap-5 relative`,
                className,
            )}
        >
            {/* title */}
            <SectionTitle
                title={title}
                description={description}
            />

            {/* main body */}
            {children}

            {/* decoration line */}
            <div
                className="w-[60px] h-[1px] bg-foreground
                absolute left-0 bottom-0"
            />
        </section>
    )
}

export default AboutSection