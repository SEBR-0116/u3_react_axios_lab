import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function PlanetsDetails (props){


    let {index}=useParams()
    const [planets, setPlanets]=useState('')

    useEffect(()=>{
        let selectedPlanet=props.planets.find(
            (planet)=> props.planets.indexOf(planet)===parseInt(index)
        )
        setPlanets(selectedPlanet)
    })
    return planets ? (
        <div className='detail'>
            <div className='detail-header'>
                <h1>{planets.name}</h1>



            </div>

        </div>
    ) : null
}
