//Hooks - reactQuery로 데이터 가져오기
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:3003/superheroes");
};

const addSuperHero = (hero) => {
  return axios.post("http://localhost:3003/superheroes", hero);
};

// READ HOOKS
export const useSuperHeroData = (onSuccess, onError) => {
  return useQuery(
    "super-heroes", // query키 값
    fetchSuperHeros, // promise를 반환하는 함수
    {
      onSuccess,
      onError,
      // select: (data)=>{
      //   const superHeroNames = data.data.map((hero)=> hero.name)
      //   return superHeroNames
      // }
    }
  );
};

// ADD HOOKS
export const UesAddSuperHeroData = () => {
  // 데이터 추가 이후 다시 getData 하기 위해 queryClient를 무효화시켜야한다
  const queryClient = useQueryClient();

  // useMutation ( API호출, 콜백함수 )
  // useMutation ( addSuperHero, 성공시 콜백함수-매개변수를 가져와야함 : 화살표함수  )
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      // queryKey값 무효화해서 새로 데이터를 받아오는 방법
      // queryClient.invalidateQueries("super-heroes");
      // 추가 네트워크 요청 방지 ( 서버로 보내는 데이터가 있기 때문에 서버 응답을 또 받을 필요없다)
      // mutation에서 반환된 데이터를 사용한다
      console.log(data);
      queryClient.setQueryData("super-heros", (oldQueryData) => {
        // query의 기본인자로는 (old)이전 data를 가지고 있다
        console.log(oldQueryData);
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};
