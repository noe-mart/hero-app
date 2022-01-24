import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";


export const HeroScreen = () => {
  const navigate = useNavigate()

  const {id} = useParams()

  const hero = useMemo(() => getHeroById(id), [id])

  if(hero === undefined){
    return <Navigate to="/" />
  }
  const imagePath = `/assets/${id}.jpg`

  const handleClick = () => {
    navigate(-1)
  }
  return (
      <div className="row mt-5">
        <div className="col-4">
          <img src={imagePath} alt={hero.superhero} className="img-thumbnail"/>
        </div>
        <div className="col-8">
          <ul className="list-group">
            <li className="list-group-item"> <b>Alter ego</b> {hero.alter_ego}</li>
            <li className="list-group-item"> <b>Publsher</b> {hero.publisher}</li>
            <li className="list-group-item"> <b>First Appearance</b> {hero.first_appearance}</li>
          </ul>
          <h5>Characters</h5>
          <p>{hero.characters}</p>
          <button className="btn btn-info" onClick={handleClick}>
            Regresar
          </button>
        </div>
      </div>
  );
};
