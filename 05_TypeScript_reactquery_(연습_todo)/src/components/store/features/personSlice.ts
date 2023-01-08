import { addPost } from "./../../../apiNote";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

// Person객체의 타입을 지정함
export interface Person {
  id: number;
  name: string;
}

// 이 slice 파일에 대한 interface를 정의
// Person객체를 모아서 관리하는 persons는 배열로 정의함
// Person객체 안에 들어가는 요소들의 타입을 위에서 지정해놓음
interface PersonState {
  persons: Person[];
}

// 초기상태 지정
// initialState는 Person객체을 관리하는 persons[]로 초기상태를 지정
// persons는 []배열이라는 타입을 위에서 지정해놓음
const initialState: PersonState = {
  persons: [],
};

// 슬라이스 생성
export const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    // action의 타입을 정의한다
    // PayloadAction : reduxToolkit에서 제공되는 payload의 유형
    // payload로 넘겨줄 매개변수의 type을 정의한다
    addPerson: (state, action: PayloadAction<{ name: string }>) => {
      // state에 initialstate인 persons에 push한다.
      state.persons.push({
        id: state.persons.length,
        name: action.payload.name,
      });
    },
  },
});

// personSlice의 reducer를 export해라. => store에 넣고 전체 reducer를 사용하기 위함
export default PersonSlice.reducer;

// personSlice의 action을 export해라. => 각 컴포넌트에서 사용하기 위함
export const { addPerson } = PersonSlice.actions;
