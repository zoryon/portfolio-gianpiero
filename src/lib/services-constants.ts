import { ServiceType } from "@/types/service.type";

export const SERVICES_ARRAY: ServiceType[] = [
    {
        title: "Event Photography",
        description: `"I nostri scatti raccontano storie di gioia, emozione e condivisione. 
            Lasciate che le immagini immortalino i vostri momenti speciali."`,
        subtitles: [
            "Servizi Extra: diciottesimi, Discoteche",
            "Commercials",
        ],
        priceRange: [
            100,
            300,
        ],
        src: "/images/about/service-1.jpg"
    },
    {
        title: "Weddings Videography",
        description: `"Le nostre foto di ritratto catturano l'essenza e la bellezza di chiunque 
            attraverso lo sguardo e l'arte dell'illuminazione"`,
        subtitles: [
            "Servizi Extra: ritratti, studio",
            "Still life",
        ],
        priceRange: [
            100,
            300,
        ],
        src: "/images/about/service-2.jpg"
    },
] as const;