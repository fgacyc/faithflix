import {DocIcon} from "@/graphics/DocIcon";
import {useRouter} from "next/router";

export default  function HelpCard({title,link}){
    const router = useRouter()
    return(
        <div className={"bg-white text-black flex flex-row items-center p-3 shadow-md rounded mr-4 cursor-pointer"}
            onClick={() => router.push(link)}
        >
            <DocIcon className={"mr-3"} />
            <div className={" font-bold  text-center"}>{title}</div>
        </div>
    )
}
