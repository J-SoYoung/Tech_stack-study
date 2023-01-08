import React from 'react';
import { useQuery } from "react-query";
import axios from "axios";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { toggleTodo, removeTodo, addTodo } from '../modules/todos';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';

interface todos {
  id : number;
  text : string;
  done : boolean;
}

const getTodos = async () => {
  const { data } = await axios.get<todos[]>("http://localhost:3003/todos");
  return data;
};

function TodoApp() {
  const todosReducer = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const {
    data: todos, 
    isLoading, 
    isError, 
    error,
  } = useQuery<todos[], Error>("todos", getTodos)
  console.log(todos, isLoading, isError)


  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <div style={{padding:'30px'}}>
      <TodoInsert onInsert={onInsert} />
      <TodoList todosReducer={todosReducer} onToggle={onToggle} onRemove={onRemove} />
    </div>
  );
}

export default TodoApp;