import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import CharacterList from './CharacterList'
import PlanetList from './PlanetList'
import FilmList from './FilmList'
// import SpeciesList from './SpeciesList'
import VehiclesList from './VehiclesList'

const Main = (props) => {
    return (
        <>
         <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/starships" element={<StarshipList/>}/>
                <Route path="/films" element={<FilmList/>}/>
                <Route path="/planets" element={<PlanetList/>}/>
                <Route path="/characters" element={<CharacterList/>}/>
                {/* <Route path="/species" element={<SpeciesList/>}/> */}
                <Route path="/vehicles" element={<VehiclesList/>}/>
            </Routes>
        </div>
        </>
    )
}

export default Main