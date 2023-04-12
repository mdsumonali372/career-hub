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
    <div className="border-2 border-[#E8E8E8] p-8 md:flex items-center mb-4 rounded-lg gap-4">
      <div className=" md:w-1/4 md:h-full bg-[#F4F4F4] p-10 rounded-lg">
        <img className="md:w-3/4 md:h-28 mx-auto" src={company_logo} alt="" />
      </div>
      <div className="md:flex justify-between md:w-3/4">
        <div>
          <h3 className="md:text-2xl text-[#474747] font-extrabold mt-3 md:mt-0">
            {job_title}
          </h3>
          <h4 className="text-2xl text-[#757575] font-semibold mt-2">
            {company_name}
          </h4>
          <div className="mt-4 mb-6">
            <button className="btn btn-outline btn-primary">
              {remote_or_onsite}
            </button>
            <button className="btn btn-outline btn-primary mt-2 md:mt-0 md:ml-4">
              {fulltime_or_parttime}
            </button>
          </div>
          <div className="md:flex items-center gap-3 ">
            {" "}
            <div className="flex items-center gap-2">
              <span>
                <MapPinIcon className="w-3 h-3 md:w-5 md:h-5 text-[#7E90FE]" />
              </span>
              <span className="text-[10px] md:text-xl">{location}</span>{" "}
            </div>
            <div className="flex items-center gap-2">
              <span>
                <CurrencyDollarIcon className="w-3 h-3 md:w-5 md:h-5 text-[#7E90FE]" />
              </span>{" "}
              <span className="text-[10px] md:text-xl"> {salary}</span>{" "}
            </div>
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
