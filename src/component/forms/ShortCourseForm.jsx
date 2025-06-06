import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import general from "../../Utils/general.json";

export default function ShortCourseForm({ course, isUpdate }) {
  const url = general.backend_url;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    img: null,
    imgPreview: "",
    card_title: "",
    duration: "",
    learn: "",
    option: "",
    credit: "",
    card_link: "",
    title: "",
    slug: "",
    content: "",
    link: "",
    level: "",
    level_text: "",
    rate: "",
    rate_text: "",
    duration_text: "",
    learn_one: "",
    learn_two: "",
    learn_three: "",
    learn_four: "",
    skills: [],
    reasons: [],
    reasons_link: "",
  });

  useEffect(() => {
    if (isUpdate && course) {
      setFormData((prev) => ({
        ...prev,
        ...course,
        img: null,
        imgPreview: course.img ? `${url}${course.img}` : "",
        skills: course.skills || [],
        reasons: course.reasons || [],
      }));
    }
  }, [course, isUpdate, url]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (e, key) => {
    const arr = e.target.value.split(",").map((s) => s.trim());
    setFormData((prev) => ({ ...prev, [key]: arr }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        img: file,
        imgPreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      if (key === "imgPreview") continue;
      if (Array.isArray(formData[key])) {
        data.append(key, JSON.stringify(formData[key]));
      } else if (formData[key] !== null) {
        data.append(key, formData[key]);
      }
    }

    try {
      if (isUpdate) {
        await axios.put(`${url}/short_course/${course.id}`, data);
      } else {
        await axios.post(`${url}/short_course`, data);
      }
      navigate("/dashboard/short_course/index");
    } catch (err) {
      console.error("Submit failed", err);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">
        {isUpdate ? "Update" : "Create"} Short Course
      </h2>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Image Upload */}
        <div className="col-span-1 md:col-span-2">
          {formData.imgPreview && (
            <img
              src={formData.imgPreview}
              alt="Preview"
              className="w-40 h-40 object-cover rounded mb-2"
            />
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {/* Text Inputs */}
        {[
          "card_title",
          "duration",
          "learn",
          "option",
          "credit",
          "card_link",
          "title",
          "slug",
          "content",
          "link",
          "level",
          "level_text",
          "rate",
          "rate_text",
          "duration_text",
          "learn_one",
          "learn_two",
          "learn_three",
          "learn_four",
          "reasons_link",
        ].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.replace("_", " ")}
            className="border p-2 rounded"
          />
        ))}

        {/* Array Inputs */}
        <textarea
          name="skills"
          value={
            Array.isArray(formData.skills)
              ? formData.skills.join(", ")
              : formData.skills
          }
          onChange={(e) => handleArrayChange(e, "skills")}
          placeholder="Skills (comma separated)"
          className="border p-2 rounded col-span-1 md:col-span-2"
        />
        <textarea
          name="reasons"
          value={
            Array.isArray(formData.skills)
              ? formData.reasons.join(", ")
              : formData.reasons
          }
          onChange={(e) => handleArrayChange(e, "reasons")}
          placeholder="Reasons (comma separated)"
          className="border p-2 rounded col-span-1 md:col-span-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded col-span-1 md:col-span-2"
        >
          {isUpdate ? "Update" : "Create"} Course
        </button>
      </form>
    </div>
  );
}
