import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'

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

  let navigate=useNavigate()
  
  const showPlanet = (key) => {
    navigate(`${key}`)

    console.log(key)
  }

  if (planets.length === 0) {
    return <h1 className="retrieving-text">Retrieving from far, far away...</h1>
  } else {
    return (
      <div>
        <h1 className="page-title">Planets</h1>
        <div className="card-container">
        {
          planets.map((planet, key) => (
            <div key={key} className="card" onClick={() => showPlanet(parseInt(planet.url.substring(30,32)))}>
              <div className="first-display">
                <div className='category-container'>
                    <h2 className="Droid-text">Planet</h2>
                    <div className="category-lines">
                      <div className="category-line1"></div>
                      <div className="category-line2"></div>
                    </div>
                </div>
                <h2 className="name">{planet.name}</h2>
                  <ul className='second-display-long'>
                    <div className='details-container-long'>
                      <h3>Population -- {planet.population}</h3>
                      <div className="detail-line"></div>
                    </div>  
                  </ul>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    )
}
}
export default PlanetList