"use client"

import YouTubeThumbnail from "@/components/YouTubeThumbnail";
import { useYouTubeThumbnailContext } from "@/contexts/youtube-thumbnail.context";
import { VIDEOS_ARRAY } from "@/lib/videos-constants";

const VideographyPage = () => {
    const { selectedVideoId } = useYouTubeThumbnailContext();

    // TODO: TO DELETE, FOR NOW IT'S SAVED AS BACKUP
    return null;

    return (
        <section className="w-full">
            {/* main video row to navigate trough videos */}
            <header className="w-full flex justify-center pt-8 md:pt-16">
                <iframe
                    className="w-full max-w-[850px] h-[278px] sm:max-w-[600px] sm:h-[337px] md:max-w-[700px] md:h-[394px] lg:max-w-[850px] lg:h-[478px]"
                    src={`https://www.youtube.com/embed/${selectedVideoId}`}
                    title="YouTube Video Player"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

            </header>

            {/* grid of non-clickable videos */}
            <main
                className="w-full grid grid-cols-1 md:grod-cols-2 lg:grid-cols-3
                gap-6 lg:gap-12 mt-14 lg:mt-20 mb-14 px-4 md:px-44 lg:px-10"
            >
                {VIDEOS_ARRAY.map(id => {
                    return (
                        <YouTubeThumbnail
                            key={id}
                            id={id}
                        />
                    )
                })}
            </main>
        </section>
    );
}

export default VideographyPage;