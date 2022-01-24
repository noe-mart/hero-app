import { heroes } from "../data/heroes";

export const searchByName = (name) => {
    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name))
}