import { HeroList } from "../hero/HeroList"
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'

export const MarvelScreen = () => {
    const publisher = 'Marvel Comics'
    const heroes = getHeroesByPublisher(publisher)

    return (
        <div>
            <h1>Marvel Screen</h1>
            <hr />
            <HeroList heroes={heroes} />
        </div>
    )
}