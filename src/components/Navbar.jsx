import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", iconClass: "fas fa-home", label: "Home" },
  { to: "/resume", iconClass: "fas fa-file-alt", label: "Resume" },
  { to: "/portfolio", iconClass: "fas fa-briefcase", label: "Portfolio" },
  { to: "/contact", iconClass: "fas fa-envelope", label: "Contact" },
];

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(
    window.innerWidth >= 768
  );

  useEffect(() => {
    const handleResize = () => setIsNavbarVisible(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsNavbarVisible(false);
    }
  };

  return (
    <>
      <button
        className="sm:hidden fixed top-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg z-50"
        onClick={() => setIsNavbarVisible(!isNavbarVisible)}
      >
        <i
          className={`fa-solid ${
            isNavbarVisible ? "fa-xmark" : "fa-bars"
          } text-lg`}
        ></i>
      </button>

      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-gray-300 shadow-lg z-40 transition-transform transform ${
          isNavbarVisible ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:flex sm:items-center sm:justify-center`}
      >
        <nav className="w-full flex flex-col items-center justify-center h-full">
          <div className="w-12 h-1 bg-blue-500 rounded-full mb-6"></div>

          <ul className="space-y-6">
            {navLinks.map(({ to, iconClass, label }) => (
              <li key={to} className="text-center">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-5 py-2.5 w-40 rounded-lg transition-all text-base font-medium 
                    ${
                      isActive
                        ? "bg-blue-500 text-white shadow-md scale-105"
                        : "hover:bg-gray-800 hover:text-blue-400"
                    }`
                  }
                  onClick={handleLinkClick}
                >
                  <i className={`${iconClass} text-lg`}></i>
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="w-12 h-1 bg-blue-500 rounded-full mt-6"></div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
