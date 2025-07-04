import React from "react";
import one from "../assets/images/1.jpg";
import two from "../assets/images/2.jpg";
import three from "../assets/images/3.jpg";
import four from "../assets/images/4.jpg";
import general from "../Utils/general.json";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="text-gray-300 bg-gray-900">
      <div className="px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and About */}
          <div>
            <h5 className="mb-2 text-xl font-bold text-white">
              <i className="mr-1 text-red-500 fas fa-fire"></i> LCPD
            </h5>
            <p className="text-sm leading-relaxed">
              LCPD is focused on quality, impact, flexibility, and
              affordability—find out why people all over the world choose LCPD.
            </p>
            <div className="flex mt-4 space-x-4">
              <NavLink
                to={general.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="cursor-pointer bi bi-twitter hover:text-blue-500"></i>
              </NavLink>
              <NavLink
                to={general.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="cursor-pointer bi bi-facebook hover:text-blue-600"></i>
              </NavLink>
              <NavLink
                to={general.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="cursor-pointer bi bi-instagram hover:text-pink-500"></i>
              </NavLink>
              <NavLink
                to={general.tictok}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="cursor-pointer bi bi-tiktok hover:text-blue-700"></i>
              </NavLink>

              <NavLink
                to={general.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="cursor-pointer bi bi-youtube hover:text-blue-700"></i>
              </NavLink>

              <NavLink
                to={general.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="cursor-pointer bi bi-whatsapp hover:text-blue-700"></i>
              </NavLink>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h5 className="mb-3 text-lg font-semibold text-white">
              Our Services
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/partners" className="hover:text-white">
                  Partners
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-white">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" className="hover:text-white">
                  Courses
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-3 text-lg font-semibold text-white">
              Quick Links
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="hover:text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact_us" className="hover:text-white">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/about_us" className="hover:text-white">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h5 className="mb-3 text-lg font-semibold text-white">Gallery</h5>
            <div className="grid grid-cols-2 gap-2">
              <img
                src={one}
                alt="Gallery 1"
                className="object-cover w-full h-20 rounded-md"
              />
              <img
                src={two}
                alt="Gallery 2"
                className="object-cover w-full h-20 rounded-md"
              />
              <img
                src={three}
                alt="Gallery 3"
                className="object-cover w-full h-20 rounded-md"
              />
              <img
                src={four}
                alt="Gallery 4"
                className="object-cover w-full h-20 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} LCPD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
