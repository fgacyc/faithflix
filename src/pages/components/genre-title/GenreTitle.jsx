import UISelect from "@/pages/components/genre-title/UI-Select";
import Link from "next/link";
import {FiChevronRight} from "react-icons/fi";
import {useRouter} from "next/router";

export default function GenreTitle({currentTabIndex}) {
    const router = useRouter();
    const {genre_id} = router.query;
    // get full path of current page
    const path = router.asPath;
    console.log(path);

    //console.log(genre_id);
    const animals = [
        {label: "Cat", value: "cat", description: "The second most popular pet in the world"},
        {label: "Dog", value: "dog", description: "The most popular pet in the world"},
        {label: "Elephant", value: "elephant", description: "The largest land animal"},
        {label: "Lion", value: "lion", description: "The king of the jungle"},
        {label: "Tiger", value: "tiger", description: "The largest cat species"},
        {label: "Giraffe", value: "giraffe", description: "The tallest land animal"},
        {
            label: "Dolphin",
            value: "dolphin",
            description: "A widely distributed and diverse group of aquatic mammals",
        },
        {label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds"},
        {label: "Zebra", value: "zebra", description: "A several species of African equids"},
        {
            label: "Shark",
            value: "shark",
            description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
        },
        {
            label: "Whale",
            value: "whale",
            description: "Diverse group of fully aquatic placental marine mammals",
        },
        {label: "Otter", value: "otter", description: "A carnivorous mammal in the subfamily Lutrinae"},
        {label: "Crocodile", value: "crocodile", description: "A large semiaquatic reptile"},
    ];

    return (
        <>
            {genre_id
                ? <div className={"z-10 ml-[50px] top-[75px]  h-[50px] flex flex-row justify-between items-center absolute"}>
                    { path.substring(0, 6) === "/music"
                        ? <Link href={"/music"} className={"text-lg text-[#808080] "}>
                            Music
                        </Link>
                        :<Link href={"/sermons"} className={"text-lg text-[#808080] "}>
                            Sermons
                        </Link>

                    }
                    <FiChevronRight className={"text-white text-2xl mx-4"} color="#808080" />
                    <div className={"text-white text-[1.4vw] font-bold"}>
                        {genre_id}
                    </div>
                </div>
                : <div
                    className={"z-10 ml-[50px] top-[75px]  w-[300px] h-[50px] flex flex-row justify-between items-center absolute"}>
                    <div className={"text-white"}>
                        {
                            currentTabIndex === 1
                                ? <h1 className={"text-4xl font-bold text-white"}>Sermons</h1>
                                : <h1 className={"text-4xl font-bold text-white"}>Music</h1>
                        }
                    </div>
                    <UISelect data={animals}/>


                </div>
            }
        </>


    )
}