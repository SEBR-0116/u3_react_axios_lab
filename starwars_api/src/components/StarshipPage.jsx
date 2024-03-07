import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const StarshipPage = (props) => {
  console.log('WHAT is props in StarshipPage?', props)
  
  const [selectedShip, setSelectedShip] = useState('')

  let { name } = useParams()
  
  useEffect(() => {
    const getShip = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships/`)
      setSelectedShip(response.data.results[name])
    }
    getShip()
  }, [])

  return selectedShip ? (
    <>
      <h3>I am StarshipPage Component</h3>
      <h3>{selectedShip.name}</h3>
      <ul>
        <li>model: {selectedShip.model}</li>
        <li>manufacturer: {selectedShip.manufacturer}</li>
        <li>cargo capacity: {selectedShip.cargo_capacity}</li>
      </ul>
      <Link to='/StarshipsList' >Go Back</Link>
    </>
  )  : <div>Finding starships...</div>
}

export default StarshipPage