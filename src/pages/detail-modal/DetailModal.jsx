import React from "react";
import {Modal, ModalContent, ModalBody} from "@nextui-org/react";
import CoverButtonCroup from "@/pages/detail-modal/CoverButtonGroup";
import VideoDetailsArea from "@/pages/detail-modal/VideoDetailsArea";
import EpisodesArea from "@/pages/detail-modal/EpisodesArea";
import SimilarVideoArea from "@/pages/detail-modal/SimilarVideoArea";


export default function DetailModal({isOpen, onOpenChange, videoData}) {
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" radius={"sm"} backdrop={"opaque"} scrollBehavior={"outside"}
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

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam pulvinar risus non risus hendrerit venenatis.
                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam pulvinar risus non risus hendrerit venenatis.
                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                            </p>
                            <p>
                                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam pulvinar risus non risus hendrerit venenatis.
                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam pulvinar risus non risus hendrerit venenatis.
                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                            </p>
                            <p>
                                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam pulvinar risus non risus hendrerit venenatis.
                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam pulvinar risus non risus hendrerit venenatis.
                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                            </p>
                            <p>
                                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                            </p>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}