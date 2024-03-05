import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SpecieList(){

//setting our state for data to be pulled
const [species, setSpecies] = useState([])

useEffect(()=>{
  const getSpecies = async() => {
    const response = await axios.get(`https://swapi.dev/api/species/`)
    setSpecies(response.data.results)
    console.log(response)
  }
  getSpecies()
},[])

let navigate = useNavigate()

const showSpecie = (key) => {
  navigate(`${key}`)
}

return(
  <div className="starship">
    <h2>List of Species</h2>
    {
      species.map((specie, key) => (
        <div key={key} onClick={()=>showSpecie(key)} className="card">
          <h3>{specie.name}</h3>
          
        </div>
      ))
    }
  </div>
)
}