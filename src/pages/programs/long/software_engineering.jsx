import React from "react";
import one from "../../../assets/images/long/se1.png";
import two from "../../../assets/images/long/se2.png";
import three from "../../../assets/images/long/se3.png";
import four from "../../../assets/images/long/se4.png";
import five from "../../../assets/images/long/se5.png";
import se_bg from "../../../assets/images/long/se_bg.png";          
import LongCourseTemplate from "../../../component/LongCourseTemplate";

export default function SoftwareEngineering() {
  const multimedia = {
    bg: se_bg,
    one: {
      title: "Software Engineering",
      duration: "Duration: 2 Years | Format: 6 Semesters",
      link: "",
    },
    two: {
      title: "Build the Future. One Line of Code at a Time",
      content:
        "Enter the world of modern software development with our Advanced Diploma in Software Engineering, a robust two-year program that blends theory with real-world coding experience, Covering everything from algorithms to app deployment, this program is designed for ambitious learners ready to lunch careers or transition to university degrees in software engineering. With a Curriculum panning six semesters and up to 140 credit units, you'll dive deep into software design, development, general education, and a capstone project or internship that puts your skills into action.",
    },
    three: [
      {
        icon: one,
        sub: "Web Development",
      },
      {
        icon: two,
        sub: "UI/UX Principles",
      },

      {
        icon: three,
        sub: "Agile & DevOps",
      },

      {
        icon: four,
        sub: "Software Testing",
      },
      {
        icon: five,
        sub: "Mobile Soo Development",
      },
    ],
    four: [
      "Seamlessly transition to a bachelor's degree through our partner universities ",
      "Gain job-ready skills aligned wth today's software industry demands",
      "Learn from seasoned professional using real-world development tools",
      "Build a portfolio-ready capstone project and unblock internship opportunities",
      "Prepare fpr careers in software engineering, development, or systems design",
    ],
    five: {
      header_one:
        "LCPD's Advanced Diploma is internationally recognized and designed with a credit transfer structure that allows students to complete a Bachelor's degree in just 1 additional year at our partner universities",
      header_two:
        "We Currently have affiliations and credit transfer agreements with the following institutions",
      item_one: [
        "Middlesex University London",
        "Lincoln University College Malaysia",
        "Lincoln College of Science, Management and Technology-NSUK Nigeria",
      ],
      item_two: [
        "London South Bank University",
        "University Of  Sunderland-London or Hong Kong",
        "Alfa University College Malaysia",
      ],
    },
    six: {
      title: "Fuel our Future with the Power of Design",
      header:
        "Apply now and start building the skills that will shape tomorrow",
      link: "",
    },
  };
  return (
    <div>
      <LongCourseTemplate course={multimedia} />
    </div>
  );
}
