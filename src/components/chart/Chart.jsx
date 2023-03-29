import "./chart.css";
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  YAxis,
  LineChart,
  Line,
} from "recharts";

const GradientColors = () => {
  return (
    <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
      <stop offset="30%" stopColor="#7FFFD4" stopOpacity={0.5} />
      <stop offset="75%" stopColor="#ECFFDC" stopOpacity={0.3} />
      <stop offset="95%" stopColor="#f3f3f3" stopOpacity={0.2} />
    </linearGradient>
  );
};

export default function Chart({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1} height="100%">
        <AreaChart data={data}>
          <defs>
            <GradientColors />
          </defs>
          <Tooltip
            itemStyle={{ color: "#fff", background: "transparent" }}
            contentStyle={{ color: "#fff", backgroundColor: "#0099d8" }}
          />
          {grid && (
            <CartesianGrid
              strokeDasharray="4 4"
              //stroke="#ff005d"
              opacity={0.4}
            />
          )}
          <XAxis dataKey="name" tick={{ fill: "#B6BAC3" }} stroke="#EEEEEE" />
          <YAxis tick={{ fill: "#B6BAC3" }} stroke="#EEEEEE" />
          <Area
            dataKey={dataKey}
            type="monotone"
            stroke="#12a812"
            strokeWidth={3}
            strokeOpacity={1}
            fill="url(#colorView)"
          />
        </AreaChart>
      </ResponsiveContainer>
      {/* <ResponsiveContainer width="100%" paddingTop="1rem" aspect={4 / 1}>
        <LineChart data={userData}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer> */}
    </div>
  );
}
