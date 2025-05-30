import React from "react";
import header from "../assets/images/homepage_header.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s_one from "../assets/images/s_one.png";
import s_two from "../assets/images/s_two.png";
import s_three from "../assets/images/s_three.png";
import {
  faShieldAlt,
  faPalette,
  faCode,
  faWalking,
  faComputer,
  faLightbulb,
  faLocation,
  faMailBulk,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Utils/Button";
export default function Homepage() {
  const icons = [faShieldAlt, faPalette, faCode];
  const icons_two = [faWalking, faComputer, faLightbulb]; // One icon per course

  const long_course = [
    {
      icon: "faShieldAlt",
      title: "Networking & Cyber Security",
      des: "Master network infrastructure, security protocols, and ethical hacking techniques to protect organizations from cyber threats.",
      duration: "2 years",
      link: "/programs/long/network_cyber_security",
    },
    {
      icon: "faPalette",
      title: "Multimedia & Product Design",
      des: "Develop expertise in UX/UI design, 3D modeling,  animation, and digital media production  for creative industries.",
      duration: "2 years",
      link: "/programs/long/multimedia_product_design",
    },
    {
      icon: "faCode",
      title: "Software Design",
      des: "Become a skilled software developer—learn to create websites, phone apps, and online systems like the pros!",
      duration: "2 years",
      link: "/programs/long/software_design",
    },
  ];

  const about = [
    {
      title: "Globally Recognized Pathways",
      desc: "1-Year Bachelor’s Top-Up at prestigious universities like:",
      list: [
        "Middlesex University (UK)",
        "University of Sunderland (UK/Hong Kong)",
        "Lincoln University College (Malaysia)",
      ],
    },
    {
      title: " Industry-Driven Programs",
      desc: "Hands-on training in high-demand fields:",
      list: [
        "Software Engineering (Full-stack, AI, Agile)",
        "Networking & Cyber Security (CCNA/CEH prep)",
        "Multimedia Design (3D modeling, UX/UI)",
      ],
    },
    {
      title: "Hybrid classes (online/on-campus).",
      desc: "",
      list: [
        "Beginner-friendly with foundational modules",
        "2-year fast track to degrees.",
      ],
    },
  ];

  const short_course = [
    {
      img: s_one,
      text: "Artificial Intelligence (AI)",
    },
    {
      img: s_two,
      text: "Digital Marketing",
    },
    {
      img: s_three,
      text: "Ethical Hacking",
    },
  ];

  return (
    <div>
      <section className="w-full bg-gray-100 flex flex-col md:flex-row items-center justify-between">
        {/* Left content */}
        <div className="w-full md:w-1/2 md:px-16  text-center md:text-left space-y-6">
          <div className="flex w-full text-center items-center justify-center md:justify-start gap-2 text-red-600 font-semibold">
            <i className="fas fa-bolt text-xl"></i>
            <span>Welcome to LCPD Gudu Center</span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
              Shape Your Future at <br />
              <span className="text-red-600">LCPD School</span>
            </h1>
          </div>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Advance your career with our industry-leading diploma programs and
            international university pathways.
            <br />
            <span className="block mt-1">
              Build the skills for tomorrow's digital world.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-red-600 text-white px-6 py-2 rounded-md shadow hover:bg-red-700 transition duration-300">
              Apply Now
            </button>
            <a
              href="/programs"
              className="bg-white text-red-600 border border-red-600 px-6 py-2 rounded-md hover:bg-red-50 transition duration-300"
            >
              Explore Programs
            </a>
          </div>
        </div>

        {/* Right image - hidden on small screens */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 hidden md:block">
          <img
            src={header}
            alt="LCPD Banner"
            className="w-full h-auto rounded-lg shadow"
          />
        </div>
      </section>

      {/* Advanced Programs Section */}
      <section className="py-12 px-4 md:px-16 flex flex-column gap-4 justify-center items-center bg-white text-center">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold mb-2">Advanced Diploma Programs</h3>
          <p className="font-semibold text-gray-700">
            Our industry-aligned programs prepare you for the most in-demand
            careers in technology an design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16 py-8">
          {long_course.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border-t-4 border-red-600 hover:shadow-lg transition duration-300"
            >
              <div className="text-red-600 text-3xl mb-4">
                <FontAwesomeIcon icon={icons[index]} />
              </div>
              <div className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </div>
              <p className="text-gray-600 text-sm mb-4">{item.des}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">
                  {item.duration}
                </span>
                <a
                  href={item.link}
                  className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-16 flex flex-column gap-4 justify-center items-center bg-gray-100 text-center">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold mb-2">
            Boost Your Career in 8–12 Weeks with LCPD’s Short Courses
          </h3>
          <p className="font-semibold text-gray-700">
            Fast-track your future with job-ready skills in
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16 py-8">
          {short_course.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white relative shadow-md rounded-xl p-6 border-b-4 border-red-600 hover:shadow-lg transition duration-300"
              >
                <img src={item.img} alt={item.text} />
                <p className="text-white font-bold absolute top-10 pl-5">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="float-right">
          <Button link={"/products/short"} text={" Click to learn more"} />
        </div>
      </section>

      <section className="container my-3">
        <div className="text-center my-4">
          <h2 className="font-bold">International University Pathways</h2>
          <p className="font-semibold">
            Our graduates receive advanced standing at prestigious universities
            worldwide, allowing you to complete your bachelor's degree in less
            time.
          </p>
        </div>
        <div className="flex flex-column gap-4 my-3">
          <div className="border-l-4 border-red-600 flex justify-content-around bg-gray-400 py-3">
            <h2>United Kingdom</h2>
            <Button text={"Click to see University"} link={""} />
          </div>
          <div className="border-l-4 border-red-600 flex justify-content-around  bg-gray-400 py-3">
            <h2>Malaysia</h2>
            <Button text={"Click to see University"} />
          </div>
          <div className="border-l-4 border-red-600 flex justify-content-around  bg-gray-400 py-3">
            <h2>Nigeria</h2>
            <Button text={"Click to see University"} />
          </div>
        </div>
        <div className="flex justify-content-between">
          <Button text={"Explore All Pathways"} link={"/university_pathways"} />
          <i>And lots More ...</i>
        </div>
      </section>

      <section className="py-12 px-4 md:px-16 flex flex-column gap-4 justify-center items-center bg-white text-center">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold mb-2">Advanced Diploma Programs</h3>
          <p className="font-semibold text-gray-700">
            Our industry-aligned programs prepare you for the most in-demand
            careers in technology an design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16 py-10 bg-gray-400 ">
          {about.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 border-t-4 border-red-600"
            >
              <div className="text-red-600 text-4xl mb-4">
                <FontAwesomeIcon icon={icons_two[index]} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                {item?.list?.map((listItem, idx) => (
                  <li key={idx}>{listItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-red-600 text-white py-10 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white text-base md:text-lg font-medium">
              Join the <span className="font-semibold">LCPD Advantage</span> —
              Applications are now open!
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="/programs"
            className="bg-white text-red-600 font-semibold px-6 py-2 rounded-md shadow hover:bg-red-100 transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </section>

      <section className="bg-white py-10 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-600 mb-6">
              Have questions about our programs or application process? Our
              admissions team is here to help.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="text-red-600 text-2xl">
                  <FontAwesomeIcon icon={faLocation} />
                </div>
                <p className="text-gray-700">
                  Plot 678 Axis Plaza, Gudu, Abuja.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-red-600 text-2xl">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <p className="text-gray-700">09048088823</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-red-600 text-2xl">
                  <FontAwesomeIcon icon={faMailBulk} />
                </div>
                <p className="text-gray-700">info@example.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Request Information
            </h4>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <select className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600">
                <option value="">Select Program</option>
                <option value="software">Software Design</option>
                <option value="networking">Networking & Cyber Security</option>
                <option value="design">Multimedia & Product Design</option>
              </select>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
