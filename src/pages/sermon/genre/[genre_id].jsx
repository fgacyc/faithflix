import Billboard from "@/components/billboard/billboard";
import VideoSections from "@/components/video-section/VideoSections";
import Footer from "@/components/footer/footer";
import { useRouter } from "next/router";

export default function SermonGenre() {
  return (
    <div className={"font-martel bg-[#141414]"}>
      <Billboard currentTabIndex={1} />
      <VideoSections />
      <Footer />
    </div>
  );
}
