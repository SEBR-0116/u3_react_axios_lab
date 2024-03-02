import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'

const BASE_URL = 'https://swapi.dev/api'

const StarshipPage = () => {
  const [starships, setStarships] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const getStarships = async () => {

        const response = await axios.get(`${BASE_URL}/starships/?page=${currentPage}`)
        
        setStarships((prevStarships) => [...(prevStarships || []), ...response.data.results])
        
        if (response.data.next !== null) {
          setCurrentPage((prevPage) => prevPage + 1)
        } else {

          console.log('No more pages')
        }
    }

    getStarships()
  }, [currentPage])

  return (
    <div className='routes-container'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/starships' element={<StarshipList starships={starships} />} />
      </Routes>
    </div>
  )
}

export default StarshipPage