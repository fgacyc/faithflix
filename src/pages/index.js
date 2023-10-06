import { Inter } from "next/font/google";
import Billboard from "@/components/billboard/billboard";
import VideoSections from "@/components/video-section/VideoSections";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // console.log(navigator.language)

  return (
    <div className={"font-martel bg-[#141414] overflow-x-hidden"}>
      <Billboard currentTabIndex={0} />
      <VideoSections />
      <Footer />
    </div>
  );
}
