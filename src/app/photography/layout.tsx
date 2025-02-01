import Gallery from "@/components/Gallery";
import { GalleryContextProvider } from "@/contexts/gallery.context";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gianpiero Spata - Photography",
    description: "Foto, Firenze.",
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
    );
}

export default PhotographyPage