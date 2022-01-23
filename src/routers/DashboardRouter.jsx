import { Route, Routes } from "react-router-dom";

import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/hero/HeroScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";


export const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes className='container'>
                    <Route path='/' element={<MarvelScreen />} />
                    <Route path='marvel' element={<MarvelScreen />} />
                    <Route path='dc' element={<DcScreen />} />
                    <Route path='search' element={<SearchScreen />} />
                    <Route path='hero/:id' element={<HeroScreen />} />
                </Routes>
            </div>
        </>
    )
};
