import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import usePosts from "../hooks/usePosts";
import ExPost from "./ExPost";

const Example1 = () => {
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, isError, error, result, hasNextPage } = usePosts(pageNum);

  // 마지막 포스트 ref를 찾아라. useCallback으로 정의한다
  // useCallback에 사용될 post는 우리가 갖게 될 요소 ( 마지막 ref이다 )
  // post상태에 대한 많은 내용 추가될 것임
  // 1. loading 상태일때
  // 2. 등록된 관찰 대상 요소와의 관찰을 중단시키는 메서드
  //     -> 왜 여기서 나오는지 모르겟. 언마운트때 나와야 하는거아니가, 여튼 패스

  // 옵저버 기본구조
  // 콜백함수와 옵션을 받는다
  // const io = new IntersectionObserver(callback[, options])
  const intObserver = useRef();
  const lastPropsRef = useCallback(
    (post) => {
      if (isLoading) return;
      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((posts) => {
        console.log(posts);
        if (posts[0].isIntersecting && hasNextPage) {
          console.log("we are near the lasg post");
          setPageNum((prev) => prev + 1);
        }
      });
      if (post) intObserver.current.observe(post);

      // useCallback은 의존성배열을 가지고 있기 때문에 상태를 확인해야 할 필요가 있다.
      // 아래의 내용에 변경이 있을 경우 콜백을 사용해 전달해야 한다
    },
    [isLoading, hasNextPage]
  );

  if (isError) return <p className="center">Error: {error.message}</p>;

  // 아래 렌더에서 보이는 게시물
  // 서버의 결과값을 가져와서 map돌림. 결과값이 마지막요소이면 콘솔을 찍어라
  // ExPost에 props로 데이터를 넘겨줄 것임

  const content = result.map((post, i) => {
    if (result.length === i + 1) {
      console.log("last ele");
      return <ExPost ref={lastPropsRef} key={post.id} post={post} />;
    }
    return <ExPost key={post.id} post={post} />;
  });

  return (
    <Box>
      <h1>
        &infin; infinite Query &amp; Scroll <br />
        &infin; Ex. 1 - React only
      </h1>
      {/* 게시물 */}
      {content}

      {/* 게시물을 아래로 스크롤 했을 때, 빨리 결과가 나오지 않을 때를 대비하여 */}
      {isLoading && <p className="center"> Loading More Posts... </p>}
      <div className="center">
        <a href="#top">Back to Top</a>
      </div>
    </Box>
  );
};

const Box = styled.div`
  border: 3px solid red;
  height: 700px;
  overflow-y: scroll;
`;
export default Example1;
