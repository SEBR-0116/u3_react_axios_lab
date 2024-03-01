
import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Home from './components/Home'
import StarshipList from './components/StarshipList'

import { BASE_URL } from './globals'


const App = () => {
  const [starships, setStarships] = useState([])

  const [selectedStarship, setSelectedStarship] = useState(null)

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      //console.log(response.data.results)
      setStarships(response.data.results)
    }
    getStarships()

  }, [])

  return (
    <>
    <Header/>
    <Main starships={starships}/>

    </>
  )
}

export default App
