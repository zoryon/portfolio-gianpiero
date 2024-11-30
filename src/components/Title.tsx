import { cn } from "@/lib/utils";
import { Alex_Brush } from "next/font/google";

export const alexBrush = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
});

const Title = ({ title }: { title: string }) => {
    const parts: string[] = [title[0], title.slice(1)];

    return (
        <div
            className={cn(
                `font-extrabold 
                text-[3.5rem] md:text-[5.5rem] mt-3 -mb-4`,
                alexBrush.className
            )}
            >
            <span className="uppercase">{parts[0]}</span>
            <span className="lowercase">{parts[1]}</span>
        </div>
    );
}

export default Title;