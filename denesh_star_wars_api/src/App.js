import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios'
import { BASE_URL } from './global';

import './App.css';

function App() {
  const [starships, setStarship] = useState([])
  const [characters, setCharacters] = useState([])
  const [planets, setPlanets] = useState([])
  const [films, setFilms] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [species,setSpecies] = useState([])


  useEffect( () => {
    const getStarshipList = async () => {
      try{
        let responds =''
        let count = 1
        let allStarships =[]

        do{
          
          responds = await axios.get(`${BASE_URL}starships/?page=${count}`)
          //console.log(responds.data.results)

          const uniqueResults = responds.data.results.filter(
            (newStarship) => !allStarships.find((existingStarship) => existingStarship.url === newStarship.url))
        
          allStarships = [...allStarships, ...uniqueResults]
          setStarship(allStarships)
          count += 1
          }
          while (responds.data.next)
        // console.log("Final", starships)

        }catch(error){
        console.error('Error fetching starships:', error)
      }


    }

    const getCharacters = async () => {
      try{
        let count = 1
        let allCharacters =[]
        let responseCharacters =''
  
        do{
          responseCharacters = await axios.get(`${BASE_URL}people/?page=${count}`)
          //console.log(responseCharacters.data)
          // const uniqueResult = responseCharacters.data.results.filter(
          //     (newCharacters) => allCharacters.find((existingCharacters) => existingCharacters.url === newCharacters.url)
          // )
  
          allCharacters = [...allCharacters, ...responseCharacters.data.results]
          // setCharacters(allCharacters)
          count += 1
        }
        while(responseCharacters.data.next)
  
        setCharacters(allCharacters)
  
      }catch(error){
        console.error('Error fetching characters:', error)
      }
    }


    const getPlanets = async () =>{
      try{
        let responds =''
        let count = 1
        let allPlanets =[]

        do{
          responds = await axios.get(`${BASE_URL}planets/?page=${count}`)

          allPlanets = [...allPlanets, ...responds.data.results]
          count += 1

        }
        while(responds.data.next)

        setPlanets(allPlanets)

      }catch(error){
        console.error('Error fetching starships:', error)
      }
      
    }

    const getFilms = async () => {
      try{
        let responds =''
        let count = 1
        let allFilms = []

        do{
          responds = await axios.get(`${BASE_URL}films/?page=${count}`)

          allFilms = [...allFilms, ...responds.data.results]
          count += 1

        }
        while(responds.data.next)
        setFilms(allFilms)

      }catch(error){

      }
    }

    const getVehicles = async () => {
      try{
        let responds =''
        let count = 1
        let allVehicles = []

        do{
          responds = await axios.get(`${BASE_URL}vehicles/?page=${count}`)

          allVehicles = [...allVehicles, ...responds.data.results]
          count += 1

        }
        while(responds.data.next)
        setVehicles(allVehicles)

      }catch(error){

      }
    }

    const getSpecies = async () => {
      try{
        let responds =''
        let count = 1
        let allSpecies = []

        do{
          responds = await axios.get(`${BASE_URL}species/?page=${count}`)

          allSpecies = [...allSpecies, ...responds.data.results]
          count += 1

        }
        while(responds.data.next)
        setSpecies(allSpecies)

      }catch(error){

      }
    }

    getStarshipList()
    getCharacters()
    getPlanets()
    getFilms()
    getVehicles()
    getSpecies()
    
  }, [])

  //console.log("Final ",starships)
  //console.log("Final ",characters)
  //console.log("Final ",planets)  
  


  return(
    <>
      <Header />
      <Main  starships={starships} characters={characters} planets={planets} films={films} vehicles={vehicles} species={species} />

    </>
  )
}

export default App
