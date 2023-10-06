import {Accordion, AccordionItem} from "@nextui-org/react";
import {BsCircle, BsFillCheckCircleFill} from "react-icons/bs";
import React, {useEffect} from "react";
import {useRouter} from "next/router";

export  default function AccordionCard({index, courseID,  course}){

    const router = useRouter();



    function goTo(classID, type){
        const routerPath = `/education/course=${courseID}?class=${classID}&type=${type}`
        router.push(routerPath)
    }

    // console.log(course)


    return(
        <div className={"m-4 mb-12"} key={index}>
            <div className={"text-2xl font-bold ml-2"}>Class {index+1}</div>
            <Accordion selectionMode="multiple" variant="light">
                <AccordionItem key="0" aria-label="Accordion 0" title="Introduction" className={"cursor-pointer"}>
                    <BsFillCheckCircleFill color="#46d369" className="inline-block relative bottom-0.5 mr-1"/>
                    <span onClick={() => goTo(index+1,"intro")}
                    >Introduction</span>
                </AccordionItem>
                <AccordionItem key="1" aria-label="Accordion 1" title="Learn" className={"cursor-pointer"}>
                    <BsFillCheckCircleFill color="#46d369" className="inline-block relative bottom-0.5 mr-1"/>
                    <span onClick={() => goTo(index+1,"video")}
                    >Video: {course.attributes.title}</span>
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Quiz"  className={"cursor-pointer"}>
                    <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1"/>
                    <span  onClick={() => goTo(course.id,"quiz")}
                    >Quiz 1</span>
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Review"  className={"cursor-pointer"}>
                    <BsCircle  color="#46d369" className="inline-block  relative bottom-0.5 mr-1"/>
                    <span  onClick={() => goTo(index+1,"review")}
                    > Review 1</span>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
