import React from "react";
import errorGif from "../assets/404-error-404.gif";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <div className="text-center space-y-5 my-20 bg-white rounded-xl">
          <img className="mx-auto" src={errorGif} alt="" />

          <p className="text-gray-500 text-xl">
            Oops!!The page you are trying to navigate does not exist
          </p>
          <Link to="/">
            <button className="py-3 px-8 cursor-pointer hover:scale-105 bg-green-600 text-white ">
              Go to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
