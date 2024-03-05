import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const StarshipItems = (props) => {

    const [ship, setShip] = useState('')

    console.log(ship)

    let { name } = useParams()

    useEffect(()=> {
        let ShipDetail = props.starships.find((ship) => ship.name === name)
        setShip(ShipDetail)
      }, [name])
 
        return ship ? (
        <div className="grid">
            <div className="card">
                <h4>{ship.name}</h4>
                <p>Model: {ship.model}</p>
                <p>Manufacturer: {ship.manufacturer}</p>
                <p>Passenger Capacity: {ship.passengers}</p>
                <p>Cargo Capacity: {ship.cargo_capacity}</p>
            </div>
        </div>

        
    ) : null
}
    
    
    export default StarshipItems