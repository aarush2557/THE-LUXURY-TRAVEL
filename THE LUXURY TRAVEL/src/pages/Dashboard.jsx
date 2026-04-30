import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "India", users: 400 },
  { name: "USA", users: 300 },
];

export default function Dashboard() {
  return (
    <BarChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="users" />
    </BarChart>
  );
}