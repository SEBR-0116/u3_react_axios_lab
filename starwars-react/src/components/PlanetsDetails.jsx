import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import '../componentsStyles/planets.css'

export default function PlanetsDetails (props) {
  console.log(props)

  const [planets, setPlanets] = useState([])
  let {id} = useParams()

  useEffect(()=>{
    const getPlanets = async() => {
    const response = await axios.get(`https://swapi.dev/api/planets/${id}`)
    console.log(response)
    setPlanets(response.data)
  }
  getPlanets()
},[])

  if (!planets) {
    return <h1> Loading Please Wait </h1>
  } else {
    return (
      <div>
        <h4>* Hours are comparred to Earth hours</h4>
        <h4>** Days are comparred to Earth days</h4>
        {
            <div key={id}>
              <div className='planet-info'>
                <div className='planet-name'>
                  <div className='label'>Name:</div>
                  <div className='value'>{planets.name}</div>
                </div>
              </div>
              <div className='rotation'>Hours per day*: {planets.rotation_period}</div>
              <div className='days'>Days per Year**: {planets.orbital_period}</div>
              <div className='climate'>Climate: {planets.climate}</div>
              <div className='water'>Water surface: {planets.surface_water}</div>
              <div className='terrain'>Terrain: {planets.terrain}</div>
              <div className='population'>Population: {planets.population}</div>
              <div className='diameter'>Diameter: {planets.diameter}</div>
              <Link to="/planetslist"> Return to planet list</Link>
            </div>
        }
      </div>
    )
  }
}