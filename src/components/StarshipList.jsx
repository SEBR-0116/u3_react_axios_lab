import axios from 'axios';
import { useState,useEffect } from 'react';
import { BASE_URL } from '../globals'
import {  Link } from "react-router-dom";

export default function StarshipList (){
   
    const [starships, setStarShips] = useState([]);

    useEffect(() => {
      const getApiStarShips = async () => {
        const response = await axios.get(`${BASE_URL}/starships/`)
        setStarShips(response.data.results)
      }
    
      getApiStarShips()
    }, [])


    return (
      <div className="starship">
        <h2>List of Starships</h2>
        {starships.map((starship, key) => (
          <div key={key} className="card">
            <h3>
              <Link to={`/starships/${key+2}`}>{starship.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    );
  };


