import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobsData from "../AppliedJobsData/AppliedJobsData";

const AppliedJobs = () => {
  // json loader
  const applyJob = useLoaderData();
  const [singleJob, setSingleJob] = useState([]);
  useEffect(() => {
    let saveJob = [];
    // get id to localstorage
    const jobId = JSON.parse(localStorage.getItem("jobId"));
    for (const id of jobId || []) {
      const singleId = applyJob.jobs.find((aj) => aj.id == id);
      if (singleId) {
        saveJob.push(singleId);
      }
    }
    setSingleJob(saveJob);
  }, []);
  return (
    <div>
      <div className="bg-gradient-to-r from-[#f9f9ff] to-[#faf8ff] py-36">
        <h2 className="text-center text-3xl text-[#1A1919] font-extrabold">
          Applied Jobs
        </h2>
      </div>
      <div className="flex justify-end px-14 mt-32">
        <select className="bg-[#F4F4F4] py-2 outline-0">
          <option>Filter By</option>
          <option value="Full-time">Full Time</option>
          <option value="Ontime">Ontime</option>
        </select>
      </div>
      <div className="px-14 mt-8">
        {singleJob.map((jobData) => (
          <AppliedJobsData key={jobData.id} jobData={jobData}></AppliedJobsData>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
