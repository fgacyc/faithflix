import VideoSectionArea from "@/components/video-section/VideoSectionArea";
import { Fragment } from "react";

export default function VideoSections({ sectionName }) {
  const names = [
    "Top 10 Sermons Today111",
    "Top 10 music Today 222",
    "Top 10 education Today",
  ];

  return (
    <>
      {names.map((name, index) => {
        return (
          <Fragment key={index}>
            <VideoSectionArea
              sectionTitle={name}
              classNames={`relative
                                lg:my-16  md:my-8 sm:my-8 my-4
                            `}
            />
            {/*<VideoModal />*/}
          </Fragment>
        );
      })}
    </>
  );
}
