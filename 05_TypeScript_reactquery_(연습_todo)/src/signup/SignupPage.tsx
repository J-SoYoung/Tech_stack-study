import axios from "axios";
import { useState } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { getTodos, useAddtodo, useDeleteTodo } from "../api";

import SignupForm from "./SignupForm";

export default function SignupPage() {
  // const { data, isLoading, isError } = useQuery(["signup"], () => {
  //   return getTodos();
  // });

  return (
    <>
      {/* {isLoading ? <p>로딩중입니다</p> : null}
      {isError ? <p>에러</p> : null} */}
      <SignupForm />
    </>
  );
}
