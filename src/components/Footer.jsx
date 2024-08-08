import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#0a192f] text-gray-300 py-6 pt-20 ">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col items-center mt-40">
        <div className="flex flex-col sm:flex-row justify-between w-full">
          <div className="mb-6 sm:mb-0">
            <h1 className="text-2xl font-bold text-pink-600">
              <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                Muhammad Uzair
              </span>
            </h1>
            <p className="text-gray-400">Frontend Developer</p>
          </div>
          <div className="flex space-x-6 items-center">
            <a
              href="https://github.com/uzairsaeed34"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} className="hover:text-pink-600" />
            </a>
            <a
              href="https://linkedin.com/in/uzαïr-šαεεd/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} className="hover:text-pink-600" />
            </a>
            <a
              href="mailto:uzarsaeed34k@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <FaEnvelope size={30} className="hover:text-pink-600" />
            </a>
            <a
              href="https://drive.google.com/file/d/1foXE9C8g1Xj-5ACmdla_g-Ys3nE4wMWY/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              <BsFillPersonLinesFill
                size={30}
                className="hover:text-pink-600"
              />
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>© 2024 Muhammad Uzair. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
