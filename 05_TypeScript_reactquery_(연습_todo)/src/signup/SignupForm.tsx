import React from "react";
import axios from "axios";

import { useState } from "react";
import {
  useQuery,
  useMutation,
  QueryClient,
  useQueryClient,
} from "react-query";
import { useAddtodo } from "../api";
import "./SignupForm.css";
import { emailCheckApi } from "../axiosPrac/api";
import styled from "styled-components";

const SignupForm = () => {
  const [email, setEmail] = useState("");

  // const { mutate: addSignup } = useAddSignup();
  const buttonClickSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const todolist = {};
    // addSignup(todolist);
  };

  const useEmailCheck = () => {
    const QueryClient = useQueryClient();
    return useMutation(emailCheckApi, {
      onSuccess: () => {
        QueryClient.invalidateQueries("email");
      },
    });
  };

  const { mutate: emailCheck } = useEmailCheck();
  const handleEmailCheck = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(email);
    const emailCheckData = {
      email: "thdud1@aaa.aaa",
      emailCheck: true,
    };
    // emailCheck(emailCheckData:SignupTypes);
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
    <SignFormBox className="signupForm" onSubmit={buttonClickSignup}>
      <ProfileImg src="/img/test.jpg" />
      <BackgroundImg src="/img/1666792352378.jpg" />
      <BackgroundImg src="/img/2.jpg" />
      <InputBox>
        <input
          type="email"
          value={email}
          placeholder="이메일을 입력해주세요"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="button" onClick={handleEmailCheck}>
          이메일 확인
        </Button>
      </InputBox>
      <InputBox>
        <input type="number" placeholder="인증번호를 입력해주세요" />
        <Button type="button" onClick={authNumberCheck}>
          인증번호 확인
        </Button>
      </InputBox>
      <input type="password" placeholder="비밀번호를 입력해주세요" />
      <input type="password" placeholder="비밀번호를 한번 더 입력해주세요" />
      <input type="text" placeholder="닉네임을 입력해주세요" />
      <Button type="submit">회원가입</Button>
    </SignFormBox>
  );
};
const SignFormBox = styled.form`
  ${({ theme }) => theme.common.flexCenterColumn}
`;
const InputBox = styled.div`
  input {
    width: ${({ theme }) => theme.widthStyle.inputWidth};
    height: ${({ theme }) => theme.widthStyle.inputHeigh};
    border-radius: ${({ theme }) => theme.widthStyle.inputBR};
  }
`;
const Button = styled.button`
  ${({ theme }) => theme.buttonStyle.basic}
`;
const ProfileImg = styled.img`
  ${({ theme }) => theme.imgStyle.profileImg}
`;
const BackgroundImg = styled.img`
  ${({ theme }) => theme.imgStyle.backgroundImg}
`;

export default SignupForm;

/* .signupForm {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
} */
