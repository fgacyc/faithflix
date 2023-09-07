import VideoSectionArea from "@/pages/video-section/VideoSectionArea";
import VideoModal from "@/pages/video-section/VideoModal";

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
                        <>
                            <VideoSectionArea key={index} sectionTitle={name} classNames={"my-16 relative"} />
                            {/*<VideoModal />*/}
                        </>
                    )
                })
            }
        </>
    )
}