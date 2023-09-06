import {FaAngleRight, FaChevronRight} from "react-icons/fa";
import {BsChevronRight} from "react-icons/bs";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {useEffect, useState, useRef} from "react";

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

    useEffect(() => {
        function getWindowWidth() {
            setWindowWidth(window.innerWidth - 66)
            console.log(windowWidth)
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
                    if (i===0 || i===currentViewPortElementIndex) continue;
                    setCurrentViewPortElementIndex(i)
                    break
                }
            }
        } else {
            for (let i = currentViewPortElementIndex; i >=0; i--) {
                if (!isInViewport(children[i])) {
                    firstUnseenChild = children[i]
                    if (i===0 || i===currentViewPortElementIndex || i===children.length-1 ) continue;
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
            <div className={"text-white font-bold text-[1.4vw] mb-2 ml-[50px]"}>{sectionTitle}</div>
            <div className={"overflow-x-auto w-full flex flex-nowrap flex-row no-scrollbar relative"} ref={areaRef}>
                <div className={"ml-[50px] h-full"}></div>
                {/*no-scrollbar*/}
                {
                    data.map((item, index) => {
                        return (
                            <img src={item.cover} alt="video cover" key={index} title={item.id}
                                 className={"w-64  h-36 inline-block mr-2 object-cover rounded"}>
                            </img>
                        )
                    })
                }
            </div>
            <div className={`absolute h-36 w-[50px]  z-10 flex bottom-0 left-0 scroll-smooth
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
            <div className={`absolute h-36 w-[50px]  z-10 flex bottom-0 left-0 scroll-smooth
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