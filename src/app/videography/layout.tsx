import { YouTubeThumbnailContextProvider } from "@/contexts/youtube-thumbnail.context";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gianpiero Spata  Videography",
    description: "Video, Firenze.",
}

const VideographyPage = ({
    children,
}: {
    children: React.ReactNode,
}) => {
    return (
        <YouTubeThumbnailContextProvider>
            {children}
        </YouTubeThumbnailContextProvider>
    )
}

export default VideographyPage;