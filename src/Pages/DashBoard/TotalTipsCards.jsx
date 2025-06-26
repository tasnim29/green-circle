import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router";

const TotalTipsCards = () => {
  const [tips, setTips] = useState([]);
  useEffect(() => {
    fetch("https://green-circle-server.vercel.app/shareTip")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);
  return (
    <div>
      <div className="bg-primary text-white p-6 rounded-md shadow-md flex flex-col justify-between relative mt-8">
        <div className="text-sm font-medium">Total Tips</div>
        <div className="text-4xl font-bold mt-2">
          <CountUp end={tips.length} duration={30} />
        </div>
        <div className="text-sm opacity-75 mt-1">
          Total tips shared by the Gardeners
        </div>
        <Link
          to="/browseTips"
          className="absolute top-4 right-4 text-sm underline"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default TotalTipsCards;
