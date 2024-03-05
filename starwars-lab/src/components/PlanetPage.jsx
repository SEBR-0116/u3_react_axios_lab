import { useEffect, useState } from 'react'
import { Link,  useParams } from 'react-router-dom'
import axios from "axios"


const PlanetPage = () => {

    const [planet, setPlanet] = useState('')

    let {id} = useParams()
console.log(id)
    useEffect(() => {
        const getPlanet = async() => {
            const response = await axios.get(`https://swapi.dev/api/planets/${id}`)
            setPlanet(response.data)
            console.log(response.data)
        }
        getPlanet()
        
    }, [])

    

    return planet ? (
        <div>
            <div className="item-container">
                <div className="item-header">
                    <h1>{planet.name}</h1>
                </div>
                <h3 className="info-title">Planet details</h3>
                <div className="info-wrapper">
                    <h3>-- Rotational Period: {planet.rotation_period} hrs</h3>
                    <h3>-- Orbital Period: {planet.orbital_period} days</h3>
                    <h3>-- Diameter: {planet.diameter} km</h3>
                    <h3>-- Climate: {planet.climate}</h3>
                    <h3>-- Gravity: {planet.gravity}</h3>
                    <h3>-- Terrain: {planet.terrain}</h3>
                    <h3>-- Population: {planet.population}</h3>
                </div>
            </div>
            <div className="goback-link">
            <Link to="/planets">Go Back</Link>
            </div>
        </div>
        
    ) : null 
}
 export default PlanetPage