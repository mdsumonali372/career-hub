import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      id: 1,
      name: "A 1",
      mark: 60,
    },
    {
      id: 2,
      name: "A 2",
      mark: 60,
    },
    {
      id: 3,
      name: "A 3",
      mark: 60,
    },
    {
      id: 4,
      name: "A 4",
      mark: 59,
    },
    {
      id: 5,
      name: "A 5",
      mark: 56,
    },
    {
      id: 6,
      name: "A 6",
      mark: 60,
    },
    {
      id: 7,
      name: "A 7",
      mark: 60,
    },
    {
      id: 8,
      name: "A 8",
      mark: 60,
    },
  ];
  return (
    <div className="mt-20 w-full mb-20">
      <AreaChart
        width={480}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Statistics;
