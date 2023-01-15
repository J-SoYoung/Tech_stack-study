import { useState } from "react";
import Modal from "./components/ModalBasic";
import InfiniteScroll from "./infiniteScroll/InfiniteScroll";
import KakaoShare from "./kakaoShare/KakaoShare";

function App() {
  return (
    <>
      {/* <Modal /> */}
      <KakaoShare />
      <InfiniteScroll />;
    </>
  );
}

export default App;
