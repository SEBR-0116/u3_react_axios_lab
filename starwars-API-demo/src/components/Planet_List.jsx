import {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Planet_List (props) {
    const [planets, setPlanets] = useState([])
    
    useEffect(() => {
        const getPlanets = async () => {
            const response = await axios.get(`${BASE_URL}/planets/`)
            setPlanets(response.data.results)
        }
        getPlanets()
    }, [])

    let navigate = useNavigate()

    const showPlanet = (key) => {navigate(`${key}`)}

    return (
        <div className='list-page'>
            <div className='list-title'>Planets</div>
            <div className='list-card-container'>
                {planets.map((planet, key) => (
                    <div key={key} className='list-card' onClick={() => showPlanet(parseInt(planet.url.substring(30,32)))}>
                        <Link to={`/planets/${key}`} className='list-card-title'>{planet.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}