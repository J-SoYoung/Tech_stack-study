import React, { useRef } from "react";
import { addTodo } from "./store/features/todosSlice";
import { useAppDispatch } from "./store/store";

const Todo = () => {
  const dispatch = useAppDispatch();
  const todoRef = useRef<string>("");

  const handleClick = () => {
    const todoItem = { todo: todoRef.current };
    console.log(todoItem);
    dispatch(addTodo(todoItem));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="todo를 작성"
        onChange={(e) => {
          todoRef.current = e.target.value;
        }}
      />
      <button onClick={handleClick}>추가</button>
    </div>
  );
};

export default Todo;
