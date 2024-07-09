import {FacebookIcon} from "@/graphics/FacebookIcon";
import {InstagramIcon} from "@/graphics/InstagramIcon";
import {YoutubeIcon} from "@/graphics/YoutubeIcon";
import {ThreadsIcon} from "@/graphics/ThreadsIcon";
import React from "react";
import LanguageSelect from "@/pages/components/footer/LanguageSelect";
import Link from "next/link";


export default function Footer(){

    return (
        <div className={"p-[50px]  text-sm flex flex-row justify-between flex-wrap-reverse"}>
            <div>
                <div className={"flex flex-row justify-between items-center w-[180px]"}>
                    <Link  target="_blank" href={"https://www.facebook.com/FGACYC"} className={"cursor-pointer"}><FacebookIcon /></Link>
                    <Link  target="_blank" href={"https://www.youtube.com/@fgacyc"} className={"cursor-pointer"}><YoutubeIcon /></Link>
                    <Link  target="_blank" href={"https://www.instagram.com/fgacyc/"} className={"cursor-pointer"}><InstagramIcon /></Link>
                    <Link  target="_blank" href={"https://www.threads.net/@fgacyc"} className={"cursor-pointer"}><ThreadsIcon /></Link>
                </div>
                <div className={"mt-6"}>
                    <LanguageSelect />
                </div>
                <div className={"font-bold mt-6 text-[#808080]"}>© FGACYC</div>
            </div>
            <div className={"flex flex-col justify-between text-[#808080] h-[110px] mb-4"}>
                <Link href={"/"} className={"hover:underline"}>Home</Link>
                <Link href={"https://www.fgacyc.tech/terms-of-service"} className={"hover:underline"}
                    target={"_blank"}
                >Terms and Conditions</Link>
                <Link href={"https://www.fgacyc.tech/privacy-policy"} className={"hover:underline"}
                    target={"_blank"}
                >Privacy Policy</Link>
                <Link href={"/"} className={"hover:underline"}>Collection Statemen</Link>
            </div>
            <div className={"flex flex-col justify-between text-[#808080] h-[110px] mb-4"}>
                <Link href={"/"} className={"hover:underline"}>Help</Link>
                <Link href={"/"} className={"hover:underline"}>Manage Account</Link>
                <Link href={"/"} className={"hover:underline"}>Media Center</Link>
                <Link href={"/"} className={"hover:underline"}>Development Team</Link>
            </div>
        </div>
    )
}
