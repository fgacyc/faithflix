import {useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {BsClockHistory, BsQuestionCircle} from "react-icons/bs";
import {FaRegUser} from "react-icons/fa";
import {PiStudent} from "react-icons/pi";
import {Divider} from "@nextui-org/react";

export default  function HeaderAvatar() {
    const [isRotated, setIsRotated] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [isLogged, setIsLogged] = useState(false);

    function mouseEnter() {
        setIsRotated(true);
        setIsOpen(true);
    }

    function mouseLeave() {
        setIsRotated(false);
        setIsOpen(false);
    }

    return (
        <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)} placement="bottom" showArrow={true}>
            <PopoverTrigger>
                <div className="flex flex-row items-center justify-between gap-3 w-[60px]  cursor-pointer"
                     onMouseEnter={mouseEnter}
                     onMouseLeave={mouseLeave}
                >
                    <img
                        src="/images/Netflix-avatar.png"
                        className="w-[32px] rounded"
                        alt={"avatar"}></img>
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
                        <FaRegUser className={"text-[#B3B3B3] text-2xl inline-block m-1"} />
                        <span className={"ml-2 hover:underline"}>My Profile</span>
                    </div>
                    <div  className="ml-2 mb-1  cursor-pointer">
                        <BsClockHistory className={"text-[#B3B3B3] text-2xl inline-block m-1"} />
                        <span className={"ml-2 hover:underline"}>History</span>
                    </div>
                    <div  className="ml-2 mb-1  cursor-pointer">
                        <PiStudent className={"text-[#B3B3B3] text-2xl inline-block m-1"} />
                        <span className={"ml-2 hover:underline"}>Education</span>
                    </div>
                    <div  className="ml-2 mb-1  cursor-pointer">
                        <BsQuestionCircle className={"text-[#B3B3B3] text-2xl inline-block m-1"} />
                        <span className={"ml-2 hover:underline"}>Help Center</span>
                    </div>
                    <Divider className="bg-gray-600 mt-3" />
                    <div className={"p-3 flex justify-center items-center"}>
                        <span className={" cursor-pointer hover:underline"}>{
                            isLogged ? "Sign Out" : "Sign In"
                        }</span>
                    </div>
                </div>
            </PopoverContent>
        </Popover>

    );
}