import { STATS_ARARY } from "@/lib/stats-constants";
import { StatType } from "@/types/stat.type";

const StatsDisplay = () => {
    return (
        <div
            className="flex flex-wrap justify-start items-center
            gap-x-12 xl:gap-x-24 gap-y-6 mb-8 sm:mb-16"
        >
            {STATS_ARARY.map((stat, i) => {
                return (
                    <Stat 
                        key={stat.title + i}
                        stat={stat}
                    />
                );
            })}
        </div>
    );
}

const Stat = ({
    stat,
}: {
    stat: StatType,
}) => {
    return (
        <div className="flex flex-col justify-center items-start gap-3">
            <div className="text-3xl lg:text-4xl font-extrabold tracking-tighter">
                {stat.quantity}
            </div>
            <div className="text-xs italic">
                {stat.title}
            </div>
        </div>
    );
}

export default StatsDisplay;