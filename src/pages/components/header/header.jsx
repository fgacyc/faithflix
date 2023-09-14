
import HeaderAvatar from "./header-avatar";
import {useEffect, useRef, useState} from "react";
import HeaderNotificationIcon from "@/pages/components/header/header-notificationIcon";
import {useRouter} from "next/router";
import HeaderGenre from "@/pages/components/header/header-genre";
import HeaderSearch from "@/pages/components/header/header-search";


export default function Header({className, currentTabIndex}) {
    const avatarURL = "/images/Netflix-avatar.png";
    const [searchBarVisible, setSearchBarVisible] = useState(false);
    const inputRef = useRef(null);
    const searchBoxRef = useRef(null);
    const router = useRouter()
    const  path = router.pathname;
    const [avatarAndLogoOnly, setAvatarAndLogoOnly] = useState(false);

    useEffect(() => {
        if (path === "/profile" || path === "/history" || path === "/education" || path === "/help" ) {
            setAvatarAndLogoOnly(true)
        }

    }, [])



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


    function backToHome() {
        router.push("/")
    }


    return (
        <>
            <header
                className={`
                          h-[65px]
                          ${currentTabIndex === 0 ? "bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-transparent" : "bg-black "}
                          text-white
                          flex flex-row justify-between	items-center
                          lg:px-[50px] md:px-[30px] sm:px-[15px] px-[15px]
                          ${className}`}
            >
                <div className={"flex flex-row justify-between items-center dark"}>
                    <div className={"lg:mr-[50px] md:mr-[30px] sm:mr-[10px] mr-[10px]"}>
                        <img
                            src="/images/faithflix.png"
                            alt="logo"
                            width={105}
                            height={31}
                            className={"cursor-pointer lg:w-[105px]  w-[90px]"}
                            onClick={backToHome}
                        />
                    </div>
                    { avatarAndLogoOnly ? null : <HeaderGenre currentTabIndex={currentTabIndex}/>}
                </div>

                <div className={"flex flex-row justify-between items-center w-[calc(155px + 270px)]"}>
                    { !avatarAndLogoOnly && <HeaderSearch hideSearchBar={hideSearchBar} showSearchBar={showSearchBar} inputRef={inputRef}
                                                          searchBarVisible={searchBarVisible} searchBoxRef={searchBoxRef}/>
                    }

                    <div className={`flex flex-row justify-start items-center w-[110px]`}>
                        <HeaderNotificationIcon className={`${avatarAndLogoOnly ? "invisible" : ""}`} />
                        <HeaderAvatar />
                    </div>
                </div>
            </header>
            {currentTabIndex !== 0 &&
                <div className={"h-[65px]"}></div>
            }
        </>
    );
}
