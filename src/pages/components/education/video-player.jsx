import videojs from "video.js";
import {useEffect, useRef} from "react";
import "video.js/dist/video-js.css";

export default function VideoPlayer() {
    const poster = "https://img.youtube.com/vi/O-I0tj1Knjc/maxresdefault.jpg"
    const video = "https://firebasestorage.googleapis.com/v0/b/faithflix-96a4c.appspot.com/o/msj1-class1.mp4?alt=media&token=15541150-b890-4999-b381-5463b2988de4"
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            const player =videojs(videoRef.current)
            player.ready(function () {
                console.log('视频准备就绪');
            });
            console.log(player.duration())
        }
    }, [videoRef]);

    return (
        <video ref={videoRef}
               controls
               className="video-js w-full h-5/6 border border-gray-800"
               preload="auto"
               poster={poster}
               data-setup='{}'>
            <source src={video} type="video/mp4"></source>
        </video>
    )
}
