import { ChangeEvent, useState } from 'react';

export const Todos = () =>{
  
  const [todos, setTodos] = useState({
    title:"",
    contents:""
  })

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    const {name, value} = e.target
    setTodos({ ...todos, [name]: value });
  };

  const handleSubmit  = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onSubmit(state)
    setTodos({
      title:"",
      contents:""
    })
    console.log(todos);
  };

  return (
    <form onSubmit={handleSubmit }>
      <input 
        type="text" 
        name="title" 
        value={todos.title} 
        onChange={onChangeInput} 
        placeholder="제목작성" 
      />
      <input 
        type="text" 
        name="contents" 
        value={todos.contents} 
        onChange={onChangeInput} 
        placeholder="내용작성" 
      />
      <button type='submit'>추가</button>
    </form>
  )
}

// react event에 typescript 사용하기


