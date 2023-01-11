// reactQuery로 데이터 가져오기
import { useQuery } from "react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  UesAddSuperHeroData,
  useSuperHeroData,
} from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

export const RQSuperHeroesPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = (data) => {
    console.log("데이터 가져오기 성공", data);
  };
  const onError = (Error) => {
    console.log("데이터 가져오기 실패", Error);
  };

  // useAddSuperData의 hook의 결과값을 구조분해할당으로 받는다
  // { mutate } 기본값 , mutate : addHero (별칭등록)
  // const { mutate: addHero } = UesAddSuperHeroData();
  const {
    mutate: addHero,
    isLoading: addHeroLoading,
    isError: addHeroIsError,
    error: addHeroError,
  } = UesAddSuperHeroData();

  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };

  // 전체 데이터를 가져오는 hooks
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
      <div style={{ padding: "30px" }}>
        <h2>React Query Super Heroes Page</h2>
        <input
          type="text"
          value={name}
          placeholder="hero name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={alterEgo}
          placeholder="Ego"
          onChange={(e) => {
            setAlterEgo(e.target.value);
          }}
        />
        <button onClick={handleAddHeroClick}> 나도Heroes할래 </button>
      </div>
      <hr />
      <div style={{ padding: "30px" }}>
        <button onClick={refetch}>Fecth heroes</button>
        {data?.data.map((hero) => {
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
      </div>
    </>
  );
};
