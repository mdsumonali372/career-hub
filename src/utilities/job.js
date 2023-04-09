// const jobLoader = async () => {
//   const res = await fetch("job.json");
//   const data = await res.json();
//   return data;
// };

// const cateGoryJob = async () => {
//   const res = await fetch("category.json");
//   const data = await res.json();
//   return data;
// };

// const loadData = async () => {
//   const [jobData, categoryData] = await Promise.all([
//     jobLoader(),
//     cateGoryJob(),
//   ]);
//   const combinedData = {
//     jobs: jobData,
//     categories: categoryData,
//   };
//   return combinedData;
// };

// export default loadData;
