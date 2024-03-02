import axios from 'axios';
import { useState,useEffect } from 'react';
import { BASE_URL } from '../globals'
import {  Link } from "react-router-dom";

export default function Films (){
    const [films, setFilms] = useState([]);

    useEffect(() => {
      const getApiFilms = async () => {
        const response = await axios.get(`${BASE_URL}/films/`)
        setFilms(response.data.results)
      }
    
      getApiFilms()
    }, [])

    return (
      <div className="film">
        <h2>List of films</h2>
        {films.map((film, key) => (
          <div key={key} className="card">
            <h3>
              <Link to={`/films/${key}`}>{film.title}</Link>
            </h3>
          </div>
        ))}
      </div>
    );
  };
