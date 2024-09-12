import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import '../componentsStyles/planets.css'

export default function Planets (props) {
  console.log(props)

  const [planets, setPlanets] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const getPlanets = async () => {

      const response = await axios.get(`https://swapi.dev/api/planets/?page=${currentPage}`)
        
      setPlanets((prevPlanets) => [...(prevPlanets || []), ...response.data.results])
        
      if (response.data.next !== null) {
          setCurrentPage((prevPage) => prevPage + 1)
      } 
    }

    getPlanets()
  }, [currentPage])

  let navigate = useNavigate()

  const showPlanet = (key) => {
    navigate(`/planets/${key}`)
  }
  return(
    <div className="planets">
      <h2>List of Planets</h2>
      {
        planets.map((planet, index) => (
          <div key={index} onClick={()=>showPlanet(parseInt(planet.url.substring(30,32)))} className="card">
            <h3>{planet.name}</h3>
          </div>
        ))
      }
    </div>
  )
  }