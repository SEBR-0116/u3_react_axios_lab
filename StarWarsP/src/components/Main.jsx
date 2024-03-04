import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import PlanetList from './PlanetList'
import PeopleList from './PeopleList'

function Main() {
    return (
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/starships" element={<StarshipList />} />
        <Route path="/planets" element={<PlanetList />} />
        <Route path="/peoples" element={<PeopleList />} />
    </Routes>
    )
}

export default Main
