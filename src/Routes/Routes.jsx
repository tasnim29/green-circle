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
import UpdateTip from "../Pages/UpdateTip";
import ExploreGardeners from "../Pages/ExploreGardeners";
import Loader from "../Components/Loader";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loader></Loader>,
        loader: () =>
          fetch("https://assignment-10-server-five-iota.vercel.app/activeG"),
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
        hydrateFallbackElement: <Loader></Loader>,
        loader: () =>
          fetch("https://assignment-10-server-five-iota.vercel.app/shareTip"),
        Component: BrowseTips,
      },
      {
        path: "/tipDetails/:id",
        hydrateFallbackElement: <Loader></Loader>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-five-iota.vercel.app/shareTip/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <TipDetailsPage></TipDetailsPage>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myTips/:email",
        hydrateFallbackElement: <Loader></Loader>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-five-iota.vercel.app/shareTipAll/${params.email}`
          ),
        element: (
          <PrivateRoutes>
            <MyTips></MyTips>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateTip/:id",
        hydrateFallbackElement: <Loader></Loader>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-five-iota.vercel.app/shareTip/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <UpdateTip></UpdateTip>
          </PrivateRoutes>
        ),
      },
      {
        path: "/exploreGardeners",
        hydrateFallbackElement: <Loader></Loader>,
        loader: () =>
          fetch(
            "https://assignment-10-server-five-iota.vercel.app/allGardeners"
          ),
        Component: ExploreGardeners,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);
