import { useState } from "react";
import Todo from "./reducerPrac/Todo";
import Todolist from "../src/reducerPrac/Todolist";
import Prac from "./prac/Prac";
import PropsTest from "./PropsTest";
import SignupPage from "./signup/SignupPage";
import AxiosPrac from "./axiosPrac/AxiosPrac";

const App = () => {
  const [page, setPage] = useState(false);
  return (
    <>
      <h2>소영짱</h2>
      <button onClick={(e) => setPage(!page)}>전환</button>
      {page ? (
        <>
          <Todo />
          <Todolist />
        </>
      ) : (
        <AxiosPrac />
      )}
    </>
  );
};

export default App;
