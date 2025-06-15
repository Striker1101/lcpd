import React from "react";
import Button from "../Utils/Button";
import ContactUs from "../component/ContactUs";

export default function LongCourseTemplate({ course }) {
  return (
    <section className="text-gray-800 font-sans">
      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center text-center py-14 px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${course.bg})` }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold underline mb-2 text-white drop-shadow">
          Advanced Diploma in {course.one.title}
        </h2>
        <p className="text-lg mb-4 text-white drop-shadow">
          {course.one.duration}
        </p>
        <Button link={course.one.link} text="Apply Now" />
      </div>

      {/* Overview */}
      <div className="bg-red-600 text-white py-10 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-3">{course.two.title}</h3>
        <p className="max-w-3xl mx-auto text-base leading-relaxed">
          {course.two.content}
        </p>
      </div>

      {/* What You'll Learn */}
      <div className="py-12 px-6 text-center">
        <h3 className="text-red-500 text-2xl font-semibold mb-8">
          What You'll Learn
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {course.three.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={item.icon}
                alt={item.sub}
                className="w-16 h-16 mb-2 object-contain"
              />
              <p className="text-sm font-medium">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Take This Course */}
      <div className="bg-gray-100 py-12 px-6">
        <h3 className="text-red-500 text-2xl font-semibold text-center mb-6">
          Why Take This Course
        </h3>
        <ul className="list-disc list-inside max-w-3xl mx-auto text-left space-y-2 text-base">
          {course.four.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Credit Transfer & Pathways */}
      <div className="py-12 px-6 bg-white">
        <h3 className="text-red-500 text-2xl font-semibold text-center mb-4">
          Credit Transfer & Degree Pathways
        </h3>
        <p className="text-center max-w-4xl mx-auto mb-2">
          {course.five.header_one}
        </p>
        <p className="text-center max-w-4xl mx-auto mb-6">
          {course.five.header_two}
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <ul className="list-disc pl-6 text-sm space-y-2 w-full md:w-1/2">
            {course.five.item_one.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <ul className="list-disc pl-6 text-sm space-y-2 w-full md:w-1/2">
            {course.five.item_two.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-600 text-white py-12 px-6 text-center">
        <h3 className="text-2xl font-bold mb-2">{course.six.title}</h3>
        <p className="text-base mb-4">{course.six.header}</p>
        <Button link={course.six.link} text="Apply Now" />
      </div>

      {/* Contact Us */}
      <ContactUs />
    </section>
  );
}
