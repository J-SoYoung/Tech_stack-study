import React from "react";
import axios from "axios";
import { useState } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { getTodos, useAddtodo, useDeleteTodo } from "../api";
import { Todos } from "../Type";

const PracData = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState("");

  const { data, isLoading, isError } = useQuery(["todolist"], () => {
    return getTodos();
  });
  console.log(data);
  const { mutate: delTodo } = useDeleteTodo();
  const handleDelete = (id: number) => {
    delTodo(id);
  };

  const handleEditForm = (idx: number) => {
    // 한꺼번에 바뀌는 것ㅋㅋㅋ
    setIsEdit(!isEdit);
  };

  // const { mutate: editTodo } = useEditTodo()
  const handleEdit = (idx: number) => {
    const before = data?.data[idx];
    setIsEdit(!isEdit);
    // 데이터수정은 어떻게 ㅋㅋ
    // editTodo()
  };

  return (
    <div>
      {data
        ? data?.data.map((d: Todos, idx: number) => {
            return (
              <div key={d.id} style={{ display: "flex", alignItems: "center" }}>
                {!isEdit ? (
                  <p>{d.text}</p>
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
                {!isEdit ? (
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

export default PracData;
