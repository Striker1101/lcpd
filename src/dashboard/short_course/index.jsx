import React, { useEffect, useState } from "react";
import DashboardLayout from "../../component/DashboardLayout";
import general from "../../Utils/general.json";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ShortIndex() {
  const url = general.backend_url;
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/short_course`)
      .then((res) => {
        setCourses(res.data); // ensure you're accessing .data
      })
      .catch((err) => {
        console.error("Failed to fetch courses", err);
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await axios.delete(`${url}/short_course/${id}`);
        setCourses((prev) => prev.filter((course) => course.id !== id));
      } catch (err) {
        console.error("Delete failed", err);
      }
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Short Courses</h2>
          <Link
            to="/dashboard/short_course/create"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Create
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Duration</th>
                <th className="px-4 py-2 border">Level</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.length > 0 ? (
                courses.map((course, index) => (
                  <tr key={course.id} className="border-t">
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">{course.card_title}</td>
                    <td className="px-4 py-2 border">{course.duration}</td>
                    <td className="px-4 py-2 border">{course.level_text}</td>
                    <td className="px-4 py-2 border flex gap-3">
                      <Link
                        to={`/dashboard/short_course/edit/${course.id}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(course.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No courses found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
