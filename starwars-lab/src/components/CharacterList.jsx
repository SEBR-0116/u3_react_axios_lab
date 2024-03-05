import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'

const CharacterList = (props) => {

  const [characters, setCharacters] = useState([])
  const [species, setSpecies] = useState('')

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
      console.log(sortedCharacters)
    }

    getCharacters()
  }, [])

  console.log(characters)

  let navigate=useNavigate()
  
  const showCharacter = (key) => {
    navigate(`${key}`)

    console.log(key)
  }

  if (characters.length === 0) {
    return <h1 className="retrieving-text">Retrieving from far, far away...</h1>
  } else {
    return (
      <div>
        <h1 className="page-title">Characters</h1>
        <div className="card-container">
        {
          characters.map((character, key) => (
            <div key={key} className="card" onClick={() => showCharacter(parseInt(character.url.substring(29,31)))}>
              <div className="first-display">
                <div className='category-container'>
                    <h2 className="Droid-text">Character</h2>
                    <div className="category-lines">
                      <div className="category-line1"></div>
                      <div className="category-line2"></div>
                    </div>
                </div>
                <h2 className="name">{character.name}</h2>
                  <ul className='second-display'>
                    <div className='details-container'>
                      <h3 className="Droid-text">Random text 3430</h3>
                      <div className="detail-line"></div>
                    </div>  
                  </ul>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    )
}
}
export default CharacterList