import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import general from "../../../Utils/general.json";

export default function ShowShortCourse() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const url = general.backend_url;

  useEffect(() => {
    if (!id) return;

    async function getCourse() {
      try {
        const res = await axios.get(`${url}/short_course/${id}`);
        setCourse(res.data);
      } catch (err) {
        console.error("Failed to fetch course", err);
      }
    }
    getCourse();
  }, [id]);

  if (!course)
    return (
      <p className="text-center text-red-600 font-bold mt-10">
        Course not found
      </p>
    );
  console.log(JSON.parse(course.reasons));
  // Parse skills and reasons strings into arrays
  const skillsArray = course.skills ? JSON.parse(course.skills) : [];

  const reasonsArray = course.reasons ? JSON.parse(course.reasons) : [];

  return (
    <section className="flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-red-600 text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">{course.content}</p>
        <a
          href={course.link}
          className="bg-white text-red-600 px-6 py-2 font-semibold rounded hover:bg-gray-100 transition"
        >
          Enroll Now
        </a>
      </div>

      {/* Info Box */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg mt-[-40px] z-10 relative p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-lg font-semibold">{course.level}</h3>
          <p className="text-gray-600">{course.level_text}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{course.rate}</h3>
          <p className="text-gray-600">{course.rate_text}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{course.duration}</h3>
          <p className="text-gray-600">{course.duration_text}</p>
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="w-full max-w-4xl mt-16 px-4">
        <h2 className="text-red-600 text-xl font-bold mb-4">
          What You'll Learn
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          {course.learn_one && <li>{course.learn_one}</li>}
          {course.learn_two && <li>{course.learn_two}</li>}
          {course.learn_three && <li>{course.learn_three}</li>}
          {course.learn_four && <li>{course.learn_four}</li>}
        </ul>
      </div>

      {/* Skills */}
      <div className="w-full max-w-4xl mt-12 px-4 text-center">
        <h2 className="text-lg font-bold mb-4">Skills You'll Gain</h2>
        <ul className="flex flex-wrap justify-center gap-3">
          {skillsArray.length > 0
            ? skillsArray.map((skill, i) => (
                <li
                  key={i}
                  className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </li>
              ))
            : "No skills listed."}
        </ul>
      </div>

      {/* Why Take This Course */}
      <div className="w-full bg-red-600 text-white mt-16 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Why Take This Course</h2>
          <ul className="list-disc list-inside space-y-2">
            {reasonsArray.length > 0
              ? reasonsArray.map((reason, i) => <li key={i}>{reason}</li>)
              : "No reasons listed."}
          </ul>

          <div className="mt-6 flex justify-between items-center flex-wrap gap-4">
            <span className="text-lg font-semibold">
              Earn a Career Certificate
            </span>
            <a
              href={course.reasons_link}
              className="bg-white text-red-600 font-semibold px-5 py-2 rounded hover:bg-gray-100 transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
