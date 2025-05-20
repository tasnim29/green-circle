import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/gardenLogo.jpg";

const Navbar = () => {
  const links = (
    <>
      <li className=" font-semibold text-xl text-green-600 bg-white rounded-xl">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold text-xl text-green-600 bg-white rounded-xl">
        <NavLink to="/profile">Explore Gardeners</NavLink>
      </li>
      <li className="font-semibold text-xl text-green-600 bg-white rounded-xl">
        <NavLink to="/blog">Browse Tips</NavLink>
      </li>
      <li className="font-semibold text-xl text-green-600 bg-white rounded-xl">
        <NavLink to="/blog"> Share a Garden Tip</NavLink>
      </li>
      <li className="font-semibold text-xl text-green-600 bg-white rounded-xl">
        <NavLink to="/blog"> My Tips</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-green-900 shadow-md px-4 lg:px-20">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-100 rounded-box w-52 text-green-900"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src={logo} alt="Logo" />
          <span className="text-white font-bold text-xl tracking-wide">
            Green Circle
          </span>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2">
        <button className="btn btn-sm bg-green-600 text-white hover:bg-green-700">
          Sign In
        </button>
        <button className="btn btn-sm bg-white text-green-700 border-green-500 hover:bg-green-100">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
