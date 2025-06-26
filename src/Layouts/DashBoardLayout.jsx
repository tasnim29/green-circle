import React, { use } from "react";
import { NavLink, Outlet } from "react-router";
import Logo from "../Shared/Logo/Logo";
import { AuthContext } from "../Context/AuthContext";
import DashNav from "../Pages/DashBoard/DashNav";
import DarkMode from "../Components/DarkMode";

const DashBoardLayout = () => {
  const { user, theme, signOutUser } = use(AuthContext);
  const handleLogout = () => {
    signOutUser();
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Page content here */}
        <div
          className={`navbar lg:px-24  w-full justify-between  shadow-sm ${
            theme === "dark" ? "bg-gray-950" : "bg-base-300 lg:bg-white"
          }`}
        >
          <div className="flex items-center gap-3">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <div className="flex flex-col">
              <h1
                className={`text-xl font-bold ${
                  theme === "dark" ? "text-base-200" : "text-primary "
                }`}
              >
                Welcome {user.displayName} 👋👋
              </h1>
              <p>Here's what's happening with the website</p>
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="flex items-center">
            <DashNav />
            <DarkMode></DarkMode>
          </div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 ">
          {/* Sidebar content here */}
          <div className="mx-auto">
            <Logo></Logo>
          </div>

          <div>
            <li className="font-semibold text-xl text-primary rounded-xl">
              <NavLink to="/dashBoard">DashBoard</NavLink>
            </li>
            {user && (
              <li className="font-semibold text-xl text-primary rounded-xl">
                <NavLink to="/dashBoard/shareTip"> Share a Garden Tip</NavLink>
              </li>
            )}
            {user && (
              <li className="font-semibold text-xl text-primary0 rounded-xl">
                <NavLink to="/dashBoard/myTips"> My Tips</NavLink>
              </li>
            )}
          </div>
          {/* logout button */}
          <div className="mt-auto">
            <button
              onClick={handleLogout}
              className="btn btn-accent w-full text-white font-semibold"
            >
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashBoardLayout;
