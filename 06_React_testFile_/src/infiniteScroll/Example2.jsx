import React, { useRef, useCallback } from "react";
import usePosts from "../hooks/usePosts";
import { useInfiniteQuery } from "react-query";
import { getPostPage } from "../api/axios";
import ExPost from "./ExPost";
import styled from "styled-components";

const Example2 = () => {
  const {
    status,
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
        return lastPage.length ? allPages.length + 1 : undefined;
      },
    }
  );

  const intObserver = useRef();
  const lastPostRef = useCallback(
    (post) => {
      // 페이지를 가져오는 중
      if (isFetchingNextPage) return;
      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((posts) => {
        console.log(posts);
        if (posts[0].isIntersecting && hasNextPage) {
          console.log("we are near the lasg post");
          fetchNextPage();
        }
      });
      if (post) intObserver.current.observe(post);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (status === "error")
    return <p className="center">Error: {error.message}</p>;
  // if (isError) return <p className="center">Error: {error.message}</p>;

  // 아래 렌더에서 보이는 게시물
  // 서버의 결과값을 가져와서 map돌림. 결과값이 마지막요소이면 콘솔을 찍어라
  // ExPost에 props로 데이터를 넘겨줄 것임
  console.log(data);
  const content = data?.pages.map((pg) => {
    console.log(pg);
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
      {/* 게시물 */}
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
