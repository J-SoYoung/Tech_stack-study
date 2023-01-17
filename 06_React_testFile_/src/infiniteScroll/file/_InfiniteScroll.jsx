import axios from "axios";
import React, { useEffect } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { FixedSizeList } from "react-window";

const _InfiniteScroll = () => {
  const getPosts = async () => {
    const res = await axios.get(`http://localhost:3005/posts`);
    return res;
  };
  const { data, isLoading, isError } = useQuery(["posts"], getPosts);

  const list = data?.data.map((d) => {
    return (
      <>
        <p>d.title</p>
        <p>d.content</p>
      </>
    );
  });

  return (
    <>
      <h2>무한스크롤 window.react버전</h2>
      <FixedSizeList height={150} itemCount={100} itemSize={35} width={300}>
        {list}
      </FixedSizeList>
      {/* {data?.pages.map((group) => {
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
      })} */}
    </>
  );
};

export default _InfiniteScroll;
