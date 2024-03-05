import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import StarshipList from '../Lists/StarshipList'
import Planets from '../Lists/PlanetList'
import PeopleList from '../Lists/PeopleList'
import Vehicles from '../Lists/VehicleList'
import Species from '../Lists/SpecieList'
import FilmList from '../Lists/FilmList'

const Main = () => {
    return (
      <div>
        <Routes>
          <Route path='/starships' element={<StarshipList />} />
          <Route path='/' element={<Home />} />
          <Route path='/planets' element={<Planets />} />
          <Route path='/films' element={<FilmList />} />
          <Route path='/people' element={<PeopleList />} />
          <Route path='/vehicles' element={<Vehicles />} />
          <Route path='/species' element={<Species />} />
        </Routes>
      </div>
    )
  }
  export default Main