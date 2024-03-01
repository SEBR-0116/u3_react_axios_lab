import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const CharacterList = (props) => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = async () => {
      const response1 = await axios.get(`${BASE_URL}people`)
      const response2 = await axios.get(`${BASE_URL}people/?page=2`)
      const response3 = await axios.get(`${BASE_URL}people/?page=3`)
      const response4 = await axios.get(`${BASE_URL}people/?page=4`)
      const response5 = await axios.get(`${BASE_URL}people/?page=5`)
      const response6 = await axios.get(`${BASE_URL}people/?page=6`)
      const response7 = await axios.get(`${BASE_URL}people/?page=7`)
      const response8 = await axios.get(`${BASE_URL}people/?page=8`)
      const response9 = await axios.get(`${BASE_URL}people/?page=9`)

      const allCharacters = response1.data.results.concat(response2.data.results.concat(response3.data.results.concat(response4.data.results.concat(response5.data.results.concat(response6.data.results.concat(response7.data.results.concat(response8.data.results.concat(response9.data.results))))))))
      
      const sortedCharacters = allCharacters.toSorted((a, b) =>
          a.name.localeCompare(b.name))
      setCharacters(sortedCharacters)
    }

    getCharacters()
  }, [])

  console.log(characters)

  if (characters.length === 0) {
    return <h1>Retrieving from far, far away...</h1>
  } else {
    return (
      <div>
      <h1>Characters</h1>
      {
        characters.map((character) => (
          <div key={character.name} className="card">
           
            <h2>{character.name}</h2>
            <ul>
              <h3></h3>
            </ul>
          </div>
        ))
      }
      </div>
    )
}
}
export default CharacterList