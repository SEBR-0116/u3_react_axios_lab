import { useEffect, useState } from 'react'
import { Link,  useParams } from 'react-router-dom'
import axios from "axios"


const FilmPage = () => {

    const [film, setFilm] = useState('')

    let {id} = useParams()
    console.log(id)

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
        const getFilm = async() => {
            const response = await axios.get(`https://swapi.dev/api/films/${id}`)
            setFilm(response.data)
            console.log(response.data)
        }
        getFilm()
        
    }, [])

    

    return film ? (
        <div>
            <div className="item-container">
                <div className="item-header">
                    <h1>Episode {getRomanNumeral(film.episode_id)}:</h1>
                    <h1>{film.title}</h1>
                </div>
                <h3 className="info-title">Film details</h3>
                <div className="info-wrapper">
                    <h3>{film.opening_crawl}</h3>
                    <h3>-- Director: {film.director}</h3>
                    <h3>-- Producer: {film.producer}</h3>
                    <h3>-- Release Date: {new Date(film.release_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h3>
                </div>
            </div>
            <div className="goback-link">
            <Link to="/films">Go Back</Link>
            </div>
        </div>
        
    ) : null 
}
 export default FilmPage