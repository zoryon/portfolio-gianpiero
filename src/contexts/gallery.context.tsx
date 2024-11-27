"use client"

import { createContext, useContext, useEffect, useState } from "react";

interface UserContextProps {
    enableGallery: ({ src } : { src: string }) => void,
    disableGallery: () => void,
    selectedImage: string | null,
}

const GalleryContext = createContext<UserContextProps | undefined>(undefined)

export const GalleryContextProvider = ({ 
    children, 
}: {
    children: React.ReactNode,
}) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const enableGallery = ({ src } : { src: string }) => setSelectedImage(src)

    const disableGallery = () => setSelectedImage(null)

    return (
        <GalleryContext.Provider value={{
            enableGallery,
            disableGallery,
            selectedImage,
        }}>
            {children}
        </GalleryContext.Provider>
    )
}

export const useGalleryContext = () => {
    const context = useContext(GalleryContext)

    if (!context) {
        throw new Error('useGalleryContext must be used within a GalleryContextProvider')
    }
    
    return context
}
