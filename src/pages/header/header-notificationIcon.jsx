import {NotificationIcon} from "@/graphics/NotificationIcon";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import {useState} from "react";

function NotificationIconCard({data}){



return (
        <div className="flex flex-row justify-start  cursor-pointer border-b border-gray-600 p-4 hover:bg-[rgba(0,0,0,.9)]">
            <img src={data.cover} alt="avatar" className="w-[100px] h-[60px] rounded"/>
            <div className="flex flex-col gap-1 ml-3">
                <div className="text-tiny font-bold">{data.message}</div>
                <div className="text-tiny text-[#777]">{data.time}</div>
            </div>
        </div>
    )

}

export  default function HeaderNotificationIcon(){
    const [visible, setVisible] = useState(false);
    const cardData = [1,2,3,4,5,6,7,8,9,10];

    function moveMouseLeaveHandler(){
        setVisible(false);
    }

    return (
        <div className={`"flex flex-col gap-2  ml-4 relative" `}
             onMouseLeave={moveMouseLeaveHandler}
        >
            <NotificationIcon className={"cursor-pointer"}
                onMouseEnter={() => setVisible(true)}
            />
            <div className={"bg-transparent h-5 absolute top-[45px] right-[125px] text-transparent"}>111</div>
            <span
                className={`border-x-5 border-t-5 border-x-transparent border-t-white border-solid absolute top-[55px] right-[135px]
                  h-0 w-0 m-0  rotate-180 } ${visible? "": 'hidden'}`}
            />
            <div className={`absolute top-[60px] right-[120px] w-[380px] h-[600px] border
            border-gray-600 bg-[rgba(0,0,0,.7)] overflow-y-auto ${visible? "": 'hidden'}`}>
                {
                    cardData.map((item, index) => {
                        return (
                            <NotificationIconCard data={{
                                cover: "/images/notify.png",
                                message: "You have a new message",
                                time: "2 hours ago"
                            }} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    );

}