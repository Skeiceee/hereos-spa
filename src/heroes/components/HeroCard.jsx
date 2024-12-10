import { Link } from "react-router";

const CharactersByHero = ({ alter_ego, characters }) => {

    // if (alter_ego === characters) return (<></>);
    // return <p>{ characters }</p>

    return (alter_ego === characters) 
        ? <></> 
        : <p>{ characters }</p>;

}

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const heroImageUrl = `/assets/heroes/${ id }.jpg`;
  
  // const charactersByHero = (<p>{characters}</p>)

  return (
    <div className="card p-0 animate__animated animate__fadeIn animate__faster">
      <img src={ heroImageUrl } className="card-img-top img-fluid rounded"></img>
      <div className="card-body">

        <h5 className="card-title">{ superhero }</h5>
        <p className="card-text">{ alter_ego }</p>
        {/* {
            ( alter_ego !== characters ) && charactersByHero
            ( alter_ego !== characters ) && <p>{ characters }</p>
        } */}

        <CharactersByHero characters={characters} alter_ego={alter_ego}/>

        <p className="card-text">
            <small className="text-muted">{ first_appearance }</small>
        </p>
        <Link to={`/hero/${ id }`}>
            Más...
        </Link>

      </div>
    </div>
  );

};

export default HeroCard;
