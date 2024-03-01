import { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import StarshipList from './components/StarshipList'
import Home from './components/Home'

function App() {
  const [starships, setStarships] = useState([])
  const [selectedStarship, setSelectedStarship] = useState(null)


  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}`)
      setStarships(response.data.results)
      console.log(response)
    } 

    getStarships()
  }, [])

  console.log(starships)


  return (
    <div className='App'>
      <Header />
        
        <Routes>
          <Route exact path='/' element= {<Home />} />
          <Route exact path='/starships' element= {<StarshipList starships={starships}/>}/>
        </Routes>
    </div>
  )
}

export default App
