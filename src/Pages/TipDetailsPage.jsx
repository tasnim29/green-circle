import React from "react";
import { useLoaderData } from "react-router";

const TipDetailsPage = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>tip details page</div>;
};

export default TipDetailsPage;
