// src/pages/Chart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dummy dataset for testing
const driverData = [
  { route: "Route 1", drivers: 12 },
  { route: "Route 2", drivers: 8 },
  { route: "Route 3", drivers: 15 },
  { route: "Route 4", drivers: 5 },
  { route: "Route 5", drivers: 10 },
];

const Chart = () => {
  return (
    <div className="w-full h-60">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={driverData}
          margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="route" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="drivers" fill="#6366f1" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
