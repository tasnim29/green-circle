import React, { use } from "react";
import DashHomeCards from "./TotalGardenersCard";
import TotalGardenersCard from "./TotalGardenersCard";
import TotalTipsCards from "./TotalTipsCards";
import ActiveGardenerCard from "./ActiveGardenerCard";
import EasyTips from "./EasyTips";
import { AuthContext } from "../../Context/AuthContext";
import { FcStatistics } from "react-icons/fc";

const DashBoard = () => {
  const { theme } = use(AuthContext);
  return (
    <div className="max-w-7xl">
      <h1
        className={`text-left max-w-5xl mx-auto mt-20 text-4xl font-bold flex items-center ${
          theme === "dark" ? "text-base-200" : "text-primary"
        }`}
      >
        <span>
          <FcStatistics size={32} />
        </span>
        Statistics
      </h1>
      {/* all four cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        <TotalGardenersCard></TotalGardenersCard>
        <TotalTipsCards></TotalTipsCards>
        <ActiveGardenerCard></ActiveGardenerCard>
        <EasyTips></EasyTips>
      </div>
    </div>
  );
};

export default DashBoard;
