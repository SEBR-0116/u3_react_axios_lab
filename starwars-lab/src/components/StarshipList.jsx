import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'


const StarshipList = (props) => {

  const [starships, setStarships] = useState([])

  useEffect(() => {
    const getStarships = async () => {
      const response1 = await axios.get(`${BASE_URL}starships`)
      const response2 = await axios.get(`${BASE_URL}starships/?page=2`)
      const response3 = await axios.get(`${BASE_URL}starships/?page=3`)
      const response4 = await axios.get(`${BASE_URL}starships/?page=4`)

      const allStarships = response1.data.results.concat(response2.data.results.concat(response3.data.results.concat(response4.data.results)))
      
      const sortedStarships = allStarships.toSorted((a, b) =>
          a.name.localeCompare(b.name))
      setStarships(sortedStarships)
    }

    getStarships()
  }, [])

  console.log(starships)

  if (starships.length === 0) {
    return <h1>Retrieving from far, far away...</h1>
  } else {
    return (
      <div>
      <h1>Starships</h1>
      {
        starships.map((starship) => (
          <div key={starship.name} className="card">
            
            <h2>{starship.name}</h2>
            <ul>
              {/* <h3>Model: {starship.model}</h3>
              <h3>Cost: {starship.cost_in_credits} credits</h3>
              <h3>Crew: {starship.crew} personel</h3>
              <h3>Max Atmospheric Speed: {starship.max_atmosphering_speed} km/h</h3>
              <h3>Hyperdrive Class: {starship.hyperdrive_rating}</h3> */}
            </ul>
          </div>
        ))
      }
      </div>
    )
}
}
export default StarshipList