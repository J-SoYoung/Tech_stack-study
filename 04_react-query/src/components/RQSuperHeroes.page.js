// reactQuery로 데이터 가져오기
import { useQuery } from 'react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'

const fetchSuperHeros = () => {
  return axios.get('http://localhost:3005/superheroes')
}
export const RQSuperHeroesPage = () => {
  const {isLoading, data, isError, error} = useQuery('super-heroes', fetchSuperHeros )

  if(isLoading){
    return <h2>is Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.data.map(hero=>{
        return <div key={hero.id}>{hero.name}</div>
      })}
    </>
  )
}