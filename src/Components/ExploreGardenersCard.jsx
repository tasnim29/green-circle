import React from "react";

const ExploreGardenersCard = ({ gardener }) => {
  //   console.log(gardener);
  const { name, age, gender, status, experience, image, info, sharedTips } =
    gardener;
  return (
    <div className="relative pt-12 max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-green-100 via-green-50 to-white border border-green-200 transition-transform hover:scale-105 duration-300">
      <figure className="flex justify-center -mt-10">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md"
        />
      </figure>
      <div className="p-5 text-green-900 text-center">
        <h2 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
          {status === "active" && (
            <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
          )}
          {name}
          <span
            className={`text-sm font-semibold px-2 py-1 rounded-full shadow ${
              status === "active"
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {status}
          </span>
        </h2>
        <p className="text-sm mb-2">{info}</p>
        <ul className="text-sm space-y-1 text-left">
          <li>
            <span className="text-lg font-bold">🌿 Age</span>: {age}
          </li>
          <li>
            <span className="text-lg font-bold">👤 Gender</span>: {gender}
          </li>
          <li>
            <span className="text-lg font-bold">🌱 Experience</span>:{" "}
            {experience} years
          </li>
          <li>
            <span className="text-lg font-bold">📋 Tips Shared</span>:{" "}
            {sharedTips}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExploreGardenersCard;
