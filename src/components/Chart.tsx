import { useState } from "react";
import type { SugarData } from "../types/SugarData";

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

const data: SugarData[] = [
  { date: "2026-01-28", sugar: 5.4 },
  { date: "2026-01-29", sugar: 6.1 },
  { date: "2026-01-30", sugar: 5.7 },
  { date: "2026-01-31", sugar: 6.4 },
  { date: "2026-02-01", sugar: 5.9 },
  { date: "2026-02-02", sugar: 6.6 },
  { date: "2026-02-03", sugar: 5.3 },
  { date: "2026-02-04", sugar: 6.2 },
  { date: "2026-02-05", sugar: 5.8 },
  { date: "2026-02-06", sugar: 6.0 },

  { date: "2026-02-07", sugar: 5.6 },
  { date: "2026-02-08", sugar: 6.7 },
  { date: "2026-02-09", sugar: 5.2 },
  { date: "2026-02-10", sugar: 6.3 },
  { date: "2026-02-11", sugar: 5.9 },
  { date: "2026-02-12", sugar: 6.5 },
  { date: "2026-02-13", sugar: 5.4 },
  { date: "2026-02-14", sugar: 6.1 },
  { date: "2026-02-15", sugar: 5.7 },
  { date: "2026-02-16", sugar: 6.8 },

  { date: "2026-02-17", sugar: 5.3 },
  { date: "2026-02-18", sugar: 6.0 },
  { date: "2026-02-19", sugar: 5.5 },
  { date: "2026-02-20", sugar: 6.4 },
  { date: "2026-02-21", sugar: 5.9 },
  { date: "2026-02-22", sugar: 6.6 },
  { date: "2026-02-23", sugar: 5.2 },
  { date: "2026-02-24", sugar: 6.1 },
  { date: "2026-02-25", sugar: 5.8 },
  { date: "2026-02-26", sugar: 6.3 },

  { date: "2026-02-27", sugar: 5.4 },
  { date: "2026-02-28", sugar: 6.7 },
  { date: "2026-03-01", sugar: 5.6 },
  { date: "2026-03-02", sugar: 6.2 },
  { date: "2026-03-03", sugar: 5.9 },
  { date: "2026-03-04", sugar: 6.5 },
  { date: "2026-03-05", sugar: 5.3 },
  { date: "2026-03-06", sugar: 6.4 },
  { date: "2026-03-07", sugar: 5.8 },
  { date: "2026-03-08", sugar: 6.1 },
];

export default function Chart() {
  const [range, setRange] = useState(7);

  const filteredData = data.slice(-range);

  return (
    <>
      <div className="mb-6">
        <div className="container">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setRange(7)}
              className="text-slate-900 px-3 py-1 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 transition duration-300"
            >
              7 days
            </button>

            <button
              onClick={() => setRange(30)}
              className="text-slate-900 px-3 py-1 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 transition duration-300"
            >
              30 days
            </button>

            <select
              onChange={(e) => {
                const year = e.target.value;

                if (year !== "default") {
                  setRange(365);
                }
              }}
              defaultValue="default"
              className=" text-slate-900 px-3 py-1 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 transition duration-300 focus:outline-none focus:ring-0"
            >
              <option value="default" className="bg-white">
                choose a year
              </option>

              <option value="2024" className="bg-white">
                2024
              </option>

              <option value="2025" className="bg-white">
                2025
              </option>

              <option value="2026" className="bg-white">
                2026
              </option>
            </select>
          </div>

          <div className="mr-6">
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={filteredData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
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
                  <Line type="monotone" dataKey="sugar" stroke="#3b82f6" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
