import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {useEffect, useState, useRef} from "react";
import VideoCard from "@/components/video-section/VideoCard";
import {BiSolidChevronRight} from "react-icons/bi";


export default function VideoSectionArea({classNames, sectionTitle}) {
    if (!classNames) {
        classNames = ""
    }


    let data = []

    if (sectionTitle === "Top 10 Videos Today") {
        for (let i = 0; i < 10; i++) {
            data.push({
                cover: "/images/give_my_heart.png",
                id: i,
            })
        }
    }

    if (sectionTitle === "Top 10 Sermons Today111") {
        for (let i = 0; i < 10; i++) {
            data.push({
                cover: "/images/img1.jpg",
                id: i,
            })
        }
    }
    if (sectionTitle === "Top 10 music Today 222") {
        for (let i = 0; i < 10; i++) {
            data.push({
                cover: "/images/img2.jpg",
                id: i,
            })
        }
    }
    if (sectionTitle === "Top 10 education Today") {
        for (let i = 0; i < 10; i++) {
            data.push({
                cover: "/images/img3.jpg",
                id: i,
            })
        }
    }

    const [windowWidth, setWindowWidth] = useState(0)
    const [rightArrowVisible, setRightArrowVisible] = useState(false)
    const [leftArrowVisible, setLeftArrowVisible] = useState(false)
    const areaRef = useRef(null);
    const [currentViewPortElementIndex, setCurrentViewPortElementIndex] = useState(0)
    //const [isOpen, setIsOpen] = useState(false);
    //const [blueRightArrowVisible, setBlueRightArrowVisible] = useState(true);

    useEffect(() => {
        function getWindowWidth() {
            setWindowWidth(window.innerWidth - 66)
            //console.log(windowWidth)
        }

        getWindowWidth();

        window.addEventListener("resize", getWindowWidth);
        return () => window.removeEventListener("resize", getWindowWidth);
    }, [])

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


    function handleScroll(direction) {
        let children = areaRef.current.children;
        let firstUnseenChild = null
        if (direction === "right") {
            for (let i = currentViewPortElementIndex; i < children.length; i++) {
                if (!isInViewport(children[i])) {
                    firstUnseenChild = children[i]
                    if (i === 0 || i === currentViewPortElementIndex) continue;
                    setCurrentViewPortElementIndex(i)
                    break
                }
            }
        } else {
            for (let i = currentViewPortElementIndex; i >= 0; i--) {
                if (!isInViewport(children[i])) {
                    firstUnseenChild = children[i]
                    if (i === currentViewPortElementIndex || i === children.length - 1) continue;
                    setCurrentViewPortElementIndex(i)
                    break
                }
            }

        }
        console.log(currentViewPortElementIndex)
        children[currentViewPortElementIndex].scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"})
    }


    return (
        <div className={`${classNames}`}>
            <div className={`text-white font-bold mb-2 
                lg:text-xl md:text-lg sm:text-base text-base
                lg:ml-[50px] md:ml-[30px] sm:ml-[15px] ml-[15px]
                 flex items-center  overflow-hidden relative`}
                // onMouseEnter={() => setBlueRightArrowVisible(true)}
                // onMouseLeave={() => setBlueRightArrowVisible(false)}
            >
                <span className="">{sectionTitle}</span>
                <span className={`inline-block absolute right-[-100%]
                        transform ease-in-out duration-300
                        hover:right-[100%] hover:translate-x-full `
                }>
                        <span className={"text-[#48B9C5] text-xs ml-2"}>Explore All</span>
                        <BiSolidChevronRight color={"#48B9C5"} size={20} className={`inline-block`}/>
                    </span>


                {/*<BiSolidChevronRight color={"#48B9C5"} size={20} className={`inline-block ${blueRightArrowVisible ? "inline-block":"hidden"}` } />*/}
            </div>
            <div className={"overflow-x-auto w-full flex flex-nowrap flex-row no-scrollbar relative"} ref={areaRef}>
                <div className={`h-full
                    lg:ml-[50px] md:ml-[30px] sm:ml-[15px] ml-[15px]
                `}></div>
                {/*no-scrollbar*/}
                {
                    data.map((item, index) => {
                        return (
                            <VideoCard key={index} videoData={item}
                            />

                        )
                    })
                }
            </div>
            <div className={`absolute  w-[50px]  z-10 flex bottom-0 left-0 scroll-smooth
            2xl:h-36  xl:h-36 lg:h-32 sm:h-30  md:h-28 h-28
                ${rightArrowVisible ? 'bg-[hsla(0,0%,8%,.5)]' : 'bg-transparent'}
                justify-center items-center cursor-pointer`}
                 style={{left: windowWidth}}
                 onMouseEnter={() => setRightArrowVisible(true)}
                 onMouseLeave={() => setRightArrowVisible(false)}
                 onClick={() => handleScroll("right")}
            >
                {
                    rightArrowVisible && <FiChevronRight color={"white"} size={48}/>
                }

            </div>
            <div className={`absolute
                lg:w-[50px] md:w-[30px] sm:w-[15px] w-[15px]
                2xl:h-36  xl:h-36 lg:h-32 sm:h-30  md:h-28 h-28
                z-10 flex bottom-0 left-0 scroll-smooth
                ${leftArrowVisible ? 'bg-[hsla(0,0%,8%,.5)]' : 'bg-transparent'}
                justify-center items-center cursor-pointer`}
                 style={{left: 0}}
                 onMouseEnter={() => setLeftArrowVisible(true)}
                 onMouseLeave={() => setLeftArrowVisible(false)}
                 onClick={() => handleScroll("left")}
            >
                {
                    leftArrowVisible && <FiChevronLeft color={"white"} size={48}/>
                }

            </div>
        </div>
    )
}