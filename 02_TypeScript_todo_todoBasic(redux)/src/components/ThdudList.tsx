import { ChangeEvent, useState } from "react"
import { ThdudTodo } from "../modules/thdudTodoData";
import ThdudItem from "./ThdudItem";

type ThdudTodoProps = {
  thdudTodos: ThdudTodo[];
  onDone: (id: number) => void;
  onDelete: (id: number) => void;
};

const ThdudList = ({thdudTodos, onDone, onDelete}:ThdudTodoProps) =>{  
  if(thdudTodos.length === 0) return <p>등록된 Todo가 없습니다</p>
  return (
    <ul>
      {/* thdudTodo에 있는 배열 = state값을 map돌린다  */}
      {thdudTodos.map(todo => (
        <ThdudItem
          thdudTodo={todo}
          onDone={onDone}
          onDelete={onDelete}
          key={todo.id}
        />
      ))}
    </ul>
  )
}

export default ThdudList;