import React from "react";
import axios from "axios";

import { useState } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { useAddtodo } from "../api";
import "./SignupForm.css";

const SignupForm = () => {
  


  // const { mutate: addSignup } = useAddSignup();
  const buttonClickSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const todolist = {};
    // addSignup(todolist);
  };

  const emailCheck = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // email 정규식검사
    // 서버에 get요청 email
    // 성공하면 버튼 바뀜 : 이메일 확인 / 다시보내기 , 이메일 버튼 비활성화
  };
  const authNumberCheck = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // 서버에 get요청 auth
    // 성공하면 회원가입 성공에 T/F
  };

  return (
    <form className="signupForm" onSubmit={buttonClickSignup}>
      <div>
        <input type="email" placeholder="이메일을 입력해주세요" />
        <button type="button" onClick={emailCheck}>
          이메일 확인
        </button>
      </div>
      <div>
        <input type="number" placeholder="인증번호를 입력해주세요" />
        <button type="button" onClick={authNumberCheck}>
          인증번호 확인
        </button>
      </div>
      <input type="password" placeholder="비밀번호를 입력해주세요" />
      <input type="password" placeholder="비밀번호를 한번 더 입력해주세요" />
      <input type="text" placeholder="닉네임을 입력해주세요" />
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignupForm;
