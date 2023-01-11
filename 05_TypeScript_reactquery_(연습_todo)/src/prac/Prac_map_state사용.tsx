import axios from "axios";
import { useState } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { useAddtodo, useDeleteTodo } from "../api";
import { Todos } from "../Type";

export default function TodoPrac() {
  const [todo, setTodo] = useState("");

  const [todoList, setTodoList] = useState<Todos[] | null>(null);

  const getTodos = async () => {
    const res = await axios
      .get("http://localhost:3003/todos")
      .then((response) => {
        setTodoList(response.data);
      });
  };
  const { data, isLoading, isError } = useQuery(["TodoList"], () => {
    return getTodos();
  });

  const { mutate } = useAddtodo();
  const handleTodo = () => {
    console.log(todo);
    const todolist = {
      text: todo,
      done: false,
    };
    mutate(todolist);
  };

  const { mutate: delTodo } = useDeleteTodo();
  const handleDelete = (id: number) => {
    console.log(id);
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
      {todoList
        ? todoList.map((todos) => {
            return (
              <div key={todos.id}>
                <p>{todos.text}</p>
                <button
                  onClick={() => {
                    handleDelete(todos.id);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    handleEdit(todos.id);
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
