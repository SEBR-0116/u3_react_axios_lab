import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function PeopleList(){

//setting our state for data to be pulled
const [persons, setPeople] = useState([])

useEffect(()=>{
  const getPeople = async() => {
    const response = await axios.get(`https://swapi.dev/api/people/`)
    setPeople(response.data.results)
  }
  getPeople()
},[])

let navigate = useNavigate()

const showPeople = (key) => {
  navigate(`${key}`)
}

return(
  <div className="starship">
    <h2>List of People</h2>
    {
      persons.map((people, key) => (
        <div key={key} onClick={()=>showPeople(key)} className="card">
          <h3>{people.name}</h3>
        </div>
      ))
    }
  </div>
)
}