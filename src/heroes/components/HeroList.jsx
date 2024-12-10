import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./";

const HeroList = ({ publisher }) => {
  
    const heroes = useMemo( () => getHeroesByPublisher(publisher), [ publisher ])
  
  return (
    <div className="row rows-cols-1 row-cols-md-4 g-2 gap-4">
        {
            heroes.map((heroe) => 
                {
                    return (
                        <HeroCard key={ heroe.id } { ...heroe } />
                    )
                }
            )
        }
    </div>
  );

};

export default HeroList ;
