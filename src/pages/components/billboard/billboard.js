import Header from "../header/header";
import Image from "next/image";
import {useDisclosure} from "@nextui-org/react";
import DetailModal from "@/pages/components/detail-modal/DetailModal";
import VideoSectionArea from "@/pages/components/video-section/VideoSectionArea";
import BillboardCard from "@/pages/components/billboard/BillboardCard";
import GenreTitle from "@/pages/components/genre-title/GenreTitle";


export default function Billboard({currentTabIndex}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const videoData = {
        id: "RqGiyrtNPak",
        title: "There is a miracle in your mouth",
        cover: "/images/There_is_ a_miracle.jpg",
        description: "There is a miracle in your mouth There is a miracle in your mouth There is a miracle in your mouth There is a miracle in your mouth",
        duration: 3600, //seconds
        year: "2021",
        creators: ["John Doe", "Jane Doe"],
        cast: ['John Doe', 'Jane Doe', 'John Doe', 'Jane Doe'],
        genres: ["Drama", "Faith"],
        tags: ['Drama', 'Faith', 'Drama', 'Faith', 'Drama', 'Faith'],
        likes_radio: 0.97,
        episodes: [
            "video1", "video2", "video3", "video4", "video5", "video6", "video7", "video8", "video9", "video10",
        ],
        clarity: ["1080p", "720p", "480p"],
        subtitle: ["English", "Chinese"]
    }

    if (currentTabIndex === 1) {
        videoData.cover = "/images/sermon-cover.jpg"
    } else if (currentTabIndex === 2) {
        videoData.cover = "/images/day-and-night.jpg"
    }

    return (
        <div className={"relative"}>
            <Header className="fixed top-0 w-full py-2 z-10" currentTabIndex={currentTabIndex}/>
            {(currentTabIndex === 1 || currentTabIndex === 2) &&
                <GenreTitle currentTabIndex={currentTabIndex}/>
            }
            {
                (currentTabIndex === 0 || currentTabIndex === 1 || currentTabIndex === 2) &&
                <>
                    <Image
                        src={videoData.cover}
                        alt="logo"
                        width={1920}
                        height={1080}
                        quality={100}
                        priority={true}
                        className="object-cover max-h-[100vh] flex justify-center items-center brightness-[0.7]"
                    />
                    <BillboardCard videoData={videoData} onOpen={onOpen}/>
                </>
            }
            {/*<VideoSectionArea classNames={ "absolute bottom-0" } sectionTitle="Top 10 Videos Today"/>*/}


            {(currentTabIndex === 0 || currentTabIndex === 1 || currentTabIndex === 2 || currentTabIndex === 3) &&
                <>
                    <VideoSectionArea classNames={`${currentTabIndex === 3 ? "mt-[30px]" : "absolute bottom-0" } sm:block hidden`}
                                      sectionTitle="Top 10 Videos Today"/>
                    <DetailModal isOpen={isOpen} onOpenChange={onOpenChange} videoData={videoData}/>
                </>
            }

        </div>
    );
}


