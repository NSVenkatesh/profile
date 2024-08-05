import React from "react";
import TypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900 p-6">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Hi, I am Venkatesh
        </h1>
        <TypingEffect
          text={["I am a Web Developer"]}
          speed={100}
          eraseDelay={1000}
          typingDelay={500}
          className="text-xl sm:text-2xl font-medium mb-6 text-gray-600"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        />
        <Link
          to="/portfolio"
          className="inline-block px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          View My Works
        </Link>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://github.com/NSVenkatesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl text-gray-800 hover:text-gray-600 transition duration-300"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/venkatesh-n-s-19a12a207/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-2xl text-gray-800 hover:text-gray-600 transition duration-300"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
