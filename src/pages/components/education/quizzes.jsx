import FillInBlanks from "@/pages/components/quiz/fill-in-blanks";
import MultipleChoice from "@/pages/components/quiz/multiple-choice";
import React, {useEffect} from "react";
import SingleChoice from "@/pages/components/quiz/single-choice";
import TrueOrFalse from "@/pages/components/quiz/true-or-false";
import {CircularProgress, Card, CardBody, CardFooter, Chip, Button} from "@nextui-org/react";


export default function Quizzes({classID}) {
    // console.log("classID",classID)


    const [classData, setClassData] = React.useState(null);
    const [allQuizzes, setAllQuizzes] = React.useState(null);
    const [currentQuizIndex, setCurrentQuizIndex] = React.useState(0);
    const [passed, setPassed] = React.useState(false);

    useEffect(() => {
        if (classID === null) return;

        async function getClassData() {
            const options = {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CMS_API_KEY}`
                }
            }
            const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_HOST_URL}/api/classes/${classID}?populate=*`, options)
            const res = await data.json()
            setClassData(res.data)

            let quizzes = [
                ...res.data.attributes.single_choice.map((item) => {
                    item.type = "single_choice"
                    return item
                }),
                ...res.data.attributes.multiple_choice.map((item) => {
                    item.type = "multiple_choice"
                    return item
                }),
                ...res.data.attributes.true_or_false.map((item) => {
                    item.type = "true_or_false"
                    return item
                }),
                ...res.data.attributes.fill_in_blanks.map((item) => {
                    item.type = "fill_in_blanks"
                    return item
                }),
            ]
            let randomQuizzes = quizzes.sort(() => Math.random() - 0.5);
            setAllQuizzes(randomQuizzes)

        }

        getClassData();

    }, [classID]);

    useEffect(() => {
        console.log("allQuizzes", allQuizzes)
    }, [allQuizzes]);

    return (
        <>
            {
                allQuizzes &&
                <div className={"bg-transparent w-full"}>
                    {/*{*/}
                    {/*    allQuizzes.map((quiz, index) => {*/}
                    {/*        if (quiz.type === "fill_in_blanks") {*/}
                    {/*            return <FillInBlanks key={index}*/}
                    {/*                                 index={index}*/}
                    {/*                                 data={quiz}*/}
                    {/*                                 currentQuizIndex={currentQuizIndex}*/}
                    {/*                                 setCurrentQuizIndex={setCurrentQuizIndex}*/}
                    {/*            ></FillInBlanks>*/}
                    {/*        } else if (quiz.type === "multiple_choice") {*/}
                    {/*            return <MultipleChoice key={index}*/}
                    {/*                                   index={index}*/}
                    {/*                                   data={quiz}*/}
                    {/*                                   currentQuizIndex={currentQuizIndex}*/}
                    {/*                                   setCurrentQuizIndex={setCurrentQuizIndex}></MultipleChoice>*/}
                    {/*        } else if (quiz.type === "single_choice") {*/}
                    {/*            return <SingleChoice key={index}*/}
                    {/*                                 index={index}*/}
                    {/*                                 data={quiz}*/}
                    {/*                                 currentQuizIndex={currentQuizIndex}*/}
                    {/*                                 setCurrentQuizIndex={setCurrentQuizIndex}></SingleChoice>*/}
                    {/*        } else if (quiz.type === "true_or_false") {*/}
                    {/*            return <TrueOrFalse key={index}*/}
                    {/*                                index={index}*/}
                    {/*                                data={quiz}*/}
                    {/*                                currentQuizIndex={currentQuizIndex}*/}
                    {/*                                setCurrentQuizIndex={setCurrentQuizIndex}></TrueOrFalse>*/}
                    {/*        }*/}
                    {/*    })*/}
                    {/*}*/}
                    <div className={"text-white w-full flex flex-col items-center"}>
                        <div className={"mb-8"}>QUIZ RESULT</div>
                        <Card className="w-[240px] h-[240px] border-none"  aria-label="card">
                            <CardBody className="justify-center items-center pb-0">
                                <CircularProgress
                                    classNames={{
                                        svg: "w-36 h-36 drop-shadow-md",
                                        indicator: "stroke-white",
                                        track: "stroke-white/10",
                                        value: "text-3xl font-semibold text-white",
                                    }}
                                    value={70}
                                    strokeWidth={4}
                                    showValueLabel={true}
                                    color="success"
                                    aria-label="process"
                                />
                            </CardBody>
                            <CardFooter className="justify-center items-center pt-0">
                                <Chip
                                    classNames={{
                                        base: "border-1 border-white/30",
                                        content: "text-white/90 text-small font-semibold",
                                    }}
                                    variant="bordered"
                                >
                                    YOU GOT 10 /10
                                </Chip>
                            </CardFooter>
                        </Card>
                        <div className={"mt-6"}>
                            {
                                passed ? <div className={"text-green-400"}>YOU PASSED THE QUIZ</div>
                                    : <div  className={"text-red-400"}>YOU FAILED THE QUIZ</div>
                            }
                        </div>
                        <div className={"mt-6 w-[240px] flex justify-between"}>

                            <Button className={"bg-[rgba(109,109,109,0.3)] text-white rounded"}>Retake</Button>
                            <Button className={"bg-[rgba(109,109,109,0.3)] text-white rounded"}>Finish</Button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
