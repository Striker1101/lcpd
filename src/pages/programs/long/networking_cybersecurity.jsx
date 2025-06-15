import React from "react";
import one from "../../../assets/images/long/cs1.png";
import two from "../../../assets/images/long/cs2.png";
import three from "../../../assets/images/long/cs3.png";
import four from "../../../assets/images/long/4.png";
import five from "../../../assets/images/long/cs5.png";
import cs_bg from "../../../assets/images/long/cs_bg.png";
import LongCourseTemplate from "../../../component/LongCourseTemplate";

export default function NetworkingCybersecurity() {
  const multimedia = {
    bg: cs_bg,
    one: {
      title: "Networking & Cyber Security",
      duration: "Duration: 2 Years | Format: 6 Semesters",
      link: "/contact_us",
    },
    two: {
      title: "Design. Build. Defend",
      content:
        "Step into one of the world's fastest-growing tech sectors with out Advanced Diploma in Networking & Cybersecurity. This two-year program combines deep technical training with real-world application to prepare you for high-demand careers in network security, ethical hacking, and enterprise IT infrastructure.",
    },
    three: [
      {
        icon: one,
        sub: "Ethical Hacking",
      },
      {
        icon: two,
        sub: "System Protection",
      },

      {
        icon: three,
        sub: "Configure & Secure Networks",
      },

      {
        icon: four,
        sub: "Penetration Testing",
      },
      {
        icon: five,
        sub: "Prepare For Certifications",
      },
    ],
    four: [
      "Get a globally relevant skillset for tech-driven industries",
      "Gain practical experience with hands-on labs and real-worlds simulations",
      "Access top-up pathways to bachelor's degree through out partner universities",
      "Build a Certification-ready portfolio that sets you apart in the job market",
      "learn From industry experts and collaborate with peers in project-based teams ",
      "Prepare for Certificate like CCNA, CEH, and CompTIA Security",
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
      title: "Ready to Defend the Digital World?",
      header: "Take the first step toward a powerful future in tech.",
      link: "",
    },
  };
  return (
    <div>
      <LongCourseTemplate course={multimedia} />
    </div>
  );
}
