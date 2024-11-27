import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Eternal - About",
    description: "Gianpiero Spata: Fotografo di Matrimoni a Firenze.",
};

const AboutPage = ({
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

export default AboutPage