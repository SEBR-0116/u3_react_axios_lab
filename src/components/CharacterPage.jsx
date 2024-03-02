import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { BASE_URL } from '../globals';

const CharacterPage = () => {
    const [character, setCharacter] = useState(null);
    const { id } = useParams();

    useEffect(() => {
      const getApiCharacter = async () => {
        const response = await axios.get(`${BASE_URL}/people/${id}/`);
        setCharacter(response.data);
      }
    
      getApiCharacter();
    }, [id]);

    return character ? (
        <div className="detail">
          <h2>Name: {character.name}</h2>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>Gender: {character.gender}</p>
          <Link to="/characters">Return to character </Link>
        </div>
      ) : (
        <h3>Loading character...</h3>
      );
};

export default CharacterPage;
