import { useState } from "react";
import Modal from "./components/ModalBasic";
import KakaoShare from "./kakaoShare/KakaoShare";
import _InfiniteScroll from "./infiniteScroll/file/_InfiniteScroll";
import InfiniteScroll from "./infiniteScroll/file/InfiniteScroll";
import Example from "./infiniteScroll/file/React_window";

function App() {
  return (
    <>
      {/* <Modal /> */}
      <KakaoShare />
      <Example />
    </>
  );
}

export default App;
