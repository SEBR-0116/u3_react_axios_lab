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
                <h1>{vehicle.name}</h1>



            </div>

        </div>
    ) : null
}
