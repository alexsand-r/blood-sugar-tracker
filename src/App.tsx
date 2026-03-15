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
  const todayAverage: SugarRecord | undefined = data[data.length - 1]; // поточний показник
  const lastRaeding: SugarRecord | undefined = data[data.length - 2]; // перед останній показник

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
        entries={entries(data)}
      />
      <Chart data={data} />
      <MyTable data={data} />
      {isVisibleForm && (
        <SugarAddForm addNewIndicator={addNewIndicator} closeForm={closeForm} />
      )}
    </>
  );
}

export default App;
