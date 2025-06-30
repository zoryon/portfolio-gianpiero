const GALLERY_IMAGES = {
    src: "/images/portfolio/gallery/",
    filter: "gallery",
    extension: ".jpg",
    number: 46,
} as const

export const PORTFOLIO_IMAGES = [
    ...Array.from({ length: GALLERY_IMAGES.number }, (_, index) => ({
        src: `${GALLERY_IMAGES.src}${GALLERY_IMAGES.filter}-${index + 1}${GALLERY_IMAGES.extension}`,
        filter: GALLERY_IMAGES.filter,
    })),
];