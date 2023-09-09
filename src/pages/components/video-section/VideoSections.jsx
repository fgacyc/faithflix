import VideoSectionArea from "@/pages/components/video-section/VideoSectionArea";
import VideoModal from "@/pages/components/video-section/VideoModal";
import { Fragment} from "react";

export  default function VideoSections({sectionName}){
    const names = [
        "Top 10 Sermons Today111",
        "Top 10 music Today 222",
        "Top 10 education Today"
    ]

    return (
        <>
            {
                names.map((name, index) => {
                    return (
                        <Fragment key={index}>
                            <VideoSectionArea   sectionTitle={name} classNames={"my-16 relative"} />
                            {/*<VideoModal />*/}
                        </Fragment>
                    )
                })
            }
        </>
    )
}