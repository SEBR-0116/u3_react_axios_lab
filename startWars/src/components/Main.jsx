// Main.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import StarshipsList from "./Lists/StarshipsList";
import StarshipPage from './Lists/StarshipPage';
import Home from './Home';
import Planets from './Lists/Planets';
import Films from './Lists/Films';
import Characters from './Lists/Characters';

const Main = () => {
  return (
    <div className='routesContainer'>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/StarshipsList" element={<StarshipsList />} />
        <Route path="/starship/:id" element={<StarshipPage />} />
        <Route exact path="/Planets" element={<Planets />} />
        <Route exact path="/Characters" element={<Characters />} />
        <Route exact path="/Films" element={<Films />} />
      </Routes>
    </div>
  );
}

export default Main;
