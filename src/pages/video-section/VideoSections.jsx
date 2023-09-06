import VideoSectionArea from "@/pages/video-section/VideoSectionArea";

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
                        <VideoSectionArea key={index} sectionTitle={name} classNames={"ml-[50px] my-16"} />
                    )
                })
            }
        </>
    )
}