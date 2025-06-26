import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router";

const EasyTips = () => {
  const [tips, setTips] = useState([]);
  useEffect(() => {
    fetch("https://green-circle-server.vercel.app/shareTip")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);
  const easyTips = tips.filter((tip) => tip.difficulty === "Easy");
  return (
    <div>
      <div className="bg-accent text-white p-6 rounded-md shadow-md flex flex-col justify-between relative mt-8">
        <div className="text-sm font-medium">Easy Tips</div>
        <div className="text-4xl font-bold mt-2">
          {" "}
          <CountUp end={easyTips.length} duration={30} />
        </div>
        <div className="text-sm opacity-75 mt-1">
          These are the easiest tips shared by the gardeners
        </div>
      </div>
    </div>
  );
};

export default EasyTips;
