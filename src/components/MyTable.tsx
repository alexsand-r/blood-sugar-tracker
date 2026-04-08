//..
import React from "react";
import type { SugarRecord } from "../types/SugarRecord";
import { formatDate } from "../utils/formatDate";
import { DeleteIcon } from "./Icons/DeleteIcon";
import { EditIcon } from "./Icons/EditIcon";
import { ArrowIcon } from "./Icons/ArrowIcon";

interface MyTableProps {
  sortedDate: SugarRecord[];
  deleteItem: (elId: string) => void;
  edit: (elId: string) => void;
  setSortType: (type: "date" | "max" | "min") => void;
  sortType: "date" | "max" | "min";
}

export const MyTable = React.memo(
  ({ sortedDate, deleteItem, edit, setSortType, sortType }: MyTableProps) => {
    console.log("====================================");
    console.log("rendering table");
    console.log("====================================");
    return (
      <>
        <div className="mb-10">
          <div className="container">
            <div className="max-h-96 overflow-y-auto relative overflow-x-auto bg-neutral-primary-soft rounded-lg border border-gray-200">
              <table className="w-full min-w-150 text-sm text-left rtl:text-right text-body">
                <thead className="sticky top-0 text-sm text-body bg-emerald-300  border-b rounded-lg border-gray-200">
                  <tr>
                    {/* data */}
                    <th
                      scope="col"
                      className="font-medium text-center px-3 py-2 sm:px-6 sm:py-4"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span>Date</span>

                        <span
                          className={`w-8 h-8 hover:bg-emerald-400 cursor-pointer transition duration-300 rotate-180 flex items-center justify-center 
                          ${sortType === "date" ? "bg-emerald-500" : "bg-emerald-300"}`}
                          onClick={() => setSortType("date")}
                        >
                          <ArrowIcon />
                        </span>
                      </div>
                    </th>
                    {/* time */}
                    <th
                      scope="col"
                      className="font-medium text-center px-3 py-2 sm:px-6 sm:py-4"
                    >
                      Time
                    </th>
                    {/* level */}
                    <th
                      scope="col"
                      className="font-medium text-center px-3 py-2 sm:px-6 sm:py-4"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span
                          className={`w-8 h-8 hover:bg-emerald-400 cursor-pointer transition duration-300 flex items-center justify-center ${sortType === "max" ? "bg-emerald-500" : "bg-emerald-300"}`}
                          onClick={() => setSortType("max")}
                        >
                          <ArrowIcon />
                        </span>
                        <span> Level</span>

                        <span
                          className={`rotate-180 w-8 h-8 hover:bg-emerald-400 cursor-pointer transition duration-300 flex items-center justify-center ${sortType === "min" ? "bg-emerald-500" : "bg-emerald-300"}`}
                          onClick={() => setSortType("min")}
                        >
                          <ArrowIcon />
                        </span>
                      </div>
                    </th>
                    {/* note */}
                    <th
                      scope="col"
                      className="px-3 py-2 sm:px-6 sm:py-4 font-medium text-center "
                    >
                      Note
                    </th>
                    {/*  Edit / Delete  */}
                    <th
                      scope="col"
                      className="font-medium text-center px-3 py-2 sm:px-6 sm:py-4"
                    >
                      Edit / Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedDate.map((el) => {
                    return (
                      <tr
                        key={el.id}
                        className="bg-neutral-primary border-b border-gray-200"
                      >
                        <td className="px-3 py-2 sm:px-6 sm:py-4 text-center">
                          {formatDate(el.date)}
                        </td>
                        <td className="px-3 py-2 sm:px-6 sm:py-4 text-center">
                          {el.time}
                        </td>
                        <td className="px-3 py-2 sm:px-6 sm:py-4 text-center">
                          {" "}
                          <span
                            className={`w-2.5 h-2.5 rounded-full inline-block mr-1 ${
                              el.value < 4
                                ? "bg-[#ef4444]"
                                : el.value <= 5.5
                                  ? "bg-[#22c55e]"
                                  : el.value <= 6.9
                                    ? "bg-[#facc15]"
                                    : "bg-[#ef4444]"
                            }`}
                          ></span>
                          {el.value}
                        </td>
                        <td className="px-3 py-2 sm:px-6 sm:py-4 sm:max-w-56 wrap-break-word">
                          {el.note}
                        </td>
                        <td className="px-3 py-2  sm:py-4 sm:max-w-56 wrap-break-word flex items-center justify-center gap-1">
                          <EditIcon onClick={() => edit(el.id)} />
                          <DeleteIcon onClick={() => deleteItem(el.id)} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  },
);
