import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";

import {BsFillPlayFill} from "react-icons/bs";
import {GrAdd} from "react-icons/gr";
import {HiOutlineThumbUp} from "react-icons/hi";
import {IoMdAdd} from "react-icons/io";
import CoverButtonCroup from "@/pages/detail-modal/CoverButtonGroup";


export default function DetailModal({isOpen, onOpenChange, videoData}) {
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" radius={"sm"} backdrop={"opaque"}
                   classNames={{
                       closeButton: "bg-[#181818] text-white hover:bg-[#181818] active:border-2 active:border-white active:bg-[#181818]",
                   }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <img src={videoData.cover} alt="video cover"/>
                            <ModalBody className={"px-0 bg-[#181818]"}>
                                <div className={"relative"}>
                                    <CoverButtonCroup videoData={videoData}/>
                                </div>
                                <div className={"px-6 text-white"}>
                                    <div className={"flex flex-row justify-between "}>
                                        <div></div>
                                        <div></div>
                                    </div>
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
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}