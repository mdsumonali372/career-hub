import {
  BriefcaseIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
const FeaturedJobDetails = () => {
  const data = useLoaderData();
  //   console.log(data.jobs);
  const [details, setDeatils] = useState({});
  console.log(details);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
    location,
  } = details;
  console.log(location);
  const dynamic = useParams();
  const dynamicId = dynamic.jobId;
  useEffect(() => {
    const singleDetails = data.jobs?.find((dt) => dt.id == dynamicId);
    setDeatils(singleDetails);
  }, []);

  return (
    <div className="mb-10">
      <div className="bg-gradient-to-r from-[#f9f9ff] to-[#faf8ff] py-36">
        <h2 className="text-center text-3xl text-[#1A1919] font-extrabold">
          Job Details
        </h2>
      </div>
      <div className="px-14 mt-32 md:flex items-center gap-4">
        <div className="md:w-2/3">
          <p className="text-xl text-[#757575] font-medium">
            <span className="font-extrabold text-[#1A1919]">
              Job Description:
            </span>
            {job_description}
          </p>
          <p className="text-xl text-[#757575] font-medium mt-6">
            <span className="font-extrabold text-[#1A1919]">
              Job Responsibility:
            </span>
            {job_responsibility}
          </p>
          <h4 className="font-extrabold text-xl text-[#1A1919] mt-6">
            Educational Requirements:
          </h4>
          <p className="text-xl text-[#757575] font-medium mt-4">
            {educational_requirements}
          </p>
          <h4 className="font-extrabold text-xl text-[#1A1919] mt-6">
            Experiences:
          </h4>
          <p className="text-xl text-[#757575] font-medium mt-4">
            {experiences}
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#f3f2ff] to-[#f4f2ff] p-4 md:w-1/3 rounded-lg">
          <h4 className="text-xl text-[#1A1919] font-extrabold">Job Details</h4>
          <hr className="border-1 border-[#d3d1ff] mt-3" />
          <div>
            <p className="mt-4 text-[#757575] font-medium flex gap-1">
              <span>
                <CurrencyDollarIcon className="w-5 h-5 text-[#7E90FE]" />
              </span>
              <span className="text-[#474747] font-bold">Salary:</span>
              {salary}
              (Per Month)
            </p>
            <p className="mt-4 text-[#757575] font-medium flex gap-1">
              <span>
                <BriefcaseIcon className="w-5 h-5 text-[#7E90FE]" />
              </span>
              <span className="text-[#474747] font-bold">Job Title:</span>
              {job_title} (Per Month)
            </p>
          </div>
          <h4 className="text-xl text-[#1A1919] font-extrabold mt-8">
            Contact Information
          </h4>
          <hr className="border-1 border-[#d3d1ff] mt-3" />
          <div className="mt-4">
            <p className=" text-[#757575] font-medium flex gap-1">
              <span>
                <PhoneIcon className="w-5 h-5 text-[#7E90FE]" />
              </span>
              <span className="text-[#474747] font-bold">Phone:</span>
              {contact_information?.phone}
            </p>
            <p className="mt-4 text-[#757575] font-medium flex gap-1">
              <span>
                <EnvelopeIcon className="w-5 h-5 text-[#7E90FE]" />
              </span>
              <span className="text-[#474747] font-bold">Email:</span>
              {contact_information?.email}
            </p>
            <p className="mt-4 text-[#757575] font-medium flex gap-1">
              <span>
                <MapPinIcon className="w-5 h-5 text-[#7E90FE]" />
              </span>
              <span className="text-[#474747] font-bold">Address:</span>
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobDetails;
