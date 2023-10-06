import { Button } from "@nextui-org/react";
import CorrectTip from "@/components/quiz/correct-tip";
import InCorrectTip from "@/components/quiz/incorrect-tip";
import React, { useEffect } from "react";

export default function FillInBlanks({
  index,
  data,
  currentQuizIndex,
  setCurrentQuizIndex,
  setAnswersRecord,
}) {
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [answers, setAnswers] = React.useState(null);
  const [dataFormat, setDataFormat] = React.useState(null);

  useEffect(() => {
    let dataFormat = formatData(data);
    setDataFormat(dataFormat);
    // console.log("dataFormat",dataFormat)
  }, []);

  function formatData(data) {
    let sentences = data.question.split(/[，。,.]+/);
    let regex = /\[([^[\]]*)\]/;
    sentences = sentences.filter((item) => {
      return item !== "" && regex.test(item);
    });
    let fillInBlanksQuestions = [];
    for (let sentence of sentences) {
      const QuestionAndAnswer = getQuestionAndAnswer(sentence);
      fillInBlanksQuestions.push({
        question: QuestionAndAnswer[0],
        answer: QuestionAndAnswer[1],
        explanation: "",
      });
    }
    return fillInBlanksQuestions;
  }

  function getQuestionAndAnswer(sentence) {
    const regex = /\[([^[\]]*)\]/; // 匹配方括号内的内容
    const matches = sentence.match(regex);

    if (matches) {
      const extractedContent = matches[1]; // 提取方括号内的内容
      const formattedSentence = sentence.replace(matches[0], "[]"); // 将方括号内的内容替换为"[]"
      return [formattedSentence, extractedContent];
    } else {
      console.log("未找到匹配的内容");
    }
  }
  function questionWithInput(question, index) {
    return question.replace(
      "[]",
      `<input type="text" style="outline:none;line-height: 1.5rem;" 
        class="fill-black-inputs mx-2" />`
    );
  }

  function resultRecord() {
    if (answers === null) return;
    for (let i = 0; i < dataFormat.length; i++) {
      if (answers[i] !== dataFormat[i].answer) {
        setAnswersRecord((prev) => ({
          ...prev,
          [`fill_in_blanks-${data.id}`]: false,
        }));
        return;
      }
    }
    setAnswersRecord((prev) => ({
      ...prev,
      [`fill_in_blanks-${data.id}`]: true,
    }));
  }

  function handleClick() {
    let values = [];
    let DOMs = document.getElementsByClassName("fill-black-inputs");
    let completed = true;
    for (let i = 0; i < dataFormat.length; i++) {
      let val = DOMs[i].value;
      if (val === "") {
        completed = false;
        break;
      }
      values.push(val);
    }
    if (!completed) return;
    setAnswers(values);
    setShowAnswer(!showAnswer);
  }

  useEffect(() => {
    resultRecord();
  }, [answers]);

  return (
    <>
      {dataFormat && index === currentQuizIndex && (
        <div>
          <div className={"text-white text-lg dark"}>
            {dataFormat.map((question, index) => {
              return (
                <span
                  className={"mr-1"}
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: questionWithInput(question.question, index),
                  }}
                ></span>
              );
            })}
          </div>

          <div className={`text-white my-6 ${showAnswer ? "" : "hidden"}`}>
            {dataFormat.map((question, index) => {
              return (
                <div
                  key={index}
                  className={"flex flex-row justify-between my-1"}
                >
                  <div>
                    <span>{index + 1}. </span>
                    <span>{question.answer}</span>
                  </div>
                  <span>
                    {answers && answers[index] === question.answer ? (
                      <CorrectTip />
                    ) : (
                      <InCorrectTip />
                    )}
                  </span>
                </div>
              );
            })}
          </div>
          <div className={"flex flex-row justify-end"}>
            {showAnswer === false ? (
              <Button
                className={"bg-[rgba(109,109,109,0.3)] text-white rounded"}
                onClick={handleClick}
              >
                <span className={"relative top-[2px] font-bold"}>
                  Check Answer
                </span>
              </Button>
            ) : (
              <Button
                className={"bg-[rgba(109,109,109,0.3)] text-white rounded"}
                onClick={() => setCurrentQuizIndex(currentQuizIndex + 1)}
              >
                <span className={"relative top-[2px] font-bold"}>Next</span>
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
