import { useState } from "react";
import "./index.css";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Indicators } from "./components/Indicators";
import { MyTable } from "./components/MyTable";
import Chart from "./components/Chart";
import { SugarAddForm } from "./components/SugarAddForm";

function App() {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const openForm = () => {
    setIsVisibleForm(true);
  };

  // const closeForm = () => {
  //   setIsVisibleForm(false);
  // };
  return (
    <>
      <Header />
      <Button openForm={openForm} />
      <Indicators />
      <Chart />
      <MyTable />
      {isVisibleForm && <SugarAddForm />}
    </>
  );
}

export default App;
