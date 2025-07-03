import React from "react";
import one from "../assets/images/1.jpg";
import two from "../assets/images/2.jpg";
import three from "../assets/images/3.jpg";
import four from "../assets/images/4.jpg";
import general from "../Utils/general.json";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <h5 className="text-xl font-bold text-white mb-2">
              <i className="fas fa-fire text-red-500 mr-1"></i> LCPD
            </h5>
            <p className="text-sm leading-relaxed">
              LCPD is focused on quality, impact, flexibility, and
              affordability—find out why people all over the world choose LCPD.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href={general.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter hover:text-blue-500 cursor-pointer"></i>
              </a>
              <a
                href={general.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook hover:text-blue-600 cursor-pointer"></i>
              </a>
              <a
                href={general.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram hover:text-pink-500 cursor-pointer"></i>
              </a>
              <a
                href={general.tictok}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-tiktok hover:text-blue-700 cursor-pointer"></i>
              </a>

              <a
                href={general.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-youtube hover:text-blue-700 cursor-pointer"></i>
              </a>

              <a
                href={general.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp hover:text-blue-700 cursor-pointer"></i>
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">
              Our Services
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/partners" className="hover:text-white">
                  Partners
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-white">
                  Courses
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/contact_us" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/about_us" className="hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Gallery</h5>
            <div className="grid grid-cols-2 gap-2">
              <img
                src={one}
                alt="Gallery 1"
                className="w-full h-20 object-cover rounded-md"
              />
              <img
                src={two}
                alt="Gallery 2"
                className="w-full h-20 object-cover rounded-md"
              />
              <img
                src={three}
                alt="Gallery 3"
                className="w-full h-20 object-cover rounded-md"
              />
              <img
                src={four}
                alt="Gallery 4"
                className="w-full h-20 object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} LCPD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
