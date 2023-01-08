import { useState } from "react";
import Todo from "./components/Todo";
import Todolist from "./components/Todolist";
import Prac from "./Prac";
import PropsTest from "./PropsTest";

const App = () => {
  const [page, setPage] = useState(false);
  return (
    <>
      <h2>소영짱</h2>
      {/* <PropsTest testText="props를 넘겨주자" /> */}
      <button onClick={(e) => setPage(!page)}>전환</button>
      {page ? (
        <>
          <Todo />
          <Todolist />
        </>
      ) : (
        <Prac />
      )}
    </>
  );
};

export default App;
