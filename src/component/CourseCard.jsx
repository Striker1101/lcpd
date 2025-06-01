import React from "react";
import Button from "../Utils/Button";

export default function CourseCard({ course, index,option, FlexedIndex = [] }) {
  const isFlexed = FlexedIndex.includes(index);

  return (
    <div
      className={`${
        isFlexed ? "justify-between" : ""
      } border flex flex-wrap rounded-xl shadow-md p-4 bg-white h-full transition duration-300 hover:shadow-xl`}
      style={{ minHeight: "100%" }}
    >
      <img
        src={course.img}
        alt={course.title}
        className="w-full h-40 object-cover rounded mb-4"
      />

      <div className={`mb-4 ${isFlexed ? "flex-1 space-y-1" : ""}`}>
        <h3 className="text-lg font-semibold text-gray-800">{course?.title}</h3>
        <p className="text-sm text-gray-600">{course?.duration}</p>
        <p className="text-sm text-gray-600">{course?.learn}</p>
        <p className="text-sm text-gray-600">{course?.option}</p>
        <p className="text-sm text-gray-600">{course?.credit}</p>

        <Button
          text="Apply Now"
          link={`/programs/${option}/${course.link}`}
        />
      </div>
    </div>
  );
}
