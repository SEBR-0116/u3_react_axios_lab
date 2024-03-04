

import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function StarshipsList(){


const [starships, setStarships] = useState([])

useEffect(()=>{
  const getStarships = async() => {
    const response = await axios.get(`https://swapi.dev/api/starships/`)
    setStarships(response.data.results)
    console.log(response)
  }
  getStarships()
},[])

let navigate = useNavigate()

const showShip = (key) => {
  navigate(`${key}`)
}

return(
  <> 
  <h2>List of Starships</h2>
  <div className="starship">
   
   
    {
      starships.map((starship, key) => (
        <div key={key} onClick={()=>showShip(key)} className="card">
          <h3>
            {starship.name}</h3>
          <h4> Model: {starship.model}</h4>
          <h4> Class: {starship.starship_class}</h4>
          <h4> Hyperdrive Rating: {starship.hyperdrive_rating}</h4>
        
  
        </div>
        
      ))
    }
     </div>
     </>
)
}