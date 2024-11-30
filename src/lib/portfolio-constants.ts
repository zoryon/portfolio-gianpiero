const MATRIMONI_IMAGES = {
    src: "/images/portfolio/matrimoni/",
    filter: "matrimoni",
    extension: ".jpg",
    number: 16,
} as const

export const PORTFOLIO_IMAGES = [
    ...Array.from({ length: MATRIMONI_IMAGES.number }, (_, index) => ({
        src: `${MATRIMONI_IMAGES.src}${MATRIMONI_IMAGES.filter}-${index + 1}${MATRIMONI_IMAGES.extension}`,
        filter: MATRIMONI_IMAGES.filter,
    })),
];