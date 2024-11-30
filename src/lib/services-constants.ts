import { ServiceType } from "@/types/service.type";

export const SERVICES_ARRAY: ServiceType[] = [
    {
        title: "Weddings Photography",
        description: `"I nostri scatti raccontano storie di gioia, emozione e condivisione.
        Lasciate che le immagini immortalino i vostri momenti speciali."`,
        subtitles: [
            "Servizi Extra: Album, riprese video, sessioni pre-matrimoniali",
        ],
        priceRange: [
            650,
            2000,
        ],
        src: "/images/about/service-1.jpg"
    },
    {
        title: "Weddings Videography",
        description: `"I nostri video raccontano storie di gioia, emozione e condivisione.
        Lasciate che i video immortalino i vostri momenti speciali."`,
        subtitles: [
            "Servizi Extra: sessioni pre-matrimoniali",
            "Riprese Drone",
        ],
        priceRange: [
            650,
            2000,
        ],
        src: "/images/about/service-2.jpg"
    },
] as const;