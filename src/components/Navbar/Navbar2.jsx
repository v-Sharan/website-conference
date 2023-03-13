import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = ({ nav, setNav }) => {
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex" onClick={() => setNav(!nav)}>
        <li className="p-4">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="p-4">
          <NavLink to="/committee">Committe</NavLink>
        </li>
        <li className="p-4">
          <NavLink to="/speakers">Speakers</NavLink>
        </li>
        <li className="p-4">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="p-4">
          <NavLink to="/registration-details">Registration Deatils</NavLink>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-400 bg-white ease-in-out duration-300"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          SEMINAR
        </h1>
        <li className="p-4 border-b border-gray-600">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="p-4 border-b border-gray-600">
          <NavLink to="/committee">Committe</NavLink>
        </li>
        <li className="p-4 border-b border-gray-600">
          <NavLink to="/speakers">Speakers</NavLink>
        </li>
        <li className="p-4 border-b border-gray-600">
          <NavLink to="/registration-details">Registration Deatils</NavLink>
        </li>
        <li className="p-4">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
