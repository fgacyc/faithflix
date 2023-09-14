export  default function VideoPlayer(){
    const poster = "https://img.youtube.com/vi/O-I0tj1Knjc/maxresdefault.jpg"
    const video  ="https://firebasestorage.googleapis.com/v0/b/faithflix-96a4c.appspot.com/o/msj1-class1.mp4?alt=media&token=15541150-b890-4999-b381-5463b2988de4"

    return(
        <video
            id="my-player"
            className="video-js w-full h-5/6 border border-gray-800"
            controls
            preload="auto"
            poster={poster}
            data-setup='{}'>
            <source src={video} type="video/mp4"></source>
            {/*<source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>*/}
            {/*<source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>*/}
            <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a
                web browser that
                <a href="https://videojs.com/html5-video-support/" target="_blank">
                    supports HTML5 video
                </a>
            </p>
        </video>
    )
}