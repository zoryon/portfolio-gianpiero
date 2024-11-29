import { Separator } from "./ui/separator"

const SectionTitle = ({
    title,
    description,
}: {
    title: string,
    description: string,
}) => {
    return (
        <div className="mb-5">
            <h1 className="font-bold text-2xl tracking-tighter mb-5">
                {title}
            </h1>
            <p className="text-xs font-bold italic">{description}</p>

            <Separator className="mt-4" />
        </div>
    )
}

export default SectionTitle