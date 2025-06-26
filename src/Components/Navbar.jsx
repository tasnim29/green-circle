import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";

import { AuthContext } from "../Context/AuthContext";
import DarkMode from "./DarkMode";
import Logo from "../Shared/Logo/Logo";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [showLogout, setShowLogout] = useState(false);

  const handleSignout = () => {
    signOutUser();
  };
  const links = (
    <>
      <li className="font-semibold text-sm text-base-200 rounded-xl">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold text-sm text-base-200 rounded-xl">
        <NavLink to="/exploreGardeners">Explore Gardeners</NavLink>
      </li>
      <li className="font-semibold text-sm text-base-200 rounded-xl">
        <NavLink to="/browseTips">Browse Tips</NavLink>
      </li>

      {user && (
        <li className="font-semibold text-sm text-base-200 rounded-xl">
          <NavLink to="/dashBoard"> DashBoard</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="w-full fixed top-0 z-50">
      <div className="navbar bg-primary shadow-md px-4 lg:px-20 max-w-7xl mx-auto rounded-md">
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
              className="menu bg-accent menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div>
            <Logo></Logo>
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2">
          {user ? (
            <div className="space-x-4 ">
              <div
                className="avatar tooltip tooltip-left cursor-pointer relative"
                data-tip={user.displayName}
                onClick={() => setShowLogout(!showLogout)}
              >
                <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring-2 ring-offset-2">
                  <img src={user.photoURL} />
                </div>

                {showLogout && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50">
                    <button
                      onClick={handleSignout}
                      className="btn btn-sm bg-green-600 text-white hover:bg-green-700 shadow-lg"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="space-x-3">
              <Link
                to="/login"
                className="px-4 py-2 border border-white text-base-200 rounded-md hover:bg-base-200 hover:text-primary hover:border-white transition duration-200"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-base-200 text-primary border  rounded-md transition duration-200"
              >
                Sign Up
              </Link>
            </div>
          )}
          <div>
            <DarkMode></DarkMode>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
