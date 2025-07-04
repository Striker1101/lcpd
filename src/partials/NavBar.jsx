import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo_full from "../assets/images/logo_full.jpeg";
import general from "../Utils/general.json";
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
    <header className="sticky top-0 z-50 bg-white shadow">
      {/* Top Contact Bar */}
      <div className="items-center justify-between hidden px-6 py-2 text-sm text-gray-700 bg-gray-100 md:flex">
        <div className="space-y-0.5">
          <p>{general.number_one}</p>
          <p>{general.global_email}</p>
          <p>{general.address}</p>
        </div>
        <div className="flex space-x-4 text-lg">
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

      {/* Main Nav */}
      <nav className="px-4 py-3 md:px-6">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img src={logo_full} alt="LCPD Logo" className="w-auto h-10" />
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
          <ul className="hidden space-x-6 font-medium text-gray-800 md:flex">
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
          <ul className="flex flex-col mt-4 space-y-3 font-medium text-gray-700 md:hidden">
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
