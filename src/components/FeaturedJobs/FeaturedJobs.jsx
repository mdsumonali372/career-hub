import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";
const FeaturedJobs = ({ job }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
  } = job;
  return (
    <div className="border-2 border-[#E8E8E8] p-10">
      <img className="w-44 h-32" src={company_logo} alt="" />
      <h2 className="md:text-3xl text-[#474747] font-extrabold mt-8">
        {job_title}
      </h2>
      <p className="text-xl text-[#757575] font-semibold mt-2 mb-4">
        {company_name}
      </p>
      <div className="md:flex flex-wrap items-center">
        <button className="btn btn-outline btn-primary block">
          {remote_or_onsite}
        </button>
        <button className="btn btn-outline btn-primary md:ml-4 mt-2 md:mt-0 block">
          {fulltime_or_parttime}
        </button>
      </div>
      <address className="mt-6 md:flex gap-4">
        <span className="flex items-center gap-2 md:text-xl text-[#757575] font-semibold text-[12px]">
          <MapPinIcon className="w-3 h-3 md:w-5 md:h-5 text-[#757575]" />{" "}
          {location}
        </span>
        <span className="flex items-center gap-2 md:text-xl text-[#757575] font-semibold text-[12px]">
          <CurrencyDollarIcon className="w-3 h-3 md:w-5 md:h-5 text-[#757575]" />
          {salary}
        </span>
      </address>
      <Link to={`/featuredJobDetails/${id}`}>
        <button className="btn btn-info mt-10 text-white font-extrabold">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FeaturedJobs;
