import Billboard from "@/components/billboard/billboard";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {
  // console.log(navigator.language)
  // const nums = [1,2,3,4,5,6,7,8,9,10
  //     ,11,12,13,14,15,16,17,18,19,20
  //     ,21,22,23,24,25,26,27,28,29,30
  // ]
  const [advice, setAdvice] = useState(null);
  const [videos, setVideos] = useState([]);

  const searchParams = useSearchParams();

  const searchText = searchParams.get("searchText");
  // console.log(searchText)

  useEffect(() => {
    if (!searchText) return;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: searchText,
      }),
    };

    fetch("https://api.enjoycoding.me/bible-bot", options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setAdvice(res);
      });

    fetch("https://api.enjoycoding.me/vector-query", options)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        setVideos(sortVideos(res));
      });
  }, [searchText]);

  function sortVideos(videos) {
    const arr = Object.entries(videos);
    arr.sort((a, b) => {
      return b[1] - a[1];
    });
    return arr.map((item) => item[0]);
  }

  return (
    <div className={"font-martel bg-[#141414] text-white h-screen"}>
      <Billboard currentTabIndex={4} />
      <h1 className={`text-white mx-[50px] my-[20px] text-2xl font-bold`}>
        Search result
      </h1>
      {advice && (
        <div>
          <div className={"text-xl  mx-[50px] rounded shadow-md mb-8"}>
            {advice.advice}
          </div>
          <div className={" mx-[50px] font-bold mb-4"}>
            Here's some Bible verses that you can look through:
          </div>
          <div className={"mx-[50px] flex flex-row justify-around mb-8"}>
            <div
              className={
                "shadow-md  w-2/5 bg-[rgba(0,0,0,.3)] rounded p-5 text-center"
              }
            >
              <div className={"font-bold mb-1"}>{advice.verse1.reference}</div>
              <div>{advice.verse1.content}</div>
            </div>
            <div
              className={
                "shadow-md  w-2/5 bg-[rgba(0,0,0,.3)] rounded p-5 text-center"
              }
            >
              <div className={"font-bold mb-1"}>{advice.verse2.reference}</div>
              <div>{advice.verse2.content}</div>
            </div>
          </div>
        </div>
      )}
      <div className={" mx-[50px] font-bold mb-4"}>
        Here's some videos that you can learn from:
      </div>
      <div
        className={`
                mx-[50px] my-[20px]
                grid gap-x-2 gap-y-16 
                sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
            `}
      >
        {videos &&
          videos.map((video) => {
            return (
              <Image
                src={`https://i.ytimg.com/vi/${video}/maxresdefault.jpg`}
                alt="logo"
                width={290}
                height={265}
                quality={100}
                priority={false}
                className="object-cover cursor-pointer hover:brightness-[0.6] transition ease-in-out duration-150"
                key={video}
              />
            );
          })}
      </div>
      <Footer />
    </div>
  );
}
