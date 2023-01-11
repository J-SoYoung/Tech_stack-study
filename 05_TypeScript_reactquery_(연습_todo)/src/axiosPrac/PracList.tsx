import React from "react";
import axios, { AxiosRequestConfig, AxiosResponseHeaders } from "axios";
import { useState } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
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

  const [isEdits, setIsEdits] = useState(false);
  const [editData, setEditData] = useState("");

  const { mutate: delTodo } = useDeleteTodo();
  const handleDelete = (id: number) => {
    delTodo(id);
  };

  const handleEditForm = (idx: number) => {
    // 한꺼번에 바뀌는 것ㅋㅋㅋ
    setIsEdits(!setIsEdits);
  };

  // const { mutate: editTodo } = useEditTodo()
  const handleEdit = (idx: number) => {
    // const before = data?.data[idx];
    setIsEdits(!isEdits);
    // editTodo()
  };

  return (
    <div>
      {todo
        ? todo?.todo.map((d: Todos, idx: number) => {
            return (
              <div key={d.id} style={{ border: "1px solid black" }}>
                {!isEdits ? (
                  <>
                    <p>text : {d.text}</p>
                    <p>content : {d.content}</p>
                  </>
                ) : (
                  <input
                    defaultValue={d.text}
                    onChange={(e) => {
                      setEditData(e.target.value);
                    }}
                  />
                )}
                <button
                  onClick={() => {
                    handleDelete(d.id);
                  }}
                >
                  삭제
                </button>
                {!isEdits ? (
                  <button
                    onClick={() => {
                      handleEditForm(idx);
                    }}
                  >
                    수정
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleEdit(idx);
                    }}
                  >
                    수정완료
                  </button>
                )}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default PracList;
