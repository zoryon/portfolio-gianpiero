import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Eternal - Idee & Consigli per Matrimoni a Firenze",
    description: "Stai pianificando il tuo Matrimonio a Firenze? Scopri location e consigli utili.",
};

const BlogPage = ({
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

export default BlogPage