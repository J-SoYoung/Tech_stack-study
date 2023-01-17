// 개별 데이터 가져오기 hooks
// Wow. heroId를 넣어서 hooks을 요청하면 useQuery가 heroId에 맞는 데이터를 가져온다

import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:3003/superheroes/${heroId}`);
};
export const useSuperHeroData = (heroId) => {
  return useQuery(["super-hero", heroId], () => fetchSuperHero(heroId));
};

// useQuery의 3번째 인자에 화살표 함수가 아닌,
// queryKey가 연결된 함수를 바로 호출하여 사용할 수 있다.

// const fetchSuperHero = ({queryKey}) => {
//   const heroId = queryKey[1]
//   return axios.get(`http://localhost:3003/superheroes/${heroId}`)
// }

// export const useSuperHeroData = (heroId) =>{
//   return useQuery (['super-hero', heroId], fetchSuperHero)
// }

// queryKey ----------------------------------------------------------------
// queryKey는 React Query에서 중요한 개념이다.
// 내부적으로 데이터를 캐시하고 쿼리에 대한 종속성이 변경될 때
// queryKey를 통해 자동으로 데이터를 가져올 수 있게 한다.
// 그리고 필요한 시점에 queryKey를 통해 query cache와 상호작용이 가능하다

// React Query는 cache에 Key를 이용해 접근하기 때문에 key값은 중복될 수 없고 unique 해야 한다
// useQuery 및 useInfiniteQuery 에 동일한 Key를 사용할 수 없으며, 하나의 query cache만 유효하게 된다.

// useQuery(['todos'], fetchTodos)
// 🚨 잘못된 사용 (key값이 중복된다 )
// useInfiniteQuery(['todos'], fetchInfiniteTodos)
// ✅ 사용 가능
// useInfiniteQuery(['infiniteTodos'], fetchInfiniteTodos)
