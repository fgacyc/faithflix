import {Button, Checkbox} from "@nextui-org/react";
import {BsCheck} from "react-icons/bs";
import {RxCross2} from "react-icons/rx";
import React from "react";
import CorrectTip from "@/pages/components/quiz/correct-tip";
import InCorrectTip from "@/pages/components/quiz/incorrect-tip";

export default function TrueOrFalse() {
    const [answers, setAnswers] = React.useState([false, false]);
    const [showAnswer, setShowAnswer] = React.useState(false);
    const data = {
        question: "The Earth is flat.",
        isTrue: false,
        explanation: "The Earth is an oblate spheroid."
    }

    function handleChange(index, value) {
        const newArray = new Array(2).fill(false);
        newArray[index] = value
        setAnswers(newArray)
        console.log(answers)
    }



    return (
        <div className={"text-white dark"}>
            <div className={" font-bold text-lg"}>{data.question}</div>
            <div className={"flex flex-row justify-around h-[70px]"}>
                <Checkbox radius="full" color="success" isSelected={answers[0]}
                          onValueChange={
                              (value) => handleChange(0, value)}
                >
                    True
                </Checkbox>
                <Checkbox radius="full" color="success" isSelected={answers[1]}
                          onValueChange={
                              (value) => handleChange(1, value)}
                >
                    False
                </Checkbox>
            </div>
            <div>
                { showAnswer === true &&
                    <div className={"p-3 pl-0"}>
                        {data.isTrue === true && answers[0] === true &&
                           <div>
                               {data.explanation} <CorrectTip/>
                           </div>
                        }
                        {data.isTrue === true && answers[0] === false &&
                            <div>
                                {data.explanation} <InCorrectTip/>
                            </div>
                        }
                        {data.isTrue === false && answers[1] === false &&
                            <div>
                                {data.explanation} <InCorrectTip/>
                            </div>
                        }
                        {data.isTrue === false && answers[1] === true &&
                            <div>
                                {data.explanation} <CorrectTip/>
                            </div>
                        }
                    </div>
                }

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