import React from "react";
import { useRef } from "react";
import { addPerson } from "./store/features/personSlice";
import { useAppDispatch } from "./store/store";

const Add = () => {
  // useRef값을 string type으로 선언하고 name변수에 넣을 수 있다
  const name = useRef<string>("");

  // dispatch는 redux에 있는 dispatch를 import하는 게 아니라
  // 내가 store에서 type을 지정해놓은 dispatch를 사용한다.
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <label>person name </label>
        {/* useRef를 사용해 input값을 가져올 수 있다 */}
        <input
          onChange={(e) => {
            name.current = e.target.value;
          }}
        />
        <button onClick={() => dispatch(addPerson({ name: name.current }))}>
          Add
        </button>
      </div>
    </>
  );
};

export default Add;
