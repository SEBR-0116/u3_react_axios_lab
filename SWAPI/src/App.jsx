import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import StarshipList from './components/StarshipList'
import Home from './components/Home'

function App() {

  return (
    <div className='App'>
      <Header />
        
        <Routes>
          <Route exact path='/' element= {<Home />} />
          <Route exact path='/starships' element= {<StarshipList />}/>
        </Routes>
    </div>
  )
}

export default App
