import React from 'react';
import { Link } from 'react-router-dom';

function StarshipListElement({ starships }) {
  return (
    <div>
      {starships.map((starship, index) => (
        <div key={index} className="starship-card">
          <Link to={`/starships/${starship.id}`}>
            <h2>{starship.name}</h2>
          </Link>
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
          {/* You can add more details if needed */}
        </div>
      ))}
    </div>
  );
}

export default StarshipListElement;
