import { useState, useEffect } from "react";
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

  const showShip = (id) => {
    navigate(`/starships/${id}`);
  };

  return (
    <div className="starship">
      <h2>List of Starships</h2>
      {starships.map((starship, key) => (
        <div key={key} onClick={() => showShip(starship.url.split("/").slice(-2, -1)[0])} className="card">
          <h3>{starship.name}</h3>
        </div>
      ))}
    </div>
  );
}
