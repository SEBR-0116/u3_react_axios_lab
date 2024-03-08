import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function PlanetList(){

//setting our state for data to be pulled
const [planets, setPlanets] = useState([])

useEffect(()=>{
  const gettingPlanets = async() => {
    const response = await axios.get(`https://swapi.dev/api/planets/`)
    setPlanets(response.data.results)
  }
  gettingPlanets()
},[])

let navigate = useNavigate()

const showPlanets = (key) => {
  navigate(`${key}`)
}

return(
  <div className="starship">
    <h2>List of Planets</h2>
    {
      planets.map((planet, key) => (
        <div key={key} onClick={()=>showPlanets(key)} className="card">
          <h3>{planet.name}</h3>
        </div>
      ))
    }
  </div>
)
}