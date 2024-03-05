// StarshipPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StarshipPage(props) {
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    const getStarshipDetails = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/${props.id}/`);
        setStarship(response.data);
      } catch (error) {
        console.error("Error fetching starship details:", error);
      }
    };
    getStarshipDetails();
  }, [props.id]);

  if (!starship) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Class: {starship.starship_class}</p>
      <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
    </div>
  );
}
