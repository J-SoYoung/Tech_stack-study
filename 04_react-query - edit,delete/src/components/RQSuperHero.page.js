import { useParams } from "react-router-dom"
import { useSuperHeroData } from "../hooks/useSuperHeroData"

export const RQSuperHeroPage = () => {
  const {heroId} = useParams()
  const heroData = useSuperHeroData(heroId)
  console.log(heroData)

  const {isLoading, data, isError, error} = useSuperHeroData(heroId)
  console.log(isLoading, data, isError, error)

  if (isLoading){
    return <h2>Loading...</h2>
  }
  if (isError){
    return <h2>{error.message}</h2>
  }
  return (
    <h2>{data?.data.name} - {data.data.alterEgo}</h2>
    )
}
