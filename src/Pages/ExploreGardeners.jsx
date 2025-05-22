import React, { use } from "react";
import { useLoaderData } from "react-router";
import ExploreGardenersCard from "../Components/ExploreGardenersCard";
import { AuthContext } from "../Context/AuthContext";

const ExploreGardeners = () => {
  const { theme } = use(AuthContext);
  const allGardeners = useLoaderData();
  // console.log(allGardeners);
  return (
    <div
      className={` py-10 transition duration-1000 ${
        theme === "dark" ? "bg-gray-950" : "bg-green-50"
      }`}
    >
      <div className="max-w-5xl mx-auto my-20 ">
        <h1
          className={`text-4xl font-bold text-center mb-8 transition duration-1000 ${
            theme === "dark" ? "text-white " : "text-green-700"
          }`}
        >
          Know The Gardeners
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allGardeners.map((gardener) => (
            <ExploreGardenersCard
              key={gardener._id}
              gardener={gardener}
            ></ExploreGardenersCard>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ExploreGardeners;
