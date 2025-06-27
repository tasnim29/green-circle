import React from "react";
import errorAnimation from "../assets/error.json";
import { Link } from "react-router";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <div className="text-center space-y-5 my-20 bg-white rounded-xl">
          <div className="mx-auto mb-5" style={{ width: 450, height: 400 }}>
            <Lottie animationData={errorAnimation} loop={true} />
          </div>

          <p className="text-gray-500 text-xl">
            Oops!!The page you are trying to navigate does not exist
          </p>
          <Link to="/">
            <button className="btn btn-primary">Go to home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
