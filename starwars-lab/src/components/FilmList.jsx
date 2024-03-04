import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const FilmList = (props) => {

  const [films, setFilms] = useState([])

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(`${BASE_URL}films`)
      setFilms(response.data.results)
    }

    getFilms()
  }, [])

  console.log(films)

  if (films.length === 0) {
    return <h1>Retrieving from far, far away...</h1>
  } else {
    return (
      <div>
      <h1>Films</h1>
      {
        films.map((film) => (
          <div key={film.title} className="card">
            <h2>{film.title}</h2>
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
export default FilmList