import React from "react";
import Banner from "../Components/Banner";
import FeaturedGardeners from "../Components/FeaturedGardeners";
import TrendingTips from "../Components/TrendingTips";

import ClientOpinion from "../Components/ClientOpinion";
import LoveAble from "../Components/LoveAble";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedGardeners></FeaturedGardeners>
      <TrendingTips></TrendingTips>
      <ClientOpinion></ClientOpinion>
      <LoveAble></LoveAble>
    </div>
  );
};

export default Home;
