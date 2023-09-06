import { NotificationIcon } from "@/graphics/NotificationIcon";
import { SearchIcon } from "@/graphics/SearchIcon";
import Image from "next/image";

export default function Header({ className }) {
  return (
    <header
      className={`
      h-[65px]
      bg-gradient-to-b 
      from-[rgba(0,0,0,0.7)] to-transparent]
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
        <SearchIcon className="cursor-pointer" />
        <NotificationIcon className="cursor-pointer" />
        <div className="flex flex-row items-center justify-between gap-3 w-[60px]">
          <img
            src="/images/Netflix-avatar.png"
            className="w-[32px] rounded cursor-pointer"
          ></img>
          <span
            className={`border-x-5 border-t-5 border-x-transparent border-t-white border-solid
              h-0 w-0 m-0 transition transform duration-300 ease-in-out hover:rotate-180`}
          />
        </div>
      </div>
    </header>
  );
}
