import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Fourofour from "./Fourofour"
import axios from "axios"

export default function StarshipPage() {
  const [starship, setStarship] = useState(null)
  let { id } = useParams()

  useEffect(() => {
    const getStarship = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/${id}`)
        setStarship(response.data)
      } catch (error) {
        console.error("Error fetching starship details:", error)
      }
    };
    getStarship()
  }, [id]) 

  return starship ? (
    <div className="starship-detail">
      <h2>Name: {starship.name}</h2>
      <h4>Model: {starship.model}</h4>
      <h4>Class: {starship.starship_class}</h4>
      <h4>Hyperdrive Rating: {starship.hyperdrive_rating}</h4>
      <Link to="/StarshipsList">Return to starship list</Link>
    </div>
  ) : (
    <h3><Fourofour/></h3>
  )
}
