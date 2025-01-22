import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gianpiero Spata - About",
    description: "Gianpiero Spata: Fotografo a Firenze.",
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