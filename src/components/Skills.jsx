import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Reactimg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import SCSS from "../assets/scss.jpeg";

const Skills = () => {
  const tech = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: Reactimg,
      title: "React",
      style: "shadow-cyan-600",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: GitHub,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: Node,
      title: "Node JS",
      style: "shadow-green-300",
    },
    {
      id: 8,
      src: Mongo,
      title: "Mongo DB",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: SCSS,
      title: "SCSS",
      style: "shadow-pink-500",
    },
  ];
  return (
    <div name="skills" className="w-full bg-[#0a192f] text-gray-300 pt-10">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img className="w-20 mx-auto" src={src} alt={title} />
              <p className="mt-4 text-lg">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
