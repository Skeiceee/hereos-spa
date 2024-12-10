import { HeroList } from "../components"

const MarvelPage = () => {
  return (
    <div className="mt-4">

      <h1>Marvel Comics</h1>
      
      <hr />

      <HeroList publisher='Marvel Comics'></HeroList>

    </div>
  )
}

export default MarvelPage
