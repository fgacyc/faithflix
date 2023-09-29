import {Button, Checkbox} from "@nextui-org/react";
import React from "react";
import InCorrectTip from "@/pages/components/quiz/incorrect-tip";
import CorrectTip from "@/pages/components/quiz/correct-tip";

export default function SingleChoice({data}) {
    const [answers, setAnswers] = React.useState([false, false, false, false]);
    const [showAnswer, setShowAnswer] = React.useState(false);

    const dataFormat = {
        "question": data.question,
        "options": [
            {
                "option": data.option1,
                "isCorrect": data.answer === "option1",
                "explanation": ""
            },
            {
                "option": data.option2,
                "isCorrect": data.answer === "option2",
                "explanation": ""
            },
            {
                "option": data.option3,
                "isCorrect": data.option3 === data.answer,
                "explanation": ""
            },
            {
                "option": data.option4,
                "isCorrect": data.option4 === data.answer,
                "explanation": ""
            }
        ]
    }
    console.log("dataFormat",dataFormat)

    // const mockData = {
    //     "question": "Which of the following animals are mammals?",
    //     "options": [
    //         {
    //             "option": "Chicken",
    //             "isCorrect": false,
    //             "explanation": "Incorrect! Chicken are not mammals."
    //         },
    //         {
    //             "option": "Snake",
    //             "isCorrect": false,
    //             "explanation": "Incorrect. Snakes are reptiles, not mammals."
    //         },
    //         {
    //             "option": "Elephant",
    //             "isCorrect": true,
    //             "explanation": "Correct! Elephants are mammals."
    //         },
    //         {
    //             "option": "Fish",
    //             "isCorrect": false,
    //             "explanation": "Incorrect. Fish are not mammals."
    //         }
    //     ]
    // }

    //console.log(data)

    function handleChange(index, value) {
        const newArray = new Array(4).fill(false);
        newArray[index] = value
        setAnswers(newArray)
        console.log(answers)
    }

    function shuffleArray(array) {
        const shuffled = array.slice(); // 创建副本以避免更改原始数组
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // 交换元素
        }
        return shuffled;
    }

    function checkAnswer(){
        // if answers all false, return
        if(answers.every((answer) => answer === false)) return;
        setShowAnswer(!showAnswer)
    }

    return (
        <div className={"text-white dark"}>
            <div className={" font-bold text-lg"}>{dataFormat.question}</div>
            <div>
                {dataFormat.options.map((option, index) => (
                    <div key={index}
                         className={`border mb-3 p-3
                        ${showAnswer === false && "border-transparent"}
                        ${showAnswer === true && option.isCorrect === true && "border-green-400 pointer-events-none"}
                        ${showAnswer === true && option.isCorrect === false && "border-red-400 pointer-events-none"}
                        `}
                    >
                        <div className={`flex flex-row justify-between
                    `}>
                            <Checkbox radius="full" color="success"
                                      isSelected={answers[index]}
                                      className={"my-0.5"} onValueChange={
                                (value) => handleChange(index, value)
                            }>
                                {String.fromCharCode(65 + index)}. {option.option}
                            </Checkbox>
                            <div className={`text-white ${showAnswer ? "" : "hidden"}`}>
                                {answers[index] && option.isCorrect === true &&
                                    <CorrectTip />
                                }
                                {answers[index] && option.isCorrect === false &&
                                    <InCorrectTip/>
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
                               onClick={() => console.log("next question")}
                        >
                            <span className={"relative top-[2px] font-bold"}>Next</span>
                        </Button>
                }

            </div>
        </div>
    )
}
