import Billboard from "@/pages/components/billboard/billboard";
import Footer from "@/pages/components/footer/footer";
import Image from "next/image";

export default function MyList() {
    // console.log(navigator.language)
    const nums = [1,2,3,4,5,6,7,8,9,10
        ,11,12,13,14,15,16,17,18,19,20
        ,21,22,23,24,25,26,27,28,29,30
    ]

    return (
        <div className={"font-martel bg-[#141414]"}>
            <Billboard currentTabIndex={4}/>
            <h1 className={`text-white mx-[50px] my-[20px] text-2xl font-bold`}
            >My List</h1>
            {/*<VideoSections/>*/}
            <div className={`
                mx-[50px] my-[20px]
                grid gap-x-2 gap-y-16 
                sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
            `}>
                {
                    nums.map(num => {
                        return (
                            <Image
                                src={`/images/recover.jpg`}
                                alt="logo"
                                width={290}
                                height={265}
                                quality={100}
                                priority={false}
                                className="object-cover cursor-pointer hover:brightness-[0.6] transition ease-in-out duration-150"
                                key={num}
                            />
                        )
                    })
                }
            </div>
            <Footer/>
        </div>
    );
}