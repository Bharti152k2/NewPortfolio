import React from "react";
import "../CSS/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

import Icons from "./Icons";
function Navbar({ links }) {
  return (
    <nav className="nav">
      <Link className="logo">B.S.</Link>
      <div className="links">
        {links.map((link, id) => {
          return (
            <NavLink
              key={id}
              to={`${link.toLowerCase() === "home" ? "/" : link.toLowerCase()}`}
            >
              {link}
            </NavLink>
          );
        })}
      </div>
      <Icons />
      {/* <button className="menu">
        <IoMenu />
      </button> */}
    </nav>
  );
}

export default Navbar;
