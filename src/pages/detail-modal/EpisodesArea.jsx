import React from "react";
import {VideoPlayIcon} from "@/graphics/VidepPlayIcon";

export default function EpisodesArea({videoData}) {
    const [playIconVisible, setPlayIconVisible] = React.useState(false);

    return (
        <div>
            <h3 className={"text-2xl font-bold mt-4 mb-8"}>Episodes</h3>
            {
                videoData.episodes.map((episode, index) => {
                    return (
                        <div key={index} className={"flex justify-between items-center mb-4 p-[16px]"}>
                            <div className={"text-white w-1 text-2xl"}>{index +1}</div>
                            <div className={"relative w-[140px] h-[75px] "}>
                                <img src={videoData.cover} alt="video cover"
                                     className={"object-cover mr-4"}
                                />
                                <div className={`w-12 h-12 absolute top-1/2 left-1/2 flex flex-row justify-center items-center
                                transform -translate-x-1/2 -translate-y-1/2 border rounded-full`}>
                                    <VideoPlayIcon />
                                </div>
                            </div>

                            <div className={"flex flex-col items-start h-full"}>
                                <div className={"flex flex-row justify-between"}>
                                    <div className={"font-bold"}>{episode}</div>
                                    <div>{videoData.duration / 60}m</div>
                                </div>
                                <div>this is desc this is desc this is desc this is desc this is desc this is desc </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}