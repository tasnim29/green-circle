import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const FeaturedGardenersCard = ({ profile }) => {
  const { theme } = use(AuthContext);
  // console.log(profile);
  const { name, age, image, info } = profile;
  return (
    <div>
      <div
        className={`flex flex-col justify-between h-full max-w-xs p-6 rounded-xl sm:px-12 bg-white mx-auto hover:scale-105 ${
          theme === "dark" ? "shadow-xl shadow-white" : "shadow-2xl"
        }`}
      >
        <img
          src={image}
          alt={name}
          className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-green-200"
        />
        <div className="text-center bg-green-900 text-white p-1 mt-2 rounded-lg">
          <h1>Active Gardeners</h1>
        </div>
        <div className="flex-grow flex flex-col justify-between mt-4">
          <div className="space-y-1 text-center">
            <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
            <p className="px-5 text-xs sm:text-sm text-gray-600">{info}</p>
            <p className="text-sm text-gray-700">Age: {age}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGardenersCard;
