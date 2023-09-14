import Billboard from "@/pages/components/billboard/billboard";
import Footer from "@/pages/components/footer/footer";
import HistoryCard from "@/pages/components/history/history-card";

export default function History() {
    // console.log(navigator.language)
    const nums= [1,2,3,4,5,6,7,8,9,10]

    return (
        <div className={"font-martel bg-[#141414]"}>
            <Billboard currentTabIndex={5}/>
            <div className={`
                lg:px-10 md:px-5 px-2
            py-6`}>
                {
                    nums.map((num,index)=>{
                        return <HistoryCard  index={index} key={index}/>
                    })
                }
            </div>
            <Footer/>
        </div>
    );
}