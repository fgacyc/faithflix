import Header from "../header/header";
import Image from "next/image";
import {Button, useDisclosure} from "@nextui-org/react";
import {BsFillPlayFill} from "react-icons/bs";
import {FiInfo} from "react-icons/fi";
import DetailModal from "@/pages/detail-modal/DetailModal";
import VideoSectionArea from "@/pages/video-section/VideoSectionArea";
import BillboardCard from "@/pages/billboard/BillboardCard";

export default function Billboard() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const videoData= {
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
        <div className={"relative"}>
            <Header className="fixed top-0 w-full py-2 z-10"/>
            <Image
                src="/images/There_is_ a_miracle.jpg"
                alt="logo"
                width={1920}
                height={1080}
                quality={100}
                className="object-cover max-h-[100vh] flex justify-center items-center brightness-[0.6]"
            />
            <BillboardCard videoData={videoData} onOpen={onOpen}/>
            <VideoSectionArea classNames={"absolute bottom-0 left-[50px]"} sectionTitle="Top 10 Videos Today"/>
            <DetailModal isOpen={isOpen} onOpenChange={onOpenChange} videoData={videoData}/>
        </div>
    );
}
