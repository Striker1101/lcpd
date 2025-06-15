import React from "react";
import Button from "../Utils/Button";
import general from "../Utils/general.json";

export default function CourseCard({fromBackend, course, index,option, FlexedIndex = [] }) {
  const isFlexed = FlexedIndex.includes(index);
 const url = general.backend_url;
  return (
    <div
      className={`${
        isFlexed ? "justify-between" : ""
      } border flex flex-wrap rounded-xl shadow-md p-4 bg-white h-full transition duration-300 hover:shadow-xl`}
      style={{ minHeight: "100%" }}
    >
      <img
        src={fromBackend ? `${url}${course.img}` : course.img}
        alt={fromBackend ? course?.card_title : course?.title}
        className="w-full h-40 object-cover rounded mb-4"
      />

      <div className={`mb-4 ${isFlexed ? "flex-1 space-y-1" : ""}`}>
        <h3 className="text-lg font-semibold text-gray-800">
          {fromBackend ? course?.card_title : course?.title}
        </h3>
        <p className="text-sm text-gray-600">{course?.duration}</p>
        <p className="text-sm text-gray-600">{course?.learn}</p>
        <p className="text-sm text-gray-600">{course?.option}</p>
        <p className="text-sm text-gray-600">{course?.credit}</p>

        <div className="m-2">
          {course.link?.startsWith("http") ? (
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="your-button-class bg-red-500 p-2 rounded text-white"
            >
              Apply Now
            </a>
          ) : (
            <Button
              text="Apply Now"
              link={`/programs/${option}/${course.id || course.link}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}
