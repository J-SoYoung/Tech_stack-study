import { useState } from "react";

import SignupPage from "./signup/SignupPage";

const App = () => {
  const [page, setPage] = useState(false);
  return (
    <>
      <h2>소영짱</h2>
      <SignupPage />
      {/* <button onClick={(e) => setPage(!page)}>전환</button>
      {page ? (
        <>
          <Todo />
          <Todolist />
        </>
      ) : (
        <AxiosPrac />
      )} */}
    </>
  );
};

export default App;
