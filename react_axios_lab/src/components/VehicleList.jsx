import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function VehicleList(){

//setting our state for data to be pulled
const [vehicles, setVehicles] = useState([])

useEffect(()=>{
  const getVehicles = async() => {
    const response = await axios.get(`https://swapi.dev/api/vehicles/`)
    setVehicles(response.data.results)
  }
  getVehicles()
},[])

let navigate = useNavigate()

const showVehicle = (key) => {
  navigate(`${key}`)
}

return(
  <div className="starship">
    <h2>List of Vehicles</h2>
    {
      vehicles.map((vehicle, key) => (
        <div key={key} onClick={()=>showVehicle(key)} className="card">
          <h3>{vehicle.name}</h3>
        </div>
      ))
    }
  </div>
)
}