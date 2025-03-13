import React from "react";
import TypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";
import logo1 from "../images/profile.webp";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f2f1] to-[#b2dfdb] text-gray-900 px-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Hi, I'm a <span className="text-teal-700">Web Developer</span>
          </h1>

          <TypingEffect
            text={[
              "Developing Interactive & Responsive Interfaces",
              "Building Scalable Web Applications",
            ]}
            speed={100}
            eraseDelay={1200}
            typingDelay={500}
            className="text-xl md:text-2xl font-medium text-gray-700 mt-3"
          />

          <div className="mt-6 flex space-x-4">
            <Link
              to="/portfolio"
              className="px-6 py-3 bg-teal-700 text-white font-semibold rounded-lg shadow-md hover:bg-teal-800 transition duration-300"
            >
              View Portfolio
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-teal-700 text-teal-700 font-semibold rounded-lg hover:bg-teal-700 hover:text-white transition duration-300"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-6 flex space-x-6">
            <a
              href="https://github.com/NSVenkatesh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-3xl text-gray-600 hover:text-teal-700 transition duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/venkatesh-n-s-19a12a207/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-3xl text-gray-600 hover:text-teal-700 transition duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="bg-white bg-opacity-95 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center border border-gray-300 hover:shadow-teal-500/50 transition duration-300">
          <img
            src={logo1}
            alt="Venkatesh"
            className="w-40 h-40 mx-auto object-cover rounded-full border-4 border-teal-600 shadow-md"
          />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">Venkatesh</h2>
          <p className="text-lg text-gray-600">{"<Frontend Developer />"}</p>
          <p className="text-gray-500 text-sm mt-2">
            Passionate about building interactive & user-friendly web
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
