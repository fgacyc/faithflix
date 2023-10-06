import Billboard from "@/components/billboard/billboard";
import { useSearchParams } from "next/navigation";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import VideoPlayer from "@/components/education/video-player";
import { BsCircle, BsFillCheckCircleFill } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React, { useEffect } from "react";
import Quizzes from "@/components/education/quizzes";
import { useRouter } from "next/router";
import MdViewer from "@/components/education/md-viewer";
import AccordionCard from "@/components/education/accordion-card";

export default function EducationUnit() {
  const searchParams = useSearchParams();

  const courseID =
    searchParams.get("courseID") && searchParams.get("courseID").split("=")[1];
  const classID = searchParams.get("class");
  const type = searchParams.get("type");
  // console.log(courseID, classID, type)

  const router = useRouter();

  const [courses, setCourses] = React.useState(null);
  const [conclusion, setConclusion] = React.useState(null);
  const [introduction, setIntroduction] = React.useState(null);
  const [classIDState, setClassID] = React.useState(null);

  useEffect(() => {
    if (courseID === null) return;
    async function getClassData() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_API_KEY}`,
        },
      };
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_HOST_URL}/api/courses/${courseID}?populate=*`,
        options
      );
      const res = await data.json();
      const courses = res.data.attributes.classes.data;
      // console.log(courses)
      setCourses(courses);
    }
    getClassData();
  }, [courseID]);

  useEffect(() => {
    if (courseID === null) return;
    if (courses === null) return;
    setConclusion(courses[Number(classID) - 1].attributes.conclusion);
    setIntroduction(courses[Number(classID) - 1].attributes.introduction);
    setClassID(classID);
  }, [classID, courses]);

  function goTo(classID, type) {
    const routerPath = `/education/course=${courseID}?class=${classID}&type=${type}`;
    router.push(routerPath);
  }

  return (
    <div className={"font-martel bg-[#141414] dark "}>
      <Billboard currentTabIndex={7} />
      <div
        className={"flex flex-row justify-between pr-[50px] pl-[30px]"}
        style={{ height: "calc(100vh - 65px)" }}
      >
        <div
          className={
            "w-1/4 text-white max-w-xs mt-6 overflow-x-auto no-scrollbar"
          }
        >
          {courses &&
            courses.map((course, index) => {
              return (
                <AccordionCard
                  key={index}
                  index={index}
                  courseID={courseID}
                  course={course}
                />
              );
            })}
        </div>
        <div className={"my-8 relative w-3/4"}>
          {type === "intro" && <MdViewer content={introduction} />}
          {type === "video" && <VideoPlayer />}
          {type === "quiz" && <Quizzes classID={classIDState} />}
          {type === "review" && <MdViewer content={conclusion} />}

          <div
            className={"absolute bottom-0 w-full flex flex-row justify-between"}
          >
            <Button
              className={"bg-[rgba(109,109,109,0.3)] text-white rounded"}
              startContent={
                <FiChevronLeft className={"text-2xl"} color="white" />
              }
              //onPress={onOpen}
            >
              <span className={"relative top-[2px] font-bold"}> Previous</span>
            </Button>
            <Button
              className={
                "bg-[rgba(109,109,109,0.3)] text-white rounded w-[120px] text-right"
              }
              endContent={
                <FiChevronRight className={"text-2xl"} color="white" />
              }
              // onPress={onOpen}
            >
              <span className={"relative top-[2px] font-bold"}>Next </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
