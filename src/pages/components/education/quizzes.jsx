import FillInBlanks from "@/pages/components/quiz/fill-in-blanks";
import MultipleChoice from "@/pages/components/quiz/multiple-choice";
import React, {useEffect} from "react";
import SingleChoice from "@/pages/components/quiz/single-choice";
import TrueOrFalse from "@/pages/components/quiz/true-or-false";
import {CircularProgress, Card, CardBody, CardFooter, Chip, Button} from "@nextui-org/react";
import JSConfetti from 'js-confetti'
import {setInterval} from "timers";


export default function Quizzes({classID}) {
    // console.log("classID",classID)


    const [classData, setClassData] = React.useState(null);
    const [allQuizzes, setAllQuizzes] = React.useState(null);
    const [currentQuizIndex, setCurrentQuizIndex] = React.useState(0);
    const [showResult, setShowResult] = React.useState(false);
    const [passed, setPassed] = React.useState(false);
    const [key, setKey] = React.useState(0);
    const [answersRecord, setAnswersRecord] = React.useState({});
    const [correctAnswersNum, setCorrectAnswersNum] = React.useState(0);
    const jsConfetti = new JSConfetti();

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
                // ...res.data.attributes.single_choice.map((item) => {
                //     item.type = "single_choice"
                //     return item
                // }),
                // ...res.data.attributes.multiple_choice.map((item) => {
                //     item.type = "multiple_choice"
                //     return item
                // }),
                // ...res.data.attributes.true_or_false.map((item) => {
                //     item.type = "true_or_false"
                //     return item
                // }),
                ...res.data.attributes.fill_in_blanks.map((item) => {
                    item.type = "fill_in_blanks"
                    return item
                }),
            ]
            let randomQuizzes = quizzes.sort(() => Math.random() - 0.5);
            setAllQuizzes(randomQuizzes.slice(0,1))
        }

        getClassData();

    }, [classID]);

    useEffect(() => {
        if (allQuizzes === null) return;
        if (currentQuizIndex === allQuizzes.length) {
            setShowResult(true)
        }
    }, [currentQuizIndex]);

    useEffect(() => {
        if(allQuizzes === null) return;

        console.log("answersRecord", answersRecord)
        let correctAnswersNum = 0;
        for (let key in answersRecord){
            if(answersRecord[key]===true){
                correctAnswersNum++;
            }
        }
        setCorrectAnswersNum(correctAnswersNum)

        if( correctAnswersNum / allQuizzes.length * 100 > 80){
            setPassed(true)
        }else{
            setPassed(false)
        }
    }, [answersRecord]);


    useEffect(() => {
        if (!passed) return;
        jsConfetti.addConfetti();
        setTimeout(() => {
            jsConfetti.addConfetti();
        }, 2000);
        setTimeout(() => {
            jsConfetti.addConfetti();
        }, 4000);

    }, [showResult]);
    function retake(){
        setCurrentQuizIndex(0)
        setShowResult(false)
        // reload page
        setKey(key+1)
    }

    return (
        <>
            {
                allQuizzes &&
                <div className={"bg-transparent w-full"} key={key}>
                    {
                        allQuizzes.map((quiz, index) => {
                            if (quiz.type === "fill_in_blanks") {
                                return <FillInBlanks key={index}
                                                     index={index}
                                                     data={quiz}
                                                     currentQuizIndex={currentQuizIndex}
                                                     setCurrentQuizIndex={setCurrentQuizIndex}
                                                     setAnswersRecord={setAnswersRecord}
                                ></FillInBlanks>
                            }
                            else if (quiz.type === "multiple_choice") {
                                return <MultipleChoice key={index}
                                                       index={index}
                                                       data={quiz}
                                                       currentQuizIndex={currentQuizIndex}
                                                       setCurrentQuizIndex={setCurrentQuizIndex}
                                                       setAnswersRecord={setAnswersRecord}
                                ></MultipleChoice>
                            }
                            else if (quiz.type === "single_choice") {
                                return <SingleChoice key={index}
                                                     index={index}
                                                     data={quiz}
                                                     currentQuizIndex={currentQuizIndex}
                                                     setCurrentQuizIndex={setCurrentQuizIndex}
                                                     setAnswersRecord={setAnswersRecord}
                                ></SingleChoice>
                            }
                            else if (quiz.type === "true_or_false") {
                                return <TrueOrFalse key={index}
                                                    index={index}
                                                    data={quiz}
                                                    currentQuizIndex={currentQuizIndex}
                                                    setCurrentQuizIndex={setCurrentQuizIndex}
                                                    setAnswersRecord={setAnswersRecord}
                                ></TrueOrFalse>
                            }
                        })
                    }
                    {
                        showResult && allQuizzes &&
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
                                        value={
                                            correctAnswersNum / allQuizzes.length * 100
                                        }
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
                                        YOU GOT {correctAnswersNum} / {allQuizzes.length}
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

                                <Button className={"bg-[rgba(109,109,109,0.3)] text-white rounded"}
                                        onClick={retake}
                                >Retake</Button>
                                <Button className={"bg-[rgba(109,109,109,0.3)] text-white rounded"}>Finish</Button>
                            </div>
                        </div>
                    }
                </div>
            }
        </>
    )
}
