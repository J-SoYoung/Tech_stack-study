import React, { useEffect } from "react";

export type KakaoShare = {
  title: string;
  description: string;
  url: string;
};
export const KakaoShareLink = (data: KakaoShare) => {
  const { title, description, url } = data;
  // console.log(title, description, url);

  if (window.Kakao) {
    const Kakao = window.Kakao;
    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.REACT_APP_SHARE_KAKAO_LINK_KEY);
    }
    console.log(title, description, url);
    Kakao.Share.sendCustom({
      templateId: 88651,
      templateArgs: {
        title: title,
        description: description,
        url: url,
      },
    });
  }
};

const KakaoButton = () => {
  useEffect(() => {
    // // react에서 script태그를 동적으로 생성하기
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    // // cleanup함수로...
    // return () => document.body.removeChild(script);
  }, []);

  const KakaoShareStart = () => {
    const data = {
      title: "thdud",
      description: "thdud11",
      url: "detail/92",
    };
    // console.log(data);
    KakaoShareLink(data);
  };

  return (
    <>
      <div>share</div>
      <button onClick={KakaoShareStart}>카카오공유</button>
    </>
  );
};

export default KakaoButton;
