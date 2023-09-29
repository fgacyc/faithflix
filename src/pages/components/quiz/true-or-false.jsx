import {Button, Checkbox} from "@nextui-org/react";
import React, {useEffect} from "react";
import CorrectTip from "@/pages/components/quiz/correct-tip";
import InCorrectTip from "@/pages/components/quiz/incorrect-tip";

export default function TrueOrFalse({index,data,currentQuizIndex, setCurrentQuizIndex}) {
    const [answers, setAnswers] = React.useState([false, false]);
    const [showAnswer, setShowAnswer] = React.useState(false);
    const [dataFormat, setDataFormat] = React.useState(null);

    useEffect(() => {
        let dataFormat = formatData(data)
        setDataFormat(dataFormat)
        // console.log("dataFormat",dataFormat)
    }, [data]);

    function formatData(data){
        return {
            "question": data.question,
            "isTrue": data.true_or_false,
            "explanation": ""
        }
    }

    // const mockData = {
    //     question: "The Earth is flat.",
    //     isTrue: false,
    //     explanation: "The Earth is an oblate spheroid."
    // }

    function handleChange(index, value) {
        const newArray = new Array(2).fill(false);
        newArray[index] = value
        setAnswers(newArray)
        console.log(answers)
    }


    function checkAnswer(){
        // if answers all false, return
        if(answers.every((answer) => answer === false)) return;
        setShowAnswer(!showAnswer)
    }


    return (
        <>
            { dataFormat && index === currentQuizIndex &&
                <div className={"text-white dark"}>
                    <div className={" font-bold text-lg"}>{dataFormat.question}</div>
                    <div className={`flex flex-row justify-around h-[70px]
                    ${showAnswer === true && "pointer-events-none"}
                    `}>
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
                                {dataFormat.isTrue === true && answers[0] === true &&
                                    <div>
                                        {dataFormat.explanation} <CorrectTip/>
                                    </div>
                                }
                                {dataFormat.isTrue === true && answers[0] === false &&
                                    <div>
                                        {dataFormat.explanation} <InCorrectTip/>
                                    </div>
                                }
                                {dataFormat.isTrue === false && answers[1] === false &&
                                    <div>
                                        {dataFormat.explanation} <InCorrectTip/>
                                    </div>
                                }
                                {dataFormat.isTrue === false && answers[1] === true &&
                                    <div>
                                        {dataFormat.explanation} <CorrectTip/>
                                    </div>
                                }
                            </div>
                        }

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
