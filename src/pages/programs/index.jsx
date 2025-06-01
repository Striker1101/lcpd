import React from "react";
import cybersecurity from "../../assets/images/cybersecurity.png"
import multimedia from "../../assets/images/multimedia.png";
import software from "../../assets/images/software.png";
import CourseCard from "../../component/CourseCard";
import s_one from "../../assets/images/project/s_one.png"
import s_two from "../../assets/images/project/s_two.png";
import s_three from "../../assets/images/project/s_three.png";
import s_four from "../../assets/images/project/s_four.png";
import s_five from "../../assets/images/project/s_five.png";
import s_six from "../../assets/images/project/s_six.png";
import s_seven from "../../assets/images/project/s_seven.png";
import s_eight from "../../assets/images/project/s_eight.png";
import s_nine from "../../assets/images/project/s_nine.png";
import s_ten from "../../assets/images/project/s_ten.png";
import s_eleven from "../../assets/images/project/s_eleven.png";
import s_twelve from "../../assets/images/project/s_twelve.png";

export default function Programs() {
  const long_courses = [
    {
      img: cybersecurity,
      title: "Networking & Cybersecurity",
      duration: "🕒 Duration: 2 Years | 6 semesters",
      learn: "🔐 Learn ethical hacking, firewalls, cloud security",
      option: "✅ Only WAEC/NECO or OND",
      credit: "🚀 Credit transfer to BSc in top global unis",
      link: "networking_cybersecurity",
    },
    {
      img: multimedia,
      title: "Multimedia & Product Design",
      duration: "🕒 Duration: 2 Years | 6 semesters",
      learn: "🎥 Learn animation, design, UI/UX, video editing",
      option: "✅ Only WAEC/NECO or OND",
      credit: "🌍 Pathway to BSc degree (UK, Malaysia, Nigeria)",
      link: "multimedia_product_design",
    },
    {
      img: software,
      title: "Software Engineering",
      duration: "🕒 Duration: 2 Years | 6 semesters",
      learn: "🔧 Full-stack, mobile, and cloud development",
      option: "✅ Only WAEC/NECO or OND",
      credit: "🎓 1-year top-up to earn a BSc from partner universities",
      link: "software_engineering",
    },
  ];

  const short_courses = [
    {
      img: s_one,
      title: " CompTIA A+ Certification",
      duration: "🕒 Duration: 1-6 Months",
      learn: "🔧 IT fundamentals - hardware, OS,networking",
      option: "📜 Globally-recognized certification",
      credit: "",
      link: "comptia",
    },
    {
      img: s_two,
      title: "Python Programming",
      duration: "🕒 Duration: 1-6 Months",
      learn: "📊 Master data structures & algorithms",
      option: "💼 Portfolio project showcase",
      credit: "",
      link: "python_programming",
    },

    {
      img: s_three,
      title: "Cybersecurity ",
      duration: "🕒 Duration: 1-6 Months",
      learn: "🔧 IT fundamentals - hardware, OS,networking",
      option: "🛡️ Learn ethical hacking techniques",
      credit: "🔒 Career mentoring sessions",
      link: "cybersecurity",
    },

    {
      img: s_four,
      title: "Digital Marketing",
      duration: "🕒 Duration: 1-6 Months",
      learn: "📱 Master social media & Google Ads",
      option: "📊 Analytics & campaign management",
      link: "digital_marketing",
      credit: "✍️ Basic content skills",
    },

    {
      img: s_five,
      title: "Ethical Hacking ",
      duration: "🕒 Duration: 1-6 Months",
      learn: "🕵️‍♂️ Real-world vulnerability assessment",
      option: "🛡️ Learn ethical hacking techniques",
      credit: "💻 Penetration testing labs",
      link: "ethical_hacking",
    },

    {
      img: s_six,
      title: "Digital Literacy & Technology Skills",
      duration: "🕒 Duration: 1-6 Months",
      learn: "🚀 Build core digital skills from zero",
      option: "🧠 Perfect for beginners in tech or office tools",
      link: "digital_literacy_technology_skills",
      credit: "🏅 Foundational prep for IT career paths",
    },

    {
      img: s_seven,
      title: "Data Science",
      duration: "🕒 Duration: 1-6 Months",
      learn: "📈 Analyze, visualize & predict using real data",
      option: "🤖 Intro to machine learning models",
      link: "data_science",
    },

    {
      img: s_eight,
      title: "Networking",
      duration: "🕒 Duration: 1-6 Months",
      learn: "🔧 Learn LAN/WAN setup, IP configs, and routing",
      option: "🎓 Prepares you for Cisco/CompTIA certifications",
      link: "networking",
    },

    {
      img: s_nine,
      title: " Oracle 12c ",
      duration: "🕒 Duration: 1-6 Months",
      learn: "🗄️ Learn enterprise-grade database management",
      option: "🔍 Master Oracle SQL, backup, security & recovery",
      credit: "🧑‍💼 Boost your credentials for enterprise IT jobs",
      link: "oracal_12c",
    },

    {
      img: s_ten,
      title: "Java Programming",
      duration: "🕒 Duration: 1-6 Months",
      learn: "💻 Learn Java for app dev,       backend, and Android",
      option: "🎓 Portfolio projects for job interviews",
      link: "java_programming",
    },

    {
      img: s_eleven,
      title: "Artificial Intelligence",
      duration: "🕒 Duration: 1-6 Months",
      learn: "🔍 Learn machine learning & smart automation",
      option: "🎓 AI career roadmap guide",
      link: "artifical_intelligence",
    },

    {
      img: s_twelve,
      title: "Cisco",
      duration: "🕒 Duration: 1-6 Months",
      learn: "🧠 Learn core Cisco tech for routers,       switches & VLANs",
      option: "🏆 Prepares for CCNA certification",
      link: "cisco",
    },
  ];
  return (
    <div className="p-4">
      <h3 className="bg-red-500 p-4 m-4 text-center text-white font-semibold text-xl rounded">
        Our Advanced Diploma Courses
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {long_courses.map((course, index) => (
          <CourseCard
            key={index}
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
        {short_courses.map((course, index) => (
          <CourseCard
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
