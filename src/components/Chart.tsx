import { useState } from "react";
import type { SugarRecord } from "../types/SugarRecord";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";

interface ChartProps {
  sortedDate: SugarRecord[];
}

export default function Chart({ sortedDate }: ChartProps) {
  const [range, setRange] = useState(7);
  const [year, setYear] = useState<string | null>(null);

  // робимо дані для графіка
  const chartData = sortedDate.map((item) => ({
    ...item,
    dateTime: `${item.date.split("T")[0]} ${item.time}`,
  }));

  // сортуємо
  const sorted = [...chartData].sort(
    (a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime(),
  );

  let filteredData = sorted;

  if (year) {
    filteredData = sorted.filter((item) => item.date.startsWith(year));
  } else {
    filteredData = sorted.slice(-range);
  }

  const formatDate = (date: string) => {
    const d = new Date(date);

    if (year) {
      return d.toLocaleDateString("en-US", { month: "short" });
    }

    return d.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className="md:mb-6 recharts-wrapper">
      <div className="container mx-auto">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => {
              setRange(7);
              setYear(null);
            }}
            className={`px-3 py-1 rounded ${range === 7 ? "bg-emerald-300 text-white" : "bg-gray-200 hover:bg-emerald-300 hover:text-white"}  transition duration-300 cursor-pointer`}
          >
            7 days
          </button>

          <button
            onClick={() => {
              setRange(30);
              setYear(null);
            }}
            className={`px-3 py-1 rounded transition duration-300 cursor-pointer ${range === 30 ? "bg-emerald-300 text-white" : "bg-gray-200"}`}
          >
            30 days
          </button>

          <select
            onChange={(e) => {
              const selectedYear = e.target.value;

              if (selectedYear !== "default") {
                setYear(selectedYear);
                setRange(0);
              } else {
                setYear(null);
              }
            }}
            value={year ?? "default"}
            className={`transition duration-300 cursor-pointer px-3 py-1 rounded ${year !== null ? "bg-emerald-300 text-white" : "bg-gray-200"}`}
          >
            <option value="default">choose a year</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </div>
        <div className="-translate-x-5">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="dateTime"
                tickFormatter={formatDate}
                interval="preserveStartEnd"
              />

              <YAxis domain={[3, 12]} />

              <Tooltip />

              <ReferenceArea y1={3} y2={4} fill="#ef4444" fillOpacity={0.15} />
              <ReferenceArea
                y1={4}
                y2={5.5}
                fill="#22c55e"
                fillOpacity={0.15}
              />
              <ReferenceArea
                y1={5.6}
                y2={6.9}
                fill="#facc15"
                fillOpacity={0.15}
              />
              <ReferenceArea y1={7} y2={12} fill="#ef4444" fillOpacity={0.15} />

              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
