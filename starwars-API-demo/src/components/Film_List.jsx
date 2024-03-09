import {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'
import {useNavigate} from 'react-router-dom'

export default function Film_List (props) {
    const [films, setFilms] = useState([])

    useEffect(() => {
        const getFilms = async () => {
            const response = await axios.get(`${BASE_URL}/films`)
            setFilms(response.data.results)
        }
        getFilms()
    }, [])
    console.log(films)

    let navigate = useNavigate()

    const showFilm = (key) => {navigate(`${key}`)}

    return(
        <div className='list-page'>
            <div className='list-title'>Films</div>
            <div className='list-card-container'>
                {films.map((film, key) => (
                    // <div key={key} className='list-card' onClick={() => showFilm(parseInt(film.url.substring(28,30)))}>
                    //     {/* <Link to={`/films/${key}`} className='list-card-title'>{film.title}</Link> */}
                    //     <div>{film.title}</div>
                    // </div>
                    <div key={key} className='list-card' onClick={() => showFilm(parseInt(film.url.substring(28,30)))}>
                        <Link to={`/films/${key}`} className='list-card-title'>{film.title}</Link>
                    </div>
                ))}
            </div>
        </div>
        
    )
}
