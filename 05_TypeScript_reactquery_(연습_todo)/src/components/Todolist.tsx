import React from "react";
import { useAppSelector } from "./store/store";

const Todolist = () => {
  const todos = useAppSelector((state) => state.todo.todos);
  console.log("selector:", todos);
  return (
    <>
      <h2>todolist</h2>
      {todos.map((t) => (
        <p key={t.id}>{t.todo}</p>
      ))}
    </>
  );
};

export default Todolist;
