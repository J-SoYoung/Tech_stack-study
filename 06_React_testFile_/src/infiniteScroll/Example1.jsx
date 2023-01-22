import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import usePosts from "../hooks/usePosts";
import ExPost from "./ExPost";

const Example1 = () => {
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, isError, error, result, hasNextPage } = usePosts(pageNum);

  // observer를 사용할 것임
  const intObserver = useRef();

  // 마지막 페이지 여부를 찾아라
  // post => usePosts result 배열의 요소
  const lastPropsRef = useCallback(
    (post) => {
      if (isLoading) return;

      // observer가 관찰하고 있는 곳이 있으면 중지하라
      if (intObserver.current) intObserver.current.disconnect();

      // Intersection Observer API는 콜백을 생성한다
      // 1. 대상(target)요소가 특정 요소와 교차할 때 / 2. observer가 최초로 타겟을 관측하도록 요청받을 때.
      // isIntersecting : IntersectionObserver의 Entryr값(=posts)이 교차 관찰자의 루트와 교차하는 경우 T/F 값을 출력한다
      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log("we are near the lasg post");
          setPageNum((prev) => prev + 1);
        }
      });
      // 마지막 페이지에 속하는 post가 있으면 observer가 ref하고 있음
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
