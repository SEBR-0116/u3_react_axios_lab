import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import StarshipPage from './StarshipPage'
import starships from './StarshipList'
import CharacterList from './CharacterList'
import CharacterPage from './CharacterPage'
import characters from './CharacterList'
import PlanetList from './PlanetList'
import FilmList from './FilmList'
import SpeciesList from './SpeciesList'
import SpeciesPage from './SpeciesPage'
import species from './SpeciesList'
import VehiclesList from './VehiclesList'


const Main = (props) => {
    return (
        <>
         <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/starships" element={<StarshipList/>}/>
                <Route path="/starships/:id" element={<StarshipPage starships={starships}/>}/>
                <Route path="/films" element={<FilmList/>}/>
                <Route path="/planets" element={<PlanetList/>}/>
                <Route path="/characters" element={<CharacterList/>}/>
                <Route path="/characters/:id" element={<CharacterPage characters={characters}/>}/>
                <Route path="/species" element={<SpeciesList/>}/>
                <Route path="/species/:id" element={<SpeciesPage species={species}/>}/>
                <Route path="/vehicles" element={<VehiclesList/>}/>
            </Routes>
        </div>
        </>
    )
}

export default Main