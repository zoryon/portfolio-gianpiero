import AboutSection from "@/components/AboutSection"
import AnimatedButton from "@/components/AnimatedButton"
import Image from "next/image"
import Link from "next/link"

const AboutPage = () => {
    return (
        <section
            className="w-screen lg:h-[calc(100vh-90px)] 
            flex flex-col lg:flex-row items-center"
        >
            {/* left panel */}
            <div>
                <Image
                    alt="Company Image"
                    src="/images/about/company-1.jpg"
                    width={2000}
                    height={2000}
                    className="w-screen lg:w-[44.5vw] h-[40.5vh] md:h-[55vh]
                    lg:h-[calc(100vh-90px)] object-cover object-bottom"
                />
            </div>

            {/* right panel */}
            <div className="relative">
                {/* scroll area */}
                <div
                    className="w-full lg:w-[55.5vw] h-fit
                    lg:h-[calc(100vh-90px)] px-5 sm:px-8 2xl:px-16
                    py-16 lg:scroll-area"
                >
                    <HistorySection />
                </div>

                {/* bottombar --> navigate through section of scroll area */}
                <div 
                    className="w-full h-[80px] fixed lg:absolute left-0 bottom-0
                    bg-secondary flex justify-center items-center gap-8
                    text-background"
                >
                    <Link 
                        className="small-title"
                        href="#"
                    >
                        about
                    </Link>
                    <Link 
                        className="small-title"
                        href="#"
                    >
                        skills
                    </Link>
                    <Link 
                        className="small-title"
                        href="#"
                    >
                        services
                    </Link>
                </div>
            </div>
            
        </section>
    )
}

const HistorySection = () => {
    return (
        <AboutSection 
            title="LA NOSTRA STORIA"
            description="Un breve racconto su come siamo diventati fotografi"
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
            <div
                className="flex flex-wrap justify-evenly sm:justify-start
                items-center gap-x-12 xl:gap-x-24 gap-y-6 mb-8 sm:mb-16"
            >
                {/* work stats */}
                <div className="flex flex-col justify-center items-start gap-3">
                    <div className="text-3xl lg:text-4xl font-extrabold tracking-tighter">
                        102
                    </div>
                    <div className="text-xs italic">
                        Lavori Completati
                    </div>
                </div>
                {/* client stats */}
                <div className="flex flex-col justify-center items-start gap-3">
                    <div className="text-3xl lg:text-4xl font-extrabold tracking-tighter">
                        102
                    </div>
                    <div className="text-xs italic">
                        Clienti Soddisfatti
                    </div>
                </div>
                {/* hours stats */}
                <div className="flex flex-col justify-center items-start gap-3">
                    <div className="text-3xl lg:text-4xl font-extrabold tracking-tighter">
                        541
                    </div>
                    <div className="text-xs italic">
                        Ore Lavorate
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center sm:justify-start">
                <AnimatedButton 
                    path="/photography"
                    text="photography"
                    width={160}
                />
            </div>
        </AboutSection>
    )
}

export default AboutPage