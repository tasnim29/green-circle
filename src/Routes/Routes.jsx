import { createBrowserRouter } from "react-router";

import React from "react";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/activeG"),
        Component: Home,
      },
      {},
    ],
  },
]);
