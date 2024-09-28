import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function FilmDetails() {
  const [film, setFilm] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films/${id}/`);
        setFilm(response.data);
      } catch (error) {
        console.error('Error fetching film:', error);
      }
    };

    fetchFilm();
  }, [id]);

  return (
    <div>
      {film ? (
        <div>
          <h2>{film.title}</h2>
          <p><strong>Episode:</strong> {film.episode_id}</p>
          <p><strong>Director:</strong> {film.director}</p>
          <p><strong>Producer:</strong> {film.producer}</p>
          <p><strong>Release Date:</strong> {film.release_date}</p>
          <p><strong>Opening Crawl:</strong> {film.opening_crawl}</p>
          <Link to="/films">Return to Film List</Link>
        </div>
      ) : (
        <p>Loading film details...</p>
      )}
    </div>
  );
}

export default FilmDetails;
