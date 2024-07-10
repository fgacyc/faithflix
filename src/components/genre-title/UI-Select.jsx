import {useState} from "react";
import {BiSolidDownArrow} from "react-icons/bi";
import Link from "next/link";
import {useRouter} from "next/router";
import {FiChevronRight} from "react-icons/fi";

export default function UISelect({data}) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentSelectedIndex, setCurrentSelectedIndex] = useState(0);

    const router = useRouter();
    const path = router.asPath;
    console.log(path);




    return (
        <div className={"relative select-none"}>
            <div className={`flex flex-row justify-between items-center cursor-pointer
                    w-28 h-7 bg-black p-2 text-sm
                    text-white lg:text-xl md:text-lg sm:text-base text-base font-bold border
                    hover:bg-transparent
                    relative bottom-1
                    `}
                 onClick={() => {
                     setIsOpen(!isOpen)
                 }}
            >
                <div>{data[currentSelectedIndex].label}</div>
                <BiSolidDownArrow className={`${isOpen ? "rotate-180" : ""} scale-75`}/>
            </div>
            <div className={`absolute w-28 top-[h-6] text-sm
                    bg-black text-white lg:text-xl md:text-lg sm:text-base text-base font-bold p-2
                     ${isOpen ? "block" : "hidden"}
            `}>
                {
                    isOpen && data.map((item, index) => {
                        return <>
                        { path.substring(0, 6) === "/music"
                            ?  <Link key={index}
                                     className={"hover:underline cursor-pointer block"}
                                     href={`/music/genre/${item.value}`}>{item.label}</Link>
                            : <Link key={index}
                                    className={"hover:underline cursor-pointer block"}
                                    href={`/sermon/genre/${item.value}`}>{item.label}</Link>
                        }
                        </>
                    })
                }
            </div>
        </div>
    )
}