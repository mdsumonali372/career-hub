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
  // handleRemote Onsite code here
  const handleRemoteOnsite = (options) => {
    const optionValue = options.target.value;
    if (optionValue == "Remote") {
      let jobOnRemote = [];
      for (const remoteOnsite of saveJob) {
        if (remoteOnsite.remote_or_onsite == "Remote") {
          jobOnRemote.push(remoteOnsite);
        }
        setSingleJob(jobOnRemote);
      }
    } else if (optionValue == "Onsite") {
      let jobOnRemote = [];
      for (const remoteOnsite of saveJob) {
        if (remoteOnsite.remote_or_onsite == "Onsite") {
          jobOnRemote.push(remoteOnsite);
        }
        setSingleJob(jobOnRemote);
      }
    } else {
      alert("Your are not applied the job");
    }
  };

  // handleremove job time
  const handleJobTime = (optionChange) => {
    const optionChangeValue = optionChange.target.value;
    if (optionChangeValue == "Full-time") {
      let jobTime = [];
      for (const singleJobTime of saveJob) {
        if (singleJobTime.fulltime_or_parttime == "Full-time") {
          jobTime.push(singleJobTime);
        }
        setSingleJob(jobTime);
      }
    } else if (optionChangeValue == "Part-time") {
      let jobTime = [];
      for (const singleJobTime of saveJob) {
        if (singleJobTime.fulltime_or_parttime == "Part-time") {
          jobTime.push(singleJobTime);
        }
        setSingleJob(jobTime);
      }
    } else {
      alert("something wrong");
    }
  };

  // ShowAllJob

  const ShowAllJob = () => {
    setSingleJob(saveJob);
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-[#f9f9ff] to-[#faf8ff] py-36">
        <h2 className="text-center text-3xl text-[#1A1919] font-extrabold">
          Applied Jobs
        </h2>
      </div>
      <div className="flex justify-end px-14 mt-32 gap-3">
        <button onClick={ShowAllJob} className="btn">
          All
        </button>
        <select
          onChange={handleJobTime}
          className="bg-[#F4F4F4] py-2 outline-0"
        >
          <option>Filter By</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
        <select
          onChange={handleRemoteOnsite}
          className="bg-[#F4F4F4] py-2 outline-0 ml-4"
        >
          <option>Filter By</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
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
