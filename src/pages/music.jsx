import Billboard from "@/components/billboard/billboard";
import VideoSections from "@/components/video-section/VideoSections";
import Footer from "@/components/footer/footer";

export default function Music() {
  // console.log(navigator.language)

  return (
    <div className={"font-martel bg-[#141414]"}>
      <Billboard currentTabIndex={2} />
      <VideoSections />
      <Footer />
    </div>
  );
}
