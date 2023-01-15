import axios from "axios";
import React, { useState } from "react";
import { useQueries, useQuery } from "react-query";

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:3003/colors?_limit=2&_page=${pageNumber}`);
};

const PagenatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
      // 새 데이터를 가져올 때까지 이전 데이터를 유지시킴
    }
  );
  console.log(pageNumber);

  if (isLoading) {
    return <h2>is Loading</h2>;
  }
  if (isError) {
    return <h2>is isError</h2>;
  }
  // console.log(data);
  return (
    <>
      {data?.data.map((color) => {
        return (
          <div key={color.color_id}>
            <h2>
              {color.color_id}, {color.label}
            </h2>
          </div>
        );
      })}
      <div>
        <button
          onClick={() => {
            setPageNumber((page) => page - 1);
          }}
          disabled={pageNumber === 1}
        >
          prev Page
        </button>
        <button
          onClick={() => {
            setPageNumber((page) => page + 1);
          }}
          disabled={pageNumber === 4}
        >
          Next Page
        </button>
      </div>
      {isFetching && "isLoaing"}
    </>
  );
};

export default PagenatedQueriesPage;
