export default function VideoSectionArea({classNames,sectionTitle}) {
    if (!classNames) {
        classNames = ""
    }

    let data = []

    if(sectionTitle === "Top 10 Videos Today"){
        for (let i = 0; i < 10; i++) {
            data.push({
                cover: "/images/give_my_heart.png",
                id: i,
            })
        }
    }

    if(sectionTitle === "Top 10 Sermons Today111"){
        for (let i = 0; i < 10; i++) {
            data.push({
                cover: "/images/img1.jpg",
                id: i,
            })
        }
    }
    if(sectionTitle === "Top 10 music Today 222"){
        for (let i = 0; i < 10; i++) {
            data.push({
                cover: "/images/img2.jpg",
                id: i,
            })
        }
    }
    if(sectionTitle === "Top 10 education Today"){
        for (let i = 0; i < 10; i++) {
            data.push({
                cover: "/images/img3.jpg",
                id: i,
            })
        }
    }

    return (
        <div className={`${classNames}`}>
            <div className={"text-white font-bold text-[1.4vw] mb-2"}>{sectionTitle}</div>
            <div className={"overflow-x-auto w-full flex flex-nowrap flex-row no-scrollbar"}>
                {/*no-scrollbar*/}
                {
                    data.map((item, index) => {
                        return (
                            <img src={item.cover} alt="video cover" key={index}
                                 className={"w-64  h-36 inline-block mr-2 object-cover rounded"}>
                            </img>
                        )
                    })
                }
            </div>
        </div>
    )
}