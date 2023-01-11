import axios from "axios";
import { useState } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { getTodos, useAddtodo, useDeleteTodo } from "../api";

import { Todos } from "../Type";
import SignupData from "./SignupData";
import SignupForm from "./SignupForm";

export default function SignupPage() {
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState("");

  const { data, isLoading, isError } = useQuery(["todolist"], () => {
    return getTodos();
  });

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
    <>
      {isLoading ? <p>로딩중입니다</p> : null}
      {isError ? <p>에러</p> : null}
      <h2> Todo 연습장 1/8 </h2>
      <SignupForm />
      <SignupData />
    </>
  );
}
