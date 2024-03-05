import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const SpeciesList = (props) => {

  const [species, setSpecies] = useState([])

  useEffect(() => {
    const getSpecies = async () => {
      const response1 = await axios.get(`${BASE_URL}species`)
      const response2 = await axios.get(`${BASE_URL}species/?page=2`)
      const response3 = await axios.get(`${BASE_URL}species/?page=3`)
      const response4 = await axios.get(`${BASE_URL}species/?page=4`)


      const allPlanets = response1.data.results.concat(response2.data.results.concat(response3.data.results.concat(response4.data.results)))
      
      const sortedPlanets = allPlanets.toSorted((a, b) =>
          a.name.localeCompare(b.name))
      setSpecies(sortedSpecies)
    }

    getSpecies()
  }, [])

  console.log(species)

  if (species.length === 0) {
    return <h1>Retrieving from far, far away...</h1>
  } else {
    return (
      <div>
      <h1>Species</h1>
      {
        species.map((specie) => (
          <div key={specie.name} className="card">
           
            <h2>{specie.name}</h2>
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
export default SpeciesList