import Billboard from "@/components/billboard/billboard";
import VideoSections from "@/components/video-section/VideoSections";
import Footer from "@/components/footer/footer";

export default function Sermons() {
  // console.log(navigator.language)

  return (
    <div className={"font-martel bg-[#141414]"}>
      <Billboard currentTabIndex={1} />
      <VideoSections />
      <Footer />
    </div>
  );
}
