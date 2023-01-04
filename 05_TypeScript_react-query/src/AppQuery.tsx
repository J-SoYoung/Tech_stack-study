import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

import { useState } from 'react';

import {CounterContainer} from './containers/CounterContainer';
import TodoApp from './containers/TodoAdd';
import Page from "./containers/Page";


const AppQuery = () => {
  const [queryClient] = useState(() => new QueryClient());
  // QueryClient를 이용, queryClient 인스턴스를 생성. qeryclientProvider의 props로 전달

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Page />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
};

export default AppQuery;
