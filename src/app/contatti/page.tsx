import SectionBottombar from "@/components/SectionBottombar";
import ScrollArea from "@/components/ScrollArea";
import Image from "next/image";
import { CONTACTS_BOTTOMBAR_LINKS } from "@/lib/contacts-bottombar-constants";
import Section from "@/components/Section";
import AnimatedButton from "@/components/AnimatedButton";
import Copyright from "@/components/Copyright";
import { Separator } from "@/components/ui/separator";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ContactsPage = () => {
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
                    <DetailsSection id="details" />
                    <TextMeSection id="text-me" />
                </ScrollArea>

                {/* bottombar --> navigate through section of scroll area */}
                <SectionBottombar array={[...CONTACTS_BOTTOMBAR_LINKS]} />
            </div>

        </section>
    );
}

const DetailsSection = ({ id }: { id?: string }) => {
    return (
        <Section
            title="Informazioni di contatto"
            description="Per qualsiasi richiesta o personalizzazione non esitare a contattarmi"
            id={id}
        >
            <p className="text-xs font-bold">
                Se desideri parlare di un progetto, del lavoro o di qualsiasi altra cosa contattami.
            </p>

            {/* contact information */}
            <div className="flex flex-col gap-4 mt-8 md:mt-16 mb-5">
                {/* email */}
                <div className="flex flex-col gap-3">
                    <div className="text-xs text-subtle">
                        Email:
                    </div>
                    <div className="small-title !text-sm">
                        info@eternalstudio.it
                    </div>
                </div>

                {/* address */}
                <div className="flex flex-col gap-3">
                    <div className="text-xs text-subtle">
                        Address:
                    </div>
                    <div className="small-title !text-sm">
                        Galleria Giuseppe di Vittorio Sindacalista, FI
                    </div>
                </div>
            </div>

            <AnimatedButton
                path="/contatti"
                text="contattami"
                width={145}
            />
        </Section>
    );
}

const TextMeSection = ({ id }: { id?: string }) => {
    return (
        <Section
            title="Text me"
            description="Compila correttamente il form per essere sicuro di contattarmi"
            id={id}
        >
            <main>
                <ContactForm />
            </main>

            <footer className="mt-14 sm:mt-20">
                <Separator />

                <div
                    className="flex flex-col sm:flex-row justify-between items-start
                    sm:items-center smallest-title font-extrabold mt-8
                    sm:mt-5 gap-6"
                >
                    <Copyright />
                    <Link
                        href="#details"
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

export default ContactsPage;