import React, {useEffect, useState} from "react";
import {Modal, ModalContent, ModalBody} from "@nextui-org/react";
import CoverButtonCroup from "@/pages/detail-modal/CoverButtonGroup";
import VideoDetailsArea from "@/pages/detail-modal/VideoDetailsArea";
import EpisodesArea from "@/pages/detail-modal/EpisodesArea";
import SimilarVideoArea from "@/pages/detail-modal/SimilarVideoArea";
import VideoAboutArea from "@/pages/detail-modal/VideoAboutArea";
import PubSub from "pubsub-js";


export default function DetailModal({isOpen, onOpenChange, videoData}) {
    const [detailModalVisible, setDetailModalVisible] = useState(false);

    useEffect(() => {
        setDetailModalVisible(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const subscription = PubSub.subscribe('detailModalVisible', (msg, data) => {
            setDetailModalVisible(data.message);
        });
        return () => PubSub.unsubscribe(subscription);
    }, []);


    return (
        <>
            <Modal isOpen={detailModalVisible} onOpenChange={onOpenChange} size="4xl" radius={"sm"} backdrop={"opaque"} scrollBehavior={"outside"}
                   classNames={{
                       closeButton: "bg-[#181818] text-white hover:bg-[#181818] active:border-2 active:border-white active:bg-[#181818]",
                   }}
            >
                <ModalContent>
                    <img src={videoData.cover} alt="video cover"/>
                    <ModalBody className={"px-0 bg-[#181818] pt-0 text-white"}>
                        <div className={"relative"}>
                            <CoverButtonCroup videoData={videoData}/>
                        </div>
                        <div className={"px-12"}>
                            <VideoDetailsArea videoData={videoData}/>
                            {
                                videoData.episodes.length > 1 && <EpisodesArea videoData={videoData}/>
                            }
                            <SimilarVideoArea videoData={videoData}/>
                            <VideoAboutArea videoData={videoData}/>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}