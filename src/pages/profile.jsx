import Billboard from "@/components/billboard/billboard";
import Select from "@/components/Select/Select";
import {useEffect} from "react";
import {Button, Switch} from "@nextui-org/react";
import {EditIcon} from "@/graphics/EditIcon";
import React from "react";
import {useRouter} from "next/router";
import {useUserStore} from "@/status/user-info-store";
import {upsertUserInfo, getUserinfo} from "@/components/header/userinfo-api";

export default function Profile() {
    const uploaderRef = React.useRef(null);
    const [picture, setPicture] = useUserStore((state) => [state.picture, state.setPicture]);
    const [name, setName] = useUserStore((state) => [state.name, state.setName]);
    const [language, setLanguage] = useUserStore((state) => [state.language, state.setLanguage]);
    const oauth2_id = useUserStore((state) => state.oauth2_id);

    const  data = [
        {label: "English", value: "en"},
        {label: "Chinese", value: "zh"},
    ]

    const router = useRouter()


    useEffect(() => {
        if(uploaderRef.current){
            uploaderRef.current.addEventListener("change", (e) => {
                //console.log(e.target.files[0]);
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    setPicture(reader.result);
                };
            })
        }
    }, []);

    function showUploader(){
        uploaderRef.current.click();
    }

    function  handleSave(){

        // upsertUserInfo(
        //     {
        //         oauth2_id: oauth2_id,
        //         name: name,
        //         picture: picture,
        //         language: language
        //     }
        // ).then((res) => {
        //     console.log(res);
        // })
    }

    return (
        <>
            <div className={"font-martel bg-[#141414] h-screen dark "}>
                <Billboard currentTabIndex={5}/>
                <div className={"max-w-[650px] w-full m-auto text-white "}>
                    <div className={` mt-[50px] md:text-6xl sm:text-4xl text-2xl font-bold border-b-1 border-[#333333]`}>Edit Profile</div>
                    <div className={"flex flex-row justify-between pb-6 mt-6 border-b-1 border-[#333333] flex-wrap"}>
                        <div className={"relative w-32 h-32 mb-6"}>
                            <img
                                src={picture}
                                alt="logo"
                                className="object-cover w-32 h-32 "
                                referrerPolicy="no-referrer"
                            />
                            <EditIcon className={"absolute bottom-0 left-0 cursor-pointer m-2"} size={20}
                                onClick={showUploader}
                            />
                        </div>
                        <div className={"max-w-[500px] w-full"}>
                            <input type="text"  value={name} onChange={(e) => setName(e.target.value)}
                                   className={"w-full h-9 outline-none bg-[#666666] p-2 text-lg "} />
                            <div className={"text-[#cccccc] text-lg mt-7"}>Language: </div>
                            <Select data={data} value={language} setValue={setLanguage} />
                            <div>
                                <div className={"text-[#cccccc] text-lg mt-7"}>Receive notification: </div>
                                <Switch defaultSelected color="default">Receive</Switch>
                            </div>
                        </div>
                    </div>
                    <div className={"mt-6 sm:w-[200px] w-full flex flex-row justify-between sm:text-left text-center"}>
                        <Button color="default" radius="none" onClick={handleSave}>
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