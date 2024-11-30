import { SERVICES_ARRAY } from "@/lib/services-constants";
import { ServiceType } from "@/types/service.type";
import Image from "next/image";
import { Button } from "./ui/button";

const ServicesDisplay = () => {
    return (
        <div className="w-full flex flex-col gap-10 justify-center mt-4">
            {SERVICES_ARRAY.map((service, i) => {
                return (
                    <Service
                        key={service.title + i}
                        service={service}
                    />
                );
            })}
        </div>
    );
}

const Service = ({
    service,
}: {
    service: ServiceType,
}) => {
    return (
        <div className="w-full h-auto md:h-[235px] grid md:grid-cols-2">
            <div>
                <Image 
                    alt={service.title}
                    src={service.src}
                    width={1000}
                    height={1000}
                    className="w-full h-[235px] object-cover"
                />
            </div>
            <div 
                className="w-full h-full px-3 md:px-8 xl:px-4 2xl:px-8
                py-4 md:py-2 xl:py-1 2xl:py-2"
            >
                {/* service title */}
                <h1 className="text-lg font-bold">
                    {service.title}
                </h1>

                {/* service description */}
                <p className="text-[0.68rem] italic">
                    {service.description}
                </p>

                {/* unordered subtitles */}
                <ul className="mt-5 flex flex-col justify-center gap-2 list-disc">
                    {service.subtitles.map((subtitle, i) => {
                        return (
                            <li
                                key={subtitle + i}
                                className="text-xs ml-4"
                            >
                                {subtitle}
                            </li>
                        );
                    })} 
                </ul>

                {/* price button */}
                <Button
                    variant={"default"}
                    className="!rounded-none mt-6 text-xs py-5 cursor-default"
                >
                    <span className="text-zinc-500">Price: </span>
                    <span>€{service.priceRange[0]}</span>
                    <span>-</span>
                    <span>€{service.priceRange[1]}</span>
                </Button>
            </div>
        </div>
    );
}

export default ServicesDisplay;