import {Button, Checkbox} from "@nextui-org/react";
import React from "react";
import {BsCheck} from "react-icons/bs";
import {RxCross2} from "react-icons/rx";

export default function SingleChoice() {
    const [answers, setAnswers] = React.useState([false, false, false, false]);
    const [showAnswer, setShowAnswer] = React.useState(false);
    const data = {
        "question": "Which of the following animals are mammals?",
        "options": [
            {
                "option": "Chicken",
                "isCorrect": false,
                "explanation": "Incorrect! Chicken are not mammals."
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

    return (
        <div className={"text-white dark"}>
            <div className={" font-bold text-lg"}>{data.question}</div>
            <div>
                {data.options.map((option, index) => (
                    <div key={index}
                         className={`border mb-3 p-3
                        ${showAnswer === false && "border-transparent"}
                        ${showAnswer === true && option.isCorrect === true && "border-green-400"}
                        ${showAnswer === true && option.isCorrect === false && "border-red-400"}
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
                                    <div>Your Answer:
                                        <span className={"text-[#46d369] ml-1"}>Correct</span>
                                        <BsCheck className={"inline-block ml-1"} color={"#46d369"} size={"25"}/>
                                    </div>
                                }
                                {answers[index] && option.isCorrect === false &&
                                    <div>Your Answer:
                                        <span className={"text-[#ff8787] ml-1"}>Incorrect</span>
                                        <RxCross2 className={"inline-block ml-1"} color={"#ff8787"} size={"22"}/>
                                    </div>
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
                <Button className={"bg-[rgba(109,109,109,0.3)] text-white rounded"}
                        onClick={() => setShowAnswer(!showAnswer)
                        }>
                    <span className={"relative top-[2px] font-bold"}>Next</span>
                </Button>
            </div>
        </div>
    )
}