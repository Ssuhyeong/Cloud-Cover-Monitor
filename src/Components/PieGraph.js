import React from "react";
import { PieChart, Pie } from "recharts";

const data = [
  {
    name: "completed",
    value: 100,
  },
  {
    name: "pending",
    value: 20,
  },
  {
    name: "not started",
    value: 10,
  },
];

const PieGraph = () => {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey={"name"}
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
      />
    </PieChart>
  );
};

export default PieGraph;
