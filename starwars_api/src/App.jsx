import './App.css'
import axios, { all } from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from './globals.jsx'


import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [starships, setStarships] = useState([])
  const [planets, setPlanets] = useState([])
  const [films, setFilms] = useState([])
  const [people, setPeople] = useState([])
  const [species, setSpecies] = useState([])
  const [vehicles, setVehicles] = useState([])

  // functions
  const getStarships = async () => {
    let url = `${BASE_URL}/starships`
    let allResults = []
    let go = true;

    while (go) {
      let response = await axios.get(url)
      allResults.push(...response.data.results)
  
      if (response.data.next === null) {
        go = false;
      } else {
        url = response.data.next  
      }
    }
    setStarships(allResults)
  }

  const getPlantes = async () => {
    let url = `${BASE_URL}/planets`
    let allResults =[];
    let go = true;

    while (go) {
      let response = await axios.get(url)
      allResults.push(...response.data.results)

      if (response.data.next === null) {
        go = false;
      } else {
        url = response.data.next
      }

      // console.log('in while loop', response.data.next)
      // allResults.concat(nextResponseArr)
      // allResults.push(...nextResponseArr)
    }
    setPlanets(allResults)
  }

  const getFilms = async () => {
    let url = `${BASE_URL}/films`
    let allResults = []
    let go = true;

    while (go) {
      let response = await axios.get(url)
      allResults.push(...response.data.results)
  
      if (response.data.next === null) {
        go = false;
      } else {
        url = response.data.next  
      }
    }
    setFilms(allResults)
  }

  const getPeople = async () => {
    let url = `${BASE_URL}/people`
    let allResults = []
    let go = true;

    while (go) {
      let response = await axios.get(url)
      allResults.push(...response.data.results)
  
      if (response.data.next === null) {
        go = false;
      } else {
        url = response.data.next  
      }
    }
    setPeople(allResults)
  }

  const getSpecies = async () => {
    let url = `${BASE_URL}/species`
    let allResults = []
    let go = true;

    while (go) {
      let response = await axios.get(url)
      allResults.push(...response.data.results)
  
      if (response.data.next === null) {
        go = false;
      } else {
        url = response.data.next  
      }
    }
    setSpecies(allResults)
  }

  const getVehicles = async () => {
    let url = `${BASE_URL}/vehicles`
    let allResults = []
    let go = true;

    while (go) {
      let response = await axios.get(url)
      allResults.push(...response.data.results)
  
      if (response.data.next === null) {
        go = false;
      } else {
        url = response.data.next  
      }
    }
    setVehicles(allResults)
  }

  useEffect(() => {
    getStarships()
    getPlantes()
    getFilms()
    getPeople()
    getSpecies()
    getVehicles()

  }, [])

  console.log(starships)

  return (
    <>
      <Header />
      <Main
        starships={starships}
        planets={planets}
        films={films}
        people={people}
        species={species}
        vehicles={vehicles}
      />
    </>
  )
}

export default App
