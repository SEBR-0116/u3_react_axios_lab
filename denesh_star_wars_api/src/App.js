import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios'
import { BASE_URL } from './global';

import './App.css';

function App() {
  const [starships, setStarship] = useState([])

  useEffect( () => {
    const getStarshipList = async () => {
      try{
      const responds = await axios.get(`${BASE_URL}starships/?page=2`)
      console.log(responds.data)
      setStarship(responds.data)
      } catch(error){
        console.error('Error fetching starships:', error)
      }
    }
    getStarshipList()
  }, [])

console.log(starships)
  return(
    <>
      <Header />
      <Main  starships={starships}/>

    </>
  )
}

export default App;
