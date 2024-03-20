import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip } from "recharts";

function Recharts() {
  const studentData = [
    { id: 1, name: "John", physics: 85, chemistry: 78, biology: 92, math: 88 },
    { id: 2, name: "Alice", physics: 78, chemistry: 82, biology: 90, math: 85 },
    { id: 3, name: "Mike", physics: 90, chemistry: 88, biology: 85, math: 91 },
    { id: 4, name: "Emily", physics: 82, chemistry: 80, biology: 87, math: 83 },
    { id: 5, name: "David", physics: 88, chemistry: 92, biology: 84, math: 89 },
    {
      id: 6,
      name: "Sophia",
      physics: 79,
      chemistry: 85,
      biology: 91,
      math: 86,
    },
    { id: 7, name: "Emma", physics: 91, chemistry: 89, biology: 86, math: 92 },
    {
      id: 8,
      name: "Michael",
      physics: 84,
      chemistry: 81,
      biology: 88,
      math: 87,
    },
    {
      id: 9,
      name: "Olivia",
      physics: 87,
      chemistry: 90,
      biology: 83,
      math: 80,
    },
    {
      id: 10,
      name: "William",
      physics: 83,
      chemistry: 86,
      biology: 89,
      math: 84,
    },
  ];

  return (
    <div>
      <LineChart
        width={1000}
        height={400}
        data={studentData}
        className="mt-10 ml-10"
      >
        <Line type="monotone" dataKey="physics" stroke="#8884d8" />
        <Line type="monotone" dataKey="chemistry" stroke="red" />
        <Line type="monotone" dataKey="biology" stroke="black" />
        <Line type="monotone" dataKey="math" stroke="purple" />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default Recharts;
