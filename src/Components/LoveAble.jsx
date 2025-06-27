import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import gardeners from "../assets/gardeners.jpg";
import CountUp from "react-countup";
import { FaCheckDouble } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import myAnimation from "../assets/gardenAnimation.json";
import Lottie from "lottie-react";

const LoveAble = () => {
  const { theme } = use(AuthContext);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1
        className={`text-4xl font-bold text-center mb-8 transition duration-1000 ${
          theme === "dark" ? "text-white " : "text-primary"
        }`}
      >
        <Typewriter
          words={["Why Gardeners Love Us 🌱"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={50}
          delaySpeed
        ></Typewriter>
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* left div */}
        <div className="relative w-full  shadow-lg rounded-xl overflow-hidden">
          <img
            className="w-full h-auto object-cover"
            src={gardeners}
            alt="Gardeners"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-green-900/80 text-white text-center px-6 py-4">
            <h1 className="text-xl md:text-2xl font-semibold">
              We have solutions for your garden 🌿
            </h1>
          </div>
        </div>

        {/* right div */}
        <div>
          <div className="mx-auto mb-5" style={{ width: 220, height: 200 }}>
            <Lottie animationData={myAnimation} loop={true} />
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div
              className={`cursor-pointer shadow-lg hover:bg-gray-300 bg-white p-5 text-center space-y-2 rounded-xl ${
                theme === "dark" ? "border-3 border-yellow-500" : ""
              }`}
            >
              <h2 className="text-3xl font-bold text-[#176AE5]">
                <CountUp end={95} duration={40} suffix="%" />
              </h2>
              <p
                className={`text-xl font-bold ${
                  theme === "dark" && "text-black"
                }`}
              >
                Plant Care Success Rate
              </p>
            </div>
            <div
              className={`cursor-pointer shadow-lg hover:bg-gray-300 bg-white p-5 text-center space-y-2 rounded-xl ${
                theme === "dark" ? "border-3 border-yellow-500" : ""
              }`}
            >
              <h2 className="text-3xl font-bold text-[#176AE5]">
                <CountUp end={600} duration={20} suffix="+" />
              </h2>
              <p
                className={`text-xl font-bold ${
                  theme === "dark" && "text-black"
                }`}
              >
                Gardening Events Hosted
              </p>
            </div>
          </div>
          <div>
            <p className="mt-6 flex gap-1 items-center text-gray-600 text-lg">
              <span>
                <FaCheckDouble />
              </span>
              <span>
                Empowering green thumbs with expert care and engaging events.
              </span>
            </p>
            <p className="mt-6 flex gap-1 items-center text-gray-600 text-lg">
              <span>
                <FaCheckDouble />
              </span>
              <span>
                Connecting local gardeners to share knowledge and grow together.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoveAble;
