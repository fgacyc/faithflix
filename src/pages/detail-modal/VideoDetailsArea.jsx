import React from "react";

export default function VideoDetailsArea({videoData}) {
    return (
        <div className={"flex flex-row justify-between items-start "}>
            <div className={"w-7/12"}>
                <div className={"w-[270px] flex flex-row justify-between items-center"}>
                                        <span className={"text-[#46d369] font-bold"}>
                                        {videoData.likes_radio * 100}% Like
                                    </span>
                    <span>{videoData.year}</span>
                    <span>
                                                {videoData.episodes.length > 1
                                                    ? `${videoData.episodes.length} Episodes`
                                                    : `${videoData.episodes.length} Episode`
                                                }
                                            </span>
                    <span className={"border-1 rounded-sm px-1.5 text-xs"}>
                                                {videoData.clarity.includes("1080p") && "HD"}
                                            </span>
                </div>
                <div>
                    {videoData.description}
                </div>
            </div>
            <div className={"w-4/12"}>
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
        </div>
    )
}