import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const GardeningFaq = () => {
  const { theme } = use(AuthContext);
  return (
    <div>
      <h1
        className={`text-4xl font-bold text-center mb-8 transition duration-1000 ${
          theme === "dark" ? "text-white " : "text-green-700"
        }`}
      >
        ✅ Your Gardening FAQs
      </h1>
    </div>
  );
};

export default GardeningFaq;
