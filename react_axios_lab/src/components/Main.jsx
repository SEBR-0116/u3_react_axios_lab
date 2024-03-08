import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import StarshipList from '../Lists/StarshipList'
import FilmList from '../Lists/FilmList'
import Planets from '../Lists/PlanetList'
import Species from '../Lists/SpecieList'
import PeopleList from '../Lists/PeopleList'
import Vehicles from '../Lists/VehicleList'



const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/StarshipList' element={<StarshipList />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}
export default Main