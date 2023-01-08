import axios from "axios";
import { useState } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { getTodos, useAddtodo, useDeleteTodo } from "./api";
import { Todos } from "./Type";

export default function Prac() {
  const [todo, setTodo] = useState("");
  const [editPost, setEditPost] = useState(false);

  const { data, isLoading, isError } = useQuery(["todolist"], () => {
    return getTodos();
  });

  const { mutate: addTodo } = useAddtodo();
  const handleTodo = () => {
    const todolist = {
      text: todo,
      done: false,
    };
    addTodo(todolist);
    setTodo("");
  };

  const { mutate: delTodo } = useDeleteTodo();
  const handleDelete = (id: number) => {
    delTodo(id);
  };

  const handleEdit = (id: number) => {
    console.log(id);
  };

  return (
    <>
      {isLoading ? <p>로딩중입니다</p> : null}
      {isError ? <p>에러</p> : null}
      <h2> Todo 연습장 1/8 </h2>
      {data
        ? data?.data.map((d: any) => {
            return (
              <div key={d.id}>
                <p>{d.text}</p>
                <button
                  onClick={() => {
                    handleDelete(d.id);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    handleEdit(d.id);
                  }}
                >
                  수정
                </button>
              </div>
            );
          })
        : null}
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleTodo}>추가</button>
      </div>
    </>
  );
}
