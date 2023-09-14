import FillInBlanks from "@/pages/components/quiz/fill-in-blanks";
import MultipleChoice from "@/pages/components/quiz/multiple-choice";
import SingleChoice from "@/pages/components/quiz/single-choice";
import TrueOrFalse from "@/pages/components/quiz/true-or-false";

export  default  function Quizzes(){
    return(
        <div className={"bg-transparent w-full"}>
            {/*<FillInBlanks></FillInBlanks>*/}
            <MultipleChoice></MultipleChoice>
            {/*<SingleChoice></SingleChoice>*/}
            {/*<TrueOrFalse></TrueOrFalse>*/}
        </div>
    )
}