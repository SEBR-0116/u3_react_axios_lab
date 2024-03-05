import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function StarshipsList() {
  const [starships, setStarships] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getStarships = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/`)
        setStarships(response.data.results)
      } catch (error) {
        console.error("Error fetching starships:", error)
      }
    };
    getStarships()
  }, []);

  const showShip = (url) => {
    const id = url.split('/').reverse()[1] // Extract ID from the URL
    navigate(`/starship/${id}`)
  };

  return (
    <>
      <h2>List of Starships</h2>
      <div className="starship">
        {starships.map((starship, index) => (
          <div key={index} onClick={() => showShip(starship.url)} className="card">
            <h3>{starship.name}</h3>
          </div>
        ))}
      </div>
    </>
  )
}
