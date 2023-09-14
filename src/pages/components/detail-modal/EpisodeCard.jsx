import Image from "next/image";
import {VideoPlayIcon} from "@/graphics/VidepPlayIcon";

export default  function  EpisodeCard({currentEpisode,setCurrentEpisode,index,episode} ) {
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

    function mouseEnter(index) {
        setCurrentEpisode(index);
    }

    function mouseLeave() {
        setCurrentEpisode(-1)
    }


    return (
        <div key={index} className={`flex justify-between items-center 
                        sm:p-8 p-3 
                        cursor-pointer border-b border-[#303030] rounded ${index === 0 && 'bg-[#333333]'}`}
             onMouseEnter={() => mouseEnter(index)}
             onMouseLeave={() => mouseLeave(index)}
        >
            <div className={"text-white w-1 text-2xl"}>{index + 1}</div>
            <div className={`relative w-[140px] flex justify-center items-center
                     sm:h-[75px] h-[120px] `}>
                <Image
                    width={140}
                    height={75}
                    priority={false}
                    src={videoData.cover} alt="video cover"
                    className={"object-cover mr-4"}
                />
                {
                    currentEpisode === index &&
                    <div className={`w-12 h-12 absolute top-1/2 left-1/2 flex flex-row justify-center items-center
                                transform -translate-x-1/2 -translate-y-1/2 border rounded-full`}>
                        <VideoPlayIcon/>
                    </div>
                }
            </div>

            <div className={"flex flex-col items-start h-[78px] w-8/12"}>
                <div className={"flex flex-row justify-between w-full"}>
                    <div className={"font-bold"}>{episode}</div>
                    <div>{videoData.duration / 60}m</div>
                </div>
                <div>this is desc this is desc this is desc this is desc this is desc this is desc
                </div>
            </div>

        </div>
    );
}