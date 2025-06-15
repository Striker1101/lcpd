import React, { useEffect, useState } from "react";
import cybersecurity from "../../assets/images/cybersecurity.png";
import multimedia from "../../assets/images/multimedia.png";
import software from "../../assets/images/software.png";
import CourseCard from "../../component/CourseCard";
import axios from "axios";
import general from "../../Utils/general.json";

export default function Programs() {
  const [shortCourses, setShortCourses] = useState([]);
  const url = general.backend_url;

  const long_courses = [
    {
      img: cybersecurity,
      title: "Networking & Cybersecurity",
      duration: "🕒 Duration: 2 Years | 6 semesters",
      learn: "🔐 Learn ethical hacking, firewalls, cloud security",
      option: "✅ Only WAEC/NECO or OND",
      credit: "🚀 Credit transfer to BSc in top global unis",
      // link: "network_cyber_security",
      link: "https://Gudu.lcpd.net ",
    },
    {
      img: multimedia,
      title: "Multimedia & Product Design",
      duration: "🕒 Duration: 2 Years | 6 semesters",
      learn: "🎥 Learn animation, design, UI/UX, video editing",
      option: "✅ Only WAEC/NECO or OND",
      credit: "🌍 Pathway to BSc degree (UK, Malaysia, Nigeria)",
      // link: "multimedia_product_design",
      link: "https://Gudu.lcpd.net ",
    },
    {
      img: software,
      title: "Software Engineering",
      duration: "🕒 Duration: 2 Years | 6 semesters",
      learn: "🔧 Full-stack, mobile, and cloud development",
      option: "✅ Only WAEC/NECO or OND",
      credit: "🎓 1-year top-up to earn a BSc from partner universities",
      // link: "software_engineering",
      link: "https://Gudu.lcpd.net ",
    },
  ];

  useEffect(() => {
    axios
      .get(`${url}/short_course`)
      .then((res) => {
        setShortCourses(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch courses", err);
      });
  }, [url]); // added url to deps

  return (
    <div className="p-4">
      <h3 className="bg-red-500 p-4 m-4 text-center text-white font-semibold text-xl rounded">
        Our Advanced Diploma Courses
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {long_courses.map((course, index) => (
          <CourseCard
            fromBackend={false}
            key={`long-${index}`} // better unique key
            index={index}
            course={course}
            FlexedIndex={[2]}
            option={"long_course"}
          />
        ))}
      </div>

      <h3 className="bg-red-500 p-4 m-4 text-center text-white font-semibold text-xl rounded mt-10">
        Short Courses
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shortCourses.map((course, index) => (
          <CourseCard
            fromBackend={true}
            key={`short-${index}`}
            index={index}
            course={course}
            option={"short_course"}
          />
        ))}
      </div>
    </div>
  );
}
