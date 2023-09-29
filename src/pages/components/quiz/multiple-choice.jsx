import {Button, Checkbox} from "@nextui-org/react";
import React, {useEffect} from "react";
import CorrectTip from "@/pages/components/quiz/correct-tip";
import InCorrectTip from "@/pages/components/quiz/incorrect-tip";
import {shuffleArray} from "@/pages/components/quiz/tools";

export default function MultipleChoice({index,data,currentQuizIndex, setCurrentQuizIndex,setAnswersRecord}) {
    const [answers, setAnswers] = React.useState([false, false, false, false]);
    const [showAnswer, setShowAnswer] = React.useState(false);
    const [dataFormat, setDataFormat] = React.useState(null);

    useEffect(() => {
        let dataFormat = formatData(data)
        dataFormat.options = shuffleArray(dataFormat.options)
        setDataFormat(dataFormat)
        // console.log("dataFormat",dataFormat)
    }, []);


    function formatData(data){
        return {
            "question": data.question,
            "options": [
                {
                    "option": data.option1,
                    "isCorrect": data.answers.includes("option1"),
                    "explanation": ""
                },
                {
                    "option": data.option2,
                    "isCorrect": data.answers.includes("option2"),
                    "explanation": ""
                },
                {
                    "option": data.option3,
                    "isCorrect": data.answers.includes("option3"),
                    "explanation": ""
                },
                {
                    "option": data.option4,
                    "isCorrect": data.answers.includes("option4"),
                    "explanation": ""
                }
            ]
        }
    }

    function checkAnswer(){
        // if answers all false, return
        if(answers.every((answer) => answer === false)) return;
        setShowAnswer(!showAnswer)
    }


    const mockData = {
        "question": "Which of the following animals are mammals?",
        "options": [
            {
                "option": "Dog",
                "isCorrect": true,
                "explanation": "Correct! Dogs are mammals."
            },
            {
                "option": "Snake",
                "isCorrect": false,
                "explanation": "Incorrect. Snakes are reptiles, not mammals."
            },
            {
                "option": "Elephant",
                "isCorrect": true,
                "explanation": "Correct! Elephants are mammals."
            },
            {
                "option": "Fish",
                "isCorrect": false,
                "explanation": "Incorrect. Fish are not mammals."
            }
        ]
    }

    function handleChange(index, value) {
        answers[index] = value
        setAnswers(answers)
        //console.log(answers)
    }



    return (
        <>
            {
                dataFormat  && index === currentQuizIndex &&
                <div className={"text-white dark"}>
                    <div className={" font-bold text-lg"}>{dataFormat.question}</div>
                    <div>
                        {dataFormat.options.map((option, index) => (
                            <div key={index}
                                 className={`border mb-3 p-3
                        ${showAnswer === false && "border-transparent"}
                        ${showAnswer === true && option.isCorrect === true && "border-green-400  pointer-events-none"}
                        ${showAnswer === true && option.isCorrect === false && "border-red-400  pointer-events-none"}
                        `}
                            >
                                <div className={`flex flex-row justify-between
                    `}>
                                    <Checkbox radius="full" color="success" className={"my-0.5"} onValueChange={
                                        (value) => handleChange(index, value)
                                    }>
                                        {String.fromCharCode(65 + index)}. {option.option}
                                    </Checkbox>
                                    <div className={`text-white ${showAnswer ? "" : "hidden"}`}>
                                        {answers[index] && option.isCorrect === true &&
                                            <CorrectTip />
                                        }
                                        {answers[index] && option.isCorrect === false &&
                                            <InCorrectTip />
                                        }
                                    </div>
                                </div>
                                <div>
                                    {showAnswer && <div className={"text-white"}>{option.explanation}</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={"flex flex-row justify-end"}>
                        {
                            showAnswer === false ?
                                <Button className={"bg-[rgba(109,109,109,0.3)] text-white rounded"}
                                        onClick={checkAnswer}>
                                    <span className={"relative top-[2px] font-bold"}>Check Answer</span>
                                </Button>
                                :  <Button className={"bg-[rgba(109,109,109,0.3)] text-white rounded"}
                                           onClick={() => setCurrentQuizIndex(currentQuizIndex+1)}
                                >
                                    <span className={"relative top-[2px] font-bold"}>Next</span>
                                </Button>
                        }
                    </div>
                </div>
            }
        </>
    )
}
