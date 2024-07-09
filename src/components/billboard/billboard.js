import Header from "../header/header";
import Image from "next/image";
import { useDisclosure } from "@nextui-org/react";
import DetailModal from "@/components/detail-modal/DetailModal";
import VideoSectionArea from "@/components/video-section/VideoSectionArea";
import BillboardCard from "@/components/billboard/BillboardCard";
import GenreTitle from "@/components/genre-title/GenreTitle";
import VideoShareModel from "@/components/video-share-model/videoShareModel";

export default function Billboard({ currentTabIndex }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const videoData = {
    id: "8sJlFZZxoag",
    title: "There is a miracle in your mouth",
    cover: "/images/There_is_ a_miracle.jpg",
    description:
      "There is a miracle in your mouth There is a miracle in your mouth There is a miracle in your mouth There is a miracle in your mouth",
    duration: 3600, //seconds
    year: "2021",
    creators: ["John Doe", "Jane Doe"],
    cast: ["John Doe", "Jane Doe", "John Doe", "Jane Doe"],
    genres: ["Drama", "Faith"],
    tags: ["Drama", "Faith", "Drama", "Faith", "Drama", "Faith"],
    likes_radio: 0.97,
    episodes: [
      "video1",
      "video2",
      "video3",
      "video4",
      "video5",
      "video6",
      "video7",
      "video8",
      "video9",
      "video10",
    ],
    clarity: ["1080p", "720p", "480p"],
    subtitle: ["English", "Chinese"],
  };

  if (currentTabIndex === 1) {
    videoData.cover = "/images/sermon-cover.jpg";
  } else if (currentTabIndex === 2) {
    videoData.cover = "/images/day-and-night.jpg";
  }

  return (
    <div className={"relative"}>
      <Header
        className="fixed top-0 w-full py-2 z-10"
        currentTabIndex={currentTabIndex}
      />
      {(currentTabIndex === 1 || currentTabIndex === 2) && (
        <GenreTitle currentTabIndex={currentTabIndex} />
      )}
      {(currentTabIndex === 0 ||
        currentTabIndex === 1 ||
        currentTabIndex === 2) && (
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
          <BillboardCard videoData={videoData} onOpen={onOpen} />
        </>
      )}
      {/*<VideoSectionArea classNames={ "absolute bottom-0" } sectionTitle="Top 10 Videos Today"/>*/}

      {(currentTabIndex === 0 ||
        currentTabIndex === 1 ||
        currentTabIndex === 2 ||
        currentTabIndex === 3) && (
        <>
          <VideoSectionArea
            classNames={`${
              currentTabIndex === 3 ? "mt-[30px]" : "absolute bottom-0"
            } sm:block hidden`}
            sectionTitle="Top 10 Videos Today"
          />
          <DetailModal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            videoData={videoData}
          />
          <VideoShareModel />
        </>
      )}
    </div>
  );
}
