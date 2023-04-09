import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const naviGation = useNavigation();
  const [open, setOpen] = useState(false);
  return (
    <nav className="px-14 bg-[#f9f9ff]">
      <div className="md:flex justify-between items-center py-4">
        <div className=" flex md:flex-none items-center justify-between">
          <Link to="/" className="text-3xl font-bold">
            SumonTech
          </Link>
          <div
            className="md:hidden flex md:flex-none justify-end items-center"
            onClick={() => setOpen(!open)}
          >
            <span>
              {open === true ? (
                <XMarkIcon className="h-6 w-6 text-black" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-black" />
              )}
            </span>
          </div>
        </div>
        <div
          className={`flex md:flex-row flex-col justify-around items-center text-xl w-1/2 mt-5 md:mt-0 ${
            open ? "ml-0 w-1/2" : "-ml-96"
          }`}
        >
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="statistics">Statistics</ActiveLink>
          <ActiveLink to="appliedJobs">Applied Jobs</ActiveLink>
          <ActiveLink to="blog">Blog</ActiveLink>
          <button className="btn bg-[#8885fe] border-0">Star Applying</button>
        </div>
      </div>
      <div>{naviGation.state === "loading" ? "Loading..." : ""}</div>
    </nav>
  );
};

export default Header;
