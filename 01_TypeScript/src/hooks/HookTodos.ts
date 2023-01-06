import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchTodoData = () => {
  return axios.get("http://localhost:3003/users");
};

const addTodoData = (todos: any) => {
  return axios.post("http://localhost:3003/users", todos);
};

export const HookTodosAdd = () => {
  return useMutation(addTodoData, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
