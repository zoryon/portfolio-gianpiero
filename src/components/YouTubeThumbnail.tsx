"use client"

import { useYouTubeThumbnailContext } from "@/contexts/youtube-thumbnail.context";

const YouTubeThumbnail = ({ id }: { id: string }) => {
    const { selectedVideoId, setSelectedVideoId } = useYouTubeThumbnailContext();

    const thumbnailUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

    return (
        <div
            className="relative group cursor-pointer"
            onClick={() => setSelectedVideoId(id)}
        >
            <a href="#">
                {/* actual thumbnail */}
                <img
                    src={thumbnailUrl}
                    alt="YouTube Video Thumbnail"
                    className="w-full duration-300 group-hover:opacity-90"
                />

                {/* overlay on hover */}
                <div 
                    className="absolute w-full h-full inset-0 bg-black opacity-0
                    group-hover:opacity-60 transition-opacity duration-300
                    flex justify-center items-center"
                >
                    <div 
                        className="size-[50px] rounded-full bg-background
                        flex justify-center items-center text-foreground"
                    >
                        {selectedVideoId === id ? (
                            <i className="fa-solid fa-pause"></i>
                        ) : (
                            <i className="fa-solid fa-play" />
                        )}
                    </div>
                </div>
            </a>
        </div>
    );
};

export default YouTubeThumbnail;
