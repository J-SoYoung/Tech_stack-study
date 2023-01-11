import React from "react";
import axios from "axios";
import { useState } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { useAddtodo } from "../api";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);

  const { mutate: addTodo } = useAddtodo();
  const handleClickSignup = () => {
    const todolist = {
      email: email,
      emailCheck: emailCheck,
      password: password,
      passwordCheck: passwordCheck,
    };
    addTodo(todolist);
  };
  const handleEmailCheck = () => {};

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
        }}
      >
        <input
          style={{ margin: "0 0 15px 0", height: "30px" }}
          type="email"
          value={email}
          placeholder="text input"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <input
          style={{ margin: "0 0 15px 0", height: "30px" }}
          type="number"
          value={emailCheck}
          placeholder="content input22"
          onChange={(e) => setEmailCheck(e.target.value)}
        /> */}
        <button onClick={handleEmailCheck}>이메일확인</button>
        <input
          style={{ margin: "0 0 15px 0", height: "30px" }}
          type="password"
          value={password}
          placeholder="content input22"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <input
          style={{ margin: "0 0 15px 0", height: "30px" }}
          type="password"
          value={passwordCheck}
          placeholder="content input22"
          onChange={(e) => setPasswordCheck(e.target.value)}
        /> */}
        <button onClick={handleClickSignup}>추가</button>
      </div>
    </>
  );
};

export default SignupForm;
