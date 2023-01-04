import React, { CSSProperties } from 'react';
import { ThdudTodo } from '../modules/thdudTodoData';

type ThdudItemProps = {
  thdudTodo: ThdudTodo;
  onDone: (id: number) => void;
  onDelete: (id: number) => void;
};

const ThdudItem = ({ thdudTodo, onDone, onDelete }: ThdudItemProps) =>{  

    // CSSProperties 는 style 객체의 타입입니다.
    const textStyle: CSSProperties = {
      textDecoration: thdudTodo.done ? 'line-through' : 'none'
    };
    
    const removeStyle: CSSProperties = {
      marginLeft: 8,
      color: 'red'
    };
  
    const handleDone = () => {
      onDone(thdudTodo.id);
    };
  
    const handleDelete = () => {
      onDelete(thdudTodo.id);
    };

  return (
    <li>
      <span onClick={handleDone} style={textStyle}>
        {thdudTodo.text}
      </span>
      <span onClick={handleDelete} style={removeStyle}>
        (X)
      </span>
    </li>
  )
  }

export default ThdudItem;