import React from "react";
import { Link, useNavigation } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const naviGation = useNavigation();
  return (
    <nav className="px-14 bg-[#f9f9ff]">
      <div className="md:flex justify-between items-center py-4">
        <div>
          <Link to="/" className="text-3xl font-bold">
            SumonTech
          </Link>
        </div>
        <div className="flex md:flex-row flex-col justify-around text-xl w-1/2">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="statistics">Statistics</ActiveLink>
          <ActiveLink to="appliedJobs">Applied Jobs</ActiveLink>
          <ActiveLink to="blog">Blog</ActiveLink>
        </div>
        <button className="btn bg-[#8885fe] border-0">Star Applying</button>
      </div>
      <div>{naviGation.state === "loading" ? "Loading..." : ""}</div>
    </nav>
  );
};

export default Header;
