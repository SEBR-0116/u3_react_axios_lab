import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'

const Characters = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
    const getCharacters = async ()  => {
    const response = await axios.get(`${BASE_URL}/api/people`)
    console.log(response)
    setCharacters(response.data.results)
    } 
        getCharacters()
    }, [])

    return (
    <div>
        <h2>Star Wars Characters</h2>
        <div className='listItemHolder'>
            {
            characters.map((character) => (
                <div key={character.name} className='listItem'>
                    
                    <h3>{character.name}</h3>
                    <ul>
                        <li>Gender: {character.gender}</li>
                        <li>Birth year: {character.birth_year}</li>
                        <li>Height: {character.height}</li>
                        <li>Hair color: {character.hair_color}</li>
                        <li>Eye color: {character.eye_color}</li>
                    </ul> 
                </div>
            ))
            }
        </div>
    </div>
    )
}

export default Characters