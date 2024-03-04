import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Base_URL } from '../globals'

const PlanetList = () => {
    const [planets, setPlanets] = useState([])
    const [selectedPlanet, setSelectedPlanet] = useState(null)

    useEffect(() => {
        axios.get(`${Base_URL}/planets`)
            .then(response => {
                setPlanets(response.data.results);
            })
            .catch(error => {
                console.error("Error fetching planets:", error);
            })
    }, [])

    const handlePlanetClick = (planet) => {
        // Toggle detail view: if clicked planet is already selected, deselect it; otherwise, select it
        if (selectedPlanet && selectedPlanet.name === planet.name) {
            setSelectedPlanet(null)
        } else {
            setSelectedPlanet(planet)
        }
    }

    return (
        <div>
            <h2>Planets</h2>
            {planets.map(planet => (
                <div key={planet.name}>
                    <p style={{cursor: 'pointer'}} onClick={() => handlePlanetClick(planet)}>
                        {planet.name}
                    </p>
                    {selectedPlanet && selectedPlanet.name === planet.name && (
                        <div>
                            <p>Climate: {planet.climate}</p>
                            <p>Terrain: {planet.terrain}</p>
                            {/* Render more details as needed */}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default PlanetList