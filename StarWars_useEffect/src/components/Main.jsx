import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import StarshipList from './StarshipList'
import StarshipItems from './StarshipItems'
import Films from './Films'
import Planets from './Planets'
import Characters from './Characters'
import Home from './Home'
import axios from 'axios'

const Main = () => {

    const [starships, setStarShips] = useState([])
    const [films, setFilms] = useState([])
    const [planets, setPlanets] = useState([])
    const [characters, setCharacters] = useState([])

    useEffect(()=>{
      const getStarShips = async () => {
        const response = await axios.get(`https://swapi.dev/api/starships`)
        setStarShips(response.data.results)
      }
  
      getStarShips()
    },[])

    useEffect(()=>{
        const getFilms = async () => {
          const response = await axios.get(`https://swapi.dev/api/films`)
          setFilms(response.data.results)
        }
    
        getFilms()
      },[])

    useEffect(()=>{
    const getPlanets = async () => {
        const response = await axios.get(`https://swapi.dev/api/planets`)
        setPlanets(response.data.results)
    }

    getPlanets()
    },[])  

    useEffect(()=>{
        const getCharacters = async () => {
            const response = await axios.get(`https://swapi.dev/api/people`)
            setCharacters(response.data.results)
        }
    
        getCharacters()
        },[]) 


    return (
    <>
    <h3></h3>   
    <Routes>
        <Route path="/"
            element={<Home/>}/>
        <Route path="/starship"
            element={<StarshipList starships={starships}/>}/>
        <Route path="/films"
            element={<Films films={films}/>}/>
        <Route path="/planets"
            element={<Planets planets={planets}/>}/>
        <Route path="/characters"
            element={<Characters characters={characters}/>}/>
        <Route path="/starship/startshipItems"
            element={<StarshipItems starships={starships}/>}/>
    </Routes>
    </> 
)}

export default Main
