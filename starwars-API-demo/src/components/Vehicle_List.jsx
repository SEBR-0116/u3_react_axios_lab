import {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Vehicle_List (props) {
    const [vehicles, setVehicles] = useState([])
    
    useEffect(() => {
        const getVehicles = async () => {
            const response = await axios.get(`${BASE_URL}/vehicles/`)
            setVehicles(response.data.results)
        }
        getVehicles()
    }, [])

    let navigate = useNavigate()

    const showVehicle = (key) => {navigate(`${key}`)}

    return (
        <div className='list-page'>
            <div className='list-title'>Vehicles</div>
            <div className='list-card-container'>
                {vehicles.map((vehicle, key) => (
                    <div key={key} className='list-card' onClick={() => showVehicle(parseInt(vehicle.url.substring(31,33)))}>
                        <Link to={`/vehicles/${key}`} className='list-card-title'>{vehicle.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}