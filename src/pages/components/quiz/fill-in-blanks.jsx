import {Button, Checkbox} from "@nextui-org/react";
import CorrectTip from "@/pages/components/quiz/correct-tip";
import InCorrectTip from "@/pages/components/quiz/incorrect-tip";
import React from "react";

export  default  function FillInBlanks(){
    const [showAnswer, setShowAnswer] = React.useState(false);
    const [answers, setAnswers] = React.useState(null);
    const fillInBlanksQuestions = [
        {
            question: "The capital of France is [].",
            answer: "Paris",
            explanation: "Correct! The capital of France is Paris."
        },
        {
            question: "Water consists of two parts hydrogen and one part [].",
            answer: "oxygen",
            explanation: "Correct! Water consists of two parts hydrogen and one part oxygen."
        },
        {
            question: "The largest planet in our solar system is [].",
            answer: "Jupiter",
            explanation: "Correct! The largest planet in our solar system is Jupiter."
        },
        {
            question: "The process by which plants make their own food is called [].",
            answer: "photosynthesis",
            explanation: "Correct! The process by which plants make their own food is called photosynthesis."
        }
    ];
    function  questionWithInput(question,index){
        return question.replace("[]", `<input type="text" style="outline:none;line-height: 1.5rem;" 
        class="fill-black-inputs" />`);
    }

    function  handleClick(){
        setShowAnswer(!showAnswer);
        let values =[];
        let DOMs = document.getElementsByClassName("fill-black-inputs");
        for(let i=0;i<fillInBlanksQuestions.length;i++){
            values.push(DOMs[i].value);
        }
        setAnswers(values);
    }


    return (
       <div>
           <div className={"text-white text-lg dark"}>
               {
                   fillInBlanksQuestions.map((question, index) =>{
                       return(
                           <span className={"mr-1"} key={index}
                                 dangerouslySetInnerHTML={{ __html: questionWithInput(question.question,index) }} ></span>
                       )
                   })
               }
           </div>

           <div className={`text-white my-6 ${showAnswer?"":"hidden"}`}>
               {
                   fillInBlanksQuestions.map((question, index) =>{
                       return(
                          <div key={index} className={"flex flex-row justify-between my-1"}>
                            <div>
                                <span>{index + 1}. </span>
                                <span>{question.answer}</span>
                            </div>
                                <span>{answers && answers[index] === question.answer ? <CorrectTip/> : <InCorrectTip/>}</span>
                          </div>
                       )
                   })
               }
           </div>
           <div className={"flex flex-row justify-end"}>
               <Button className={"bg-[rgba(109,109,109,0.3)] text-white rounded"}
                       onClick={handleClick}>
                   <span className={"relative top-[2px] font-bold"}>Next</span>
               </Button>
           </div>
       </div>
    )
}