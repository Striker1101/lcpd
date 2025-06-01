import React from "react";
import UniversityCards from "../component/UniversityCards";
import uk_one from "../assets/images/uk_one.png";
import uk_two from "../assets/images/uk_two.png";
import uk_three from "../assets/images/uk_three.png";
import my_one from "../assets/images/my_one.png";
import my_two from "../assets/images/my_two.png";
import ng_one from "../assets/images/ng_one.png";

export default function UniversityPathways() {
  const universities = [
    {
      title: "United Kingdom",
      details: [
        {
          image: uk_one,
          detail: {
            title: "Middlesex University London",
            location: "📍 Location: London, UK",
            pathway:
              "🎓 Pathway Offer: 1-Year BSc Top-Up Degree for the Diploma Courses",
            certificate_title: "🏆 Ranked Top 10 in UK for",
            certificate: ["Student satisfaction"],
          },
        },

        {
          image: uk_two,
          detail: {
            title: "London South Bank University",
            location: "📍 London, UK",
            pathway: "🎓 Pathway Offer: 1-Year BSc Top-Up Degree",
            certificate_title: "🏅 Recognized for: ",
            certificate: ["Best modern university in London"],
          },
        },

        {
          image: uk_three,
          detail: {
            title: "University of Sunderland",
            location: "📍 Location:  London, UK",
            pathway: "🎓 Pathway Offer: 1-Year BSc Top-Up Degree",
            certificate_title: "🏛️ Unique Perks:  ",
            certificate: ["#1 in UK for teaching quality"],
          },
        },
      ],
    },

    {
      title: "Malaysia",
      details: [
        {
          image: my_one,
          detail: {
            title: "Alfa University College",
            location: "📍 Kuala Lumpur, Malaysia",
            pathway: "🎓 Pathway Offer: 1-Year BSc Top-Up Degree",
            certificate_title: "🏆 Best Private College for Cybersecurity",
            certificate: ["(2023 MyCEB Awards)"],
          },
        },

        {
          image: my_two,
          detail: {
            title: "Lincoln University College",
            location: "📍 Petaling Jaya, Malaysia",
            pathway: "🎓 Pathway Offer: 1-Year BSc Top-Up Degree",
            certificate_title: "🏅 Recognized for: ",
            certificate: [
              "Top 3% of Malaysian private colleges (SETARA 5-Star)",
              " Dual Award Degrees (UK + Malaysian accreditation)",
            ],
          },
        },
      ],
    },

    {
      title: "Nigeria",
      details: [
        {
          image: ng_one,
          detail: {
            title:
              "Lincoln College of Science Management and Technology Nigeria ",
            location: "📍 NSUK, Nigeria",
            pathway: "🎓 Pathway Offer: 1-Year BSc Top-Up Degree",
            certificate_title: "🏆 Recognized For: ",
            certificate: ["(Best Emerging Tech College (2023 – Nigerian Tech Awards)", 'NYSC eligibility for graduates pursuing degrees in Nigeria.  '],
          },
        },
      ],
    },
  ];
  return (
    <div>
      <UniversityCards universities={universities} />
    </div>
  );
}
