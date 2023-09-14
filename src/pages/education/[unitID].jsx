import Billboard from "@/pages/components/billboard/billboard";
import {useSearchParams} from 'next/navigation'
import {Accordion, AccordionItem, Button} from "@nextui-org/react";
import VideoPlayer from "@/pages/components/education/video-player";
import {IoCheckmarkSharp} from "react-icons/io5";
import {BsCheckCircle, BsCircle, BsFillCheckCircleFill} from "react-icons/bs";
import {FiChevronLeft, FiChevronRight, FiInfo} from "react-icons/fi";
import React from "react";
import Quizzes from "@/pages/components/education/quizzes";
import {useRouter} from "next/router";
import MdViewer from "@/pages/components/education/md-viewer";

export default function EducationUnit() {
    const searchParams = useSearchParams()

    const unitID = searchParams.get('unitID')
    const classID = searchParams.get('classID')
    const type = searchParams.get('type')
    console.log(unitID, classID, type)

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    const router = useRouter();
    function goTo(routerPath){
        router.push(routerPath)
    }

    return (
        <div className={"font-martel bg-[#141414] dark "}>
            <Billboard currentTabIndex={7}/>
            <div className={"flex flex-row justify-between pr-[50px] pl-[30px]"} style={{height: "calc(100vh - 65px)"}}>
                <div className={"w-1/4 text-white max-w-xs mt-6 overflow-x-auto no-scrollbar"}>
                    <div className={"m-4 mb-12"}>
                        <div className={"text-2xl font-bold ml-2"}>Class1 </div>
                        <Accordion selectionMode="multiple" variant="light">
                            <AccordionItem key="1" aria-label="Accordion 1" title="Learn" className={"cursor-pointer"}>
                                <BsFillCheckCircleFill color="#46d369" className="inline-block relative bottom-0.5 mr-1"/>
                                <span onClick={() => goTo(`/education/msj1?class=1&type=video`)}
                                >Video: this is video title</span>
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="Quiz"  className={"cursor-pointer"}>
                                <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1"/>
                                <span  onClick={() => goTo(`/education/msj1?class=1&type=quiz`)}
                                >Quiz: this is quiz title</span>
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="Review"  className={"cursor-pointer"}>
                                <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1"/>
                                <span  onClick={() => goTo(`/education/msj1?class=1&type=review`)}
                                > Review: this is review title</span>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className={"m-4 mb-12"}>
                        <div className={"text-2xl font-bold ml-2"}>Class2 </div>
                        <Accordion selectionMode="multiple" variant="light">
                            <AccordionItem key="1" aria-label="Accordion 1" title="Learn" className={"cursor-pointer"}>
                                <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1" />  Video: this is video title
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="Quiz"  className={"cursor-pointer"}>
                                <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1" />  Quiz: this is quiz title
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="Review"  className={"cursor-pointer"}>
                                <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1" />  Review: this is review title
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className={"m-4 mb-12"}>
                        <div className={"text-2xl font-bold ml-2"}>Class3 </div>
                        <Accordion selectionMode="multiple" variant="light">
                            <AccordionItem key="1" aria-label="Accordion 1" title="Learn" className={"cursor-pointer"}>
                                <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1" />  Video: this is video title
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="Quiz"  className={"cursor-pointer"}>
                                <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1" />  Quiz: this is quiz title
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="Review"  className={"cursor-pointer"}>
                                <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1" />  Review: this is review title
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div className={"my-8 relative w-3/4"}>
                    {
                        type === "video" &&  <VideoPlayer />
                    }
                    {
                        type === "quiz" && <Quizzes />
                    }
                    {
                        type === "review" && <MdViewer />
                    }

                    <div className={"absolute bottom-0 w-full flex flex-row justify-between"}>
                        <Button className={"bg-[rgba(109,109,109,0.3)] text-white rounded"}
                                startContent={
                                    <FiChevronLeft className={"text-2xl"}  color="white"/>}
                                //onPress={onOpen}
                        >
                            <span className={"relative top-[2px] font-bold"}> Previous</span>
                        </Button>
                        <Button className={"bg-[rgba(109,109,109,0.3)] text-white rounded"}
                                endContent={
                                    <FiChevronRight className={"text-2xl"}  color="white"/>}
                                // onPress={onOpen}
                        >
                            <span className={"relative top-[2px] font-bold"}>Next </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}