import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'

const FilmList = (props) => {
  const [films, setFilms] = useState([])


  function getRomanNumeral(num) {
    const romanNumerals = [
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ]

    let result = '';

    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral
            num -= romanNumerals[i].value
        }
    }

    return result;
  }

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(`${BASE_URL}films`)
      setFilms(response.data.results)
    }

    getFilms()
  }, [])

  console.log(films)

  let navigate=useNavigate()
  
  const showFilm = (key) => {
    navigate(`${key}`)

    console.log(key)
  }

  if (films.length === 0) {
    return <h1 className="retrieving-text">Retrieving from far, far away...</h1>
  } else {
    return (
      <div>
        <h1 className="page-title">Films</h1>
        <div className="card-container">
        {
          films.map((film, key) => (
            <div key={key} className="card" onClick={() => showFilm(parseInt(film.url.substring(28,30)))}>
              <div className="first-display">
                <div className='category-container'>
                    <h2 className="Droid-text">Films</h2>
                    <div className="category-lines">
                      <div className="category-line1"></div>
                      <div className="category-line2"></div>
                    </div>
                </div>
                <h2 className="film-name">Episode {getRomanNumeral(film.episode_id)}: {film.title}</h2>
                  <ul className='second-display'>
                    <div className='details-container'>
                      <h3>Release -- {new Date(film.release_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h3>
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
export default FilmList