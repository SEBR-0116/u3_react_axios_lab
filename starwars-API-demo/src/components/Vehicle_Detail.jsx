import {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'
import {useNavigate} from 'react-router-dom'
import {Link, useParams} from 'react-router-dom'

export default function Vehicle_Detail () {
    const [vehicle, setVehicle] = useState('')
    let {id} = useParams()

    useEffect (() => {
        const getVehicle = async () => {
            const response = await axios.get(`${BASE_URL}/vehicles/${id}`)
            setVehicle(response.data)
        }
        getVehicle()
    }, [])

    return vehicle ? (
        <div className='detail-page'>
            <div className='detail-card'>
                <div className='detail-card-title'>{vehicle.name}</div>
                <div className='detail-card-info'>
                    <div className='detail-card-info-main'>{vehicle.model}</div>
                    <div className='detail-card-info-main'>{vehicle.manufacturer}</div>
                    {/* <div className='detail-card-info-gen'>{vehicle.pilots}</div>
                    <div className='detail-card-info-gen'>{vehicle.films}</div> */}
                    <div className='detail-card-info-gen'>{vehicle.class}</div>
                    <div className='detail-card-info-gen'>{vehicle.cost_in_credits} Credits</div>
                    <div className='detail-card-info-gen'>{vehicle.crew} Crew</div>
                    <div className='detail-card-info-gen'>{vehicle.passengers} Passengers</div>
                </div>
                <Link to='/vehicles' className='detail-button-back'>Back to Vehicles</Link>
            </div>
        </div>
    ) : (
        <div className='loading'>Loading...</div>
    )
}