import React from "react";
import { useParams } from "react-router-dom";

export default function ShowShortCourse() {
  const short_courses = {
    graphic_design: {
      title: "Graphic Design",
      description: "Learn design principles, tools, and branding.",
    },
    fashion_design: {
      title: "Fashion Design",
      description: "Master tailoring, sketching, and styling.",
    },
    artificial_intelligence: {
      title: "Introduction to Artificial Intelligence",
      slug: "artificial_intelligence",
      content:
        "This course is your gateway into the world of AI where machines learn, think, and make decisions. Through engaging lectures and hands-on projects, you'll explore how AI is reshaping industries one algorithm at a time.",
      link: "#",
      level: "Beginner Level",
      level_text: "No prior experience required",
      rate: "4.6",
      rate_text: "25,000+ Reviews",
      duration: "Duration",
      duration_text: "8–9 Weeks",
      learn_one: "Learn Python: the most popular programming language for AI",
      learn_two: "Understand algorithms, data structures, and AI models",
      learn_three: "Build with TensorFlow and PyTorch",
      learn_four: "Explore AI use cases in health, finance, and ethics",
      skills: [
        "Automation",
        "Python",
        "Jupyter",
        "Data Processing",
        "Pandas",
        "Web Scraping",
        "Scripting",
        "Numpy",
        "Programming Principles",
      ],
      reasons: [
        "Learn from industry experts",
        "Gain foundational understanding of AI tools",
        "Develop job-relevant skills with projects",
      ],
      reasons_link: "#",
    },
  };

  const { slug } = useParams();
  const course = short_courses[slug];

  if (!course)
    return (
      <p className="text-center text-red-600 font-bold mt-10">
        Course not found
      </p>
    );

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
          <li>{course.learn_one}</li>
          <li>{course.learn_two}</li>
          <li>{course.learn_three}</li>
          <li>{course.learn_four}</li>
        </ul>
      </div>

      {/* Skills */}
      <div className="w-full max-w-4xl mt-12 px-4 text-center">
        <h2 className="text-lg font-bold mb-4">Skills You'll Gain</h2>
        <ul className="flex flex-wrap justify-center gap-3">
          {course.skills.map((skill, i) => (
            <li
              key={i}
              className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Why Take This Course */}
      <div className="w-full bg-red-600 text-white mt-16 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Why Take This Course</h2>
          <ul className="list-disc list-inside space-y-2">
            {course.reasons.map((reason, i) => (
              <li key={i}>{reason}</li>
            ))}
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
