import {Route, Routes} from 'react-router-dom'

import Home from './Home'
import StarshipList from './StarshipList'
import StarshipPage from './StarshipPage'
import Planets from './Planets'
import Films from './Films'
import People from './People'
import Species from './Species'
import Vehicles from './Vehicles'

const Main = (props) => {

  console.log('Main props', props)
  const starships = props.starships
  const planets = props.planets
  const films = props.films
  const people = props.people
  const species = props.species
  const vehicles = props.vehicles

  // console.log('people is ', people)
  console.log('vehicles is ', vehicles)
  // console.log('planets variable', planets)

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/starships"
          element={
            <>
                <StarshipList starships={starships} />
            </>
          }
        />

        <Route
          path="/starships/:name"
          element=
          {<>

                <StarshipPage key={starships.name} starships={starships} />
            </>}
        />

        <Route
          path="/films"
          element={
            <>
              {films.map((film) => 
              <Films key={film } film={film} /> )}
            </>
          }
        ></Route> 

        <Route
          path="/planets"
          element={
          <div>
            {planets.map((planet) => 
              <Planets key={planet.name } planet={planet} /> )}
          </div>
          }
        />
        
        <Route
          path="/people"
          element={
          <div>
            {people.map((person) => 
              <People key={person.name } person={person} /> )}
          </div>
          }
        />

        <Route
          path="/species"
          element={
          <div>
            {species.map((specie) => 
              <Species key={specie.name } specie={specie} /> )}
          </div>
          }
        />

        <Route
          path="/vehicles"
          element={
          <div>
            {vehicles.map((vehicle) => 
              <Vehicles key={vehicle.name } vehicle={vehicle} /> )}
          </div>
          }
        />

      </Routes>
    </>
  )
}

export default Main