import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { GrLike } from "react-icons/gr";
import { FaRegComments } from "react-icons/fa";
import { Link } from "react-router";

const TrendingTips = () => {
  const { theme } = use(AuthContext);

  const [trendingTips, setTrendingTips] = useState([]);
  // console.log(trendingTips);
  useEffect(() => {
    fetch("https://green-circle-server.vercel.app/shareTrendingTip")
      .then((res) => res.json())
      .then((data) => setTrendingTips(data));
  }, []);
  return (
    <div
      className={`my-20 py-16  ${
        theme === "dark" ? "bg-gray-950" : "bg-green-50"
      }`}
    >
      <div className="text-center mb-12">
        <h2
          className={`text-4xl font-bold text-center mb-8 transition duration-1000 ${
            theme === "dark" ? "text-white " : "text-primary"
          }`}
        >
          Top Trending Tips
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto items-stretch">
        {trendingTips.map((tip, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-white p-6 rounded-xl text-center shadow-lg relative h-full"
          >
            <div>
              <div className="w-12 h-12 bg-green-600 text-white font-bold rounded-full flex items-center justify-center absolute -top-6 left-1/2 transform -translate-x-1/2">
                {index + 1}
              </div>
              <div className="mt-8 mb-4">
                <img
                  src={tip.image}
                  className="mx-auto w-36 h-36 rounded-2xl bg-gray-800 p-2"
                  alt={tip.name}
                />
              </div>
              <h3 className="text-lg font-bold text-green-800 dark:text-white">
                {tip.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {tip.description}
              </p>
            </div>

            <div className="flex justify-between items-center mt-5 px-2">
              <button className="flex items-center gap-1 text-green-700 dark:text-green-200 hover:text-green-900 transition">
                <GrLike size={20} />
                <span className="text-sm font-medium">{tip.totalLiked}</span>
              </button>

              <button className="flex items-center gap-1 text-gray-500 dark:text-gray-300 hover:text-gray-700 transition">
                <FaRegComments size={20} />
                <span className="text-sm font-medium">Comment</span>
              </button>
            </div>
            <div className="mt-5 ">
              <Link
                to={`/tipDetails/${tip._id}`}
                className="btn btn-primary w-full"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTips;
