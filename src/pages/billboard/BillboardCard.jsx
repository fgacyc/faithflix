import {Button, useDisclosure} from "@nextui-org/react";
import {BsFillPlayFill} from "react-icons/bs";
import {FiInfo} from "react-icons/fi";

export  default  function BillboardCard({videoData ,onOpen}){


    return (
        <>
            <div className={`absolute bottom-[300px] text-white flex flex-col ml-[50px]
            items-start w-[40%] h-[250px] justify-between`}>
                <div className="text-4xl font-bold text-white">{videoData.title}</div>
                <div className={"text-lg"}>{videoData.description}</div>
                <div className={"flex justify-center"}>
                    <Button className={"bg-white font-bold rounded mr-[10px]"}
                            startContent={<BsFillPlayFill className={"text-4xl"}/>}
                    >
                        <span className={"relative top-[2px] font-bold"}>Play</span>
                    </Button>
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