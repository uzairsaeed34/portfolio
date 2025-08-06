import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#0a192f] text-gray-300  py-12"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Muhammad Uzair
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] ">
          I'm a{" "}
          <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl sm:text-7xl font-black">
            Frontend & Prompt Engineer
          </span>
          .
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a creative Frontend Developer with a passion for crafting visually
          appealing, highly responsive user interfaces using modern frameworks
          like React. In addition to web development, I work as a Prompt
          Engineer, designing and optimizing AI prompts to improve the
          performance and accuracy of natural language models. I enjoy building
          intelligent, interactive digital experiences that merge design,
          functionality, and AI innovation.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button
              className="font-bold text-black bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 group border-2 px-6 py-3 my-2 flex items-center 
             hover:bg-gradient-to-r hover:from-teal-600 hover:via-purple-600 hover:to-orange-600 
             hover:shadow-lg hover:shadow-orange-500/50 
             transition duration-300 ease-in-out"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
