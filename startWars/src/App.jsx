import { useState } from 'react'
import { useEffect } from 'react'
import Main from './components/Main'
import Header from './components/Header'
import axios from 'axios'

import './App.css'

function App() {
  
  return (
    <>
    <div className='header'> 
    < Header/>
    </div>

    <div className='Main'>
    <Main/>
    </div>
     
      

    </>
  )
}

export default App
