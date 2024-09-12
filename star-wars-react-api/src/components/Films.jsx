import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'

const Films = () => {

    const [films, setFilms] = useState([])

    useEffect(() => {
     const getFilms = async ()  => {
    const response = await axios.get(`${BASE_URL}/api/films`)
    console.log(response)
    setFilms(response.data.results)

    } 
        getFilms()
    }, [])

    return (
    <div className='listItemHolder'>
        <h2>Star Wars Films</h2>
        
            {
            films.map((film) => (
                <div key={film.name} className='listItem'>
                    
                    <h3>{film.title}</h3>
                    <ul>
                        <li>Release Date: {film.release_date}</li>
                        <li>Director: {film.director}</li>
                        <li>Producer: {film.producer}</li>
                    </ul> 
                </div>
            ))
            }

    </div>
    )
}

export default Films