import {FacebookIcon} from "@/graphics/FacebookIcon";
import {InstagramIcon} from "@/graphics/InstagramIcon";
import {YoutubeIcon} from "@/graphics/YoutubeIcon";
import {ThreadsIcon} from "@/graphics/ThreadsIcon";
import {Select, SelectItem} from "@nextui-org/react";

export default function Footer(){
    const animals = [
        {
            label:"English",
            value:"english",
        },
        {
            label:"Chinese",
            value:"chinese",
        }];



    return (
        <div className={"p-[50px] text-[#808080] text-sm"}>
            <div className={"flex flex-row justify-between items-center w-[180px]"}>
                <FacebookIcon />
                <YoutubeIcon />
                <InstagramIcon />
                <ThreadsIcon />
            </div>
            <div className={"mt-6"}>
                <Select size={"sm"}
                    label="Select a language"
                    className="max-w-xs"
                    color="#27272A"
                >
                    {animals.map((animal) => (
                        <SelectItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            <div className={"font-bold mt-6"}>© FGACYC</div>
        </div>
    )
}
