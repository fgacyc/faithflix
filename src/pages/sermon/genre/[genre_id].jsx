import Billboard from "@/pages/components/billboard/billboard";
import VideoSections from "@/pages/components/video-section/VideoSections";
import Footer from "@/pages/components/footer/footer";
import {useRouter} from "next/router";

export default function SermonGenre() {

    return (
        <div className={"font-martel bg-[#141414]"}>
            <Billboard currentTabIndex={1}/>
            <VideoSections/>
            <Footer/>
        </div>
    );
}