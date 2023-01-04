import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThdudForm from '../components/ThdudForm';
import ThdudList from '../components/ThdudList';
import { RootState } from '../modules';
import { addTodo, deleteTodo, doneTodo } from '../modules/thdudTodoData';



function ThdudApp() {
  const dispatch = useDispatch();
  // const thdudTodos = useSelector((state: RootState) => state.todos);
  const thdudTodos = useSelector((state: RootState) => state.thdudTodoData);
  console.log()

  const addForm = (todo:string) => {
    console.log('thdudFomr에서 온 값, dispatch', todo)
    dispatch(addTodo(todo))
  }
  const onDone = (id: number) => {
    dispatch(doneTodo(id))
  }
  const onDelete = (id: number) => {
    dispatch(deleteTodo(id))
  }
  
  return (
    <div style={{padding:'30px', boxSizing:'border-box'}}>
      <h1>소영</h1>
      <ThdudForm addForm={addForm} />
      <ThdudList thdudTodos={thdudTodos} onDone={onDone} onDelete={onDelete} />
    </div>
  );
}

export default ThdudApp;