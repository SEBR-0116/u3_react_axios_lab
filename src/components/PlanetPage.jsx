import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../globals';
import { useParams, Link } from 'react-router-dom';

const PlanetPage = () => {
    const [planet, setPlanet] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getPlanet = async () => {
          const planetId = id === "0" ? 1 : parseInt(id) + 1;
            const response = await axios.get(`${BASE_URL}/planets/${planetId}`);
            setPlanet(response.data);
        };
        getPlanet();
    }, [id]);

    return planet ? (
        <div className="detail">
            <h2>Name: {planet.name}</h2>
            <p>Rotation Period: {planet.rotation_period}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Climate: {planet.climate}</p>
            <p>Gravity: {planet.gravity}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
            <Link to="/planets">Return to planet list</Link>
        </div>
    ) : (
        <h3>Loading planet...</h3>
    );
};

export default PlanetPage;
