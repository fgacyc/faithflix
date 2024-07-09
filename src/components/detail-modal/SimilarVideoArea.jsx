import {IoMdAdd} from "react-icons/io";
import {Button, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import React from "react";
import Image from "next/image";

function SimilarVideoCard({videoID}) {
    const videoData= {
        title: "There is a miracle in your mouth",
        cover: "/images/There_is_ a_miracle.jpg",
        description: "There is a miracle in your mouth There is a miracle in your mouth There is a miracle in your mouth There is a miracle in your mouth",
        duration: 3600, //seconds
        year: "2021",
        director: "John Doe",
        cast: ['John Doe', 'Jane Doe','John Doe', 'Jane Doe'],
        genres: "Drama",
        tags: ['Drama', 'Faith','Drama', 'Faith','Drama', 'Faith'],
        likes_radio: 0.97,
        episodes: [
            "video1","video2","video3","video4","video5","video6","video7","video8","video9","video10",
        ],
        clarity: ["1080p", "720p", "480p"],
        subtitle: ["English", "Chinese"]
    }

    const [isOpen, setIsOpen] = React.useState(false);
    function mouseEnter() {
        setIsOpen(true);
    }

    function mouseLeave() {
        setIsOpen(false);
    }


    return (
        <div className={"rounded w-full h-86 bg-[#2F2F2F] text-sm"}>
            <Image
                width={256}
                height={144}
                priority={false}
                src={videoData.cover}
                quality={100}
                alt="video cover"
                className={"object-cover w-full"}/>
            <div className={"flex flex-row justify-between items-center p-4 pb-0 "}>
                <div>
                    <div className={"font-bold"}>{videoData.title}</div>
                    <div>{videoData.year}</div>
                </div>
                <div>
                    <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}
                             placement="top" showArrow={true} offset={15} className={"rounded bg-[#E6E6E6] py-2"}>
                        <PopoverTrigger
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                        >
                            <Button isIconOnly   variant="bordered" radius="full" className="bg-[rgba(42,42,42,.6)]">
                                <IoMdAdd color="white" size={"20"} />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className={"font-bold"}>Add to My list</div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div className={"p-4 "}>{videoData.description}</div>
        </div>
    )
}


export  default  function SimilarVideoArea({videoData}) {
    const similarVideos = [
        "60f7a3a0a6e3a60015b9e9e1",
        "60f7a3a0a6e3a60015b9e9e2",
        "60f7a3a0a6e3a60015b9e9e3",
        "60f7a3a0a6e3a60015b9e9e4",
        "60f7a3a0a6e3a60015b9e9e5",
        "60f7a3a0a6e3a60015b9e9e6",
        "60f7a3a0a6e3a60015b9e9e7",
        "60f7a3a0a6e3a60015b9e9e8",
        "60f7a3a0a6e3a60015b9e9e9",
        "60f7a3a0a6e3a60015b9e9ea",
        "60f7a3a0a6e3a60015b9e9eb",
    ]

    return (
        <div>
            <h3 className={"text-2xl font-bold mt-12 mb-5"}>More Like This</h3>
            <div className={"grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 flex-wrap"}>
                {
                    similarVideos.map((videoID, index) => {
                        return <SimilarVideoCard key={index} videoID={videoID}/>
                    })
                }
            </div>
        </div>
    )
}