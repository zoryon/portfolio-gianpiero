import { cn } from "@/lib/utils"
import SectionTitle from "./SectionTitle"

const Section = ({ 
    children,
    className,
    title,
    description,
    id,
} : {
    children: React.ReactNode,
    className?: string,
    title: string,
    description: string,
    id?: string,
}) => {
    return (
        <section 
            className={cn(
                `sm:px-8 2xl:px-20 py-16 flex flex-col gap-5 relative`,
                className,
            )}
            id={id}
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
    );
}

export default Section;