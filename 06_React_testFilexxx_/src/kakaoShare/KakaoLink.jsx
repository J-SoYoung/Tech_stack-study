export const shareURL = (props) => {
  const { title, description, url } = props;
  console.log(title, description, url);
  // console.log(title, description, url);
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  // const LinkKey = "f5876968017c5d443420bc1fa1fa3fb8";

  if (window.Kakao) {
    const Kakao = window.Kakao;
    if (!Kakao.isInitialized()) {
      Kakao.init("f5876968017c5d443420bc1fa1fa3fb8");
      // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    }
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

// [Web] 항목의 [Domain]은 앱 정보의 [Web] 플랫폼 설정에 입력된 도메인 중 하나를 선택하는 방식으로 입력하고,
// 도메인 하위의 상세 주소인 [PATH]는 전체 URL에서 도메인을 제외한 값으로 입력합니다.
// 예를 들어 https://developers.kakao.com/docs라는 주소로 링크를 걸려면,
// [Domain]에 https://developers.kakao.com, [PATH]에 /docs를 각각 입력합니다.
// 만약 사용하려는 도메인이 선택 가능한 목록에 나타나지 않는다면 [내 애플리케이션]의 Web 플랫폼 정보에 해당 도메인을 추가해야 합니다.
