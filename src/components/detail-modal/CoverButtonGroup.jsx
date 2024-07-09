import {Button, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {BsFillPlayFill} from "react-icons/bs";
import {IoMdAdd} from "react-icons/io";
import {HiOutlineThumbDown, HiOutlineThumbUp} from "react-icons/hi";
import React from "react";
import Link from 'next/link'
import {IoCheckmarkSharp} from "react-icons/io5";
import {FiShare2} from "react-icons/fi";
import PubSub from "pubsub-js";

export default function CoverButtonCroup({videoData}){
    const [isAddOpen, setIsAddOpen] = React.useState(false);
    const [isLikeOpen, setIsLikeOpen] = React.useState(false);
    const [tipWord, setTipWord] = React.useState("Add to My list");
    const [isAdded, setIsAdded] = React.useState(false);

    function mouseEnter() {
        setIsAddOpen(true);
    }

    function mouseLeave() {
        setIsAddOpen(false);
    }

    function addToList() {
        setIsAdded(!isAdded);
    }

    function openVideoShareModal() {
        //console.log("openVideoShareModal")
        PubSub.publish('videoShareModalVisible', {message: true});
    }



    return (
        <div className={"absolute w-full bottom-0 bg-gradient-to-b from-transparent to-[#181818]"}>
            <div className={`text-white 
                sm:text-[28px] text-[20px]
             w-4/6 mb-4 pl-12`}>
                {videoData.title}
            </div>
            <div className={"flex flex-row justify-between w-[320px] pl-12"}>
                <Button className={"bg-white font-bold rounded "}
                        startContent={<BsFillPlayFill className={"text-4xl"}/>}
                >
                    <Link href={`/watch/${videoData.id}`}>
                        <span className={"relative top-[2px] font-bold"}>Play</span>
                    </Link>

                </Button>
                <Popover isOpen={isAddOpen} onOpenChange={(open) => setIsAddOpen(open)}
                    placement="top" showArrow={true} offset={15} className={"rounded bg-[#E6E6E6] py-2"}>
                    <PopoverTrigger
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}
                    >
                        <Button isIconOnly   variant="bordered" radius="full" className="bg-[rgba(42,42,42,.6)]"
                                onClick={addToList}
                        >
                            {
                                isAdded ? <IoCheckmarkSharp color="white" size={"20"} /> : <IoMdAdd color="white" size={"20"} />
                            }
                            {/*<IoMdAdd color="white" size={"20"} />*/}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className={"font-bold"}>
                            {
                                isAdded ? "Remove from My list" : "Add to My list"
                            }
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover
                    placement="top" showArrow={true} offset={15} className={"bg-[#232323] text-white "}>
                    <PopoverTrigger>
                        <Button isIconOnly  variant="bordered"  radius="full" className="bg-[rgba(42,42,42,.6)]"
                        >
                            <HiOutlineThumbUp  color="white" size={"20"} />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="py-1 flex flex-row justify-around w-28	rounded-[50%]">
                            <div className={"w-7 h-7 hover:bg-[#363636] rounded-full  flex justify-center items-center cursor-pointer"} >
                                <HiOutlineThumbDown  color="white" size={"18"}  />
                            </div>
                            <div className={"w-7 h-7 hover:bg-[#363636] rounded-full  flex justify-center items-center cursor-pointer"} >
                                <HiOutlineThumbUp  color="white" size={"18"}  />
                            </div>
                            <div className={"w-7 h-7 hover:bg-[#363636] rounded-full  flex justify-center items-center cursor-pointer"} >
                                <HiOutlineThumbUp  color="white" size={"18"}  />
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Button isIconOnly  variant="bordered"  radius="full" className="bg-[rgba(42,42,42,.6)]"
                        onClick={openVideoShareModal}
                >
                    <FiShare2  color="white" size={"20"} />
                </Button>
            </div>
            <div className={"h-[60px]"}></div>
        </div>
    )
}
