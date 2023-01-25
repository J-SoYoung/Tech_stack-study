import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { store } from "./store";
import theme from "./thema";

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
      <ThemeProvider theme={theme}>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
        <ReactQueryDevtools />
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>
);
