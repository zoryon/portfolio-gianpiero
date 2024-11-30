import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Eternal - About",
    description: "Gianpiero Spata: Fotografo di Matrimoni a Firenze.",
}

const AboutPage = ({
    children,
}: {
    children: React.ReactNode,
}) => {
    return (
        <div className="overflow-x-hidden">
            {children}
        </div>
    );
}

export default AboutPage;