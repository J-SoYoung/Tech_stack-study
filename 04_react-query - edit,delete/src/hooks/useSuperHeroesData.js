//Hooks - reactQuery로 데이터 가져오기
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:3005/superheroes");
};

const addSuperHero = (hero) => {
  return axios.post("http://localhost:3005/superheroes", hero);
};

// READ HOOKS
export const useSuperHeroData = (onSuccess, onError) => {
  return useQuery(
    "super-heroes", // query키 값
    fetchSuperHeros, // promise를 반환하는 함수
    {
      onSuccess,
      onError,
      // select:   (data)=>{
      //   const superHeroNames = data.data.map((hero)=> hero.name)
      //   return superHeroNames
      // }
    }
  );
};

// ADD HOOKS ( 추가하기 - 기본 )
export const UesAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: () => {
      // 쿼리 무효화
      // queryClient.invalidateQueries();
      // queryKey가 'super-heroes'로 시작하는 모든 쿼리 무효화
      queryClient.invalidateQueries("super-heroes");
    },
  });
};

// 데이터 추가 ----------------------------------------------------------------
// useMutation ( API호출 )
// export const UesAddSuperHeroData = () => {
//   return useMutation(addSuperHero);
// };

// 데이터 추가 후 새로고침 ----------------------------------------------------
// 데이터 추가 이후 다시 getData 하기 위해 queryClient를 무효화시켜야한다

// 1. queryClient import , 객체 만들기
// const queryClient = useQueryClient();

// 2. 성공시에 해야 할 일을 지정해줘야 하기 때문에
// useMutation에 두 번째 인자로 성공 콜백함수를 지정해준다

// export const UesAddSuperHeroData = () => {
//   const queryClient = useQueryClient();
//   return useMutation(addSuperHero, {
//     onSuccess: () => {
//       // 쿼리를 직접 무효화 시킨 후 데이터를 새로 패칭하도록
//       // queryClient.invalidateQueries();
//       // queryKey가 'super-heroes'로 시작하는 모든 쿼리 무효화
//       queryClient.invalidateQueries("super-heroes");
//     },
//   });
// };

// ---------------------------------------------------------------------------
// https://www.youtube.com/watch?v=Ev60HKYFM0s&list=PLC3y8-rFHvwjTELCrPrcZlo6blLBUspd2&index=3
// 이후 강의

// 추가 네트워크 요청 방지 ( 서버로 보내는 데이터가 있기 때문에 서버 응답을 또 받을 필요없다)
// mutation에서 반환된 데이터를 사용한다
// queryClient.setQueryData("super-heros", (oldQueryData) => {
//   // query의 기본인자로는 (old)이전 data를 가지고 있다
//   console.log(oldQueryData);
//   return {
//     ...oldQueryData,
//     data: [...oldQueryData.data, data.data],
//   };
// });
