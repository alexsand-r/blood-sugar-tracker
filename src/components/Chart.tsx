import { useState } from "react";
// import type { SugarData } from "../types/SugarData";
import type { SugarRecord } from "../types/SugarRecord";

interface ChartProps {
  data: SugarRecord[];
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

export default function Chart({ data }: ChartProps) {
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
                  <Line type="monotone" dataKey="value" stroke="#3b82f6" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
