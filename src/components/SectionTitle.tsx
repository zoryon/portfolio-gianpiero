import { Separator } from "./ui/separator";

const SectionTitle = ({
    title,
    description,
}: {
    title: string,
    description: string,
}) => {
    return (
        <div className="mb-5">
            <h1 className="font-bold text-2xl tracking-tighter mb-5 uppercase">
                {title}
            </h1>
            <p className="w-[80%] 2xl:w-[60%] text-xs font-bold italic">
                {description}
            </p>

            <Separator className="mt-4" />
        </div>
    );
}

export default SectionTitle;