export type Todos = {
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
