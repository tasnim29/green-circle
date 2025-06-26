import React from "react";

import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="libre-baskerville">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="pt-24 min-h-[calc(100vh-384px)]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
