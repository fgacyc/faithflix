import {Button, useDisclosure} from "@nextui-org/react";
import {BsFillPlayFill} from "react-icons/bs";
import {FiInfo} from "react-icons/fi";
import Link from "next/link";
import React from "react";

export  default  function BillboardCard({videoData ,onOpen}){


    return (
        <>
            <div className={`absolute 
            2xl:bottom-[300px]  xl:bottom-[250px] lg:bottom-[200px] md:bottom-[180px] sm:bottom-[180px] bottom-[180px]
            2xl:w-[40%] xl:w-[40%] lg:w-[50%] md:w-[60%] sm:w-[70%] w-[70%]
            2xl:h-[250px] xl:h-[250px] lg:h-[200px] md:h-[180px] sm:h-[180px] h-[180px]
            text-white flex flex-col
            lg:ml-[50px] md:ml-[30px] sm:ml-[15px] ml-[15px]
            md:justify-between sm:justify-end justify-end
            items-start `}>
                <div className={`2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl text-3xl md:flex sm:hidden hidden
                font-bold text-white`}>{videoData.title}</div>
                <div className={"text-lg md:flex sm:hidden hidden"}>{videoData.description}</div>
                <div className={"flex justify-center"}>
                    <Link href={`/watch/${videoData.id}`}>
                        <Button className={"bg-white font-bold rounded mr-[10px]"}
                                startContent={<BsFillPlayFill className={"text-4xl"}/>}
                        >
                            <span className={"relative top-[2px] font-bold"}>Play</span>
                        </Button>
                    </Link>

                    <Button className={"bg-[rgba(109,109,109,0.7)] text-white rounded"}
                            startContent={
                                <FiInfo className={"text-2xl"}  color="white"/>}
                            onPress={onOpen}
                    >
                        <span className={"relative top-[2px] font-bold"}>More Info</span>
                    </Button>
                </div>
            </div>
        </>
    )
}