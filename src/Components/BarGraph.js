import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "aws",
    aws: 4000,
    azure: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    aws: 3000,
    azure: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    aws: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    aws: 2780,
    azure: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    aws: 1890,
    azure: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    aws: 2390,
    azure: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    aws: 3490,
    azure: 4300,
    amt: 2100,
  },
];

export default function BarGraph() {
  return (
    <BarChart
      width={400}
      height={175}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="aws" fill="#8884d8" />
      <Bar dataKey="azure" fill="#82ca9d" />
    </BarChart>
  );
}
