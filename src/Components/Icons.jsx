import React from "react";
import "../CSS/Icons.css";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
function Icons() {
  return (
    <div className="app">
      <NavLink to={"https://www.instagram.com/_bha_rti98/"}>
        <FaInstagram />
      </NavLink>
      <NavLink to={"https://github.com/Bharti152k2"}>
        <IoLogoGithub />
      </NavLink>
      <NavLink to={"https://www.instagram.com/_bha_rti98/"}>
        <FaLinkedinIn />
      </NavLink>
      <NavLink to={"https://www.instagram.com/_bha_rti98/"}>
        <MdOutlineEmail />
      </NavLink>
    </div>
  );
}

export default Icons;
