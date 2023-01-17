export const shareURL = () => {
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  // const LinkKey = "f5876968017c5d443420bc1fa1fa3fb8";

  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      // kakao.init("f5876968017c5d443420bc1fa1fa3fb8");
      kakao.init(process.env.REACT_APP_SHARE_KAKAO_LINK_KEY);
      // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    }

    kakao.Link.sendDefault({
      objectType: "feed", // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title: "thdud", // 인자값으로 받은 title
        description: "설명", // 인자값으로 받은 title
        imageUrl: "이미지 url",
        link: {
          mobileWebUrl:
            "https://www.notion.so/fun-blog/697232220591406a8ffbd88daaeb59c3?v=4990615ef0044174834a16118e8f34c9", // 인자값으로 받은 route(uri 형태)
          webUrl:
            "https://www.notion.so/fun-blog/697232220591406a8ffbd88daaeb59c3?v=4990615ef0044174834a16118e8f34c9",
        },
      },
      buttons: [
        {
          title: "title",
          link: {
            mobileWebUrl:
              "https://www.notion.so/fun-blog/697232220591406a8ffbd88daaeb59c3?v=4990615ef0044174834a16118e8f34c9",
            webUrl:
              "https://www.notion.so/fun-blog/697232220591406a8ffbd88daaeb59c3?v=4990615ef0044174834a16118e8f34c9",
          },
        },
      ],
    });
  }
};
