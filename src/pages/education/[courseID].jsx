import Billboard from "@/pages/components/billboard/billboard";
import {useSearchParams} from 'next/navigation'
import {Accordion, AccordionItem, Button} from "@nextui-org/react";
import VideoPlayer from "@/pages/components/education/video-player";
import { BsCircle, BsFillCheckCircleFill} from "react-icons/bs";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import React, {useEffect} from "react";
import Quizzes from "@/pages/components/education/quizzes";
import {useRouter} from "next/router";
import MdViewer from "@/pages/components/education/md-viewer";

export default function EducationUnit() {
    const searchParams = useSearchParams()

    const courseID = searchParams.get('courseID') &&  searchParams.get('courseID').split("=")[1]
    const classID = searchParams.get('class')
    const type = searchParams.get('type')
    console.log(courseID, classID, type)

    const router = useRouter();
    function goTo(routerPath){
        router.push(routerPath)
    }

    const [courses, setCourses] = React.useState(null);

    useEffect(() => {
        if(courseID===null) return;
        async function getClassData(){
            const options = {
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_CMS_API_KEY}`
                }
            }
            const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_HOST_URL}/api/courses/${courseID}?populate=*`,options)
            const res = await data.json()
            const courses = res.data.attributes.classes.data;
            console.log(courses)
            setCourses(courses)
        }
        getClassData();

    }, [courseID]);



    return (
        <div className={"font-martel bg-[#141414] dark "}>
            <Billboard currentTabIndex={7}/>
            <div className={"flex flex-row justify-between pr-[50px] pl-[30px]"} style={{height: "calc(100vh - 65px)"}}>

                <div className={"w-1/4 text-white max-w-xs mt-6 overflow-x-auto no-scrollbar"}>
                    {
                        courses && courses.map((course, index) => {
                            return (
                                <div className={"m-4 mb-12"} key={index}>
                                    <div className={"text-2xl font-bold ml-2"}>Class {index+1}</div>
                                    <Accordion selectionMode="multiple" variant="light">
                                        <AccordionItem key="1" aria-label="Accordion 1" title="Learn" className={"cursor-pointer"}>
                                            <BsFillCheckCircleFill color="#46d369" className="inline-block relative bottom-0.5 mr-1"/>
                                            <span onClick={() => goTo(`/education/course=${courseID}?class=1&type=video`)}
                                            >Video: {course.attributes.title}</span>
                                        </AccordionItem>
                                        <AccordionItem key="2" aria-label="Accordion 2" title="Quiz"  className={"cursor-pointer"}>
                                            <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1"/>
                                            <span  onClick={() => goTo(`/education/course=${courseID}?class=1&type=quiz`)}
                                            >Quiz: Class {index+1}</span>
                                        </AccordionItem>
                                        <AccordionItem key="3" aria-label="Accordion 3" title="Review"  className={"cursor-pointer"}>
                                            <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1"/>
                                            <span  onClick={() => goTo(`/education/course=${courseID}?class=1&type=review`)}
                                            > Review: Class {index+1}</span>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            )
                        } )
                    }
                </div>

                {/*<div className={"w-1/4 text-white max-w-xs mt-6 overflow-x-auto no-scrollbar"}>*/}
                {/*    <div className={"m-4 mb-12"}>*/}
                {/*        <div className={"text-2xl font-bold ml-2"}>Class1 </div>*/}
                {/*        <Accordion selectionMode="multiple" variant="light">*/}
                {/*            <AccordionItem key="1" aria-label="Accordion 1" title="Learn" className={"cursor-pointer"}>*/}
                {/*                <BsFillCheckCircleFill color="#46d369" className="inline-block relative bottom-0.5 mr-1"/>*/}
                {/*                <span onClick={() => goTo(`/education/course=${courseID}?class=1&type=video`)}*/}
                {/*                >Video: this is video title</span>*/}
                {/*            </AccordionItem>*/}
                {/*            <AccordionItem key="2" aria-label="Accordion 2" title="Quiz"  className={"cursor-pointer"}>*/}
                {/*                <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1"/>*/}
                {/*                <span  onClick={() => goTo(`/education/course=${courseID}?class=1&type=quiz`)}*/}
                {/*                >Quiz: this is quiz title</span>*/}
                {/*            </AccordionItem>*/}
                {/*            <AccordionItem key="3" aria-label="Accordion 3" title="Review"  className={"cursor-pointer"}>*/}
                {/*                <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1"/>*/}
                {/*                <span  onClick={() => goTo(`/education/course=${courseID}?class=1&type=review`)}*/}
                {/*                > Review: this is review title</span>*/}
                {/*            </AccordionItem>*/}
                {/*        </Accordion>*/}
                {/*    </div>*/}
                {/*    <div className={"m-4 mb-12"}>*/}
                {/*        <div className={"text-2xl font-bold ml-2"}>Class2 </div>*/}
                {/*        <Accordion selectionMode="multiple" variant="light">*/}
                {/*            <AccordionItem key="1" aria-label="Accordion 1" title="Learn" className={"cursor-pointer"}>*/}
                {/*                <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1" />  Video: this is video title*/}
                {/*            </AccordionItem>*/}
                {/*            <AccordionItem key="2" aria-label="Accordion 2" title="Quiz"  className={"cursor-pointer"}>*/}
                {/*                <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1" />  Quiz: this is quiz title*/}
                {/*            </AccordionItem>*/}
                {/*            <AccordionItem key="3" aria-label="Accordion 3" title="Review"  className={"cursor-pointer"}>*/}
                {/*                <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1" />  Review: this is review title*/}
                {/*            </AccordionItem>*/}
                {/*        </Accordion>*/}
                {/*    </div>*/}
                {/*    <div className={"m-4 mb-12"}>*/}
                {/*        <div className={"text-2xl font-bold ml-2"}>Class3 </div>*/}
                {/*        <Accordion selectionMode="multiple" variant="light">*/}
                {/*            <AccordionItem key="1" aria-label="Accordion 1" title="Learn" className={"cursor-pointer"}>*/}
                {/*                <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1" />  Video: this is video title*/}
                {/*            </AccordionItem>*/}
                {/*            <AccordionItem key="2" aria-label="Accordion 2" title="Quiz"  className={"cursor-pointer"}>*/}
                {/*                <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1" />  Quiz: this is quiz title*/}
                {/*            </AccordionItem>*/}
                {/*            <AccordionItem key="3" aria-label="Accordion 3" title="Review"  className={"cursor-pointer"}>*/}
                {/*                <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1" />  Review: this is review title*/}
                {/*            </AccordionItem>*/}
                {/*        </Accordion>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={"my-8 relative w-3/4"}>
                    {
                        type === "video" &&  <VideoPlayer  />
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
