import React from "react";
import axios from "axios";
import { useState } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { useAddtodo } from "../api";

const PracInput = () => {
  const [todo, setTodo] = useState("");
  const { mutate: addTodo } = useAddtodo();
  const handleTodo = () => {
    const todolist = {
      text: todo,
      done: false,
    };
    addTodo(todolist);
    setTodo("");
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={todo}
          placeholder="query적용한 input"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleTodo}>추가</button>
      </div>
    </>
  );
};

export default PracInput;
