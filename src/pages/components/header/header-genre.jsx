import Link from "next/link";
import {useState} from "react";

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
            name: "Music",
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
        </>
    )
}