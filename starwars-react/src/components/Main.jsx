import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import Films from './Films'
import Planets from './Planets'
import Characters from './Characters'

const BASE_URL = 'https://swapi.dev/api'

const MainPage = () => {
  const [starships, setStarships] = useState([])
  const [films, setFilms] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const getStarships = async () => {

        const response = await axios.get(`${BASE_URL}/starships/?page=${currentPage}`)
        
        setStarships((prevStarships) => [...(prevStarships || []), ...response.data.results])
        
        if (response.data.next !== null) {
          setCurrentPage((prevPage) => prevPage + 1)
        }
    }

    getStarships()
  }, [currentPage])

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(`${BASE_URL}/films`)
      setFilms(response.data.results)
    }

      getFilms()
  }, [])

  useEffect(() => {
    const getPlanets = async () => {

        const response = await axios.get(`${BASE_URL}/planets/?page=${currentPage}`)
        
        setPlanets((prevPlanets) => [...(prevPlanets || []), ...response.data.results])
        
        if (response.data.next !== null) {
          setCurrentPage((prevPage) => prevPage + 1)
        } 
    }

    getPlanets()
  }, [currentPage])

  useEffect(() => {
    const getCharacters = async () => {

        const response = await axios.get(`${BASE_URL}/people/?page=${currentPage}`)
        
        setCharacters((prevCharacter) => [...(prevCharacter || []), ...response.data.results])
        
        if (response.data.next !== null) {
          setCurrentPage((prevPage) => prevPage + 1)
        } 
    }

    getCharacters()
  }, [currentPage])

  return (
    <div className='navbar'>
      <Routes className='routes'>
        <Route exact path='/' element={<Home />} />
        <Route path='/starships' element={<StarshipList starships={starships} />} />
        <Route path='/films' element={<Films films={films}/>}/>
        <Route path='/planets' element={<Planets planets={planets} />}/>
        <Route path='/characters' element={<Characters characters={characters} />}/> 
      </Routes>
    </div>
  )
}

export default MainPage