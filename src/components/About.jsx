import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-4xl font-bold flex items-center justify-center">
            <p>Hi, I'm Uzair, nice to meet you. Please take a look around</p>
          </div>
          <div className="flex items-center justify-center sm:text-1xl">
            <p>
              I am a passionate and creative Front-End React Developer and
              Prompt Engineer with a strong background in web development and a
              growing expertise in Natural Language Processing (NLP). I’m
              dedicated to building user-friendly, responsive, and visually
              engaging web experiences while also working on cutting-edge AI
              technologies to enhance the performance of language models.
              Throughout my career, I've had the privilege of working on a range
              of exciting projects — from crafting responsive e-commerce
              websites and interactive web applications to designing and
              optimizing AI prompts for real-world applications. My role as a
              Prompt Engineer allows me to experiment with large language
              models, refine NLP strategies, and collaborate with
              cross-functional teams to integrate intelligent solutions into
              digital workflows. I’m constantly learning, evolving, and pushing
              boundaries at the intersection of front-end development and AI
              innovation — with a goal to create smarter, seamless user
              experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
