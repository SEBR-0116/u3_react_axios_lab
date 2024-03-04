import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Base_URL } from '../globals'

const StarshipList = () => {
  const [starships, setStarships] = useState([]);
  const [selectedStarship, setSelectedStarship] = useState(null)

  useEffect(() => {
    axios.get(`${Base_URL}/starships`)
      .then(response => {
        setStarships(response.data.results)
      })
      .catch(error => {
        console.error("Error fetching starships:", error)
      });
  }, []);

  const handleStarshipClick = (starship) => {
    // Toggle detail view: if clicked starship is already selected, deselect it; otherwise, select it
    if (selectedStarship && selectedStarship.name === starship.name) {
      setSelectedStarship(null)
    } else {
      setSelectedStarship(starship)
    }
  };

  return (
    <div>
      <h2>Starships</h2>
      {starships.map(starship => (
        <div key={starship.name}>
          <p style={{cursor: 'pointer'}} onClick={() => handleStarshipClick(starship)}>
            {starship.name}
          </p>
          {selectedStarship && selectedStarship.name === starship.name && (
            <div>
              <p>Model: {starship.model}</p>
              <p>Manufacturer: {starship.manufacturer}</p>
              {/* Render more details as needed */}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default StarshipList
