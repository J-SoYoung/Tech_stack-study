import React from "react";
import { useAppSelector } from "../store";

const Todolist = () => {
  const todos = useAppSelector((state) => state.todo.todos);
  console.log("selector:", todos);
  return (
    <>
      <h2>todolist = store로 데이터 전역관리 </h2>
      {todos.map((t) => (
        <p key={t.id}>{t.todo}</p>
      ))}
    </>
  );
};

export default Todolist;
