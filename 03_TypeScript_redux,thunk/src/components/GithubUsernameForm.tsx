import React, { FormEvent, useState, ChangeEvent } from 'react';
import './GithubUsernameForm.css';

type GithubUsernameFormProps = {
  onSubmitUsername: (username: string) => void;
};

function GithubUsernameForm({ onSubmitUsername }: GithubUsernameFormProps) {
  const [input, setInput] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(input);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form className="GithubUsernameForm" onSubmit={onSubmit}>
      <input onChange={onChange} value={input} placeholder="Github 계정명을 입력하세요." />
      <button type="submit">조회</button>
    </form>
  );
}

export default GithubUsernameForm;

// 첫번째 컴포넌트 GithubUsernameForm 에서는 사용자 계정명을 입력 할 수 있는 인풋과, 
// 클릭하면 정보를 조회해주는 버튼을 만들어주도록 하겠습니다.