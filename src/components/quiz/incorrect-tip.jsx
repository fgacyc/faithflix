import React from "react";
import {RxCross2} from "react-icons/rx";

export default function InCorrectTip(){
    return (
        <span className="inline-block">Your Answer:
            <span className={"text-[#ff8787] ml-1"}>Incorrect</span>
            <RxCross2 className={"inline-block ml-1"} color={"#ff8787"} size={"22"}/>
        </span>
    )
}