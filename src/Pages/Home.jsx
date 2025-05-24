import React, { useState } from "react";
import Banner from "../Components/Banner";
import FeaturedGardeners from "../Components/FeaturedGardeners";
import TrendingTips from "../Components/TrendingTips";

import ClientOpinion from "../Components/ClientOpinion";
import LoveAble from "../Components/LoveAble";
import Loader from "../Components/Loader";

const Home = () => {
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 300);
  if (load) return <Loader></Loader>;
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
