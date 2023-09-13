import Billboard from "@/pages/components/billboard/billboard";
import VideoSections from "@/pages/components/video-section/VideoSections";
import Footer from "@/pages/components/footer/footer";
import EducationCard from "@/pages/components/education/education-card";

export default function Education() {
    // console.log(navigator.language)
    const nums= [1,2,3]

    return (
        <div className={"font-martel bg-[#141414]"}>
            <Billboard currentTabIndex={7}/>
            <div className={"mx-[50px]"}>
                <div className={"mt-10"}>
                    <h1 className="text-white  text-2xl font-bold">My spirit journey</h1>
                    {
                        nums.map((num,index)=>{
                            return <EducationCard index={index} key={index}/>
                        })
                    }
                </div>
                <div className={"mt-10"}>
                    <h1 className="text-white   text-2xl font-bold">Cell Group Tutorial</h1>
                    {
                        nums.map((num,index)=>{
                            return <EducationCard index={index} key={index}/>
                        })
                    }
                </div>
            </div>

            <Footer/>
        </div>
    );
}