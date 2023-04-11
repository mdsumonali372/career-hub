import React, { useEffect, useState } from "react";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const MainBody = () => {
  // jobs data loader
  const [job, setJob] = useState({ jobs: [] });
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("job.json")
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  //   category data fetch
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <div className="mb-20">
      <div className="md:flex justify-between items-center mx-auto bg-[#f9f9ff] px-14">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-5xl text-[#1A1919] font-bold">
            The first step is to figure out exactly what your dream job is.
          </h2>
          <p className="mt-6 text-xl text-[#757575] font-medium">
            Once you have a clear idea of your dream job, assess your
            qualifications. Do you have the necessary education, skills, and
            experience to succeed in this role? If not, identify what you need
            to do to gain these qualifications.
          </p>
          <button className="btn btn-info mt-10 text-white">Get Started</button>
        </div>
        <div className="flex justify-end md:w-1/2">
          <img className="w-full" src="sumon.png" alt="" />
        </div>
      </div>
      {/* category list start here */}
      <div className="px-14 my-32">
        <h2 className="text-2xl md:text-5xl text-[#1A1919] font-extrabold text-center">
          Job Category List
        </h2>
        <p className="text-xl text-[#757575] font-medium mt-4 text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-8 gap-6">
          {category.map((singleCategory) => (
            <CategoryList
              singleCategory={singleCategory}
              key={singleCategory.id}
            ></CategoryList>
          ))}
        </div>
      </div>
      {/* feature job start here */}
      <div className="px-14">
        <h2 className="text-2xl md:text-5xl text-[#1A1919] font-extrabold text-center">
          Featured Jobs
        </h2>
        <p className="text-xl text-[#757575] font-medium text-center mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {job.jobs.slice(0, showAll ? 6 : 4).map((job) => (
            <FeaturedJobs key={job.id} job={job}></FeaturedJobs>
          ))}
        </div>
        <button
          onClick={handleShowAll}
          className="btn btn-info mt-10 text-white mx-auto block"
        >
          Sell All Jobs
        </button>
      </div>
    </div>
  );
};

export default MainBody;
