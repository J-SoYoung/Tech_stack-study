import axios from "axios";
import React, { useEffect } from "react";
import { useInfiniteQuery, useQuery } from "react-query";

export const getPosts = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:3005/posts?_limit=5&_page=${pageParam}`);
};

const InfiniteScroll = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(["posts"], getPosts, {
      getNextPageParam: (_lastPage, pages) => {
        //마지막 페이지를 모르면? 어떻게 하나?
        if (pages.length < 4) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    });

  const handleScroll = () => {
    // 페이지의 총 높이
    const scrollHeight = document.documentElement.scrollHeight;
    // 이미 스크롤된 높이
    const scrollTop = document.documentElement.scrollTop;
    // 현재 보여지는 페이지의 높이
    const clientHeight = document.documentElement.clientHeight;
    // scrollTop + clientHeight가 scrollHeight보다 클 경우 fetchNextPage 함수 호출.
    if (scrollTop + clientHeight >= scrollHeight) return fetchNextPage();
  };

  useEffect(() => {
    // 스크롤 감지 이벤트를 연결
    window.addEventListener("scroll", handleScroll);
    return () => {
      // 스크롤 함수 (handleScroll) 가 한번만 등록될 수 있도록 동작 후 제거.
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <h2>무한스크롤</h2>
      {data?.pages.map((group) => {
        return group.data.map((g) => {
          return (
            <div
              key={g.id}
              style={{
                border: "1px solid gray",
                width: "300px",
                margin: "10px 0",
                padding: "10px",
              }}
            >
              <div>{g.title}</div>
              <div>{g.content}</div>
            </div>
          );
        });
      })}
      {/* <button disabled={!hasNextPage} onClick={fetchNextPage}>
        read more
      </button> */}
      {}
    </>
  );
};

export default InfiniteScroll;
