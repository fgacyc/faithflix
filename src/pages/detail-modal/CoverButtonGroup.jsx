import {Button, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {BsFillPlayFill} from "react-icons/bs";
import {IoMdAdd} from "react-icons/io";
import {HiOutlineThumbUp} from "react-icons/hi";
import React from "react";

export default function CoverButtonCroup({videoData}){
    const [isOpen, setIsOpen] = React.useState(false);
    function mouseEnter() {
        setIsOpen(true);
    }

    function mouseLeave() {
        setIsOpen(false);
    }


    return (
        <div className={"absolute bottom-[8px] bg-gradient-to-b from-transparent to-[#181818]"}>
            <div className={"text-white text-[28px] w-4/6 mb-4 px-6"}>
                {videoData.title}{videoData.title}{videoData.title}
            </div>
            <div className={"flex flex-row justify-between w-[230px] pl-6"}>
                <Button className={"bg-white font-bold rounded "}
                        startContent={<BsFillPlayFill className={"text-4xl"}/>}
                >
                    <span className={"relative top-[2px] font-bold"}>Play</span>
                </Button>
                <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}
                    placement="top" showArrow={true} offset={15} className={"rounded bg-[#E6E6E6] py-2"}>
                    <PopoverTrigger
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}
                    >
                        <Button isIconOnly   variant="bordered" radius="full" className="bg-[rgba(42,42,42,.6)]">
                            <IoMdAdd color="white" size={"20"} />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className={"font-bold"}>Add to My list</div>
                    </PopoverContent>
                </Popover>
                <Button isIconOnly  variant="bordered"  radius="full" className="bg-[rgba(42,42,42,.6)]">
                    <HiOutlineThumbUp  color="white" size={"20"} />
                </Button>
            </div>
            <div className={"h-[60px]"}></div>
        </div>
    )
}