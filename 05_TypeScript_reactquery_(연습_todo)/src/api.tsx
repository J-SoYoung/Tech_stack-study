import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { Todos } from "./Type";

// 여기서 axios결과값과
// 내가 보여주고자 하는 todos의 타입을 어떻게 지정하는가
export const getTodos = async () => {
  const res = await axios.get("http://localhost:3003/todos");
  return res;
};

export const addTodos = async (todo: any) => {
  const res = await axios.post("http://localhost:3003/todos", todo);
  return res;
};

export const deleteTodos = async (id: any) => {
  const res = await axios.delete(`http://localhost:3003/todos/${id}`);
  return res;
};

export const useAddtodo = () => {
  const QueryClient = useQueryClient();
  return useMutation(addTodos, {
    onSuccess: () => {
      QueryClient.invalidateQueries("todolist");
    },
  });
};

export const useDeleteTodo = () => {
  const QueryClient = useQueryClient();
  return useMutation(deleteTodos, {
    onSuccess: () => {
      QueryClient.invalidateQueries("todolist");
    },
  });
};
