import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full flex flex-col justify-center gap-6 items-center m:px-8 px-4 py-4 border-b border-b-[#d6e5f4]">
      <img
        className="rounded-lg w-[60pc]"
        src="https://www.rmkcet.ac.in/new_images/logo-inverse.png"
        alt="logo"
      />
      <div className="flex gap-7 text-[3vh]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-[#6469ff]" : ""} hover:text-[#6469ff]`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/committee"
          className={({ isActive }) =>
            `${isActive ? "text-[#6469ff]" : ""} hover:text-[#6469ff]`
          }
        >
          Committee
        </NavLink>
        <NavLink
          to="speakers"
          className={({ isActive }) =>
            `${isActive ? "text-[#6469ff]" : ""} hover:text-[#6469ff]`
          }
        >
          Speakers
        </NavLink>
        <NavLink
          to="registration-details"
          className={({ isActive }) =>
            `${isActive ? "text-[#6469ff]" : ""} hover:text-[#6469ff]`
          }
        >
          Registration Details
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            `${isActive ? "text-[#6469ff]" : ""} hover:text-[#6469ff]`
          }
        >
          About
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
