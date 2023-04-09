import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import "./index.css";
import { jobLoader } from "./utilities/job";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: jobLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
