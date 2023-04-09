import React from "react";

const CategoryList = ({ singleCategory }) => {
  const { category_name, category_logo, jobs_available } = singleCategory;
  //   console.log(singleCategory);
  return (
    <div className="bg-gradient-to-r from-[#f9f9ff] to-[#faf8ff] rounded-lg p-10">
      <img className="w-20 h-20" src={category_logo} alt="" />
      <h3 className="text-xl text-[#474747] font-extrabold mt-8">
        {category_name}
      </h3>
      <p className="text-xl text-[#A3A3A3] font-medium mt-2">
        {jobs_available.length}+Jobs Available
      </p>
    </div>
  );
};

export default CategoryList;
