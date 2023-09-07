import {NotificationIcon} from "@/graphics/NotificationIcon";
import {SearchIcon} from "@/graphics/SearchIcon";
import Image from "next/image";
import HeaderAvatar from "./header-avatar";
import {useEffect, useRef, useState} from "react";
import {BiSearch} from "react-icons/bi";
import {IoMdClose} from "react-icons/io";


export default function Header({className}) {
    const avatarURL = "/images/Netflix-avatar.png";
    const [searchBarVisible, setSearchBarVisible] = useState(false);
    const [rightButtonGroup, setRightButtonGroup] = useState(155);
    const inputRef = useRef(null);
    const searchBoxRef = useRef(null);
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
                setSearchBarVisible(false)
            }
        }

        if (searchBarVisible) {
            // 添加点击外部的事件监听器
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            // 移除事件监听器
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            // 在组件卸载时移除事件监听器
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchBarVisible]);

    function showSearchBar() {
        setSearchBarVisible(true);
        setTimeout(() => {
            inputRef.current.focus();
        }, 200);
        //setRightButtonGroup(300)
    }

    function hideSearchBar() {
        setSearchBarVisible(false)
        //setRightButtonGroup(155)
    }


    return (
        <header
            className={`
      h-[65px]
      bg-gradient-to-b 
      from-[rgba(0,0,0,0.7)] to-transparent
      text-white
      flex flex-row justify-between	items-center
      px-[55px]
      ${className}`}
        >
            <div className={"flex flex-row justify-between items-center"}>
                <div className={"mr-[50px]"}>
                    <Image
                        src="/images/faithflix.png"
                        alt="logo"
                        width={105}
                        height={31}
                    />
                </div>
                <div>
                    <ul
                        className={"flex flex-row justify-between items-center w-[400px] text-sm"}
                    >
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Sermons</li>
                        <li className="cursor-pointer">Music</li>
                        <li className="cursor-pointer">New & Popular</li>
                        <li className="cursor-pointer">My List</li>
                    </ul>
                </div>
            </div>

            <div className={"flex flex-row justify-between items-center w-[calc(155px + 270px)]"}>
                <div
                    onClick={showSearchBar}
                    // onBlur={hideSearchBar}
                >
                    {
                        searchBarVisible
                            ? <div
                                className={"bg-[rgba(0,0,0,.6)] border w-[270px] h-8 float-right flex flex-row justify-between items-center"}
                                ref={searchBoxRef}
                            >
                                <BiSearch className="text-white cursor-pointer w-[40px]" size={22}
                                          onClick={hideSearchBar}
                                />
                                <input type="text" className={"bg-transparent text-white w-5/6 h-3/5 outline-0 text-sm"}
                                       placeholder={"Titles, people, genres"}
                                       ref={inputRef}
                                       value={inputValue}
                                       onChange={(e) => setInputValue(e.target.value)}
                                />
                                <div className={"w-[40px]"}>
                                    {
                                        inputValue.length > 0 &&
                                        <IoMdClose className="text-white cursor-pointer w-[40px]" size={22}
                                                   onClick={()=>{setInputValue("")}}
                                        />
                                    }

                                </div>

                            </div>
                            : <div className={"float-right"}>
                                <SearchIcon className="cursor-pointer"/>
                            </div>
                    }
                </div>
                <div className={`flex flex-row justify-start items-center w-[110px]`}>
                    <NotificationIcon className="cursor-pointer ml-4"/>
                    <HeaderAvatar avatarURL={avatarURL}/>
                </div>
            </div>
        </header>
    );
}
