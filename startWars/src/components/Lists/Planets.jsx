
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Planets(){
    
// const [planets, setPlanets] =useState([])

// useEffect(()=>{

//     const getPlanets =async () => {
//         const response =await axios.get(`https://swapi.dev/api/planets/`)
//         setPlanets(response.data.results)
//         console.log(response)
//     }
//     getPlanets
// },[])

// let navigate = useNavigate()

// const showPlanet = (key) =>{
//     navigate(`${key}`)
// }
return (

<>
<h2> List of Planets</h2>

{/* <div className="planets">
    {
        planets.map((planet , key) =>(
            <div key={key} onClick={()=>showPlanet(key)} className="card">
                <h3>{planet.name}</h3>
                <h4>Rotation Period: {planet.rotation_period}</h4>
                <h4>Climate :{planet.climate} </h4>
                <h4>Gravity:{planet.gravity}</h4>
                <h4>Population: {planet.population}</h4>
            </div>
         ))
    }
</div>
 */}

</>
)

}