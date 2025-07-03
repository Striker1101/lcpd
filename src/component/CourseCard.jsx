import React, { useState } from "react";
import Button from "../Utils/Button";
import general from "../Utils/general.json";
import ContactUs from "./ContactUs";

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
            {option == "short_course" ? (
              <Button text="Apply Now" handleCLick={handleClick} />
            ) : course.link?.startsWith("http") ? (
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="your-button-class bg-red-500 p-2 rounded text-white"
              >
                Apply Now
              </a>
            ) : (
              <Button text="Apply Now" />
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-red-600 text-lg font-bold"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">
              Short Course Application
            </h2>
            <ContactUs showInfo={false} />
          </div>
        </div>
      )}
    </>
  );
}
