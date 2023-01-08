// reactQuery로 데이터 가져오기
import { useQuery } from "react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSuperHeroData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

export const RQSuperHeroesPage = () => {
  // 데이터를 가져오고 난 뒤에 성공, 실패에 따른 결과를 처리하기 위해서
  // hooks에 props로 넣어줌
  const onSuccess = (data) => {
    console.log("데이터 가져오기 성공", data);
  };
  const onError = (Error) => {
    console.log("데이터 가져오기 실패", Error);
  };

  // 전체 데이터를 가져오는 hooks
  // onSuccess, onError를 매개변수로 넣음
  // useSuperHeroData에서 받아온 결과값을 구조분해하여 사용
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroData(onSuccess, onError);

  if (isLoading || isFetching) {
    return <h2>is Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fecth heroes Add</button>
      {data?.data.map((hero) => {
        console.log(hero);
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* hook에서 data만 select해서 가져온 값으로 map을 돌려 데이터 표시 */}
      {/* {data.map((heroName)=>{
        return <div key={heroName}>{heroName}</div>
      })} */}
    </>
  );
};
