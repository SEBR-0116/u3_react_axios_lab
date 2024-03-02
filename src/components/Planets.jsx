import axios from 'axios';
import { useState,useEffect } from 'react';
import { BASE_URL } from '../globals'
import {  Link } from "react-router-dom";

export default function Planets (){
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
      const getApiPlanets = async () => {
        const response = await axios.get(`${BASE_URL}/planets/`)
        setPlanets(response.data.results)
      }
    
      getApiPlanets()
    }, [])

    return (
      <div className="planet">
        <h2>List of planets</h2>
        {planets.map((planet, key) => (
          <div key={key} className="card">
            <h3>
              <Link to={`/planets/${key}`}>{planet.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    );
  };