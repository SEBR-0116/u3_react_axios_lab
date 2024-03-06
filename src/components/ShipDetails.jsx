import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ShipDetails() {
  // Setting up the individual starship in state
  const [starship, setStarship] = useState(null);
  // Setting up the param to pull to be the ship's ID
  const { id } = useParams();

  useEffect(() => {
    const getStarship = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/${id}`);
        setStarship(response.data);
      } catch (error) {
        console.error("Error fetching starship:", error);
      }
    };
    getStarship();
  }, [id]);

  return starship ? (
    <div className="detail">
      <h2>Name: {starship.name}</h2>
      <p><strong>Model:</strong> {starship.model}</p>
      <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
      <p><strong>Cost in Credits:</strong> {starship.cost_in_credits}</p>
      <p><strong>Length:</strong> {starship.length}</p>
      <p><strong>Max Atmosphering Speed:</strong> {starship.max_atmosphering_speed}</p>
      <p><strong>Crew:</strong> {starship.crew}</p>
      <p><strong>Passengers:</strong> {starship.passengers}</p>
      <p><strong>Cargo Capacity:</strong> {starship.cargo_capacity}</p>
      <p><strong>Consumables:</strong> {starship.consumables}</p>
      <p><strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}</p>
      <p><strong>MGLT:</strong> {starship.MGLT}</p>
      <p><strong>Starship Class:</strong> {starship.starship_class}</p>
      <Link to="/starships">Return to Starship List</Link>
    </div>
  ) : (
    <h3>Finding starship...</h3>
  );
}

export default ShipDetails;
