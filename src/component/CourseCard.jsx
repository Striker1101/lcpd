import React, { useState } from "react";
import Button from "../Utils/Button";
import general from "../Utils/general.json";
import ContactUs from "./ContactUs";
import { NavLink } from "react-router-dom";

export default function CourseCard({
  fromBackend,
  course,
  index,
  option,
  FlexedIndex = [],
}) {
  const [showModal, setShowModal] = useState(false);
  const isFlexed = FlexedIndex.includes(index);
  const url = general.backend_url;

  const handleClick = () => {
    if (option === "short_course") {
      setShowModal(true);
    } else {
      // handle other options if needed
    }
  };
  return (
    <>
      <div
        className={`${
          isFlexed ? "justify-between" : ""
        } border flex flex-wrap rounded-xl shadow-md p-4 bg-white h-full transition duration-300 hover:shadow-xl`}
        style={{ minHeight: "100%" }}
      >
        <img
          src={fromBackend ? `${url}${course.img}` : course.img}
          alt={fromBackend ? course?.card_title : course?.title}
          className="object-cover w-full h-40 mb-4 rounded"
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
            {option == "short_course" ? (
              <Button text="Apply Now" handleCLick={handleClick} />
            ) : course.link?.startsWith("http") ? (
              <NavLink
                to={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white bg-red-500 rounded your-button-class"
              >
                Apply Now
              </NavLink>
            ) : (
              <Button text="Apply Now" />
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-11/12 max-w-md p-6 bg-white rounded-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute text-lg font-bold text-red-600 top-2 right-2"
            >
              &times;
            </button>
            <h2 className="mb-4 text-xl font-semibold">
              Short Course Application
            </h2>
            <ContactUs showInfo={false} />
          </div>
        </div>
      )}
    </>
  );
}
