
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import StarshipsList from './StarshipsList';

function Main() {
  return (
    <div>
    <Router>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/starships" element={<StarshipsList />}></Route>

        </Routes>
    </Router>
 

                  </div>
  );
}

export default Main;