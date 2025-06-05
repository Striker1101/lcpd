import React from "react";
import one from "../../../assets/images/long/1.png";
import two from "../../../assets/images/long/2.png";
import three from "../../../assets/images/long/3.png";
import four from "../../../assets/images/long/4.png";
import five from "../../../assets/images/long/5.png";
import mul_bg from "../../../assets/images/long/mul_bg.png";
import LongCourseTemplate from "../../../component/LongCourseTemplate";

export default function MultimediaProductDesign() {
    const multimedia = {
      bg: mul_bg,
      one: {
        title: "Multimedia",
        duration: "Duration: 2 Years | Format: 4 Semesters",
        link: "",
      },
      two: {
        title: "Create. Design. Innovate.",
        content:
          "Step into the future of digital creativity with our Advanced Diploma in Multimedia/Product Design. A Dynamic two-year program blending artistic vision and technical expertise to launch your career in multimedia, animation, or product innovation.",
      },
      three: [
        {
          icon: one,
          sub: "Graphic design",
        },
        {
          icon: two,
          sub: "2D/3D Animation",
        },

        {
          icon: three,
          sub: "UI/UX Design",
        },

        {
          icon: four,
          sub: "Product Modeling",
        },
        {
          icon: five,
          sub: "Visual Effects",
        },
      ],
      four: [
        "Master multimedia design and product development",
        "Work with real clients and professional tools",
        "Build a string portfolio that opens job doors",
        "Learn to think like a pro designer",
        "Be job-ready for roles in Multimedia Designer, Product Designer, or UI/UX Specialist.",
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
