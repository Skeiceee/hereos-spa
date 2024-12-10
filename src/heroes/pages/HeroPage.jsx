import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router"
import { getHeroById } from "../helpers"

const HeroPage = () => {

  const { id } = useParams()
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById(id), [ id ])

  const onNavigateBack = () => {
    navigate(-1)
  }
  
  if( !hero ) {
    return <Navigate to="/marvel" />;
  }
  
  const heroImageUrl = `/assets/heroes/${ id }.jpg`;

  return (
    <div className="row mt-4 animate__animated animate__fadeIn animate__faster">
      <div className="col-4">
        <img src={ heroImageUrl } alt={ hero.superhero } className="img-thumbnail"/>
      </div>
      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">

          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>

          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
    
          <li className="list-group-item">
            <b>First appearance:</b> {hero.first_appearance}
          </li>

        </ul>

        <div className="mt-2">
          <h5> Characters </h5>
          <p>{ hero.characters }</p>
        </div>

        <button className="btn btn-primary"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>
      </div>
    </div>
  )
}

export default HeroPage
