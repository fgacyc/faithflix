import Billboard from "@/pages/components/billboard/billboard";
import VideoSections from "@/pages/components/video-section/VideoSections";
import Footer from "@/pages/components/footer/footer";
import HistoryCard from "@/pages/components/history/history-card";

export default function History() {
    // console.log(navigator.language)
    const nums= [1,2,3,4,5,6,7,8,9,10]

    return (
        <div className={"font-martel bg-[#141414]"}>
            <Billboard currentTabIndex={5}/>
            <div className={"px-10 py-6"}>
                {
                    nums.map((num,index)=>{
                        return <HistoryCard  index={index} key={index}/>
                    })
                }
            </div>
            <Footer/>
        </div>
    );
}