import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
export type Todo = {
  id: number;
  todo: string;
};

type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos: [],
};

export const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ todo: string }>) => {
      state.todos.push({
        id: state.todos.length,
        todo: action.payload.todo,
      });
    },
  },
});

export default TodosSlice.reducer;
export const { addTodo } = TodosSlice.actions;
