import { useEffect, useState } from 'react'
import { Link,  useParams } from 'react-router-dom'
import axios from "axios"


const VehiclePage = () => {

    const [vehicle, setVehicle] = useState('')

    let {id} = useParams()
    console.log(id)

    useEffect(() => {
        const getVehicle = async() => {
            const response = await axios.get(`https://swapi.dev/api/vehicles/${id}`)
            setVehicle(response.data)
            console.log(response.data)
        }
        getVehicle()
        
    }, [])

    

    return vehicle ? (
        <div>
            <div className="item-container">
                <div className="item-header">
                    <h1>{vehicle.name}</h1>
                </div>
                <h3 className="info-title">Vehicle details</h3>
                <div className="info-wrapper">
                    <h3>-- Model: {vehicle.model}</h3>
                    <h3>-- Manufacturer: {vehicle.manufacturer}</h3>
                    <h3>-- Cost: {vehicle.cost_in_credits} credits</h3>
                    <h3>-- Speed: {vehicle.max_atmosphering_speed} km/h</h3>
                    <h3>-- Vehicle Class: {vehicle.vehicle_class}</h3>
                    <h3>-- Length: {vehicle.length}m</h3>
                    <h3>-- Crew: {vehicle.crew}</h3>
                    <h3>-- Passengers: {vehicle.passengers}</h3>
                    <h3>-- Cargo Capacity: {vehicle.cargo_capacity}kg</h3>
                </div>
            </div>
            <div className="goback-link">
            <Link to="/vehicles">Go Back</Link>
            </div>
        </div>
        
    ) : null 
}
 export default VehiclePage