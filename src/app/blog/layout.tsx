import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gianpiero Spata - Idee & Consigli per eventi a Firenze",
    description: "Stai pianificando un evento? Scopri location e consigli utili.",
}

const BlogPage = ({
    children,
}: {
    children: React.ReactNode,
}) => {
    return (
        <>
            {children}
        </>
    );
}

export default BlogPage