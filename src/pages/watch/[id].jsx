import  {useRouter} from "next/router";
import {AiOutlineArrowLeft} from "react-icons/ai";
import Link from 'next/link'

export  default function Watch() {
    // get full path of current page
    const router = useRouter();
    const {id} = router.query;
    console.log(id);
    return (
        <div className={"relative"}>
           <div className={"absolute top-[10px] right-[180px] cursor-pointer flex flex-col justify-center items-center"}>
               <Link href={"/"}>
                   <AiOutlineArrowLeft className={"text-white text-3xl "}/>
                   <div  className={"text-1xl text-[#eeeeee] text-sm"}>
                       Back
                   </div>
               </Link>

           </div>
            <iframe className={"w-[100vw] h-[100vh]"} src="https://www.youtube.com/embed/f2oxGYpuLkw?si=yxoDB93anjyddPmE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    );
}