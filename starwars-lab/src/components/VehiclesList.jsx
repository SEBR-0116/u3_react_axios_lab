import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const VehicleList = (props) => {

  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    const getVehicles = async () => {
      const response1 = await axios.get(`${BASE_URL}vehicles`)
      const response2 = await axios.get(`${BASE_URL}vehicles/?page=2`)
      const response3 = await axios.get(`${BASE_URL}vehicles/?page=3`)
      const response4 = await axios.get(`${BASE_URL}vehicles/?page=4`)
  
      const allVehicles = response1.data.results.concat(response2.data.results.concat(response3.data.results.concat(response4.data.results)))
      
      const sortedVehicles = allVehicles.toSorted((a, b) =>
          a.name.localeCompare(b.name))
      setVehicles(sortedVehicles)
    }

    getVehicles()
  }, [])

  console.log(vehicles)

  if (vehicles.length === 0) {
    return <h1>Retrieving from far, far away...</h1>
  } else {
    return (
      <div>
      <h1>Vehicles</h1>
      {
        vehicles.map((vehicle) => (
          <div key={vehicle.name} className="card">
           
            <h2>{vehicle.name}</h2>
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
export default VehicleList