import  { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../globals'
import { useParams, Link } from 'react-router-dom';

const FilmPage = () => {
    const [film, setFilms] = useState(null);
    const { id } = useParams();

    useEffect(() => {
      const getApiFilms = async () => {
        const filmId = id === "0" ? 1 : parseInt(id) + 1;
        const response = await axios.get(`${BASE_URL}/films/${filmId}/`);
        setFilms(response.data);
      }
    
      getApiFilms();
    }, [id]);

    return film ? (
        <div className="detail">
          <h2>Name: {film.title}</h2>
          <p>Episode_id: {film.episode_id}</p>
          <p>Opening_crawl: {film.opening_crawl}</p>
          <p>director: {film.director}</p>
          <p>producer: {film.producer} </p>
          <p>Release_date:{film.release_date}</p>
          <Link to="/films">Return to film </Link>
        </div>
      ) : (
        <h3>Loading films...</h3>
      );
};

export default FilmPage;
