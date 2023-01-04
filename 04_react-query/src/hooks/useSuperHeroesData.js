// reactQuery로 데이터 가져오기
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeros = () => {
  return axios.get('http://localhost:3003/superheroes')
}

export const useSuperHeroData = (onSuccess, onError) => {
  return useQuery(
    'super-heroes',  // query키 값
    fetchSuperHeros, // promise를 반환하는 함수
    {
      onSuccess,
      onError,
      select: (data)=>{
        const superHeroNames = data.data.map((hero)=> hero.name)
        return superHeroNames
      }
    }    
  )
}


// useQuery
// { 
//  세번째 인자로 다양한 후속처리, fetching이 가능하다
//  efetchOnMount : true, 컴포넌트 마운트시 새로운 데이터 패칭 (false면 가져오지않)
//  refetchOnWindowFocus : 브라우저 클릭 시 새로운 데이터 패칭
//  데이터를 가져오고 난 후(성공/실패) 의 처리

//  select: (data)=>{
//  많은 데이터들 중에서 data 하나만 가져오겠다. 
//   const superHeroNames = data.data.map((hero)=> hero.name)
//   console.log(superHeroNames)
//   return superHeroNames
// }

// 사용자 정의 hook을 생성 export로 내보내서 사용 가능하다 