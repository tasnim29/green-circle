import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router";

const ActiveGardenerCard = () => {
  const [gardeners, setGardeners] = useState([]);
  useEffect(() => {
    fetch("https://green-circle-server.vercel.app/allGardeners")
      .then((res) => res.json())
      .then((data) => setGardeners(data));
  }, []);
  const activeGardeners = gardeners.filter(
    (gardener) => gardener.status === "active"
  );
  return (
    <div className="bg-secondary text-white p-6 rounded-md shadow-md flex flex-col justify-between relative mt-8">
      <div className="text-sm font-medium">Active Gardeners </div>
      <div className="text-4xl font-bold mt-2">
        <CountUp end={activeGardeners.length} duration={30} />
      </div>
      <div className="text-sm opacity-75 mt-1">
        These are our active gardeners registered
      </div>
    </div>
  );
};

export default ActiveGardenerCard;
