import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Eternal - Wedding Photography & Videography",
    description: "Contattaci per Foto & Video a Firenze.",
};

const ContattiPage = ({
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

export default ContattiPage