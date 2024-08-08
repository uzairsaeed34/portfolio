import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 pt-20"
    >
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold flex items-center justify-center">
            <p>Hi, I'm Uzair, nice to meet you. Please take a look around</p>
          </div>
          <div className="flex items-center justify-center sm:text-1xl">
            <p>
              Hello, I'm Uzair, a passionate and creative Front-End React
              Developer. I have a strong background in web development and a
              deep love for design. I am dedicated to creating user-friendly and
              visually appealing web experiences. Throughout my career, I've had
              the privilege of working on a variety of exciting projects, from
              building responsive e-commerce websites to developing interactive
              web applications. These experiences have allowed me to hone my
              skills and stay up-to-date with the latest front-end technologies
              and trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
