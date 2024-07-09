import React from "react";
import { VideoPlayIcon } from "@/graphics/VidepPlayIcon";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import Image from "next/image";
import EpisodeCard from "@/components/detail-modal/EpisodeCard";

export default function EpisodesArea({ videoData }) {
  // const [playIconVisible, setPlayIconVisible] = React.useState(false);
  const [currentEpisode, setCurrentEpisode] = React.useState(0);
  const [currentEpisodeRange, setCurrentEpisodeRange] = React.useState([0, 3]);

  function addEpisodeRange() {
    if (currentEpisodeRange[1] + 3 < videoData.episodes.length - 1) {
      setCurrentEpisodeRange([0, currentEpisodeRange[1] + 3]);
    } else {
      setCurrentEpisodeRange([0, videoData.episodes.length]);
    }
    console.log(currentEpisodeRange);
  }

  return (
    <div>
      <h3 className={"text-2xl font-bold mt-4 mb-8"}>Episodes</h3>
      <div className={"border-b-2 border-[#3F3F3F] relative mb-4"}>
        {videoData.episodes
          .slice(...currentEpisodeRange)
          .map((episode, index) => {
            return (
              <EpisodeCard
                currentEpisode={currentEpisode}
                setCurrentEpisode={setCurrentEpisode}
                episode={episode}
                index={index}
                key={index}
              />
            );
          })}
        <div
          className={`w-11 h-11 absolute bottom-[-20px] left-1/2 flex flex-row justify-center items-center cursor-pointer
                                transform -translate-x-1/2  border-2 rounded-full border-[hsla(0,0%,100%,.5)] bg-[rgba(42,42,42,.6)] hover:border-white`}
        >
          {currentEpisodeRange[1] === videoData.episodes.length ? (
            <BiSolidChevronUp
              size={"24px"}
              onClick={() => setCurrentEpisodeRange([0, 3])}
            />
          ) : (
            <BiSolidChevronDown size={"24px"} onClick={addEpisodeRange} />
          )}
        </div>
      </div>
    </div>
  );
}
