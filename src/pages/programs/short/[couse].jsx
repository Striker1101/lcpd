import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
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
      <p className="mt-10 font-bold text-center text-red-600">
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
      <div className="w-full px-4 py-12 text-center text-white bg-red-600">
        <h1 className="mb-4 text-3xl font-bold">{course.title}</h1>
        <p className="max-w-3xl mx-auto mb-6 text-lg">{course.content}</p>
        <NavLink
          href={course.link}
          className="px-6 py-2 font-semibold text-red-600 transition bg-white rounded hover:bg-gray-100"
        >
          Enroll Now
        </NavLink>
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
      <div className="w-full max-w-4xl px-4 mt-16">
        <h2 className="mb-4 text-xl font-bold text-red-600">
          What You'll Learn
        </h2>
        <ul className="space-y-2 text-gray-800 list-disc list-inside">
          {course.learn_one && <li>{course.learn_one}</li>}
          {course.learn_two && <li>{course.learn_two}</li>}
          {course.learn_three && <li>{course.learn_three}</li>}
          {course.learn_four && <li>{course.learn_four}</li>}
        </ul>
      </div>

      {/* Skills */}
      <div className="w-full max-w-4xl px-4 mt-12 text-center">
        <h2 className="mb-4 text-lg font-bold">Skills You'll Gain</h2>
        <ul className="flex flex-wrap justify-center gap-3">
          {skillsArray.length > 0
            ? skillsArray.map((skill, i) => (
                <li
                  key={i}
                  className="px-3 py-1 text-sm text-red-700 bg-red-100 rounded-full"
                >
                  {skill}
                </li>
              ))
            : "No skills listed."}
        </ul>
      </div>

      {/* Why Take This Course */}
      <div className="w-full px-6 py-10 mt-16 text-white bg-red-600">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-xl font-bold">Why Take This Course</h2>
          <ul className="space-y-2 list-disc list-inside">
            {reasonsArray.length > 0
              ? reasonsArray.map((reason, i) => <li key={i}>{reason}</li>)
              : "No reasons listed."}
          </ul>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            <span className="text-lg font-semibold">
              Earn a Career Certificate
            </span>
            <NavLink
              href={course.reasons_link}
              className="px-5 py-2 font-semibold text-red-600 transition bg-white rounded hover:bg-gray-100"
            >
              Apply Now
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
