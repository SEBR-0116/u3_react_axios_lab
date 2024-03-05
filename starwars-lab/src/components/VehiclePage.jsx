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
                    <h1>{starship.name}</h1>
                </div>
                <h3 className="info-title">Ship details</h3>
                <div className="info-wrapper">
                    <h3>-- Model: {starship.model}</h3>
                    <h3>-- Manufacturer: {starship.manufacturer}</h3>
                    <h3>-- Cost: {starship.cost_in_credits} credits</h3>
                    <h3>-- Speed: {starship.max_atmosphering_speed} km/h</h3>
                    <h3>-- Hyperdrive Rating: {starship.hyperdrive_rating}</h3>
                    <h3>-- Length: {starship.length}m</h3>
                    <h3>-- Crew: {starship.crew}</h3>
                    <h3>-- Passengers: {starship.passengers}</h3>
                    <h3>-- Cargo Capacity: {starship.cargo_capacity}kg</h3>
                </div>
            </div>
            <div className="goback-link">
            <Link to="/starships">Go Back</Link>
            </div>
        </div>
        
    ) : null 
}
 export default StarshipPage