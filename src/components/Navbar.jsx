import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (section) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
      closeMenu();
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
      closeMenu();
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
      navigate(location.pathname);
    }
    closeMenu();
  }, [location, location.state?.scrollTo, navigate]);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" style={{ width: "100px" }} />
        </Link>
      </div>
      <ul className="hidden md:flex">
        <li className="hover:text-pink-600 transition duration-300">
          <ScrollLink to="home" smooth={true} duration={500} offset={-80}>
            Home
          </ScrollLink>
        </li>
        <li className="hover:text-pink-600 transition duration-300">
          <ScrollLink to="about" smooth={true} duration={500} offset={-80}>
            About
          </ScrollLink>
        </li>
        <li className="hover:text-pink-600 transition duration-300">
          <ScrollLink to="skills" smooth={true} duration={500} offset={-80}>
            Skills
          </ScrollLink>
        </li>
        <li className="hover:text-pink-600 transition duration-300">
          <ScrollLink to="experience" smooth={true} duration={500} offset={-80}>
            Experience
          </ScrollLink>
        </li>
        <li className="hover:text-pink-600 transition duration-300">
          <ScrollLink to="work" smooth={true} duration={500} offset={-80}>
            Projects
          </ScrollLink>
        </li>
        <li className="hover:text-pink-600 transition duration-300">
          <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
            Contact
          </ScrollLink>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={`absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-transform duration-300 ${
          nav ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <li className="py-6 text-4xl hover:text-pink-600 transition duration-300">
          <ScrollLink
            onClick={() => handleNavClick("home")}
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Home
          </ScrollLink>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 transition duration-300">
          <ScrollLink
            onClick={() => handleNavClick("about")}
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
          >
            About
          </ScrollLink>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 transition duration-300">
          <ScrollLink
            onClick={() => handleNavClick("skills")}
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Skills
          </ScrollLink>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 transition duration-300">
          <ScrollLink
            onClick={() => handleNavClick("experience")}
            to="experience"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Experience
          </ScrollLink>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 transition duration-300">
          <ScrollLink
            onClick={() => handleNavClick("work")}
            to="work"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Projects
          </ScrollLink>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 transition duration-300">
          <ScrollLink
            onClick={() => handleNavClick("contact")}
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 hover:text-white transition duration-300"
              href="https://linkedin.com/in/uzαïr-šαεεd/"
              rel="noreferrer"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 hover:text-white transition duration-300"
              href="https://github.com/uzairsaeed34"
              rel="noreferrer"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300 hover:text-white transition duration-300"
              href="mailto:uzarsaeed34k@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300 hover:text-white transition duration-300"
              href="https://drive.google.com/file/d/1foXE9C8g1Xj-5ACmdla_g-Ys3nE4wMWY/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
