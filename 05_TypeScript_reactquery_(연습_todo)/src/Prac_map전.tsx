import axios from "axios";
import { useState } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { getTodos, useAddtodo, useDeleteTodo } from "./api";
import { Todos } from "./Type";

const Prac = () => {
  const [todo, setTodo] = useState("");

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
    delTodo(id);
  };

  // map을 돌리고 싶은데,
  // 'AxiosResponse<any, any>' 형식에 'map' 속성이 없습니다.ts(2339)
  // 1. map에 타입을 정하라
  // 2. axios결과값에 타입을 정해야 함.
  return (
    <>
      {isLoading ? <p>로딩중입니다</p> : null}
      {isError ? <p>에러</p> : null}
      <h2> Todo 연습장 1/8 </h2>
      {/* {data?.map((d: any) => {
        return console.log(d);
      })} */}
      <p>{data ? <span>data있음</span> : <span>data없음</span>}</p>
      <div>
        <span>{data?.data[0].text}</span>
        <button
          onClick={() => {
            handleDelete(data?.data[0].id);
          }}
        >
          삭제
        </button>
        <button>수정</button>
      </div>
      <div>
        {data?.data[1].text}
        <button>삭제</button>
        <button>수정</button>
      </div>
      <div>
        {data?.data[2].text}
        <button>삭제</button>
        <button>수정</button>
      </div>
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
};
export default Prac;
