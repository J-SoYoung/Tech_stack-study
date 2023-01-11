import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

export const getPosts = async () => {
  const res = await axios.get("http://localhost:3003/posts");
  // setPosts(res.data);
  return res;
};

export const addPost = async (post: any) => {
  const res = await axios.post("http://localhost:3003/posts", post);
  console.log(res);
  return res;
};

export const delPost = async (id: number) => {
  const res = await axios.delete(`http://localhost:3003/posts/${id}`);

  return res;
};

export const useAddPost = () => {
  const QueryClient = useQueryClient();
  return useMutation(addPost, {
    onSuccess: () => {
      // posts의 키캆을 가진 queryClient를 초기화시켜라
      QueryClient.invalidateQueries("posts");
    },
  });
};

export const useDelPost = () => {
  const QueryClient = useQueryClient();
  return useMutation(delPost, {
    onSuccess: () => {
      // posts의 키캆을 가진 queryClient를 초기화시켜라
      QueryClient.invalidateQueries("posts");
    },
  });
};
