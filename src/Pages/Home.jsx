import React from "react";
import Banner from "../Components/Banner";
import FeaturedGardeners from "../Components/FeaturedGardeners";
import TrendingTips from "../Components/TrendingTips";
import GardeningFaq from "../Components/GardeningFaq";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedGardeners></FeaturedGardeners>
      <TrendingTips></TrendingTips>
      <GardeningFaq></GardeningFaq>
    </div>
  );
};

export default Home;
