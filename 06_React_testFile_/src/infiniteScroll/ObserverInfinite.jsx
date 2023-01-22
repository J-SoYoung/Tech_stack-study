import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useInfiniteQuery } from "react-query";

const ObserverInfinite = () => {
  // ref
  const observerRef = React.useRef();
  const boxRef = React.useRef(null);

  const getPosts = async ({ pageParam = 1 }) => {
    const res = await axios.get(
      `http://localhost:3005/posts?_limit=7&_page=${pageParam}`
    );
    console.log(res);
    return res;
  };

  // const InfiniteScroll = () => {
  // const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery(
  //   ["posts"],
  //   getPosts,
  //   {
  //     getNextPageParam: (lastPage, pages) => {
  //       // console.log(lastPage, pages);
  //       return lastPage.next || undefined;
  //     },
  //   }
  // );

  const InfiniteScroll = () => {
    const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery(
      ["posts"],
      ({ pageParam = 1 }) =>
        axios.get(`http://localhost:3005/posts?_limit=7&_page=${pageParam}`),
      // axios.get(`http://localhost:3005/posts?`),
      {
        getNextPageParam: (lastPage, pages) => {
          // console.log(lastPage, pages);
          // return lastPage.next || undefined;
          return true;
        },
      }
    );
    // console.log(data);

    // IntersectionObserver 설정
    const intersectionObserver = (entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log("옵저버", entry);
          // 관찰하고 있는 entry가 화면에 보여지는 경우
          io.unobserve(entry.target); // entry 관찰 해제
          fetchNextPage(); // 다음 페이지 데이터 요청
        }
      });
    };

    // useEffect
    // 기존에 IntersectionObserver이 있을 경우
    // 연결 해제
    useEffect(() => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      // IntersectionObserver 새롭게 정의
      // boxRef 관찰 시작
      // res값이 변경될때마다 실행
      observerRef.current = new IntersectionObserver(intersectionObserver);
      boxRef.current && observerRef.current.observe(boxRef.current);
    }, []);

    // 로딩 중일 경우
    if (isLoading) {
      return <LoadingText>Loading...</LoadingText>;
    }

    // 결과값이 전달되었을 경우
    if (data) {
      // console.log(res.data);
      return (
        <Person.Container>
          {data.pages.map((page, pageIndex) => {
            const persons = page.data;
            return persons.map((person, personIndex) => {
              // console.log(persons.length);
              // console.log(pageIndex);
              // console.log(personIndex);
              // console.log(0 === 마지막이랑);
              // console.log(res.data.pages);
              return (
                // <PersonBoxs>
                <Person.Box
                  key={person.id}
                  // 가장 마지막에 있는 Box를 boxRef로 등록
                  ref={
                    persons.length * pageIndex + personIndex ===
                    data.pages.length * persons.length - 1
                      ? boxRef
                      : null
                  }
                >
                  {person.title}
                </Person.Box>
                // </PersonBoxs>
              );
            });
          })}
        </Person.Container>
      );
    }
  };

  return <Wrapper>{InfiniteScroll()}</Wrapper>;
};
const Wrapper = styled.div`
  max-width: 728px;

  margin: 0 auto;
`;

const LoadingText = styled.h3`
  text-align: center;
`;
const PersonBoxs = styled.div`
  height: 500px;
  border: 1px solid red;
`;
const Person = {
  Container: styled.div`
    height: 300px;
    background-color: yellow;
    overflow-y: scroll;
  `,
  Box: styled.div`
    height: 50px;
    border: 1px solid black;
  `,
};
export default ObserverInfinite;

// 페이지 네이션의 개수를 찾을 수 없다!!!!! ㅇㅅㅇ 어케 찾아
// ref의 부분?을 정확히 어떻게 짚어야 하는지 모르겠다!!!
