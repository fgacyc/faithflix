import Image from "next/image";
import {VideoPlayIcon} from "@/graphics/VidepPlayIcon";

export default function HistoryCard({index}){
    const videoData= {
        id: 1,
        title: "There is a miracle in your mouth",
        cover: "/images/There_is_ a_miracle.jpg",
        description: "There is a miracle in your mouth There is a miracle in your mouth There is a miracle in your mouth There is a miracle in your mouth",
        duration: 3600, //seconds
        year: "2021",
        creators: ["John Doe", "Jane Doe"],
        cast: ['John Doe', 'Jane Doe','John Doe', 'Jane Doe'],
        genres: ["Drama", "Faith"],
        tags: ['Drama', 'Faith','Drama', 'Faith','Drama', 'Faith'],
        likes_radio: 0.97,
        episodes: [
            "video1","video2","video3","video4","video5","video6","video7","video8","video9","video10",
        ],
        clarity: ["1080p", "720p", "480p"],
        subtitle: ["English", "Chinese"]
    }


    return (
        <div key={index} className={`flex justify-between items-center 
                        lg:p-8 md:p-4 sm:p-4 p-2  
                         border-b border-[#303030] rounded `}
        >
            <div className={"text-white w-14 text-2xl"}>{index + 1}</div>
            <div className={"relative w-[140px] h-[75px] "}>
                <Image
                    width={140}
                    height={75}
                    priority={false}
                    src={videoData.cover} alt="video cover"
                    className={"object-cover mr-4 cursor-pointer"}
                />
            </div>

            <div className={"flex flex-col items-start h-[78px] w-9/12 text-white ml-2"}>
                <div className={"flex flex-row justify-between w-full"}>
                    <div className={"font-bold cursor-pointer hover:text-gray-300"}>{videoData.title}</div>
                    <div>{videoData.duration / 60}m</div>
                </div>
                <div>this is desc this is desc this is desc this is desc this is desc this is desc
                </div>
            </div>

        </div>
    );
}