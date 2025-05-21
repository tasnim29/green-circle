import React from "react";
import { useLoaderData } from "react-router";
import ExploreGardenersCard from "../Components/ExploreGardenersCard";

const ExploreGardeners = () => {
  const allGardeners = useLoaderData();
  // console.log(allGardeners);
  return (
    <div className="bg-green-50 py-10">
      <div className="max-w-5xl mx-auto my-20 ">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-5">
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
