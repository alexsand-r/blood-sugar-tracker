//..
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//..
export const SugarAddForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  return (
    <>
      <div className="fixed inset-0 bg-gray-200 overflow-y-auto">
        <div className="flex min-h-full items-start justify-center p-6">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <div className="container">
              <form className="max-w-sm mx-auto">
                <div className="mb-5 w-full">
                  <label
                    htmlFor="message"
                    className="block mb-2.5 text-sm font-medium text-heading text-slate-900"
                  >
                    Measurement date
                  </label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date | null) => setSelectedDate(date)}
                    dateFormat="dd.MM.yyyy"
                    maxDate={new Date()}
                    required
                    className="bg-neutral-secondary-medium border border-gray-300 text-heading rounded-md focus:outline-2  focus:outline-gray-300 focus:border-gray-300 block w-full px-3 py-2.5 shadow-xs placeholder:text-body text-slate-900 text-base mb-2.5"
                  />
                  <p className="text-sm text-red-500">Required field</p>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="indicator"
                    className="block mb-2.5 text-sm font-medium text-heading text-slate-900"
                  >
                    Enter your blood sugar level
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    id="indicator"
                    className="bg-neutral-secondary-medium border border-gray-300 text-heading text-base rounded-md focus:outline-2 focus:outline-gray-300 focus:border-gray-300 block w-full px-3 py-2.5 shadow-xs placeholder:text-body mb-2.5"
                    placeholder="5.2"
                    required
                  />
                  <p className="text-sm text-red-500">Required field</p>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="block mb-2.5 text-sm font-medium text-heading text-slate-900"
                  >
                    Your note
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="bg-neutral-secondary-medium border border-gray-300 text-heading rounded-md focus:outline-2  focus:outline-gray-300 focus:border-gray-300 block w-full px-3 py-2.5 shadow-xs placeholder:text-body text-slate-900 text-base"
                    placeholder="Write your note here..."
                  ></textarea>
                </div>

                <div className="flex items-center justify-center gap-x-3">
                  <button
                    type="submit"
                    className="text-slate-900 bg-emerald-300 hover:bg-emerald-400 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer capitalize transition duration-300"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="text-slate-900 bg-[#fadb9b] hover:bg-[#edcd8c] font-medium rounded-lg text-sm px-4 py-2 cursor-pointer capitalize transition duration-300"
                  >
                    Clouse
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
