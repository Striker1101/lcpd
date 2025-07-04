import React from "react";
import {
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import general from "../Utils/general.json";
import axios from "axios";
import { toast } from "react-toastify";
export default function ContactUs({ showInfo = true }) {
  const url = general.backend_url;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(`${url}/users/contact_us`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Message sent successfully!");
      e.target.reset(); // optional: reset form after success
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Server error");
      } else if (error.request) {
        toast.error("No response from server");
      } else {
        toast.error("Error: " + error.message);
      }
    }
  };

  return (
    <section className="bg-white py-10 px-4 md:px-16">
      <div
        className={`max-w-7xl mx-auto grid gap-10 items-start ${
          showInfo ? "md:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {/* Contact Info */}
        {showInfo && (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-600 mb-6">
              Have questions about our programs or application process? Our
              admissions team is here to help.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="text-red-600 text-2xl">
                  <FontAwesomeIcon icon={faLocation} />
                </div>
                <p className="text-gray-700">{general.address}</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-red-600 text-2xl">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <p className="text-gray-700">{general.number_two}</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-red-600 text-2xl">
                  <FontAwesomeIcon icon={faMailBulk} />
                </div>
                <p className="text-gray-700">{general.global_email}</p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <div className="bg-gray-100 rounded-xl p-6 shadow-sm w-full">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Request Information
          </h4>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                required
                placeholder="First Name"
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <input
              type="text"
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <select
              required
              name="program"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="">Select Program</option>
              <option value="Kid's Coding ">Kid's Coding</option>
              <option value="netDigital Literacy and Technology working">
                Digital Literacy and Technology{" "}
              </option>
              <option value="Skills">Skills</option>
              <option value="AI / Machine Learning ">
                AI / Machine Learning{" "}
              </option>
              <option value="Python Programming">Python Programming</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Ethical Hacking">Ethical Hacking</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Data Science">Data Science</option>
              <option value="Networking">Networking</option>
              <option value="Comptia A+">Comptia A+</option>
              <option value="Animation">Animation</option>
              <option value="Oracle 12c ">Oracle 12c </option>
              <option value="Games">Games</option>
              <option value="Cisco">Cisco</option>
              <option value="Java">Java</option>
            </select>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
