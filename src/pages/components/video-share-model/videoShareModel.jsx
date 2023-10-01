import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import PubSub from "pubsub-js";
import Link from "next/link";
import {FacebookIcon} from "@/graphics/FacebookIcon";
import {YoutubeIcon} from "@/graphics/YoutubeIcon";
import {InstagramIcon} from "@/graphics/InstagramIcon";
import {ThreadsIcon} from "@/graphics/ThreadsIcon";
import {FacebookIconBlack} from "@/graphics/FacebookIconBlack";
import {InstagramIconBlack} from "@/graphics/InstagramIconBlack";
import {ThreadsIconBlack} from "@/graphics/ThreadsIconBlack";
import {YoutubeIconBlack} from "@/graphics/YoutubeIconBlack";
import {BiCloudDownload} from "react-icons/bi";
import {BsCloudDownload} from "react-icons/bs";
import { QRCodeSVG } from "qrcode.react";
import domtoimage from 'dom-to-image';



export default function VideoShareModel(){
    const [videoShareModelVisible, setVideoShareModelVisible] = useState(false);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    useEffect(() => {
        setVideoShareModelVisible(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const subscription = PubSub.subscribe('videoShareModalVisible', (msg, data) => {
            setVideoShareModelVisible(data.message);
        });
        return () => PubSub.unsubscribe(subscription);
    }, []);

    const videoData = {
        id: "8sJlFZZxoag",
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
        subtitle: ["English", "Chinese"],
        speaker: "Ps. John Doe",
        url : "https://www.youtube.com/watch?v=8sJlFZZxoag",
    }

    function  downloadDomToImage(){
        // domtoimage.toBlob(document.getElementById('share-body'))
        //     .then(function (blob) {
        //         window.saveAs(blob, 'my-node.png');
        //     });

        domtoimage.toJpeg(document.getElementById('share-body'), { quality: 1 })
            .then(function (dataUrl) {
                let link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }

    return(
        <>
            <Modal isOpen={true} onOpenChange={onOpenChange}
                   classNames={{
                       closeButton: "bg-[#181818] text-white hover:bg-[#181818] active:border-2 active:border-white active:bg-[#181818]",
                   }}
            >
                <ModalContent >
                    {(onClose) => (
                        <>
                            <div id={"share-body"}>
                                <img src={videoData.cover} alt="video cover"/>
                                <ModalBody className={"bg-white"}>
                                    <div className={"font-bold text-2xl"}>{videoData.title}</div>
                                    <div className={"flex flex-row justify-between"}>
                                        <div>{videoData.speaker}</div>
                                        <QRCodeSVG value={videoData.url} className={"w-[64px] h-[64px]"} />
                                    </div>
                                </ModalBody>
                            </div>
                            <ModalFooter>
                                <div className={"flex flex-row justify-between items-center w-full"}>
                                    <Link  target="_blank" href={"https://www.facebook.com/FGACYC"} className={"cursor-pointer"}>
                                        <FacebookIconBlack /></Link>
                                    <Link  target="_blank" href={"https://www.youtube.com/@fgacyc"} className={"cursor-pointer"}>
                                        <YoutubeIconBlack /></Link>
                                    <Link  target="_blank" href={"https://www.instagram.com/fgacyc/"} className={"cursor-pointer"}>
                                        <InstagramIconBlack /></Link>
                                    <Link  target="_blank" href={"https://www.threads.net/@fgacyc"} className={"cursor-pointer"}>
                                        <ThreadsIconBlack /></Link>
                                    <BsCloudDownload size={26}
                                                     className={"cursor-pointer"}
                                                     onClick={downloadDomToImage} />
                                </div>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
