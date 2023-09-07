import {FacebookIcon} from "@/graphics/FacebookIcon";
import {InstagramIcon} from "@/graphics/InstagramIcon";
import {YoutubeIcon} from "@/graphics/YoutubeIcon";
import {ThreadsIcon} from "@/graphics/ThreadsIcon";
import React from "react";
import LanguageSelect from "@/pages/footer/LanguageSelect";


export default function Footer(){

    return (
        <div className={"p-[50px]  text-sm"}>
            <div className={"flex flex-row justify-between items-center w-[180px]"}>
                <FacebookIcon />
                <YoutubeIcon />
                <InstagramIcon />
                <ThreadsIcon />
            </div>
            <div className={"mt-6"}>
                <LanguageSelect />
            </div>
            <div className={"font-bold mt-6 text-[#808080]"}>© FGACYC</div>
        </div>
    )
}
