import {NotificationIcon} from "@/graphics/NotificationIcon";
import {SearchIcon} from "@/graphics/SearchIcon";
import Image from "next/image";
import HeaderAvatar from "./header-avatar";




export default function Header({className}) {
    const avatarURL = "/images/Netflix-avatar.png";

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
                        className={"flex flex-row justify-between items-center w-[450px] text-sm"}
                    >
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Sermons</li>
                        <li className="cursor-pointer">Music</li>
                        <li className="cursor-pointer">New & Popular</li>
                        <li className="cursor-pointer">My List</li>
                    </ul>
                </div>
            </div>
            <div className={"flex flex-row justify-between items-center w-[155px]"}>
                <SearchIcon className="cursor-pointer"/>
                <NotificationIcon className="cursor-pointer"/>
                <HeaderAvatar avatarURL={avatarURL}/>
            </div>
        </header>
    );
}
