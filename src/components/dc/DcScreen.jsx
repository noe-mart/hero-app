import { HeroList } from "../hero/HeroList"
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'

export const DcScreen = () => {
    const publisher = 'DC Comics'
    const heroes = getHeroesByPublisher(publisher)

    return (
        <div>
            <h1>Dc Screen</h1>
            <hr />
            <HeroList heroes={heroes} />
        </div>
    )
}