import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import htmlCertificate from "../certificates/HtmlCertificate.jpg";
import cssCertificate from "../certificates/CssCertificate.jpg";

const education = [
  {
    degree: "Master of Science in Computer Science",
    year: "2022 - 2024",
    college: "SRM Institute of Science and Technology, Chennai.",
    cgpa: "CGPA : 8.86",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    year: "2018 - 2021",
    college: "St. John's College, Tirunelveli.",
    cgpa: "CGPA : 8.54",
  },
];

const projects = [
  {
    title: "UG: Notes Management System Using PHP",
    duration: "Jan 2021 - May 2021",
    description:
      "The Notes Management System in PHP is a user-friendly application that simplifies academic note management. Users can easily upload, download, and organize course materials. Key features include secure user authentication and an intuitive interface for efficient file management, enhancing the learning experience by providing a centralized platform for accessing and sharing notes.",
    role: "Frontend Development",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    title: "PG: Brain Tumor Classification Using CNN",
    duration: "Dec 2023 - April 2024",
    description:
      "Developed a convolutional neural network (CNN) model to classify brain tumor images obtained from MRI scans. Implemented data preprocessing techniques and trained the model to accurately classify tumors into different categories. Achieved high accuracy in distinguishing various types of brain tumors, enhancing diagnostic capabilities.",
    role: "Full Development",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "NumPy",
      "Pandas",
    ],
  },
];

const skills = [
  { name: "HTML", percentage: 90 },
  { name: "CSS", percentage: 85 },
  { name: "JavaScript", percentage: 80 },
  { name: "Tailwind CSS", percentage: 75 },
  { name: "React.js", percentage: 70 },
  { name: "jQuery", percentage: 65 },
  { name: "Python", percentage: 75 },
];

const certifications = [
  {
    name: "HTML Certificate",
    provider: "LinkedIn Learning",
    image: htmlCertificate,
  },
  {
    name: "CSS Certificate",
    provider: "LinkedIn Learning",
    image: cssCertificate,
  },
];

function SkillBar({ name, percentage }) {
  const props = useSpring({
    from: { width: "0%" },
    to: { width: `${percentage}%` },
    config: { duration: 1000 },
  });

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-800">{name}</span>
        <span className="text-sm font-medium text-gray-800">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2.5">
        <animated.div
          className="bg-teal-500 h-2.5 rounded-full"
          style={props}
        />
      </div>
    </div>
  );
}

function Resume() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="m-5 p-5 bg-gray-50 shadow-lg rounded-xl">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Resume
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap gap-10 justify-center">
        <div className="w-full lg:w-1/2">
          <div className="p-6 shadow-md mb-10 bg-white rounded-xl border border-gray-200">
            <h3 className="text-2xl font-semibold mb-3 text-teal-700">About</h3>
            <h4 className="text-xl mb-3 text-teal-600">Venkatesh N S</h4>
            <p className="mb-5 text-gray-700">
              Hi there! I'm a recent graduate and front-end developer passionate
              about creating user-friendly web applications. My fascination with
              technology drives me to continuously learn and innovate. I'm
              excited to contribute my skills and creativity to build solutions
              that make a difference.
            </p>
          </div>

          <div className="p-6 shadow-md mb-10 bg-white rounded-xl border border-gray-200">
            <h3 className="text-2xl font-semibold mb-3 text-teal-700">
              Education
            </h3>
            {education.map(({ degree, year, college, cgpa }) => (
              <div className="mb-5" key={degree}>
                <h4 className="text-xl font-medium mb-1 text-teal-600">
                  {degree}
                </h4>
                <p className="text-sm text-gray-600 mb-1">{year}</p>
                <p className="text-gray-700 mb-1">{college}</p>
                <p className="text-sm text-gray-600">{cgpa}</p>
              </div>
            ))}
          </div>

          <div className="p-6 shadow-md bg-white rounded-xl border border-gray-200">
            <h3 className="text-2xl font-semibold mb-3 text-teal-700">
              Skills
            </h3>
            {skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="p-6 shadow-md mb-10 bg-white rounded-xl border border-gray-200">
            <h3 className="text-2xl font-semibold mb-3 text-teal-700">
              Academic Projects
            </h3>
            {projects.map(
              ({ title, duration, description, role, technologies }) => (
                <div className="mb-5" key={title}>
                  <h4 className="text-xl font-medium mb-1 text-teal-600">
                    {title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">{duration}</p>
                  <p className="text-gray-700 mb-1">{description}</p>
                  <p className="text-sm text-gray-600 mb-1">Role: {role}</p>
                  <p className="text-sm text-gray-600">
                    Technologies Used: {technologies.join(", ")}
                  </p>
                </div>
              )
            )}
          </div>

          <div className="p-6 shadow-md bg-white rounded-xl border border-gray-200">
            <h3 className="text-2xl font-semibold mb-3 text-teal-700">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-4">
              {certifications.map(({ name, provider, image }) => (
                <div
                  className="w-32 h-32 relative cursor-pointer"
                  key={name}
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg">
                    <p>{name}</p>
                    <p>{provider}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 shadow-md bg-white rounded-xl border border-gray-200 mt-10">
            <h3 className="text-2xl font-semibold mb-3 text-teal-700">
              View Full Resume
            </h3>
            <a
              href="https://drive.google.com/file/d/1r5QjDkfPLTHqATvNI003dI_1Cgiwip7u/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition duration-300"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-black text-3xl"
              onClick={handleClose}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected Certificate"
              className=" max-h-96 rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Resume;
