import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Eternal - Wedding Videography",
    description: "Video matrimoni, Firenze.",
}

const VideographyPage = ({
    children,
}: {
    children: React.ReactNode,
}) => {
    return (
        <>
            {children}
        </>
    )
}

export default VideographyPage;