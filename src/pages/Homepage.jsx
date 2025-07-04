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
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Utils/Button";
import ContactUs from "../component/ContactUs";
import caroOne from "../assets/images/caro/1.png";
import caroTwo from "../assets/images/caro/2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";

export default function Homepage() {
  const icons = [faShieldAlt, faPalette, faCode];
  const icons_two = [faWalking, faComputer, faLightbulb]; // One icon per course

  const long_course = [
    {
      icon: "faShieldAlt",
      title: "Networking & Cyber Security",
      des: "Master network infrastructure, security protocols, and ethical hacking techniques to protect organizations from cyber threats.",
      duration: "2 years",
      link: "/programs/long_course/network_cyber_security",
    },
    {
      icon: "faPalette",
      title: "Multimedia & Product Design",
      des: "Develop expertise in UX/UI design, 3D modeling,  animation, and digital media production for creative industries.",
      duration: "2 years",
      link: "/programs/long_course/multimedia_product_design",
    },
    {
      icon: "faCode",
      title: "Software Design",
      des: "Become a skilled software developer—learn to create websites, phone apps, and online systems like the pros!",
      duration: "2 years",
      link: "/programs/long_course/software_engineering",
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

  const caro = [caroOne, caroTwo];

  return (
    <div>
      <section className="flex flex-col items-center justify-between w-full bg-gray-100 md:flex-row">
        {/* Left content */}
        <div className="w-full space-y-6 text-center md:w-1/2 md:px-16 md:text-left">
          <div className="flex items-center justify-center w-full gap-2 font-semibold text-center text-red-600 md:justify-start">
            <i className="text-xl fas fa-bolt"></i>
            <span>Welcome to LCPD Gudu Center</span>
          </div>

          <div>
            <h1 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
              Shape Your Future at <br />
              <span className="text-red-600">LCPD School</span>
            </h1>
          </div>

          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            Advance your career with our industry-leading diploma programs and
            international university pathways.
            <br />
            <span className="block mt-1">
              Build the skills for tomorrow's digital world.
            </span>
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <NavLink
              className={
                "px-6 py-2 text-white transition duration-300 bg-red-600 rounded-md shadow hover:bg-red-700"
              }
              to={"/contact_us"}
            >
              {" "}
              Apply Now
            </NavLink>

            <NavLink
              to={"/programs"}
              className="px-6 py-2 text-red-600 transition duration-300 bg-white border border-red-600 rounded-md hover:bg-red-50"
            >
              Explore Programs
            </NavLink>
          </div>
        </div>

        {/* Right image - hidden on small screens */}
        <div className="hidden w-full mt-8 md:w-1/2 md:mt-0 md:block">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop
            autoplay={{
              delay: 3000, // time in milliseconds between slides
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            className="overflow-hidden rounded-xl"
          >
            {caro.map((image, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={image}
                  alt={`carousel-${idx}`}
                  className="object-cover w-full h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="flex items-center justify-center gap-4 px-4 py-12 text-center bg-white md:px-16 flex-column">
        <div>
          <h1 className="font-bold">
            Join Our Super Fun Summer Coding Adventure!
          </h1>
          <p>
            Build your own video games and animations! Learn coding basics with
            Scratch, Python, and more! Create cool projects to show off to
            friends and family!
          </p>
          <p>
            Fun, hands-on lessons with friendly instructors! Make new friends
            who love tech as much as you do! No experience needed – just bring
            your imagination!
          </p>
        </div>

        <div className="flex items-center justify-between w-2/3 align-middle">
          <div className="flex w-full align-top">
            <h2 className="font-bold">Duration</h2>
            <div>
              <p>August 9th - Sept. 6th, 2025</p>
              <p>Monday - Friday</p>
              <p>Morning Session from 9 AM - 12 PM</p>
              <p>Afternoon Session from 1PM - 4PM</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold">For Kids ages 8-14</h2>
            <h2 className="font-bold">*Limited spots available.</h2>
          </div>
        </div>
        <div className="w-2/3">
          <Button
            className="float-right "
            text={"Apply Now"}
            link={"/contact_us"}
          ></Button>
        </div>
      </section>

      {/* Advanced Programs Section */}
      <section className="flex items-center justify-center gap-4 px-4 py-12 text-center bg-white md:px-16 flex-column">
        <div className="max-w-2xl">
          <h3 className="mb-2 text-2xl font-bold">Advanced Diploma Programs</h3>
          <p className="font-semibold text-gray-700">
            Our industry-aligned programs prepare you for the most in-demand
            careers in technology an design.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3 md:px-16">
          {long_course.map((item, index) => (
            <div
              key={index}
              className="p-6 transition duration-300 bg-white border-t-4 border-red-600 shadow-md rounded-xl hover:shadow-lg"
            >
              <div className="mb-4 text-3xl text-red-600">
                <FontAwesomeIcon icon={icons[index]} />
              </div>
              <div className="mb-2 text-xl font-bold text-gray-800">
                {item.title}
              </div>
              <p className="mb-4 text-sm text-gray-600">{item.des}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">
                  {item.duration}
                </span>
                <NavLink
                  to={item.link}
                  className="px-3 py-1 text-sm text-white transition bg-red-600 rounded hover:bg-red-700"
                >
                  Learn More
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex items-center justify-center gap-4 px-4 py-12 text-center bg-gray-100 md:px-16 flex-column">
        <div className="max-w-2xl">
          <h3 className="mb-2 text-2xl font-bold">
            Boost Your Career in 8–12 Weeks with LCPD’s Short Courses
          </h3>
          <p className="font-semibold text-gray-700">
            Fast-track your future with job-ready skills in
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3 md:px-16">
          {short_course.map((item, index) => {
            return (
              <div
                key={index}
                className="relative p-6 transition duration-300 bg-white border-b-4 border-red-600 shadow-md rounded-xl hover:shadow-lg"
              >
                <img src={item.img} alt={item.text} />
                <p className="absolute pl-5 font-bold text-white top-10">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="float-right">
          <Button link={"/programs"} text={" Click to learn more"} />
        </div>
      </section>

      <section className="container my-3">
        <div className="my-4 text-center">
          <h2 className="font-bold">International University Pathways</h2>
          <p className="font-semibold">
            Our graduates receive advanced standing atprestigious universities
            worldwide, allowing youto complete your bachelor's degree in less
            time.
          </p>
        </div>
        <div className="flex gap-4 my-3 flex-column">
          <div className="flex py-3 bg-gray-400 border-l-4 border-red-600 justify-content-around">
            <h2>United Kingdom</h2>
            <Button
              text={"Click to see University"}
              link={"university_pathway"}
            />
          </div>
          <div className="flex py-3 bg-gray-400 border-l-4 border-red-600 justify-content-around">
            <h2>Malaysia</h2>
            <Button
              text={"Click to see University"}
              link={"university_pathway"}
            />
          </div>
          <div className="flex py-3 bg-gray-400 border-l-4 border-red-600 justify-content-around">
            <h2>Nigeria</h2>
            <Button
              text={"Click to see University"}
              link={"university_pathway"}
            />
          </div>
        </div>
        <div className="flex justify-content-between">
          <Button text={"Explore All Pathways"} link={"university_pathway"} />
          <i>And lots More ...</i>
        </div>
      </section>

      <section className="flex items-center justify-center gap-4 px-4 py-12 text-center bg-white md:px-16 flex-column">
        <div className="max-w-2xl">
          <h3 className="mb-2 text-2xl font-bold">Advanced Diploma Programs</h3>
          <p className="font-semibold text-gray-700">
            Our industry-aligned programs prepare you for the most in-demand
            careers in technology an design.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 px-4 py-10 bg-gray-400 sm:grid-cols-2 lg:grid-cols-3 md:px-16 ">
          {about.map((item, index) => (
            <div
              key={index}
              className="p-6 transition duration-300 bg-white border-t-4 border-red-600 shadow-md rounded-xl hover:shadow-lg"
            >
              <div className="mb-4 text-4xl text-red-600">
                <FontAwesomeIcon icon={icons_two[index]} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                {item.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600">{item.desc}</p>
              <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                {item?.list?.map((listItem, idx) => (
                  <li key={idx}>{listItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-10 text-white bg-red-600 md:px-16">
        <div className="flex flex-col items-center justify-between gap-6 mx-auto max-w-7xl md:flex-row">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">
              Ready to Start Your Journey?
            </h2>
            <p className="text-base font-medium text-white md:text-lg">
              Join the <span className="font-semibold">LCPD Advantage</span> —
              Applications are now open!
            </p>
          </div>
          {/* CTA Button */}\
          <NavLink
            to={"/contact_us"}
            className="px-6 py-2 font-semibold text-red-600 transition duration-300 bg-white rounded-md shadow hover:bg-red-100"
          >
            Apply Now
          </NavLink>
        </div>
      </section>

      <ContactUs />
    </div>
  );
}
