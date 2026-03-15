import { useState } from "react";

interface ChartProps {
  sortedDate: SugarRecord[];
}

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

export default function Chart({ sortedDate }: ChartProps) {
  const [range, setRange] = useState(7);
  const [year, setYear] = useState<string | null>(null);

  let filteredData = sortedDate;

  if (year) {
    filteredData = sortedDate.filter((item) => item.date.startsWith(year));
  } else {
    filteredData = sortedDate.slice(-range);
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
    <>
      <div className="md:mb-6 recharts-wrapper">
        <div className="container">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => {
                setRange(7);
                setYear(null);
              }}
              className={`px-3 py-1 rounded cursor-pointer transition
              ${
                range === 7 && !year
                  ? "bg-[#afe6d1] text-white"
                  : "bg-gray-200 text-slate-900 hover:bg-gray-300"
              }`}
            >
              7 days
            </button>

            <button
              onClick={() => {
                setRange(30);
                setYear(null);
              }}
              className={`px-3 py-1 rounded cursor-pointer transition
              ${
                range === 30 && !year
                  ? "bg-[#afe6d1] text-white"
                  : "bg-gray-200 text-slate-900 hover:bg-gray-300"
              }`}
            >
              30 days
            </button>

            <select
              onChange={(e) => {
                const selectedYear = e.target.value;

                if (selectedYear !== "default") {
                  setYear(selectedYear);
                } else {
                  setYear(null);
                }
              }}
              defaultValue="default"
              className={`px-3 py-1 rounded cursor-pointer transition focus:outline-none focus:ring-0
              ${
                year
                  ? "bg-[#afe6d1] text-white"
                  : "bg-gray-200 text-slate-900 hover:bg-gray-300"
              }`}
            >
              <option value="default">choose a year</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
          </div>

          <div className="mr-6">
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={filteredData}>
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis
                    dataKey="date"
                    tickFormatter={formatDate}
                    interval="preserveStartEnd"
                  />

                  <YAxis domain={[3, 12]} />

                  <Tooltip />

                  <ReferenceArea
                    y1={3}
                    y2={4}
                    fill="#ef4444"
                    fillOpacity={0.15}
                  />

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

                  <ReferenceArea
                    y1={7}
                    y2={12}
                    fill="#ef4444"
                    fillOpacity={0.15}
                  />

                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
