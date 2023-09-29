//import FillInBlanks from "@/pages/components/quiz/fill-in-blanks";
import MultipleChoice from "@/pages/components/quiz/multiple-choice";
import React, {useEffect} from "react";
import SingleChoice from "@/pages/components/quiz/single-choice";
//import TrueOrFalse from "@/pages/components/quiz/true-or-false";

export  default  function Quizzes({classID}){
    console.log("classID",classID)


    const [classData, setClassData] = React.useState(null);
    const [singleChoice, setSingleChoice] = React.useState(null);

    useEffect(() => {
        if(classID===null) return;
        async function getClassData(){
            const options = {
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_CMS_API_KEY}`
                }
            }
            const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_HOST_URL}/api/classes/${classID}?populate=*`,options)
            const res = await data.json()
            setClassData(res.data)
            setSingleChoice(res.data.attributes.single_choice)
            console.log(res.data)
        }
        getClassData();

    }, [classID]);

    return(
        <>
            {
                classData &&
                <div className={"bg-transparent w-full"}>
                    {/*<FillInBlanks></FillInBlanks>*/}
                    {/*<MultipleChoice></MultipleChoice>*/}
                    <SingleChoice data={singleChoice[0]}></SingleChoice>
                    {/*<TrueOrFalse></TrueOrFalse>*/}
                </div>
            }
        </>
    )
}
