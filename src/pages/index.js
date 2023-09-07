import {Inter} from "next/font/google";
import Billboard from "./billboard/billboard";
import VideoSections from "@/pages/video-section/VideoSections";
import Footer from "@/pages/footer/footer";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    // console.log(navigator.language)

    return (
        <div className={"font-martel bg-[#141414]"}>
            <Billboard/>
            <VideoSections/>
            <Footer/>
        </div>
    );
}
