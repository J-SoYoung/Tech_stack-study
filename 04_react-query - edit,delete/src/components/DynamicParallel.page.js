// reactQuery로 데이터 가져오기
import { useQueries, useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeros = (heroId) => {
  return axios.get(`http://localhost:3003/superheroes/${heroId}`)
}


// 여러 hero의 id를 가지고 와갸함
export const DynamicParallelPage = ({ heroIds }) =>{
  console.log(heroIds)
  const queryResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey : ['super-hero', id],
        queryFn : () => fetchSuperHeros(id)
      }
    })
  )
  console.log({queryResult})
  return  (
    <>
      <div>DynamicParallelPage</div>
      
    </>
  )
}


// 병렬처리 방법2 useQueries 
// 하지만 쿼리의 수가 많아지면 많아질수록 변수를 다 기억해야 하는 단점이 생기고 모든 쿼리에 대한 로딩, 성공, 실패 처리를 다 해줘야 하므로 불편함을 겪을 수 있다. 그럴때는 useQueries를 사용하면 된다.

// 여러개의 heroId를 받아와서 query에 있는 key와 fn를 병렬적으로 출력함.  