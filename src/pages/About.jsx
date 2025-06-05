import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section className="space-y-16">
      {/* Who We Are */}
      <div className="bg-red-600 text-white text-center px-6 py-12">
        <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
        <p className="max-w-4xl mx-auto leading-relaxed text-base">
          Lincoln Continuing Professional Development (LCPD) is a specialized
          branch of Lincoln University College, licensed by the National Board
          for Technical Education (NBTE) to offer Advanced Diploma Degree
          Certificates. We provide world-class education bridging technical
          training and academic advancement. Students receive a 2-year Advanced
          Diploma and can transfer credits to our affiliate universities in
          Nigeria or abroad for a 1-year BSc top-up with NYSC eligibility.
        </p>
      </div>

      {/* Academic Pathways */}
      <div className="bg-white text-gray-800 px-6 py-12 text-center shadow-sm">
        <h3 className="text-2xl font-bold mb-6">Our Academic Pathways</h3>
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <p className="mb-2">
              Graduates can transition to any of these top universities:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left list-disc list-inside">
              {[
                "Middlesex University, London",
                "South Bank University",
                "University of Sunderland – London",
                "University of Sunderland – Hong Kong",
                "Lincoln University College, Malaysia",
                "Alfa University College, Malaysia",
                "Lincoln College of Science, Management and Technology – NSUK, Nigeria",
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2">Available 2-Year Advanced Diploma Programs:</p>
            <ol className="list-decimal list-inside text-left grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Software Engineering",
                "Networking & Cybersecurity",
                "Multimedia / Product Design",
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          </div>

          <p className="italic text-sm text-gray-600">
            These programs prepare students for final-year direct entry into BSc
            programs abroad or locally.
          </p>
        </div>
      </div>

      {/* Short Courses */}
      <div className="bg-gray-50 text-gray-800 px-6 py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Certificate & Short-Term Courses
        </h3>
        <p className="max-w-3xl mx-auto mb-6 leading-relaxed">
          For professionals and learners looking to upskill, LCPD offers
          short-term courses (1–6 months) for Beginner to Advanced levels in
          high-demand areas.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
          {[
            "Digital Literacy and Technology Skills",
            "Artificial Intelligence (AI) & Machine Learning",
            "Python Programming",
            "Digital Marketing",
            "Ethical Hacking",
            "Java",
            "Cybersecurity",
            "Data Science",
            "Networking",
            "CompTIA A+",
            "Oracle 12c",
            "Cisco",
            "And more...",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <FaCheckCircle className="text-red-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
