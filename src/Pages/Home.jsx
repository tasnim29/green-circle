import React from "react";
import Banner from "../Components/Banner";
import FeaturedGardeners from "../Components/FeaturedGardeners";
import TrendingTips from "../Components/TrendingTips";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedGardeners></FeaturedGardeners>
      <TrendingTips></TrendingTips>
    </div>
  );
};

export default Home;
