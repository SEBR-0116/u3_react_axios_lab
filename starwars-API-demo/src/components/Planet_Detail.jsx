import {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'
import {useNavigate} from 'react-router-dom'
import {Link, useParams} from 'react-router-dom'

export default function Planet_Detail (props) {
    const [planet, setPlanet] = useState([])
    let {id} = useParams()

    useEffect (() => {
        const getPlanet = async () => {
            const response = await axios.get(`${BASE_URL}/planets/${id}`)
            setPlanet(response.data)
        }
        getPlanet()
    }, [])

    return planet ? (
        <div className='detail-page'>
            <div className='detail-card'>
                <div className='detail-card-title'>{planet.name}</div>
                <div className='detail-card-info'>
                    <div className='detail-card-info-main'>{planet.diameter}</div>
                    <div className='detail-card-info-main'>{planet.population}</div>
                    <div className='detail-card-info-main'>{planet.climate}</div>
                    <div className='detail-card-info-main'>{planet.terrain}</div>
                    {/* <div className='detail-card-info-gen'>{planet.residents}</div>
                    <div className='detail-card-info-gen'>{planet.films}</div> */}
                    <div className='detail-card-info-gen'>{planet.rotation_period}</div>
                    <div className='detail-card-info-gen'>{planet.orbital_period}</div>
                    <div className='detail-card-info-gen'>{planet.surface_water}</div>

                </div>
                <Link to='/planets' className='detail-button-back'>Back to Planets</Link>
            </div>
        </div>
    ) : (
        <div className='loading'>Loading...</div>
    )
}