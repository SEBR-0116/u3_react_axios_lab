import axios from 'axios';
import { BASE_URL } from '../globals';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getApiCharacters = async () => {
      const response = await axios.get(`${BASE_URL}/people/`)
      setCharacters(response.data.results)
    }

    getApiCharacters()
  }, [])

  return (
    <div className="Character">
      <h2>List of Characters</h2>
      {characters.map((character, key) => (
        <div key={key} className="card">
          <h3>
            <Link to={`/characters/${key + 1}`}>{character.name}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};
