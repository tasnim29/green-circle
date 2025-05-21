import React, { use } from "react";
const tipsPromise = fetch("http://localhost:3000/shareTrendingTip").then(
  (res) => res.json()
);

const TrendingTips = () => {
  const trendingTips = use(tipsPromise);
  console.log(trendingTips);
  return (
    <div className="my-20 py-16 bg-green-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800">Top Trending Tips</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {trendingTips.map((tip, index) => (
          <div className="bg-white p-6 rounded-xl text-center shadow-lg relative">
            <div className="w-12 h-12 bg-green-600 text-white font-bold rounded-full flex items-center justify-center absolute -top-6 left-1/2 transform -translate-x-1/2">
              {index + 1}
            </div>
            <div className="mt-8 mb-4">
              <img
                src={tip.image}
                className="mx-auto w-36 h-36 rounded-2xl bg-gray-800 p-2 "
                alt={tip.name}
              />
            </div>
            <h3 className="text-lg font-bold text-green-800">{tip.name}</h3>
            <p className="text-gray-600 mt-2">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTips;
