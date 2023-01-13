import axios, { AxiosRequestConfig, AxiosResponseHeaders } from "axios";
import { useState } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { getTodos } from "./api";
import PracList from "./PracList";
import PracInput from "./PracInput";
import { Todos } from "../Type";

export default function AxiosPrac() {
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState("");

  // page에서 get요청으로 데이터를 불러온다
  // 사용할 데이터를 상수에 담아서 각 컴포넌트에 전달한다.
  // 이때 받을 컴포넌트는 타입을 정해 받아야 한다.
  // 서버에서 온 데이터는 처음에는 undefined이므로 컴포넌트 자체에
  // data가 있을 경우에 <pracList>에 컴포넌트로 값을 넘겨줘야 한다고 명시해야 한다
  // todo props로 가는 todoList타입 : [ {}, {}, {} ] 인데 조금 더 찾아보장

  const { data, isLoading, isError } = useQuery(["todolist"], () => {
    return getTodos();
  });
  const todoList = data?.data;

  return (
    <>
      {isLoading ? <p>로딩중입니다</p> : null}
      {isError ? <p>에러</p> : null}
      <h2> Todo 연습장 1/8 </h2>
      <PracInput />
      {data && <PracList todo={todoList} />}
      <button
        onClick={() => {
          window.location.href = "http://www.naver.com";
        }}
      >
        이동
      </button>
    </>
  );
}
