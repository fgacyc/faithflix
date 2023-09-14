import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {BiSolidDownArrow} from "react-icons/bi";
import Link from "next/link";

export default function Select({data,value,setValue}) {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    function getLabelByValue(value) {
        for (let item of data) {
            if (item.value === value) {
                return item.label
            }
        }
    }

    function  clickHandler(value) {
        setValue(value)
        setIsOpen(false)
    }

    function globalClickHandler(e) {
        if (selectRef.current && !selectRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", globalClickHandler);
        return () => {
            document.removeEventListener("click", globalClickHandler);
        };
    }, []);





    return (
        <div className={"relative select-none mt-2 z-50"} ref={selectRef}>
            <div className={`flex flex-row justify-between items-center cursor-pointer
                    w-28 h-7 bg-black p-2 text-sm
                    text-white text-[1.4vw] font-bold border
                    hover:bg-transparent
                    relative bottom-1
                    `}
                 onClick={() => {
                     setIsOpen(!isOpen)
                 }}
            >
                <div>{getLabelByValue(value)}</div>
                <BiSolidDownArrow className={`${isOpen ? "rotate-180" : ""} scale-75`}/>
            </div>
            <div className={`absolute w-28 top-[h-6] text-sm
                    bg-black text-white text-[1.4vw] font-bold
                     ${isOpen ? "block" : "hidden"}
            `}>
                {
                    isOpen && data.map((item, index) => {
                        return <div key={index}
                                    className={"hover:underline cursor-pointer block p-2 "}
                                    onClick={() => clickHandler(item.value) }
                        >{item.label}</div>
                    })
                }
            </div>
        </div>
    )
}