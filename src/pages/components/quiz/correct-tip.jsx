import {BsCheck} from "react-icons/bs";
import React from "react";

export default function CorrectTip(){
    return (
        <span className="inline-block">Your Answer:
            <span className={"text-[#46d369] ml-1"}>Correct</span>
            <BsCheck className={"inline-block ml-1"} color={"#46d369"} size={"25"}/>
        </span>
    )
}