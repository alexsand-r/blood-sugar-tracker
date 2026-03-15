//..
import { useState } from "react";
import DatePicker from "react-datepicker";
import { nanoid } from "nanoid";
// import type { newDate } from "react-datepicker/dist/dist/date_utils.js";
import "react-datepicker/dist/react-datepicker.css";
import { TimeIcon } from "./Icons/TimeIcon";
import { CalendarIcon } from "./Icons/CalendarIcon";
import { SugarIcon } from "./Icons/SugarIcon";
import type { SugarRecord } from "../types/SugarRecord";

type SugarAddForm = {
  closeForm: () => void;
  addNewIndicator: (indicator: SugarRecord) => void;
};

//..
export const SugarAddForm = ({ closeForm, addNewIndicator }: SugarAddForm) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date()); //стан календаря

  const [selectedSugar, setSelectedSugar] = useState<string>(""); //стан показника цукру
  const [isSugarError, setIsSugarError] = useState(false); //стан помилки показника цукру

  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5);
  const [selectedTime, setSelectedTime] = useState<string>(currentTime); // стан для часу заміра

  const [selectedMessage, setSelectedMessage] = useState<string>(""); //стан нотатки

  const handleTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleSugar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(",", ".");
    setSelectedSugar(value);
    setIsSugarError(false);
    // тут тип рядок
  };

  const handleMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSelectedMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // перевірити хай поки буде

    const valueSugar = Number(selectedSugar);

    if (!valueSugar || valueSugar <= 0) {
      setIsSugarError(true);
      return;
    }

    const formattedDate = selectedDate?.toISOString().split("T")[0] || "";

    const newIndicator = {
      id: nanoid(),
      date: formattedDate,
      time: selectedTime,
      value: valueSugar,
      note: selectedMessage,
    };

    addNewIndicator(newIndicator);
    closeForm();

    console.log(newIndicator);
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-200 overflow-y-auto">
        <div className="flex min-h-full items-start justify-center p-6">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <div className="container">
              <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                {/*DatePicker  */}
                <div className="mb-5 w-full">
                  <label
                    htmlFor="date"
                    className="block mb-2.5 text-sm font-medium text-heading text-slate-900"
                  >
                    Measurement date
                  </label>
                  <div className="relative">
                    <DatePicker
                      id="date"
                      selected={selectedDate}
                      onChange={(date: Date | null) => setSelectedDate(date)}
                      dateFormat="dd.MM.yyyy"
                      maxDate={new Date()}
                      required
                      className="bg-neutral-secondary-medium border border-gray-300 text-heading rounded-md focus:outline-2  focus:outline-gray-300 focus:border-gray-300 block w-full px-3 py-2.5 shadow-xs placeholder:text-body text-slate-900 text-base"
                    />
                    <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2">
                      <CalendarIcon />
                    </div>
                  </div>
                </div>

                {/* time */}
                <div className="mb-5">
                  <label
                    htmlFor="time"
                    className="block mb-2.5 text-sm font-medium text-heading text-slate-900"
                  >
                    Enter the time
                  </label>
                  <div className="relative">
                    <input
                      type="time"
                      id="time"
                      value={selectedTime}
                      onChange={handleTime}
                      className="bg-neutral-secondary-medium border border-gray-300 text-heading text-base rounded-md focus:outline-2 focus:outline-gray-300 focus:border-gray-300 block w-full px-3 py-2.5 shadow-xs placeholder:text-body mb-2.5"
                    />

                    <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2">
                      <TimeIcon />
                    </div>
                  </div>
                </div>

                {/* indicator */}
                <div className="mb-5">
                  <label
                    htmlFor="indicator"
                    className="block mb-2.5 text-sm font-medium text-heading text-slate-900"
                  >
                    Enter your blood sugar level
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      step="0.1"
                      id="indicator"
                      value={selectedSugar}
                      onChange={handleSugar}
                      className="bg-neutral-secondary-medium border border-gray-300 text-heading text-base rounded-md focus:outline-2 focus:outline-gray-300 focus:border-gray-300 block w-full px-3 py-2.5 shadow-xs placeholder:text-body mb-2.5"
                      placeholder="5.6"
                    />

                    <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2">
                      <SugarIcon />
                    </div>
                  </div>
                  {isSugarError && (
                    <p className="text-sm text-red-500">Required field</p>
                  )}
                </div>

                {/* message */}
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="block mb-2.5 text-sm font-medium text-heading text-slate-900"
                  >
                    Your note
                  </label>
                  <textarea
                    id="message"
                    value={selectedMessage}
                    onChange={handleMessage}
                    rows={4}
                    className="bg-neutral-secondary-medium border border-gray-300 text-heading rounded-md focus:outline-2  focus:outline-gray-300 focus:border-gray-300 block w-full px-3 py-2.5 shadow-xs placeholder:text-body text-slate-900 text-base"
                    placeholder="Write your note here..."
                  ></textarea>
                </div>

                {/* buttons */}
                <div className="flex items-center justify-center gap-x-3">
                  <button
                    type="submit"
                    className="text-slate-900 bg-emerald-300 hover:bg-emerald-400 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer capitalize transition duration-300"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    onClick={closeForm}
                    className="text-slate-900 bg-[#fadb9b] hover:bg-[#edcd8c] font-medium rounded-lg text-sm px-4 py-2 cursor-pointer capitalize transition duration-300"
                  >
                    Close
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
