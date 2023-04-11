import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const AppliedJobsData = ({ jobData }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
  } = jobData;

  return (
    <div className="border-2 border-[#E8E8E8] p-8 flex items-center mb-4 rounded-lg gap-4">
      <div className="w-1/4 h-full bg-[#F4F4F4] p-10 rounded-lg">
        <img className="w-3/4 h-28 mx-auto" src={company_logo} alt="" />
      </div>
      <div className="flex justify-between w-3/4">
        <div>
          <h3 className="text-2xl text-[#474747] font-extrabold">
            {job_title}
          </h3>
          <h4 className="text-2xl text-[#757575] font-semibold mt-2">
            {company_name}
          </h4>
          <div className="mt-4 mb-6">
            <button className="btn btn-outline btn-primary">
              {remote_or_onsite}
            </button>
            <button className="btn btn-outline btn-primary ml-4">
              {fulltime_or_parttime}
            </button>
          </div>
          <div className="flex items-center gap-3 ">
            {" "}
            <span>
              <MapPinIcon className="w-5 h-5 text-[#7E90FE]" />
            </span>
            <span>{location}</span>{" "}
            <span>
              <CurrencyDollarIcon className="w-5 h-5 text-[#7E90FE]" />
            </span>{" "}
            <span> {salary}</span>{" "}
          </div>
        </div>
        <div>
          <Link to={`/featuredJobDetails/${id}`}>
            <button className="btn btn-info mt-10 text-white font-extrabold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsData;
