import Billboard from "@/pages/components/billboard/billboard";
import {useSearchParams} from 'next/navigation'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function EducationUnit() {
    const searchParams = useSearchParams()

    const unitID = searchParams.get('unitID')
    console.log(unitID)

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


    return (
        <div className={"font-martel bg-[#141414] dark"}>
            <Billboard currentTabIndex={7}/>
            <div className={""} style={{height: "calc(100vh - 65px)"}}>
                <div className={"w-1/4 text-white max-w-xs"}>
                    <div className={"m-4"}>
                        <div className={"text-2xl font-bold ml-2"}>Class1 </div>
                        <Accordion selectionMode="multiple" variant="light">
                            <AccordionItem key="1" aria-label="Accordion 1" title="Learn" className={"cursor-pointer"}>
                                Video: this is video title
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="Quiz"  className={"cursor-pointer"}>
                                Quiz: this is quiz title
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="Review"  className={"cursor-pointer"}>
                                Review: this is review title
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className={"m-4"}>
                        <div className={"text-2xl font-bold ml-2"}>Class2 </div>
                        <Accordion selectionMode="multiple" variant="light">
                            <AccordionItem key="1" aria-label="Accordion 1" title="Learn" className={"cursor-pointer"}>
                                Video: this is video title
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="Quiz"  className={"cursor-pointer"}>
                                Quiz: this is quiz title
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="Review"  className={"cursor-pointer"}>
                                Review: this is review title
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className={"m-4"}>
                        <div className={"text-2xl font-bold ml-2"}>Class3 </div>
                        <Accordion selectionMode="multiple" variant="light">
                            <AccordionItem key="1" aria-label="Accordion 1" title="Learn" className={"cursor-pointer"}>
                                Video: this is video title
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="Quiz"  className={"cursor-pointer"}>
                                Quiz: this is quiz title
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="Review"  className={"cursor-pointer"}>
                                Review: this is review title
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}