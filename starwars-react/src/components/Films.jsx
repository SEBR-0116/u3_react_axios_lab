import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import '../componentsStyles/films.css'

export default function Films (props) {
  console.log(props)

  const [films, setFilms] = useState([])

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(`https://swapi.dev/api/films`)
      setFilms(response.data.results)
      console.log(response)
    }

      getFilms()
  }, [])

  let navigate = useNavigate()

  const showFilm = (key) => {
    navigate(`/films/${key}`)
  }

    return(
      <div className="films">
        <h2>List of Films</h2>
        {
          films.map((film) => (
            <div key={parseInt(film.url.substring(28,30))} onClick={()=>showFilm(parseInt(film.url.substring(28,30)))} className="card">
              <h3>{film.title}</h3>
            </div>
          ))
        }
      </div>
    )
    }