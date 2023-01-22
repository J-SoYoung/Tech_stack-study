// axios hook을 생성할 것임

import { useState, useEffect } from "react";
import { getPostPage } from "../api/axios";

const usePosts = (pageNum = 1) => {
  // axios이후 결과값을 상태관리하는 것이다.
  // 결과값은 [] , isLoadin ... boolean값, error는 객체형태
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);

  // pageNum변경될 때, useEffect( = 페이지를 요청해라)를 실행해라.
  // 마운트가 해제될 때 요청을 취소할 컨트롤러를 만들어야 한다.
  // AbortController() 하나 이상의 웹 요청을 중단할 수 있는 컨트롤러 개체를 뜻함.
  // clean up 함수를 만들어야 한다
  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;

    getPostPage(pageNum, { signal })
      // data를 성공적으로 가져오면, serResult함수에 넣는다.
      // set함수에 업데이트 시키는데 이전data + 새data의 배열을 풀어서
      // 새로운 배열에 넣는다.
      .then((data) => {
        setResult((prev) => [...prev, ...data]);
        setHasNextPage(Boolean(data.length));
        // console.log(
        //   "Boolean(data.length) 어떻게 나옴? nextpage: ",
        //   hasNextPage
        // );
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (signal.aborted) {
          return setIsError(true);
          setError({ message: err.message });
        }
      });

    return () => controller.abort(); // 마운트 되기 전에 DOM 요청을 중단
  }, [pageNum]);

  // hook의 결과로 return할 것들
  return { isLoading, isError, error, result, hasNextPage };
};
export default usePosts;
