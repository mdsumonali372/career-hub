import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
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
        // loader: () => fetch("job.json"),
      },
      {
        path: "featuredJobDetails/:jobId",
        element: <FeaturedJobDetails></FeaturedJobDetails>,
        loader: () => fetch("job.json"),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
