import React from "react";
import { useLoaderData } from "react-router";
import FeaturedGardenersCard from "./FeaturedGardenersCard";

const FeaturedGardeners = () => {
  const gardenersProfile = useLoaderData();

  return (
    <div className="mt-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
        Featured Gardeners
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
