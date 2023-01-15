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
