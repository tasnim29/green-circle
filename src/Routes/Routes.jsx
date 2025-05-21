import { createBrowserRouter } from "react-router";

import React from "react";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ShareGardenTip from "../Pages/ShareGardenTip";
import PrivateRoutes from "../Private/PrivateRoutes";
import BrowseTips from "../Pages/BrowseTips";
import TipDetailsPage from "../Pages/TipDetailsPage";
import MyTips from "../Pages/MyTips";

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
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/shareTip",
        element: (
          <PrivateRoutes>
            <ShareGardenTip></ShareGardenTip>
          </PrivateRoutes>
        ),
      },
      {
        path: "/browseTips",
        loader: () => fetch("http://localhost:3000/shareTip"),
        Component: BrowseTips,
      },
      {
        path: "/tipDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/shareTip/${params.id}`),
        element: (
          <PrivateRoutes>
            <TipDetailsPage></TipDetailsPage>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myTips",
        loader: () => fetch("http://localhost:3000/shareTipAll"),
        element: (
          <PrivateRoutes>
            <MyTips></MyTips>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
