import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router";

const TotalGardenersCard = () => {
  const [gardeners, setGardeners] = useState([]);
  useEffect(() => {
    fetch("https://green-circle-server.vercel.app/allGardeners")
      .then((res) => res.json())
      .then((data) => setGardeners(data));
  }, []);

  return (
    <>
      {/* first card */}
      <div className="bg-purple-600 text-white p-6 rounded-md shadow-md flex flex-col justify-between relative mt-8">
        <div className="text-sm font-medium">Gardeners Available</div>
        <div className="text-4xl font-bold mt-2">
          <CountUp end={gardeners.length} duration={30} />
        </div>
        <div className="text-sm opacity-75 mt-1">
          These are the expert gardeners registered
        </div>
        <Link
          to="/exploreGardeners"
          className="absolute top-4 right-4 text-sm underline"
        >
          See All
        </Link>
      </div>
    </>
  );
};

export default TotalGardenersCard;
