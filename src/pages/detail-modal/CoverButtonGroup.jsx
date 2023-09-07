import {Button, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {BsFillPlayFill} from "react-icons/bs";
import {IoMdAdd} from "react-icons/io";
import {HiOutlineThumbUp} from "react-icons/hi";
import React from "react";
import Link from 'next/link'

export default function CoverButtonCroup({videoData}){
    const [isOpen, setIsOpen] = React.useState(false);
    function mouseEnter() {
        setIsOpen(true);
    }

    function mouseLeave() {
        setIsOpen(false);
    }


    return (
        <div className={"absolute w-full bottom-0 bg-gradient-to-b from-transparent to-[#181818]"}>
            <div className={"text-white text-[28px] w-4/6 mb-4 pl-12"}>
                {videoData.title}
            </div>
            <div className={"flex flex-row justify-between w-[260px] pl-12"}>
                <Button className={"bg-white font-bold rounded "}
                        startContent={<BsFillPlayFill className={"text-4xl"}/>}
                >
                    <Link href={`/watch/${videoData.id}`}>
                        <span className={"relative top-[2px] font-bold"}>Play</span>
                    </Link>

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