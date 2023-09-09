import {animals} from "@/pages/data";
import {Select, SelectItem} from "@nextui-org/react";
import UISelect from "@/pages/components/genre-title/UI-Select";

export  default  function GenreTitle({currentTabIndex}){
    return(

            <div className={"z-10 ml-[50px] top-[75px]  w-[300px] flex flex-row justify-between items-center absolute"} >
                <div className={"text-white"}>
                    {
                        currentTabIndex === 1
                            ? <h1 className={"text-4xl font-bold text-white"}>Sermons</h1>
                            : <h1 className={"text-4xl font-bold text-white"}>Music</h1>
                    }
                </div>
                <UISelect data={animals} />
            </div>

    )
}