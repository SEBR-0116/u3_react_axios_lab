import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import StarshipDetails from './StarshipDetails'
import Films from './Films'
import FilmsDetails from './FilmsDetails'
import Planets from './Planets'
import PlanetsDetails from './PlanetsDetails'
import Characters from './Characters'
import CharacterDetails from './CharacterDetails'

const MainPage = () => {
  const [starships, setStarships] = useState([])
  const [films, setFilms] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])

  return (
    <div className='navbar'>
      <Routes className='routes'>
        <Route exact path='/' element={<Home />} />
        <Route path='/starshiplist' element={<StarshipList starships={starships} />} />
        <Route path='/starships/:id' element={<StarshipDetails starships={starships} />} />
        <Route path='/filmlist' element={<Films films={films}/>}/>
        <Route path='/films/:id' element={<FilmsDetails films={films}/>}/>
        <Route path='/planetslist' element={<Planets planets={planets} />}/>
        <Route path='/planets/:id' element={<PlanetsDetails planets={planets} />}/>
        <Route path='/characterslist' element={<Characters characters={characters} />}/> 
        <Route path='/people/:id' element={<CharacterDetails characters={characters} />}/>
      </Routes>
    </div>
  )
}

export default MainPage