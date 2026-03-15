import { useState } from "react";
import "./index.css";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Indicators } from "./components/Indicators";
import { MyTable } from "./components/MyTable";
import Chart from "./components/Chart";
import { SugarAddForm } from "./components/SugarAddForm";
import { sugarDataArr } from "./api/api";
import type { SugarRecord } from "./types/SugarRecord";

function App() {
  const [isVisibleForm, setIsVisibleForm] = useState(false); //зміна для попапа
  const [data, setData] = useState<SugarRecord[]>(sugarDataArr); // стан для масива показників

  const sortData = (data: SugarRecord[]): SugarRecord[] => {
    const newData = [...data].sort((a, b) => {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;

      if (a.time < b.time) return -1;
      if (a.time > b.time) return 1;

      return 0;
    });

    return newData;
  };

  const sortedDate = sortData(data); // відсортований масив
  const todayAverage: SugarRecord | undefined =
    sortedDate[sortedDate.length - 1]; // поточний показник
  const lastRaeding: SugarRecord | undefined =
    sortedDate[sortedDate.length - 2]; // перед останній показник

  const entries = (data: SugarRecord[]): number => {
    let count: number = 0;
    const dataDay = new Date().toISOString().slice(0, 10);
    for (let i = 0; i < data.length; i++) {
      if (data[i].date === dataDay) {
        count += 1;
      }
    }
    return count;
  };

  const addNewIndicator = (newIndicator: SugarRecord) => {
    setData((prevData) => [...prevData, newIndicator]);
  };

  const openForm = () => {
    setIsVisibleForm(true);
  };

  const closeForm = () => {
    setIsVisibleForm(false);
  };

  return (
    <>
      <Header />
      <Button openForm={openForm} />
      <Indicators
        todayAverage={todayAverage}
        lastRaeding={lastRaeding}
        entries={entries(sortedDate)}
      />
      <Chart sortedDate={sortedDate} />
      <MyTable sortedDate={sortedDate} />
      {isVisibleForm && (
        <SugarAddForm addNewIndicator={addNewIndicator} closeForm={closeForm} />
      )}
    </>
  );
}

export default App;
