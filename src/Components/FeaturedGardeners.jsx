import React, { use } from "react";
import { useLoaderData } from "react-router";
import FeaturedGardenersCard from "./FeaturedGardenersCard";
import { AuthContext } from "../Context/AuthContext";

const FeaturedGardeners = () => {
  const { theme } = use(AuthContext);
  const gardenersProfile = useLoaderData();

  return (
    <div className="mt-20 max-w-7xl mx-auto ">
      <h1
        className={`text-4xl font-bold text-center mb-8 transition duration-1000 ${
          theme === "dark" ? "text-white " : "text-primary"
        }`}
      >
        Featured Gardeners
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {gardenersProfile.map((profile) => (
          <FeaturedGardenersCard
            key={profile._id}
            profile={profile}
          ></FeaturedGardenersCard>
        ))}
      </section>
    </div>
  );
};

export default FeaturedGardeners;
