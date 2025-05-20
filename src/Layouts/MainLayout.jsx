import React from "react";

import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="merriweather">
      <Navbar></Navbar>
      <section>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
