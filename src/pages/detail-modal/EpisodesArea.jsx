import React from "react";
import {VideoPlayIcon} from "@/graphics/VidepPlayIcon";
import {BsChevronDown} from "react-icons/bs";
import {BiSolidChevronDown, BiSolidChevronUp} from "react-icons/bi";

export default function EpisodesArea({videoData}) {
    const [playIconVisible, setPlayIconVisible] = React.useState(false);
    const [currentEpisode, setCurrentEpisode] = React.useState(0);
    const [currentEpisodeRange, setCurrentEpisodeRange] = React.useState([0, 3]);

    function mouseEnter(index) {
        setCurrentEpisode(index);
    }

    function mouseLeave(index) {
        setCurrentEpisode(-1)
    }

    function addEpisodeRange() {
        if (currentEpisodeRange[1] + 3 < videoData.episodes.length - 1) {
            setCurrentEpisodeRange([0, currentEpisodeRange[1] + 3])
        } else {
            setCurrentEpisodeRange([0, videoData.episodes.length])
        }
        console.log(currentEpisodeRange)
    }

    return (
        <div>
            <h3 className={"text-2xl font-bold mt-4 mb-8"}>Episodes</h3>
            <div className={"border-b-2 border-[#3F3F3F] relative mb-4"}>
                {
                    videoData.episodes.slice(...currentEpisodeRange).map((episode, index) => {
                        return (
                            <div key={index} className={`flex justify-between items-center p-8  
                        cursor-pointer border-b border-[#303030] rounded ${index === 0 && 'bg-[#333333]'}`}
                                 onMouseEnter={() => mouseEnter(index)}
                                 onMouseLeave={() => mouseLeave(index)}
                            >
                                <div className={"text-white w-1 text-2xl"}>{index + 1}</div>
                                <div className={"relative w-[140px] h-[75px] "}>
                                    <img src={videoData.cover} alt="video cover"
                                         className={"object-cover mr-4"}
                                    />
                                    {
                                        currentEpisode === index &&
                                        <div className={`w-12 h-12 absolute top-1/2 left-1/2 flex flex-row justify-center items-center
                                transform -translate-x-1/2 -translate-y-1/2 border rounded-full`}>
                                            <VideoPlayIcon/>
                                        </div>
                                    }
                                </div>

                                <div className={"flex flex-col items-start h-[78px] w-/12"}>
                                    <div className={"flex flex-row justify-between w-full"}>
                                        <div className={"font-bold"}>{episode}</div>
                                        <div>{videoData.duration / 60}m</div>
                                    </div>
                                    <div>this is desc this is desc this is desc this is desc this is desc this is desc
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
                <div className={`w-11 h-11 absolute bottom-[-20px] left-1/2 flex flex-row justify-center items-center cursor-pointer
                                transform -translate-x-1/2  border-2 rounded-full border-[hsla(0,0%,100%,.5)] bg-[rgba(42,42,42,.6)] hover:border-white`}

                >
                    {
                        currentEpisodeRange[1] === videoData.episodes.length
                            ? <BiSolidChevronUp size={"24px"}
                                                onClick={() => setCurrentEpisodeRange([0, 3])}
                            />
                            : <BiSolidChevronDown size={"24px"}
                                                  onClick={addEpisodeRange}
                            />
                    }
                </div>
            </div>
        </div>
    )
}