import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function PlanetList(){

//setting our state for data to be pulled
const [planets, setPlanets] = useState([])

useEffect(()=>{
  const getPlanets = async() => {
    const response = await axios.get(`https://swapi.dev/api/planets/`)
    setPlanets(response.data.results)
    console.log(response)
  }
  getPlanets()
},[])

let navigate = useNavigate()

const showPlanet = (key) => {
  navigate(`${key}`)
}

return(
  <div className="starship">
    <h2>List of Planets</h2>
    {
      planets.map((planet, key) => (
        <div key={key} onClick={()=>showPlanet(key)} className="card">
          <h3>{planet.name}</h3>
        </div>
      ))
    }
  </div>
)
}