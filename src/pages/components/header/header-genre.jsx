import Link from "next/link";
import {useState} from "react";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import {AiOutlineCaretDown} from "react-icons/ai";


export default function HeaderGenre({currentTabIndex}){
    const tabs = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Sermons",
            url: "/sermons",
        },
        {
            name: "Worship",
            url: "/music",
        },
        {
            name: "New & Popular",
            url: "/latest",
        },
        {
            name: "My List",
            url: "/my-list",
        }
    ]
    const [currentTab, setCurrentTab] = useState(currentTabIndex || 0);


    return (
        <>
            <div className={`flex-row justify-between items-center w-[400px] text-sm
                md:flex sm:hidden hidden
            `}>
                {
                    tabs.map((tab, index) => {
                        return (
                            <span key={index}>
                                    {index === currentTab
                                        ? <Link
                                            className="cursor-pointer font-bold"
                                            onClick={() => {
                                                setCurrentTab(index)
                                            }}
                                            href={tab.url}>{tab.name}</Link>
                                        : <Link
                                            className="cursor-pointer"
                                            onClick={() => {
                                                setCurrentTab(index)
                                            }}
                                            href={tab.url}>{tab.name}</Link>
                                    }
                                </span>
                        )
                    })
                }
            </div>
            <div className={"2xl:hidden  xl:hidden lg:hidden md:hidden sm:block block"}>
                <Popover placement="bottom" showArrow={true} >
                    <PopoverTrigger>
                        <div className={"flex flex-row cursor-pointer"}>
                            <div className={"mr-2"}>Browse</div>
                            <AiOutlineCaretDown/>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="bg-[rgba(0,0,0,.9)] text-white rounded">
                        <div className="px-1 py-2">
                            {
                                tabs.map((tab, index) => {
                                    return (
                                        <div key={index} className={"p-4 w-[160px]"}>
                                            <Link
                                                className="cursor-pointer text-center hover:font-bold inline-block w-full"
                                                href={tab.url}>{tab.name}
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </PopoverContent>
                </Popover>
            </div>

        </>
    )
}