import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FilmsList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/films/');
        setFilms(response.data.results);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <div>
      <h2>List of Films</h2>
      <ul>
        {films.map((film, index) => (
          <li key={index}>
            <Link to={`/films/${index}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmsList;
