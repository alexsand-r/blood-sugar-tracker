//..
import type { SugarRecord } from "../types/SugarRecord";
import { formatDate } from "../utils/formatDate";
import { DeleteIcon } from "./Icons/DeleteIcon";
import { EditIcon } from "./Icons/EditIcon";

interface MyTableProps {
  sortedDate: SugarRecord[];
  deleteItem: (elId: string) => void;
  edit: (elId: string) => void;
}

export const MyTable = ({ sortedDate, deleteItem, edit }: MyTableProps) => {
  return (
    <>
      <div className="mb-10">
        <div className="container">
          <div className="max-h-96 overflow-y-auto relative overflow-x-auto bg-neutral-primary-soft rounded-lg border border-gray-200">
            <table className="w-full min-w-150 text-sm text-left rtl:text-right text-body">
              <thead className="sticky top-0 text-sm text-body bg-emerald-300  border-b rounded-lg border-gray-200">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-2 sm:px-6 sm:py-4 font-medium text-center"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 sm:px-6 sm:py-4 font-medium text-center"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 sm:px-6 sm:py-4 font-medium text-center"
                  >
                    Level
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 sm:px-6 sm:py-4 font-medium text-center"
                  >
                    Note
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 sm:px-6 sm:py-4 font-medium text-center"
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
};
