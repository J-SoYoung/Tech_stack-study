import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import AppModalBasic from "./AppModalBasic";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
      {/* <AppModalBasic /> */}
    </React.StrictMode>
  </QueryClientProvider>
);
