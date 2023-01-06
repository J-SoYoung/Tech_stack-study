import { ChangeEvent, useState } from "react";
import { QueryClient } from "@tanstack/react-query";
import { HookTodosAdd } from "./hooks/HookTodos";

export const Todos = () => {
  const [todos, setTodos] = useState({
    title: "",
    email: "",
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setTodos({ ...todos, [name]: value });
  };

  const { mutate: addtodos } = HookTodosAdd();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onSubmit(state)
    // db에 저장해줘 화면에 보여
    console.log(todos);
    addtodos(todos);

    setTodos({
      title: "",
      email: "",
    });
    // console.log(todos);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={todos.title}
          onChange={onChangeInput}
          placeholder="제목작성"
        />
        <input
          type="email"
          name="email"
          value={todos.email}
          onChange={onChangeInput}
          placeholder="내용작성"
        />
        <button type="submit">추가</button>
      </form>
      <div></div>
    </>
  );
};

// react event에 typescript 사용하기
