import {useState} from "react";
import {FaSortDown} from "react-icons/fa";
import {BiSolidDownArrow} from "react-icons/bi";

export default function UISelect({data}) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentSelectedIndex, setCurrentSelectedIndex] = useState(0);

    return (
        <div className={"relative select-none"}>
            <div className={`flex flex-row justify-between items-center cursor-pointer
                    w-28 h-6 bg-black p-2 text-sm
                    text-white text-[1.4vw] font-bold border
                    hover:bg-transparent
                    `}
                 onClick={() => {
                     setIsOpen(!isOpen)
                 }}
            >
                <div>{data[currentSelectedIndex].label}</div>
                <BiSolidDownArrow className={`${isOpen ? "" : "rotate-180"} scale-75`}  />
            </div>
            <div className={`absolute w-28 top-[h-6] text-sm
                    bg-black text-white text-[1.4vw] font-bold p-2
                     ${isOpen ? "block" : "hidden"}
            `}>
                {
                    isOpen && data.map((item, index) => {
                        return <div key={index}
                                    className={"hover:underline cursor-pointer"}
                                    onClick={() => {
                                        setCurrentSelectedIndex(index)
                                        setIsOpen(false)
                                    }
                                    }
                        >{item.label}</div>
                    })
                }
            </div>
        </div>
    )
}