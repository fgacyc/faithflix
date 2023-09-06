import Header from "../header/header";
import Image from "next/image";
import {Button, useDisclosure} from "@nextui-org/react";
import {BsFillPlayFill} from "react-icons/bs";
import {FiInfo} from "react-icons/fi";
import {GrCircleInformation} from "react-icons/gr";
import DetailModal from "@/pages/detail-modal/DetailModal";

export default function Billboard() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div className={"relative"}>
            <Header className="fixed top-0 w-full py-2 z-10"/>
            <Image
                src="/images/There_is_ a_miracle.jpg"
                alt="logo"
                width={1920}
                height={1080}
                quality={100}
                className="object-cover max-h-[100vh] flex justify-center items-center brightness-[0.7]"
            />
            <div className={`absolute bottom-[300px] text-white flex flex-col ml-[50px]
            items-start w-[40%] h-[250px] justify-between`}>
                <div className="text-4xl font-bold text-white">There is a miracle in your mouth</div>
                <div className={"text-lg"}>
                    There is a miracle in your mouth There is a miracle in your mouth There is a miracle in your mouth
                    There is a miracle in your mouth
                </div>
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
            <DetailModal isOpen={isOpen} onOpenChange={onOpenChange}/>
        </div>
    );
}
