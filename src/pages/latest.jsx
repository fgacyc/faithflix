import Billboard from "@/pages/components/billboard/billboard";
import VideoSections from "@/pages/components/video-section/VideoSections";
import Footer from "@/pages/components/footer/footer";

export default function Music() {
    // console.log(navigator.language)

    return (
        <div className={"font-martel bg-[#141414]"}>
            <Billboard currentTabIndex={3}/>
            <VideoSections/>
            <Footer/>
        </div>
    );
}