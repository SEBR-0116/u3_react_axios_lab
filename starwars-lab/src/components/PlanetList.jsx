import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const PlanetList = (props) => {

  const [planets, setPlanets] = useState([])

  useEffect(() => {
    const getPlanets = async () => {
      const response1 = await axios.get(`${BASE_URL}planets`)
      const response2 = await axios.get(`${BASE_URL}planets/?page=2`)
      const response3 = await axios.get(`${BASE_URL}planets/?page=3`)
      const response4 = await axios.get(`${BASE_URL}planets/?page=4`)
      const response5 = await axios.get(`${BASE_URL}planets/?page=5`)
      const response6 = await axios.get(`${BASE_URL}planets/?page=6`)
  

      const allPlanets = response1.data.results.concat(response2.data.results.concat(response3.data.results.concat(response4.data.results.concat(response5.data.results.concat(response6.data.results)))))
      
      const sortedPlanets = allPlanets.toSorted((a, b) =>
          a.name.localeCompare(b.name))
      setPlanets(sortedPlanets)
    }

    getPlanets()
  }, [])

  console.log(planets)

  if (planets.length === 0) {
    return <h1>Retrieving from far, far away...</h1>
  } else {
    return (
      <div>
      <h1>Planets</h1>
      {
        planets.map((planet) => (
          <div key={planet.name} className="card">
           
            <h2>{planet.name}</h2>
            <ul>
              <h3></h3>
            </ul>
          </div>
        ))
      }
      </div>
    )
}
}
export default PlanetList