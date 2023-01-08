import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

import { useState } from 'react';

import {CounterContainer} from './containers/CounterContainer';
import TodoApp from './containers/TodoAdd';


const App = () => {
  // const [queryClient] = useState(() => new QueryClient());
  // QueryClient를 이용, queryClient 인스턴스를 생성. qeryclientProvider의 props로 전달
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CounterContainer/>
        <hr/>
        <TodoApp/>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
};

export default App;
