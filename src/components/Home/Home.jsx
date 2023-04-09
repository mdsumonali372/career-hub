import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
