import axios from "axios";
import { useState } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { getTodos, useAddtodo, useDeleteTodo } from "../api";
import PracData from "./PracData";
import PracInput from "./PracInput";

import { Todos } from "../Type";

export default function Prac() {
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState("");

  const { data, isLoading, isError } = useQuery(["todolist"], () => {
    return getTodos();
  });


  return (
    <>
      {isLoading ? <p>로딩중입니다</p> : null}
      {isError ? <p>에러</p> : null}
      <h2> Todo 연습장 1/8 </h2>
      <PracInput />
      <PracData />
    </>
  );
}
