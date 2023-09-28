import Image from "next/image";
import {BsFillPlayFill} from "react-icons/bs";
import {Button} from "@nextui-org/react";
import {useRouter} from "next/router";

export default function EducationCard({course}){
    const router = useRouter();
    function goToCourse(){
        const url  =`/education/course=${course.id}?class=1&type=video`;
        router.push(url)
    }


    return (
        <div  className={`flex justify-between items-center p-8 pl-0 
                         border-b border-[#303030] rounded `}
        >
            <Image
                width={200}
                height={200}
                priority={false}
                src={`${process.env.NEXT_PUBLIC_CMS_HOST_URL}${course.attributes.cover.data.attributes.url}`} alt="video cover"
                className={"object-cover mr-4 cursor-pointer"}
            />

            <div className={"flex flex-col items-start h-[78px] w-9/12 text-white"}>
                <div className={"flex flex-row justify-between w-full"}>
                    <div className={""}>{`Unit ${course.attributes.index}`}</div>
                    <div>
                        <Button className={"bg-white font-bold rounded mr-[10px] cursor-pointer"}
                                startContent={<BsFillPlayFill className={"text-4xl"}/>}
                                // isDisabled={course.id !== 0}
                                onClick={() => goToCourse()}
                        >
                            <span className={"relative top-[2px] font-bold"}>Start</span>
                        </Button>
                    </div>
                </div>
                <div>{course.attributes.description}</div>
            </div>
        </div>
    );
}
