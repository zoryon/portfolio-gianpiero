import Gallery from "@/components/Gallery";
import { GalleryContextProvider } from "@/contexts/gallery.context";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Eternal - Wedding Photography",
    description: "Foto matrimoni, Firenze.",
}

const PhotographyPage = ({
    children,
}: {
    children: React.ReactNode,
}) => {
    return (
        <GalleryContextProvider>
            {children}
            <Gallery />
        </GalleryContextProvider>
    )
}

export default PhotographyPage