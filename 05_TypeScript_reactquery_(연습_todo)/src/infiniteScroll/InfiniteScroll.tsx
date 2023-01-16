import axios from "axios";
import React, { useEffect } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { DiaryTypes } from "../Type";

const getDiary = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:3003/diary?_limit=5&_page=${pageParam}`);
};

const InfiniteScroll = () => {
  const { data, hasNextPage, isLoading, isError, fetchNextPage } =
    useInfiniteQuery(["diary"], getDiary, {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 4) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    });
  // console.log(data);
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
  // console.log(data);
  return (
    <>
      <h2>타입스크립트 무한스크롤</h2>
      {data?.pages.map((diary) => {
        return diary.data.map((d: DiaryTypes) => {
          return (
            <div
              key={d.id}
              style={{
                border: "1px solid gray",
                width: "300px",
                margin: "10px 0",
                padding: "10px",
              }}
            >
              <p>{d.title}</p>
              <p>{d.content}</p>
            </div>
          );
        });
      })}
    </>
  );
};

export default InfiniteScroll;
