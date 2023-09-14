import Billboard from "@/pages/components/billboard/billboard";
import Footer from "@/pages/components/footer/footer";
import {BiSearch} from "react-icons/bi";
import HelpCard from "@/pages/components/help/help-card";
import {Button} from "@nextui-org/react";


export default function Help() {
    return (
        <div className={"font-martel bg-[#141414]"}>
            <Billboard currentTabIndex={8}/>
            <div className={"bg-black pt-6 flex flex-col items-center"}>
                <h1 className={"text-3xl font-bold font-sans text-white text-center "}>Help Center</h1>
                <div className={"flex flex-row items-center bg-white my-6 h-11 rounded w-4/6"}>
                    <BiSearch className="text-black mx-3" size={26}
                    />
                    <input className={"outline-none"} placeholder="What do you need help with?"
                           style={{width: "calc(100% - 40px)"}}/>
                </div>
                <div className={"bg-[#fafafa] w-full text-black px-[50px] py-6 border-b-1 border-gray-300"}>
                    <div className={"text-2xl font-bold  "}>Hi, Jolene</div>
                    <div className={"text-sm my-3"}>Recommended for you</div>
                    <div className={"flex flex-row "}>
                        <HelpCard title={"How to watch"} link={"/help/how-to-watch"}/>
                        <HelpCard title={"How to watch"} link={"/help/how-to-watch"}/>
                        <HelpCard title={"How to watch"} link={"/help/how-to-watch"}/>
                    </div>
                </div>
                <div className={"bg-white w-full text-[#4c4948] px-[50px] py-4 flex flex-row justify-between"}>
                    <div className={"my-4 h-[400px]"}>
                        <div className={"text-2xl font-bold mb-4"}>Popular topics</div>
                        <div className={"cursor-pointer hover:underline"}>Browse help topics</div>
                        <div className={"cursor-pointer hover:underline"}>Browse help topics</div>
                        <div className={"cursor-pointer hover:underline"}>Browse help topics</div>
                        <div className={"cursor-pointer hover:underline"}>Browse help topics</div>
                    </div>
                    <div className={"my-4 h-[400px]"}>
                        <div className={"text-2xl font-bold mb-4"}>Popular topics</div>
                        <div className={"cursor-pointer hover:underline"}>Browse help topics</div>
                        <div className={"cursor-pointer hover:underline"}>Browse help topics</div>
                        <div className={"cursor-pointer hover:underline"}>Browse help topics</div>
                        <div className={"cursor-pointer hover:underline"}>Browse help topics</div>
                    </div>
                    <div className={"my-4 h-[400px]"}>
                        <div className={"text-2xl font-bold mb-4"}>Popular topics</div>
                        <div className={"cursor-pointer hover:underline"}>Browse help topics</div>
                        <div className={"cursor-pointer hover:underline"}>Browse help topics</div>
                        <div className={"cursor-pointer hover:underline"}>Browse help topics</div>
                        <div className={"cursor-pointer hover:underline"}>Browse help topics</div>
                    </div>
                </div>
                <div className={"bg-[#141414] w-full"}>
                    <div className={`mx-[50px] border-b-1 border-gray-700 py-2
                            flex flex-row justify-start items-center `}>
                        <div className={"text-xl text-white font-bold my-4 mr-6"}>Need more help?</div>
                        <Button color="primary" radius="sm" className={"bg-white text-black font-bold"}>
                            Contact us
                        </Button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}