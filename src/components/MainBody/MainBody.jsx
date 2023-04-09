import React from "react";

const MainBody = () => {
  return (
    <div className="md:flex justify-between items-center mx-auto bg-[#f9f9ff] px-14">
      <div className="md:w-1/2">
        <h2 className="text-5xl text-[#1A1919] font-bold">
          The first step is to figure out exactly what your dream job is.
        </h2>
        <p className="mt-6 text-xl text-[#757575] font-medium">
          Once you have a clear idea of your dream job, assess your
          qualifications. Do you have the necessary education, skills, and
          experience to succeed in this role? If not, identify what you need to
          do to gain these qualifications.
        </p>
        <button className="btn btn-info mt-10 text-white">Get Started</button>
      </div>
      <div className="flex justify-end md:w-1/2">
        <img className="w-full" src="sumon.png" alt="" />
      </div>
    </div>
  );
};

export default MainBody;
