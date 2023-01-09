import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./components/store/store";

// const [queryClient] = useState(() => new QueryClient());
// QueryClient를 이용,
// queryClient 인스턴스를 생성. qeryclientProvider의 props로 전달
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
      <ReactQueryDevtools />
    </Provider>
  </QueryClientProvider>
);
