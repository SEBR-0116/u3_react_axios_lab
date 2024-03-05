import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StarshipsList() {
  const [starships, setStarships] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getStarships = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/`);
        setStarships(response.data.results);
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };
    getStarships();
  }, []);

  const showShip = (starship) => {
    if (starship && starship.url) {
      const id = starship.url.match(/\/(\d+)\/$/)[1];
      navigate(`/starship/${id}`);
    } else {
      console.error("Starship URL not found:", starship);
    }
  };
  
  

  return (
    <>
      <h2>List of Starships</h2>
      <div className="starship">
        {starships.map((starship, index) => (
          <div key={index} onClick={() => showShip(starship)} className="card">
            <h3>{starship.name}</h3>
            <h4>Model: {starship.model}</h4>
            <h4>Class: {starship.starship_class}</h4>
            <h4>Hyperdrive Rating: {starship.hyperdrive_rating}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
