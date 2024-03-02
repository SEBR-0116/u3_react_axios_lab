import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../globals';
import { useParams, Link } from 'react-router-dom';

const StarshipPage = () => {
    const [starship, setStarship] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getStarship = async () => {
          const starshipId = id === "0" ? 1 : parseInt(id) + 1;
          const response = await axios.get(`${BASE_URL}/starships/${starshipId}/`);
            setStarship(response.data);
        };
        getStarship();
    }, [id]);

    return starship ? (
        <div className="detail">
            <h2>Name: {starship.name}</h2>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Cost in Credits: {starship.cost_in_credits}</p>
            <p>Length: {starship.length}</p>
            <p>Passengers: {starship.passengers}</p>
            <Link to="/starships">Return to starship list</Link>
        </div>
    ) : (
        <h3>Loading starship...</h3>
    );
};

export default StarshipPage;
