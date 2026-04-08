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
  const [editingId, setEditingId] = useState<string | null>(null); // стан для редагування айді
  const [sortType, setSortType] = useState<"date" | "max" | "min">("date");

  // це функція для сортування
  const sortData = (data: SugarRecord[]): SugarRecord[] => {
    const newData = [...data];

    if (sortType === "max") {
      return newData.sort((a, b) => b.value - a.value);
    }

    if (sortType === "min") {
      return newData.sort((a, b) => a.value - b.value);
    }

    return newData.sort((a, b) => {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;

      if (a.time < b.time) return 1;
      if (a.time > b.time) return -1;

      return 0;
    });
  };

  const sortedDate = sortData(data);

  const todayAverage: SugarRecord | undefined = sortedDate[0]; // поточний показник
  const lastRaeding: SugarRecord | undefined = sortedDate[1]; // перед останній показник

  const entries = (data: SugarRecord[]): number => {
    let count = 0;
    const dataDay = new Date().toISOString().slice(0, 10);

    for (let i = 0; i < data.length; i++) {
      if (data[i].date.slice(0, 10) === dataDay) {
        count += 1;
      }
    }

    return count;
  };

  //  ця функція тільки додає до масиву дані
  // const addNewIndicator = (newIndicator: SugarRecord) => {
  //   setData((prevData) => [...prevData, newIndicator]);
  // };

  // --- ця вже додає і редагує
  const addNewIndicator = (newIndicator: SugarRecord) => {
    setData((prevData) =>
      prevData.some((el) => el.id === newIndicator.id)
        ? prevData.map((el) => (el.id === newIndicator.id ? newIndicator : el))
        : [...prevData, newIndicator],
    );
  };

  const openForm = () => {
    setEditingId(null);
    setIsVisibleForm(true);
  };

  const closeForm = () => {
    setIsVisibleForm(false);
  };

  const deleteItem = (elId: string): void => {
    const newArr = data.filter((el) => el.id !== elId);
    setData(newArr);
  };

  const edit = (elId: string): void => {
    setIsVisibleForm(true);
    setEditingId(elId);
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
      <Chart key={data.length} sortedDate={data} />
      <MyTable
        sortedDate={sortedDate}
        deleteItem={deleteItem}
        edit={edit}
        setSortType={setSortType}
        sortType={sortType}
      />
      {isVisibleForm && (
        <SugarAddForm
          addNewIndicator={addNewIndicator}
          closeForm={closeForm}
          editingId={editingId}
          data={data}
        />
      )}
    </>
  );
}

export default App;
