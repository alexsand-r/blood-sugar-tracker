//..
export const MyTable = () => {
  return (
    <>
      <div className="mb-6">
        <div className="container">
          <div className="relative overflow-x-auto bg-neutral-primary-soft rounded-lg border border-gray-200">
            <table className="w-full min-w-150 text-sm text-left rtl:text-right text-body">
              <thead className="text-sm text-body bg-emerald-300  border-b rounded-lg border-gray-200">
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
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-neutral-primary border-b border-gray-200">
                  <td className="px-3 py-2 sm:px-6 sm:py-4 text-center">
                    07.03.2026
                  </td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 text-center">
                    08:30
                  </td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 text-center">
                    {" "}
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-300 inline-block mr-1 "></span>{" "}
                    5.4 mmol/L
                  </td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 sm:max-w-56 wrap-break-word">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Similique, nemo provident.{" "}
                  </td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 sm:max-w-56 wrap-break-word ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="mx-auto block cursor-pointer hover:[&_path]:fill-red-500"
                    >
                      <path
                        fill="#848383"
                        d="M4.48,21.28A1.83,1.83,0,0,0,6.3,23H17.2A1.83,1.83,0,0,0,19,21.28L19.9,6.69H3.6ZM14.8,10.47a.5.5,0,0,1,.56-.43.49.49,0,0,1,.43.55L14.7,19.53a.5.5,0,0,1-.56.43.49.49,0,0,1-.43-.55Zm-3.55,0a.5.5,0,0,1,1,0v9a.5.5,0,0,1-1,0ZM8.14,10a.5.5,0,0,1,.56.43l1.09,8.94a.49.49,0,0,1-.43.55.5.5,0,0,1-.56-.43L7.71,10.59A.49.49,0,0,1,8.14,10Z"
                      />
                      <path
                        fill="#848383"
                        d="M20,2.74H16.69A.74.74,0,0,0,16,2H7.55a.74.74,0,0,0-.74.74H3.47a1.24,1.24,0,0,0,0,2.47H20a1.24,1.24,0,0,0,0-2.47Z"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
