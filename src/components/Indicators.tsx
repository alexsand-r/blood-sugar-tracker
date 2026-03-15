//..

import type { SugarRecord } from "../types/SugarRecord";
import { SmileOk } from "./Icons/SmileOk";
import { SmileBad } from "./Icons/SmileBad";
import { SmileNotNorm } from "./Icons/SmaleNotNorm";

type IndicatorsProps = {
  todayAverage: SugarRecord | undefined;
  lastRaeding: SugarRecord | undefined;
  entries: number;
};

export const Indicators = ({
  todayAverage,
  lastRaeding,
  entries,
}: IndicatorsProps) => {
  const value = todayAverage?.value;
  const valueLast = lastRaeding?.value;

  let bgColor = "bg-green-400";
  let bgColorD = "bg-green-400";

  if (valueLast !== undefined) {
    if (valueLast < 4 || valueLast > 6.9) {
      bgColorD = "bg-red-400";
    } else if (valueLast <= 5.5) {
      bgColorD = "bg-green-400";
    } else {
      bgColorD = "bg-[#e6b84f]";
    }
  }

  if (value !== undefined) {
    if (value < 4 || value > 6.9) {
      bgColor = "bg-red-400";
    } else if (value <= 5.5) {
      bgColor = "bg-green-400";
    } else {
      bgColor = "bg-[#e6b84f]";
    }
  }

  return (
    <>
      <div className="mb-6">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-teal-600 p-4 rounded-lg">
              <h2 className="capitalize text-white text-center font-bold mb-10">
                Today's average
              </h2>
              <div className="flex justify-center gap-4 items-end">
                <span
                  className={`w-14 h-14 ${bgColor} rounded-full flex items-center justify-center`}
                >
                  {value !== undefined &&
                    (value < 4 || value > 6.9 ? (
                      <SmileBad size={80} />
                    ) : value <= 5.5 ? (
                      <SmileOk size={80} />
                    ) : (
                      <SmileNotNorm size={80} />
                    ))}
                </span>
                <p className="text-white text-center">
                  {" "}
                  <span className="text-3xl mr-2 font-bold">
                    {" "}
                    {todayAverage?.value}{" "}
                  </span>
                  mmol/L
                </p>
                <span
                  className={`${(todayAverage?.value ?? 0) < (lastRaeding?.value ?? 0) ? "rotate-180" : "rotate-0"}`}
                >
                  <svg
                    xmlns="http://www.w3.org"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </span>
              </div>
            </div>
            <div className="bg-[#afe6d1] p-4 rounded-lg">
              <h2 className="capitalize text-center font-bold mb-10 text-[#103047]">
                last raeding
              </h2>
              <div className="flex justify-center gap-4 items-end">
                <span
                  className={`w-14 h-14 ${bgColorD} rounded-full flex items-center justify-center`}
                >
                  {valueLast !== undefined &&
                    (valueLast < 4 || valueLast > 6.9 ? (
                      <SmileBad size={80} color="#103047" />
                    ) : valueLast <= 5.5 ? (
                      <SmileOk size={80} color="#103047" />
                    ) : (
                      <SmileNotNorm size={80} color="#103047" />
                    ))}
                </span>
                <p className="text-center text-[#103047]">
                  {" "}
                  <span className="text-3xl mr-2 font-bold">
                    {" "}
                    {lastRaeding?.value}
                  </span>
                  mmol/L
                </p>
              </div>
            </div>
            <div className="bg-[#fadb9b] p-4 rounded-lg flex flex-col justify-between">
              <h2 className="capitalize text-center font-bold mb-10 text-[#103047]">
                raedings today
              </h2>
              <p className="text-center text-[#103047]">
                {" "}
                <span className="text-3xl mr-2 font-bold">
                  {" "}
                  {entries === 0 ? "No entries yet" : `${entries} entries`}{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
