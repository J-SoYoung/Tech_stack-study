import axios from "axios";
import React, { Fragment, useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:3003/colors?_limit=2&_page=${pageParam}`);
};
const InfiniteQueriesPage = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      // 두 개의 매개변수를 갖는 함수를 option으로 추가
      // 마지막 페이지 _lastPage , 페이지의 결과값 pages를 매개변수로 받는다
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  if (isLoading) {
    return <h2>is Loading</h2>;
  }
  if (isError) {
    return <h2>is isError</h2>;
  }
  console.log(fetchNextPage);
  return (
    <>
      {data?.pages.map((group, i) => {
        return (
          <Fragment key={i}>
            {group.data.map((g) => {
              return (
                <div key={g.color_id}>
                  <h2>
                    {g.color_id}, {g.label}
                  </h2>
                </div>
              );
            })}
          </Fragment>
        );
      })}
      <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>
          Lead more
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching" : null}</div>
    </>
  );
};

export default InfiniteQueriesPage;
