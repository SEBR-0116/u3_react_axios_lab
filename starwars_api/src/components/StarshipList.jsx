import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const StarshipList = (props) => {

  // console.log('whats props in StarshipList', props)
  const [starships, setStarship] = useState([])

  useEffect(() => {
    const getStarships= async () => {
      const response = await axios.get(`https://swapi.dev/api/starships/`)
      console.log(response)
    }
    getStarships()
  }, [])

  const navigate = useNavigate()

  const showShip = (key) => {
    navigate(`${key}`)
  }

  // return (
  //   <div className="card" onClick={() => { showStarship(event) }}>
  //         <h3>Starship Name: {props.starship.name}</h3>
  //   </div>
  // )

  return(
    <div className="starship">
      {
        props.starships.map((starship, key) => (
          <div key={key} onClick={()=>showShip(key)} className="card">
            <h3>{starship.name}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default StarshipList