const jobLoader = async () => {
  const res = await fetch("job.json");
  const data = await res.json();
  return data;
};

const myFunc = async () => {
  const res = await fetch("category.json");
  const data = await res.json();
  return data;
};

export { jobLoader, myFunc };
