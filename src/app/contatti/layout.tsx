import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gianpiero Spata - Photography & Videography",
    description: "Contattaci per Foto & Video a Firenze.",
}

const ContattiPage = ({
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

export default ContattiPage;