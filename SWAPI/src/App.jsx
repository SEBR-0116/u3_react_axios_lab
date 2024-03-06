import { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import StarshipList from './components/StarshipList'
import Home from './components/Home'
import Films from './components/Films'
import Characters from './components/Characters'
import Planets from './components/Planets'
import StarshipItems from './components/StarshipItems'

function App() {
  const [starships, setStarships] = useState([])
  const [films, setFilms] = useState([])
  const [characters, setCharacters] = useState([])
  const [planets, setPlanets] = useState([])
  


  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      setStarships(response.data.results)
      console.log(response)
    } 

    getStarships()
  }, [])
  console.log(starships)

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(`${BASE_URL}/films`)
      setFilms(response.data.results)
      console.log(response)
    } 

    getFilms()
  }, [])
  console.log(films)

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(`${BASE_URL}/people`)
      setCharacters(response.data.results)
      console.log(response)
    } 

    getCharacters()
  }, [])
  console.log(characters)

  useEffect(() => {
    const getPlanets = async () => {
      const response = await axios.get(`${BASE_URL}/planets`)
      setPlanets(response.data.results)
      console.log(response)
    } 

    getPlanets()
  }, [])
  console.log(planets)


  return (
    <div className='App'>
      <Header />
        
        <Routes>
          <Route exact path='/' element= {<Home />} />
          <Route exact path='/starships' element= {<StarshipList starships={starships}/>}/>
          <Route exact path='/starships/:id' element= {<StarshipItems starships={starships}/>} />
          <Route exact path='/films' element= {<Films films={films}/>} />
          <Route exact path='/characters' element= {<Characters characters={characters}/>} />
          <Route exact path='/planets' element= {<Planets planets={planets}/>} />
        </Routes>
    </div>
  )
}

export default App
