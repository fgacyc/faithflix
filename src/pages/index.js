import {Inter} from "next/font/google";
import Billboard from "@/pages/components/billboard/billboard";
import VideoSections from "@/pages/components/video-section/VideoSections";
import Footer from "@/pages/components/footer/footer";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    // console.log(navigator.language)

    return (
        <div className={"font-martel bg-[#141414] overflow-x-hidden"}>
            <Billboard currentTabIndex={0}/>
            <VideoSections/>
            <Footer/>
        </div>
    );
}
