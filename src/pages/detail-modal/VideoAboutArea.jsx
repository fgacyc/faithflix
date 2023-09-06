import React from "react";

export default  function VideoAboutArea({videoData}) {
    return (
        <div>
            <h3 className={"text-2xl font-bold mt-8 mb-4"}>
                <span className={"font-normal"}>About </span>
                {videoData.title}</h3>
            <div className={" pb-3"}>
                <span className={"text-[#777]"}>Creators: </span>
                <span>{videoData.creators.join(', ')}</span>
            </div>
            <div className={" pb-3"}>
                <span className={"text-[#777]"}>Cast: </span>
                <span>{videoData.cast.join(', ')}</span>
            </div>
            <div className={" pb-3"}>
                <span className={"text-[#777]"}>Genres: </span>
                <span>{videoData.genres.join(', ')}</span>
            </div>
            <div className={" pb-3"}>
                <span className={"text-[#777]"}>This video is: </span>
                <span>{videoData.tags.join(', ')}</span>
            </div>
        </div>
    )
}