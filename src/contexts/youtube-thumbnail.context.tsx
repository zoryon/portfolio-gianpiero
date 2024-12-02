"use client"

import { VIDEOS_ARRAY } from "@/lib/videos-constants";
import { 
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState
} from "react";

interface YouTubeThumbnailContextProps {
    setSelectedVideoId: Dispatch<SetStateAction<string>>,
    selectedVideoId: string,
}

const YouTubeThumbnailContext = createContext<YouTubeThumbnailContextProps | undefined>(undefined)

export const YouTubeThumbnailContextProvider = ({ 
    children, 
}: {
    children: React.ReactNode,
}) => {
    const [selectedVideoId, setSelectedVideoId] = useState<string>(VIDEOS_ARRAY[0]);

    return (
        <YouTubeThumbnailContext.Provider value={{
            setSelectedVideoId,
            selectedVideoId,
        }}>
            {children}
        </YouTubeThumbnailContext.Provider>
    );
}

export const useYouTubeThumbnailContext = () => {
    const context = useContext(YouTubeThumbnailContext)

    if (!context) {
        throw new Error('useYouTubeThumbnailContext must be used within a YouTubeThumbnailContextProvider')
    }
    
    return context;
}
