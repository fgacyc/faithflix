import Image from "next/image";
import {VideoPlayIcon} from "@/graphics/VidepPlayIcon";
import {BsFillPlayFill} from "react-icons/bs";
import {Button} from "@nextui-org/react";
import {useRouter} from "next/router";

export default function EducationCard({index}){
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

    const router = useRouter();
    function goTo(routerPath){
        router.push(routerPath)
    }

    return (
        <div key={index} className={`flex justify-between items-center p-8 pl-0 
                         border-b border-[#303030] rounded `}
        >
            <Image
                width={200}
                height={200}
                priority={false}
                src={videoData.cover} alt="video cover"
                className={"object-cover mr-4 cursor-pointer"}
            />

            <div className={"flex flex-col items-start h-[78px] w-9/12 text-white"}>
                <div className={"flex flex-row justify-between w-full"}>
                    <div className={""}>{`Unit ${index+1} | ${videoData.duration / 60}m`}</div>
                    <div>
                        <Button className={"bg-white font-bold rounded mr-[10px] cursor-pointer"}
                                startContent={<BsFillPlayFill className={"text-4xl"}/>}
                                isDisabled={index !== 0}
                                onClick={() => goTo(`/education/msj${index+1}`)}
                        >
                            <span className={"relative top-[2px] font-bold"}>Start</span>
                        </Button>
                    </div>
                </div>
                <div>this is desc this is desc this is desc this is desc this is desc this is desc
                </div>
            </div>

        </div>
    );
}