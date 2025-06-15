import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo_full from "../assets/images/logo_full.png";
import general from "../Utils/general.json"
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const baseLink = "hover:text-blue-600";
  const activeLink = "text-red-600 underline";

  const menu = [
    { to: "/", label: "Home" },
    { to: "/programs", label: "Programs" },
    { to: "/university_pathway", label: "University Pathway" },
    { to: "/about_us", label: "About Us" },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-gray-100 text-sm text-gray-700">
        <div className="space-y-0.5">
          <p>{ general.number_one}</p>
          <p>{ general.global_email}</p>
          <p>{general.address}</p>
        </div>
        <div className="flex space-x-4 text-lg">
          <i className="bi bi-twitter hover:text-blue-500 cursor-pointer"></i>
          <i className="bi bi-facebook hover:text-blue-600 cursor-pointer"></i>
          <i className="bi bi-instagram hover:text-pink-500 cursor-pointer"></i>
          <i className="bi bi-linkedin hover:text-blue-700 cursor-pointer"></i>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="px-4 py-3 md:px-6">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <img src={logo_full} alt="LCPD Logo" className="h-10 w-auto" />
          </NavLink>

          {/* Toggle Button for Mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
            {menu.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? activeLink : baseLink
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <ul className="md:hidden mt-4 flex flex-col space-y-3 text-gray-700 font-medium">
            {menu.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? activeLink : baseLink
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
