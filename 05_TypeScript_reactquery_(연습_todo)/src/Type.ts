import { AxiosRequestConfig, AxiosResponseHeaders } from "axios";

// export type TodoRespons = {
//   data: Todos;
//   status: number;
//   statusText: string;
//   headers: AxiosResponseHeaders;
//   config: AxiosRequestConfig;
//   request?: any;
// };
export type Todos = {
  Todo: [];
  text: string;
  content: string;
  isDone: false;
  isEdit: false;
  id: number;
};

export type Pracs = {
  text: string;
  content: string;
  isDone: false;
  isEdit: false;
  id: number;
};

export type Posts = {
  id: number;
  title: string;
  author: string;
  description: string;
};

export type SignupTypes = {
  email: string;
  emailCheck: boolean;
  password: number;
  passwordCheck: number;
};
