import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import StarshipsList from './StarshipsList';
import ShipDetails from './ShipDetails';
import FilmsList from './FilmsList'; // Assuming FilmsList is the component for listing films
import FilmDetails from './FilmDetails'; // Assuming FilmDetails is the component for individual films

function Main() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starships" element={<StarshipsList />} />
          <Route path="/starships/:id" element={<ShipDetails />} />
          <Route path="/films" element={<FilmsList />} /> {/* Route for listing films */}
          <Route path="/films/:id" element={<FilmDetails />} /> {/* Route for individual film details */}
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
