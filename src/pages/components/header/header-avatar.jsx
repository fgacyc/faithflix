import {useEffect, useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {BsClockHistory, BsQuestionCircle} from "react-icons/bs";
import {FaRegUser} from "react-icons/fa";
import {PiStudent} from "react-icons/pi";
import {Divider} from "@nextui-org/react";
import {useRouter} from "next/router";
import Link from "next/link";
import {useUser} from "@auth0/nextjs-auth0/client";
import {useUserStore} from "@/status/user-info-store";
import {getUserinfo, updateLoginTime} from "@/components/header/userinfo-api";

export default function HeaderAvatar() {
    const [isRotated, setIsRotated] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [picture, setPicture] = useUserStore((state) => [state.picture, state.setPicture]);
    const setName = useUserStore((state) => state.setName);
    const setLanguage = useUserStore((state) => state.setLanguage);
    const [oauth2_id,setOauth2_id]  = useUserStore((state) => [state.oauth2_id, state.setOauth2_id]);

    function mouseEnter() {
        setIsRotated(true);
        setIsOpen(true);
    }

    function mouseLeave() {
        setIsRotated(false);
        setIsOpen(false);
    }

    const router = useRouter();
    // const path = router.pathname;

    //console.log(path);
    function goTo(routerPath) {
        router.push(routerPath)
    }

    const { user, error, isLoading } = useUser();
    // console.log(user)

    useEffect(() => {
        if(!isLoading && user && !oauth2_id){
            // console.log(user)
            getUserinfo(user.sub).then((res) => {
                setIsLogged(true)
                if(res.status){
                    // console.log(res.data)
                    setPicture(res.data.avatar_url)
                    setName(res.data.username)
                    setLanguage(res.data.language)
                    setOauth2_id(res.data.oauth2_id)
                }else{
                    setPicture(user.picture)
                    setName(user.name)
                    setLanguage(user.locale.split("-")[0])
                    setOauth2_id(user.sub)
                }
                updateLoginTime(user.sub);
            })
        }
    }, [isLoading]);



    return (
        <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)} placement="bottom" showArrow={true}>
            <PopoverTrigger>
                <div className="flex flex-row items-center justify-between gap-3 w-[60px]  cursor-pointer ml-4"
                     onMouseEnter={mouseEnter}
                     onMouseLeave={mouseLeave}
                >
                    <img
                        src={picture}
                        className="w-[32px] rounded"
                        alt={"avatar"}
                        referrerPolicy="no-referrer"
                    ></img>
                    <span
                        className={`border-x-5 border-t-5 border-x-transparent border-t-white border-solid
                  h-0 w-0 m-0 transition transform duration-300 ease-in-out ${isRotated && "rotate-180"}`}
                    />
                </div>
            </PopoverTrigger>
            <PopoverContent className={"rounded bg-[#080605] text-white p-0"}
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
            >
                <div className="p-0 text-xs">
                    <div className="ml-2 mr-[60px] mb-1 mt-3 cursor-pointer">
                        <FaRegUser className={"text-[#B3B3B3] text-2xl inline-block m-1"}/>
                        <span className={"ml-2 hover:underline"}
                              onClick={() => goTo("/profile")}
                        >My Profile</span>
                    </div>
                    <div className="ml-2 mb-1  cursor-pointer">
                        <BsClockHistory className={"text-[#B3B3B3] text-2xl inline-block m-1"}/>
                        <span className={"ml-2 hover:underline"}
                              onClick={() => goTo("/history")}
                        >History</span>
                    </div>
                    {/*<div className="ml-2 mb-1  cursor-pointer">*/}
                    {/*    <PiStudent className={"text-[#B3B3B3] text-2xl inline-block m-1"}/>*/}
                    {/*    <span className={"ml-2 hover:underline"}*/}
                    {/*          onClick={() => goTo("/education")}*/}
                    {/*    >Education</span>*/}
                    {/*</div>*/}
                    <div className="ml-2 mb-1  cursor-pointer">
                        <BsQuestionCircle className={"text-[#B3B3B3] text-2xl inline-block m-1"}/>
                        <span className={"ml-2 hover:underline"}
                              onClick={() => goTo("/help")}
                        >Help Center</span>
                    </div>
                    <Divider className="bg-gray-600 mt-3"/>
                    <div className={"p-3 flex justify-center items-center"}>
                        {isLogged ? <Link href={"/api/auth/logout"} className={" cursor-pointer hover:underline"}>
                            Sign Out

                        </Link> : <Link href={"/api/auth/login"} className={" cursor-pointer hover:underline"}>
                            Sign In
                        </Link>
                        }
                    </div>
                </div>
            </PopoverContent>
        </Popover>

    );
}