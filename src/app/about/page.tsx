import { ABOUT_BOTTOMBAR_LINKS } from "@/lib/about-bottombar-constants";
import SectionBottombar from "@/components/SectionBottombar";
import Section from "@/components/Section";
import AnimatedButton from "@/components/AnimatedButton";
import Copyright from "@/components/Copyright";
import ScrollArea from "@/components/ScrollArea";
import ServicesDisplay from "@/components/ServicesDisplay";
import SkillsDisplay from "@/components/SkillsDisplay";
import StatsDisplay from "@/components/StatsDisplay";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
    return (
        <section
            className="w-screen xl:h-[calc(100vh-90px)] 
            flex flex-col xl:flex-row items-center"
        >
            {/* left panel */}
            <div>
                <Image
                    alt="Company Image"
                    src="/images/about/company-1.jpg"
                    width={2000}
                    height={2000}
                    className="w-screen xl:w-[44.5vw] h-[40.5vh] md:h-[55vh]
                    xl:h-[calc(100vh-90px)] object-cover object-bottom"
                />
            </div>

            {/* right panel */}
            <div className="relative">
                {/* scroll area */}
                <ScrollArea
                    className="w-full xl:w-[55.5vw] h-fit
                    xl:h-[calc(100vh-90px)] px-5 sm:px-8 2xl:px-16
                    py-8 2xl:py-16"
                >
                    <HistorySection id="history" />
                    <SkillsSection id="skills" />
                    <ServicesSection id="services" />
                </ScrollArea>

                {/* bottombar --> navigate through section of scroll area */}
                <SectionBottombar array={[...ABOUT_BOTTOMBAR_LINKS]} />
            </div>

        </section>
    );
}

const HistorySection = ({ id }: { id?: string }) => {
    return (
        <Section
            title="La mia storia"
            description="Un breve racconto su come sono diventato fotografo"
            id={id}
        >
            <p className="text-xs font-bold leading-[1.35rem] mb-8">
                Ciao a tutti! Sono Gianpiero, un fotografo di Firenze con sei anni di esperienza nel settore e il creatore di Eternal Studio, un progetto dedicato ai matrimoni. 
                Ho sempre avuto una passione per la fotografia, ma solo negli ultimi tre anni ho deciso di trasformarla in una professione. Durante questo percorso, 
                ho migliorato le mie abilità seguendo corsi specializzati, imparando a gestire luce e flash per creare scatti memorabili.
                Ho anche acquisito competenze nei principali software di editing come Photoshop,
                Lightroom e Capture One, strumenti fondamentali per dare vita alla mia visione artistica. 
                Con Eternal Studio, collaboro con videomaker selezionati per offrire un servizio completo di foto e video,
                catturando ogni dettaglio del giorno più importante.
                Sono orgoglioso del mio percorso e non vedo l&apos;ora di condividere i miei lavori con voi!
            </p>

            {/* stats container */}
            <StatsDisplay />

            <AnimatedButton
                path="/contatti"
                text="richiedi preventivo"
                width={190}
            />
        </Section>
    );
}

const SkillsSection = ({ id }: { id?: string }) => {
    return (
        <Section
            title="Skills and Attainments"
            description="Le skill che abbiamo ottenuto in questi anni"
            id={id}
        >
            <SkillsDisplay />
        </Section>
    );
}

const ServicesSection = ({ id }: { id?: string }) => {
    return (
        <Section
            title="Servizi e Prezzi"
            description="Prezzi competitivi: Offriamo servizi fotografici e video di alta qualità
            a tariffe competitive, garantendo un ottimo rapporto qualità-prezzo."
            id={id}
        >
            <main>
                <ServicesDisplay />

                <p className="text-xs font-bold mt-10 mb-16">
                    Scegliendomi come fotografo, potrete contare su un partner affidabile per catturare momenti speciali con stile.
                    Contattatemi oggi stesso per discutere le vostre esigenze fotografiche e
                    come posso contribuire a rendere uniche le vostre immagini.
                </p>
            </main>

            <footer>
                <Separator />

                <div
                    className="flex flex-col sm:flex-row justify-between items-start
                    sm:items-center smallest-title font-extrabold mt-8
                    sm:mt-5 gap-6"
                >
                    <Copyright />
                    <Link
                        href="#history"
                    >
                        <Button
                            className="flex items-center gap-6
                            rounded-none small-title font-bold text-[0.65rem] px-8 py-5"
                        >
                            <div>Torna su</div>
                            <i className="fa-regular fa-arrow-up"></i>
                        </Button>
                    </Link>
                </div>
            </footer>
        </Section>
    );
}

export default AboutPage;