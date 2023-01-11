// reactQuery로 데이터 가져오기
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeros = () => {
  return axios.get('http://localhost:3003/superheroes')
}
const fetchFriends = () => {
  return axios.get('http://localhost:3003/friends')
}

export const ParallelQueriesPage = ()=>{
  const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeros)
  const { data: friends } = useQuery('friends', fetchFriends)
  
  return (
    <div>ParallelQueriesPage</div>
  )
}



// import연결 => axios로 데이터 가져오기 => useQuery로 필요한 데이터 요청
//   useQuery('super-heroes', fetchSuperHeros)
//   useQuery('friends', fetchFriends)

// 병렬 처리
// 데이터 패칭이 여러개 실행되어야 한다면 useQuery를 병렬로 선언하면 된다.
//  const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeros)
//  const { data: friends } = useQuery('friends', fetchFriends)
// data에 별칭 처리를 해주면 된다 