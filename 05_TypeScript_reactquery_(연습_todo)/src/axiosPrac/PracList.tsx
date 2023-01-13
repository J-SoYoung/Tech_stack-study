import React from "react";
import axios, { AxiosRequestConfig, AxiosResponseHeaders } from "axios";
import { useState } from "react";
import {
  useQuery,
  useMutation,
  QueryClient,
  useQueryClient,
} from "react-query";
import { getTodos, useAddtodo, useDeleteTodo } from "../api";
import { Todos } from "../Type";

// export type Todos = {
//   text: string;
//   content: string;
//   isDone: false;
//   isEdit: false;
//   id: number;
// };

const PracList = (todo: any) => {
  // console.log(todo);

  const { mutate: delTodo } = useDeleteTodo();
  const handleDelete = (id: number) => {
    delTodo(id);
  };

  return (
    <div>
      {todo
        ? todo?.todo.map((d: Todos, idx: number) => {
            return (
              <div key={d.id} style={{ border: "1px solid black" }}>
                <>
                  <p>text : {d.text}</p>
                  <p>content : {d.content}</p>
                </>
                <button
                  onClick={() => {
                    handleDelete(d.id);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default PracList;
