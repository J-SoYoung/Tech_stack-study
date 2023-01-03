import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Counter } from './Counter';
import { Todos } from './Todos';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Todos />
    {/* <Counter/> */}
  </React.StrictMode>
);

