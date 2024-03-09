import {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'
import {useNavigate} from 'react-router-dom'
import {Link, useParams} from 'react-router-dom'

export default function Ship_Detail () {
    const [ship, setShip] = useState('')
    let {id} = useParams()

    useEffect (() => {
        const getShip = async () => {
            const response = await axios.get(`${BASE_URL}/starships/${id}`)
            setShip(response.data)
        }
        getShip()
    }, [])

    return character ? (
        <div className='detail-page'>
            <div className='detail-card'>
                <div className='detail-card-title'>{ship.name}</div>
                <div className='detail-card-info'>
                    <div className='detail-card-info-main'>{ship.diameter}</div>
                    <div className='detail-card-info-main'>{ship.population}</div>
                    <div className='detail-card-info-main'>{ship.climate}</div>
                    <div className='detail-card-info-main'>{ship.terrain}</div>
                    {/* <div className='detail-card-info-gen'>{ship.residents}</div>
                    <div className='detail-card-info-gen'>{ship.films}</div> */}
                    <div className='detail-card-info-gen'>{ship.roation_period}</div>
                    <div className='detail-card-info-gen'>{ship.orbital_period}</div>
                    <div className='detail-card-info-gen'>{ship.surface_water}</div>

                </div>
                <div className='detail-button-back'>Back to Ships</div>
            </div>
        </div>
    ) : (
        <div className='loading'>Loading...</div>
    )
}