import Billboard from "@/pages/components/billboard/billboard";
import Select from "@/pages/components/Select/Select";
import {useEffect, useState} from "react";
import {Button, Switch} from "@nextui-org/react";
import {EditIcon} from "@/graphics/EditIcon";
import React from "react";
import {useRouter} from "next/router";

export default function Profile() {
    const [value, setValue] = useState("en");
    const uploaderRef = React.useRef(null);
    const  data = [
        {label: "English", value: "en"},
        {label: "Chinese", value: "ch"},
    ]

    const router = useRouter()


    useEffect(() => {
        if(uploaderRef.current){
            uploaderRef.current.addEventListener("change", (e) => {
                console.log(e.target.files[0]);
            })
        }
    }, []);

    function showUploader(){
        uploaderRef.current.click();
    }

    return (
        <>
            <div className={"font-martel bg-[#141414] h-screen dark"}>
                <Billboard currentTabIndex={5}/>
                <div className={"w-[650px]  m-auto text-white "}>
                    <div className={` mt-[50px] text-6xl font-bold border-b-1 border-[#333333]`}>Edit Profile</div>
                    <div className={"flex flex-row justify-between pb-6 mt-6 border-b-1 border-[#333333]"}>
                        <div className={"relative w-32 h-32"}>
                            <img
                                src={"/images/user-avatar.jpg"}
                                alt="logo"
                                className="object-cover w-32 h-32"
                            />
                            <EditIcon className={"absolute bottom-0 left-0 cursor-pointer m-2"} size={20}
                                onClick={showUploader}
                            />
                        </div>
                        <div className={"w-[500px]"}>
                            <input type="text" className={"w-full h-9 outline-none bg-[#666666] p-2 text-lg "} />
                            <div className={"text-[#cccccc] text-lg mt-7"}>Language: </div>
                            <Select data={data} value={value} setValue={setValue} />
                            <div>
                                <div className={"text-[#cccccc] text-lg mt-7"}>Receive notification: </div>
                                <Switch defaultSelected color="default">Receive</Switch>
                            </div>
                        </div>
                    </div>
                    <div className={"mt-6 w-[200px] flex flex-row justify-between"}>
                        <Button color="default" radius="none">
                            Save
                        </Button>
                        <Button color="default" radius="none"  variant="faded"
                                onClick={() => router.back()}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
            <input type="file" ref={uploaderRef} className={"hidden"} accept="image/*" />
        </>
    )
}