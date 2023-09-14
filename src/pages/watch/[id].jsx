import  {useRouter} from "next/router";
import {AiOutlineArrowLeft} from "react-icons/ai";
import Link from 'next/link'
import YouTube from 'react-youtube';
import {useEffect, useState} from "react";

export  default function Watch() {
    const router = useRouter();
    const {id} = router.query;
    //console.log(id);
    const [opt, setOpt] = useState(null)

    function getWindowWidthAndHeight() {
        setOpt({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

    function resizeHandler() {
        setOpt({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        getWindowWidthAndHeight();
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    const lang = "&hl=en"

    function onPlayHandler(event) {
        console.log(event.target.getCurrentTime())
    }

    function onReadyHandler(event) {
        console.log("ready")
        //console.log(event.target.getCurrentTime())
    }


    return (
        <div className={"relative"}>
            {
                opt && <YouTube className={"w-[100vw] h-[100vh]"}
                         opts={opt}
                            onPlay={onPlayHandler}
                            onReady={onReadyHandler}
                         videoId={id} />
            }
        </div>
    );
}