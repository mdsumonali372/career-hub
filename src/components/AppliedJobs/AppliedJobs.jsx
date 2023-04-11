import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobsData from "../AppliedJobsData/AppliedJobsData";

const AppliedJobs = () => {
  // json loader
  const applyJob = useLoaderData();
  const [singleJob, setSingleJob] = useState([]);
  let saveJob = [];
  // get id to localstorage
  const jobId = JSON.parse(localStorage.getItem("jobId"));
  for (const id of jobId || []) {
    const singleId = applyJob.jobs.find((aj) => aj.id == id);
    if (singleId) {
      saveJob.push(singleId);
    }
  }
  useEffect(() => {
    setSingleJob(saveJob);
  }, []);

  // console.log(singleJob);

  // handleJobTime code here
  const handleJobTime = (options) => {
    const optionValue = options.target.value;
    if (optionValue == "Full-time") {
      let jobTime = [];
      for (const singleJobTime of saveJob) {
        if (singleJobTime.fulltime_or_parttime == "Full-time") {
          jobTime.push(singleJobTime);
        }
        setSingleJob(jobTime);
      }
    } else if (optionValue == "Part-time") {
      console.log(optionValue);
      let jobTime = [];
      for (const singleJobTime of saveJob) {
        if (singleJobTime.fulltime_or_parttime == "Part-time") {
          jobTime.push(singleJobTime);
        }
        setSingleJob(jobTime);
      }
    } else {
      console.log("nothing applied job show here");
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-[#f9f9ff] to-[#faf8ff] py-36">
        <h2 className="text-center text-3xl text-[#1A1919] font-extrabold">
          Applied Jobs
        </h2>
      </div>
      <div className="flex justify-end px-14 mt-32">
        <select
          onChange={handleJobTime}
          className="bg-[#F4F4F4] py-2 outline-0"
        >
          <option>Filter By</option>
          <option value="Full-time">Full Time</option>
          <option value="Part-time">Part Time</option>
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
