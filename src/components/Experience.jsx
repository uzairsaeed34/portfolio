import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-5 md:py-10"
    >
      <div className="max-w-[1000px] mx-auto px-8">
        <h2 className="text-4xl font-bold inline border-b-4 border-pink-600 mb-8">
          Experience
        </h2>
        <div className="p-6">
          <h3 className="text-3xl font-semibold ">React JS Intern</h3>
          <p className="mt-2 font-semibold">IIFA Tech Software Company</p>
          <p className="mt-2 font-semibold">May 2023 - August 2023</p>
          <p className="mt-5 font-medium">
            During my internship at IIFA Tech Software Company, I had the
            opportunity to work extensively with React JS to develop and
            optimize various web applications. My primary responsibilities
            included creating responsive and dynamic user interfaces,
            collaborating closely with both frontend and backend teams to ensure
            seamless integration of APIs, and enhancing the performance of
            existing applications through code refactoring and best practices.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>
              Developed reusable React components to streamline the development
              process.
            </li>
            <li>
              Collaborated with a team of designers and developers to implement
              intuitive and user-friendly UI/UX designs.
            </li>
            <li>
              Improved application performance by identifying and refactoring
              inefficient code.
            </li>
            <li>
              Worked closely with backend developers to integrate APIs and
              manage state effectively.
            </li>
          </ul>
          <p className="mt-5 font-medium">
            This internship allowed me to deepen my understanding of React JS
            and its ecosystem, and equipped me with practical experience in
            building scalable, high-performance web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
