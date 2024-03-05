import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'

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

  let navigate=useNavigate()
  
  const showVehicle = (key) => {
    navigate(`${key}`)

    console.log(key)
  }

  if (vehicles.length === 0) {
    return <h1 className="retrieving-text">Retrieving from far, far away...</h1>
  } else {
    return (
      <div>
        <h1 className="page-title">Vehicles</h1>
        <div className="card-container">
        {
          vehicles.map((vehicle, key) => (
            <div key={key} className="card" onClick={() => showVehicle(parseInt(vehicle.url.substring(32,34)))}>
              <div className="first-display">
                <div className='category-container'>
                    <h2 className="Droid-text">Vehicle</h2>
                    <div className="category-lines">
                      <div className="category-line1"></div>
                      <div className="category-line2"></div>
                    </div>
                </div>
                <h2 className="name">{vehicle.name}</h2>
                  <ul className='second-display-long'>
                    <div className='details-container-long'>
                      <h3>-- {vehicle.vehicle_class}</h3>
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
export default VehicleList