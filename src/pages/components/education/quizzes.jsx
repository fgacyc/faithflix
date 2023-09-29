import FillInBlanks from "@/pages/components/quiz/fill-in-blanks";
import MultipleChoice from "@/pages/components/quiz/multiple-choice";
import React, {useEffect} from "react";
import SingleChoice from "@/pages/components/quiz/single-choice";
import TrueOrFalse from "@/pages/components/quiz/true-or-false";

export default function Quizzes({classID}) {
    // console.log("classID",classID)


    const [classData, setClassData] = React.useState(null);
    const [allQuizzes, setAllQuizzes] = React.useState(null);
    const [currentQuizIndex, setCurrentQuizIndex] = React.useState(0);

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
                    {
                        allQuizzes.map((quiz, index) => {
                            if (quiz.type === "fill_in_blanks") {
                                return <FillInBlanks key={index}
                                                     index={index}
                                                     data={quiz}
                                                     currentQuizIndex={currentQuizIndex}
                                                     setCurrentQuizIndex={setCurrentQuizIndex}
                                ></FillInBlanks>
                            } else if (quiz.type === "multiple_choice") {
                                return <MultipleChoice key={index}
                                                       index={index}
                                                       data={quiz}
                                                       currentQuizIndex={currentQuizIndex}
                                                       setCurrentQuizIndex={setCurrentQuizIndex}></MultipleChoice>
                            } else if (quiz.type === "single_choice") {
                                return <SingleChoice key={index}
                                                     index={index}
                                                     data={quiz}
                                                     currentQuizIndex={currentQuizIndex}
                                                     setCurrentQuizIndex={setCurrentQuizIndex}></SingleChoice>
                            } else if (quiz.type === "true_or_false") {
                                return <TrueOrFalse key={index}
                                                    index={index}
                                                    data={quiz}
                                                    currentQuizIndex={currentQuizIndex}
                                                    setCurrentQuizIndex={setCurrentQuizIndex}></TrueOrFalse>
                            }
                        })
                    }
                </div>
            }
        </>
    )
}
