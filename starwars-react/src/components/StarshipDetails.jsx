import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import '../componentsStyles/starships.css'

export default function StarshipDetails () {
  console.log()

  const [starship, setStarship] = useState()
  let {id} = useParams()

  useEffect(()=>{
    const getStarship = async() => {
    const response = await axios.get(`https://swapi.dev/api/starships/${id}`)
    console.log(response)
    setStarship(response.data)
  }
  getStarship()
},[])

  if (!starship) {
    return <h1> Loading Please Wait </h1>
  } else {
    return (
      <div>
        {
            <div key={id}>
              <div className='starship-info'>
                <div className='starship-name'>
                  <div className='label'>Name:</div>
                  <div className='value'>{starship.name}</div>                  
                </div>
              </div>
              <div className='model'> Model: {starship.model}</div>
              <div className='class'> Class: {starship.starship_class}</div>
              <div className='manufacture'> By: {starship.manufacturer}</div>
              <div className='crew'> Crew Members: {starship.crew}</div>
              <div className='pass-capacity'> Passanger Capacity: {starship.passengers}</div>
              <div className='cargo-capacity'> Cargo Capacity: {starship.cargo_capacity}</div>
              <div className='atmospher'> Max Atmosphering Speed: {starship.max_atmosphering_speed}</div>
              <div className='hyperdrive'> Hyperdrive Rating: {starship.hyperdrive_rating}</div>
              <Link to="/starshiplist"> Return to starship list</Link>
            </div>      
        }
      </div>
    )
  }
}