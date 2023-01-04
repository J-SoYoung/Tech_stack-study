// 액션 타입 선언
const ADD_TODO = 'thdudTodoData/ADD_TODO' as const;
const DONE_TODO = 'thdudTodoData/DONE_TODO' as const;
const DELETE_TODO = 'thdudTodoData/DELETE_TODO' as const;

let nextId = 1; // 새로운 항목을 추가 할 때 사용 할 고유 ID 값

// 액션 생성 함수
// 매개변수로 들어오는 값은 string이다
export const addTodo = (todo: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    todo
  }
});

// 토글 : 완료
export const doneTodo = (id: number) => ({
  type: DONE_TODO,
  payload: id
});

// 삭제 
export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: id
});

// 모든 액션 객체들에 대한 타입 준비
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof doneTodo>
  | ReturnType<typeof deleteTodo>;

// 선영님 PJ코드랑 비슷 합쳐보기
// 상태에서 사용할 할 일 항목 데이터 타입 정의
export type ThdudTodo = {
  id: number;
  text: string;
  done: boolean;
};

// 이 모듈에서 관리할 상태는 Todo 객체로 이루어진 배열
export type ThdudState = ThdudTodo[];

// 초기 상태 선언
const initialState: ThdudState = [];


// 리듀서 작성
function thdudTodoData(
  state: ThdudState = initialState,
  action: TodosAction
): ThdudState {
  switch (action.type) {
    case ADD_TODO:
      console.log(action.payload)
      return state.concat({
        // action.payload 객체 안의 값이 모두 유추됩니다.
        // 인자로 주어진 배열(,값)들을 기존 배열에 합쳐 새 배열 반환
        id: action.payload.id,
        text: action.payload.todo,
        done: false
      });

    case DONE_TODO:
      return state.map(todo =>
        // payload 가 number 인 것이 유추됩니다. 인자의 type이 number다
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    case DELETE_TODO:
      // payload 가 number 인 것이 유추됩니다. 인자의 type이 number다
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default thdudTodoData;