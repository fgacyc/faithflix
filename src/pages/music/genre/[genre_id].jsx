import Billboard from "@/components/billboard/billboard";
import VideoSections from "@/components/video-section/VideoSections";
import Footer from "@/components/footer/footer";
import { useRouter } from "next/router";

export default function MusicGenre() {
  return (
    <div className={"font-martel bg-[#141414]"}>
      <Billboard currentTabIndex={2} />
      <VideoSections />
      <Footer />
    </div>
  );
}
