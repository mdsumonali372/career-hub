import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Toaster />
    </div>
  );
};

export default Home;
