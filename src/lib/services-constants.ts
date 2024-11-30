import { ServiceType } from "@/types/service.type";

export const SERVICES_ARRAY: ServiceType[] = [
    {
        title: "Weddings Photography",
        description: `"I nostri scatti raccontano storie di gioia, emozione e condivisione.
        Lasciate che le immagini immortalino i vostri momenti speciali."`,
        subtitles: [
            "Diciottesimi",
            "Discoteche",
            "Commercials",
        ],
        priceRange: [
            100,
            2000,
        ],
        src: "/images/portfolio/matrimoni/matrimoni-5.jpg"
    },
    {
        title: "Weddings Videography",
        description: `"I nostri scatti raccontano storie di gioia, emozione e condivisione.
        Lasciate che le immagini immortalino i vostri momenti speciali."`,
        subtitles: [
            "Diciottesimi",
            "Discoteche",
            "Commercials",
        ],
        priceRange: [
            100,
            2000,
        ],
        src: "/images/portfolio/matrimoni/matrimoni-2.jpg"
    },
] as const;