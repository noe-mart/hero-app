

import { HeroCard } from './HeroCard';


export const HeroList = ({ heroes }) => {
    

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div>
    )
};
