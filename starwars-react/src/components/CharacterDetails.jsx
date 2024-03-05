import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";
import axios from "axios"
import '../componentsStyles/characters.css'

export default function Characters () {
  console.log()

  const [characters, setCharacters] = useState()
  let {id} = useParams()

  useEffect(()=>{
    const getCharacters = async() => {
    const response = await axios.get(`https://swapi.dev/api/people/${id}`)
    console.log(response)
    setCharacters(response.data)
  }
  getCharacters()
},[])

  if (!characters) {
    return <h1> Loading Please Wait </h1>
  } else {
    return (
      <div>
        {
            <div key={id}>
              <div className='character-info'>  
                <div className='character-name'>
                  <div className='label'>Name:</div>
                  <div className='value'>{characters.name}</div>
                </div>
                <div className='height'> Height: {characters.height}</div>
                <div className='weight'> Weight: {characters.mass}</div>
                <div className='hair-color'> Hair Color: {characters.hair_color}</div>
                <div className='eye-color'> Eye Color: {characters.eye_color}</div>
                <div className='birth-year'> Birth Year: {characters.birth_year}</div>
                <div className='gender'> Gender: {characters.gender}</div>
                <Link to="/characterslist"> Return to character list</Link>
              </div>
            </div>
        }
      </div>
    )
  }
}