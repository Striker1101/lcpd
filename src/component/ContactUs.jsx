import React from 'react'
import {
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ContactUs() {
  return (
    <section className="bg-white py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
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
              <p className="text-gray-700">Plot 678 Axis Plaza, Gudu, Abuja.</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-red-600 text-2xl">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <p className="text-gray-700">09048088823</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-red-600 text-2xl">
                <FontAwesomeIcon icon={faMailBulk} />
              </div>
              <p className="text-gray-700">info@example.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Request Information
          </h4>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <select className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600">
              <option value="">Select Program</option>
              <option value="software">Software Design</option>
              <option value="networking">Networking & Cyber Security</option>
              <option value="design">Multimedia & Product Design</option>
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
