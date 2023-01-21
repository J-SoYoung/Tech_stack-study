import React, { useEffect } from "react";
import { shareURL } from "./KakaoLink";

const KakaoShare = () => {
  useEffect(() => {
    // react에서 script태그를 동적으로 생성하기
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    // cleanup함수로...
    return () => document.body.removeChild(script);
  }, []);

  const title = "소영나라";
  const description = "소영나라로 초대합니다";
  const url = "detail/92";

  return (
    <>
      <div>share</div>

      <button
        onClick={() => {
          shareURL({ title, description, url });
        }}
      >
        카카오공유
      </button>
    </>
  );
};

export default KakaoShare;
