import { useParams } from "react-router-dom"
import { searchByName } from "../../selectors/search"
import { HeroList } from "../hero/HeroList"


export const SearchScreen = () => {
    const { keyword } = useParams()

    const heroes = searchByName(keyword.toLocaleLowerCase())



    return (
        <div>
            {
                heroes.length > 0
                    ? <>
                        <h1>Resultado</h1>
                        <HeroList heroes={heroes} />
                    </>
                    : <h1>Opssss No hemos encontrado nada</h1>
            }
        </div>
    )
}