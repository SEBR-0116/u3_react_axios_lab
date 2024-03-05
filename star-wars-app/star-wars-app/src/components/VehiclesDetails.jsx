import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function VehiclesDetails (props){

console.log(props.vehicles)
    let {index}=useParams()
    const [vehicle, setVehicle]=useState('')

    useEffect(()=>{
        let selectedVehicle=props.vehicles.find(
            (vehicle)=> props.vehicles.indexOf(vehicle)===parseInt(index)
        )
        setVehicle(selectedVehicle)
    })
    return vehicle ? (
        <div className='detail'>
            <div className='detail-header'>
                <h1>Name: {vehicle.name}</h1>
                <h3>Model: {vehicle.model}</h3>
                <h3>Cost: ᖬ{vehicle.cost_in_credits}</h3>
                <h3>Crew: {vehicle.crew}</h3>



            </div>

        </div>
    ) : null
}
