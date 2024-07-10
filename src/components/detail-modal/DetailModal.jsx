import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import CoverButtonCroup from "@/components/detail-modal/CoverButtonGroup";
import VideoDetailsArea from "@/components/detail-modal/VideoDetailsArea";
import EpisodesArea from "@/components/detail-modal/EpisodesArea";
import SimilarVideoArea from "@/components/detail-modal/SimilarVideoArea";
import VideoAboutArea from "@/components/detail-modal/VideoAboutArea";
import PubSub from "pubsub-js";

export default function DetailModal({ isOpen, onOpenChange }) {
  const [detailModalVisible, setDetailModalVisible] = useState(false);

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

  // console.log("videoData", videoData);

  useEffect(() => {
    setDetailModalVisible(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const subscription = PubSub.subscribe("detailModalVisible", (msg, data) => {
      setDetailModalVisible(data.message);
    });
    return () => PubSub.unsubscribe(subscription);
  }, []);

  return (
    <>
      <Modal
        isOpen={detailModalVisible}
        onOpenChange={onOpenChange}
        size="4xl"
        radius={"sm"}
        backdrop={"opaque"}
        scrollBehavior={"outside"}
        classNames={{
          closeButton:
            "bg-[#181818] text-white hover:bg-[#181818] active:border-2 active:border-white active:bg-[#181818]",
        }}
      >
        <ModalContent>
          {
              videoData.hasOwnProperty("cover") && <img src={videoData.cover} alt="video cover"/>
          }

          <ModalBody className={"px-0 bg-[#181818] pt-0 text-white"}>
            <div className={"relative"}>
              <CoverButtonCroup videoData={videoData} />
            </div>
            <div className={"md:px-12 sm:px-6 px-4"}>
              <VideoDetailsArea videoData={videoData} />
              {/*{videoData.episodes.length > 1 && (*/}
              {/*  <EpisodesArea videoData={videoData} />*/}
              {/*)}*/}
              <SimilarVideoArea videoData={videoData} />
              <VideoAboutArea videoData={videoData} />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
