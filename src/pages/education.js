import Billboard from "@/pages/components/billboard/billboard";
import Footer from "@/pages/components/footer/footer";
import EducationCard from "@/pages/components/education/education-card";
import {useEffect} from "react";

export default function Education({courses}) {
    // console.log(navigator.language)
    const nums= [1,2,3]

    console.log(courses)

    return (
        <div className={"font-martel bg-[#141414]"}>
            <Billboard currentTabIndex={7}/>
            <div className={"mx-[50px]"}>
                <div className={"mt-10"}>
                    <h1 className="text-white  text-2xl font-bold">My spirit journey</h1>
                    {
                        courses.map((course,index)=>{
                            if(course.attributes.course_type.data.id===1){
                                return <EducationCard  key={index} course={course}/>
                            }

                        })
                    }
                </div>
                <div className={"mt-10"}>
                    <h1 className="text-white   text-2xl font-bold">Connect Group Training</h1>
                    {
                        courses.map((course,index)=>{
                            if(course.attributes.course_type.data.id===2){
                                return <EducationCard  key={index} course={course}/>
                            }
                        })
                    }
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export async function getStaticProps() {
    const options = {
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_CMS_API_KEY}`
        }
    }
    const data = await fetch(`https://cms.fgacyc.com/api/courses?populate=*`,options)
    const res = await data.json()
    const courses = res.data;

    return {
        props: {
            courses
        }
    }
}
