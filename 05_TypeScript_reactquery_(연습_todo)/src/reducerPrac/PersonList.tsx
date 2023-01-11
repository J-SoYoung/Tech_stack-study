import React from "react";
import { useAppSelector } from "../store";
const List = () => {
  // state: 전체store
  // person: store에 slice이름
  // [ persons ]: slice의 초기값이름 => person의 { 객체들 } 모여있는 배열
  const persons = useAppSelector((state) => state.person.persons);
  console.log(persons);
  return (
    <div>
      <h2>-------ListTable--------</h2>
      <div>
        <div>
          <p>ID</p>
          <p>NAME</p>
        </div>
      </div>
      <div>
        {persons.map((person) => (
          <div key={person.id}>
            <span>{person.id} </span>
            <span> {person.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
