import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import '../componentsStyles/starships.css'

export default function StarshipList () {
  console.log()

  const [starships, setStarships] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

useEffect(()=>{
  const getStarships = async() => {

    const response = await axios.get(`https://swapi.dev/api/starships/?page=${currentPage}`)

    setStarships((prevStarship) => [...(prevStarship || []), ...response.data.results])

    if (response.data.next !== null) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }
  getStarships()
},[currentPage])

let navigate = useNavigate()

const showShip = (key) => {
  navigate(`/starships/${key}`)
}

return(
  <div className="starship">
    <h2>List of Starships</h2>
    {
      starships.map((starship, index) => (
        <div key={index} onClick={()=>showShip(parseInt(starship.url.substring(32,34)))} className="card">
          <h3>{starship.name}</h3>
        </div>
      ))
    }
  </div>
)
}