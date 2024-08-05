import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import image from "../images/logo11.png";

const navLinks = [
  { to: "/", iconClass: "fas fa-home", label: "Home" },
  { to: "/resume", iconClass: "fas fa-file-alt", label: "Resume" },
  { to: "/portfolio", iconClass: "fas fa-briefcase", label: "Portfolio" },
  { to: "/contact", iconClass: "fas fa-envelope", label: "Contact" },
];

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 650) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth < 650) {
      setIsNavbarVisible(false);
    }
  };

  return (
    <>
      <button
        className="sm:hidden fixed top-4 right-4 bg-gray-800 text-white py-2 px-4 rounded z-50"
        onClick={() => setIsNavbarVisible(!isNavbarVisible)}
      >
        {isNavbarVisible ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </button>
      <div
        className={`fixed top-0 left-0 w-full sm:w-64 bg-gray-900 px-5 py-5 text-gray-300 z-40 transition-transform transform ${
          isNavbarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ height: "100vh" }} // Full height for the navbar
      >
        <div className="mb-8 overflow-hidden text-center">
          <NavLink to="/" onClick={handleLinkClick}>
            <img
              src={image}
              alt="logo"
              className="w-36 h-36 object-contain transform scale-110 rounded-full mx-auto"
            />
          </NavLink>
          <p className="mt-6 text-white">Venkatesh N S</p>
        </div>
        <nav className="nav-links">
          <ul className="space-y-3">
            {navLinks.map(({ to, iconClass, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded-lg ${
                      isActive
                        ? "bg-gray-800 text-blue-400"
                        : "hover:bg-gray-800"
                    }`
                  }
                  onClick={handleLinkClick}
                >
                  {({ isActive }) => (
                    <>
                      <i
                        className={`${iconClass} mr-3`}
                        style={{
                          color: isActive
                            ? "rgb(13, 110, 253)"
                            : "rgb(156, 163, 175)",
                        }}
                      ></i>
                      <p>{label}</p>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
