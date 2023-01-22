import React, { useRef, useCallback } from "react";
import usePosts from "../hooks/usePosts";
import { useInfiniteQuery } from "react-query";
import { getPostPage } from "../api/axios";
import ExPost from "./ExPost";
import styled from "styled-components";

const Example2 = () => {
  // query key는 query안의 내부 레이블이며 식별키다.
  // 함수는 매개변수를 가졌고, 함수의 결과는 구조분해되어 객체로 반환됨
  // option :
  const {
    isError,
    error,
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    "posts",
    ({ pageParam = 1 }) => {
      return getPostPage(pageParam);
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        // query는 수신한 모든 페이지를 추적할 수 있다.
        // 마지막 페이지 길이를 반환해
        // lastPage는 현재가 마지막이냐 물어보는것인가?
        // 마지막이면 전체페이지에 +1을 해라? 왜? 마지막이라며...
        // undefined를 출력하면 query는 마지막페이지가 없다는 것을 알고 hasNextPage는 false로 바뀜
        return lastPage.length ? allPages.length + 1 : undefined;
      },
    }
  );

  const intObserver = useRef();
  const lastPostRef = useCallback(
    (post) => {
      // 다음페이지가 loading중이면 useCallback을 나가라
      if (isFetchingNextPage) return;

      // observer가 관잘하고 있는 곳이 있으면 중지하라
      if (intObserver.current) intObserver.current.disconnect();

      // Intersection Observer API는 콜백을 생성한다
      // 1. 대상(target)요소가 특정 요소와 교차할 때 / 2. observer가 최초로 타겟을 관측하도록 요청받을 때.
      // isIntersecting : IntersectionObserver의 Entryr값(=posts)이 교차 관찰자의 루트와 교차하는 경우 T/F 값을 출력한다
      // 현재 페이지 다음에 또 페이지가 있는 경우 fetchNextPage()를 실행한다
      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log("we are near the lasg post");
          fetchNextPage();
        }
      });
      // post가 있으면 observer 목록에추가.
      if (post) intObserver.current.observe(post);

      // useCallback은 의존성배열을 가지고 있기 때문에 상태를 확인해야 할 필요가 있다.
      // 아래의 내용에 변경이 있을 경우 콜백을 사용해 전달해야 한다
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (isError) return <p className="center">Error: {error.message}</p>;

  // 아래 렌더에서 보이는 게시물
  // 서버의 결과값을 가져와서 map돌림. 결과값이 마지막요소이면 콘솔을 찍어라
  // ExPost에 props로 데이터를 넘겨줄 것임
  const content = data?.pages.map((pg) => {
    return pg.map((post, i) => {
      if (pg.length === i + 1) {
        return <ExPost ref={lastPostRef} key={post.id} post={post} />;
      }
      return <ExPost key={post.id} post={post} />;
    });
  });

  return (
    <Box>
      <h1>
        &infin; infinite Query &amp; Scroll <br />
        &infin; Ex. 2 - useInfiniteQuery
      </h1>
      {content}
      {/* 게시물을 아래로 스크롤 했을 때, 다음 페이지가 있는가 확인 */}
      {isFetchingNextPage && <p className="center"> Loading More Posts... </p>}
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
export default Example2;
