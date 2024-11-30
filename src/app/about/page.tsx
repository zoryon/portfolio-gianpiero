import AboutBottombar from "@/components/AboutBottombar";
import AboutSection from "@/components/AboutSection";
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
                <AboutBottombar />
            </div>

        </section>
    );
}

const HistorySection = ({ id }: { id?: string }) => {
    return (
        <AboutSection
            title="La nostra storia"
            description="Un breve racconto su come siamo diventati fotografi"
            id={id}
        >
            <p className="text-xs font-bold leading-[1.35rem] mb-8">
                Ciao a tutti! Sono Gianpiero, un fotografo di Firenze con due anni di esperienza nel campo.
                Ho sempre avuto una passione per la fotografia sin da giovane,
                ma è solo negli ultimi due anni che ho deciso di farne una professione.
                Durante questo percorso, ho investito molto tempo nel migliorare le mie abilità fotografiche.
                Ho seguito corsi specializzati in studio, concentrandomi sulla gestione della luce e dei flash.
                Questa formazione mi ha permesso di creare scatti unici e memorabili, catturando l&apos;essenza dei soggetti fotografati.
                Inoltre, ho dedicato molto tempo a imparare i software più famosi del settore, come Illustrator, Photoshop, Lightroom e Capture One.
                Questi strumenti sono essenziali per trasformare le mie immagini in opere d&apos;arte digitali, dando vita alla mia visione creativa.
                Sono molto orgoglioso del mio percorso finora e non vedo l&apos;ora di condividere il mio lavoro con voi.
            </p>

            {/* stats container */}
            <StatsDisplay />

            <AnimatedButton
                path="/photography"
                text="photography"
                width={160}
            />
        </AboutSection>
    );
}

const SkillsSection = ({ id }: { id?: string }) => {
    return (
        <AboutSection
            title="Skills and Attainments"
            description="Le skill che abbiamo ottenuto in questi anni"
            id={id}
        >
            <SkillsDisplay />
        </AboutSection>
    );
}

const ServicesSection = ({ id }: { id?: string }) => {
    return (
        <AboutSection
            title="Services and Prices"
            description="Prezzi competitivi: Offro servizi fotografici di alta qualità
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
                    className="flex justify-between items-center smallest-title font-extrabold mt-5"
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
        </AboutSection>
    );
}

export default AboutPage;