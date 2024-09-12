import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import '../componentsStyles/characters.css'

export default function Characters (props) {
  console.log(props)

  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const getCharacters = async () => {

        const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`)
        
        setCharacters((prevCharacter) => [...(prevCharacter || []), ...response.data.results])
        
        if (response.data.next !== null) {
          setCurrentPage((prevPage) => prevPage + 1)
        } 
    }

    getCharacters()
  }, [currentPage])

  let navigate = useNavigate()

const showCharacters = (key) => {
  navigate(`/people/${key}`)
}

return(
  <div className="characters">
    <h2>List of Characters</h2>
    {
      characters.map((characters, index) => (
        <div key={index} onClick={()=>showCharacters(parseInt(characters.url.substring(29,31)))} className="card">
          <h3>{characters.name}</h3>
        </div>
      ))
    }
  </div>
)
}