import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const imagePath = `/assets/${id}.jpg`
    return (
        <div className="col">
            <div className='card'>
                <div className="row no-gutters">
                    <div className="col-4">
                        <img className="card-img" src={imagePath} alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">

                            <p className="card-title">{superhero}</p>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) 
                                && <p className="text-muted">{characters}</p>
                            }
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`} >
                                Mas...
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};
