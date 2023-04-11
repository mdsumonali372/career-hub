import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error/Error";
import FeaturedJobDetails from "./components/FeaturedJobDetails/FeaturedJobDetails";
import Home from "./components/Home/Home";
import MainBody from "./components/MainBody/MainBody";
import Statistics from "./components/Statistics/Statistics";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <MainBody></MainBody>,
      },
      {
        path: "featuredJobDetails/:jobId",
        element: <FeaturedJobDetails></FeaturedJobDetails>,
        loader: () => fetch("/job.json"),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/job.json"),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "footer",
        element: <Element></Element>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
