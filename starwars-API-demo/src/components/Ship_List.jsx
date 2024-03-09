import {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Ships (props) {
    const [ships, setShips] = useState([])
    
    useEffect(() => {
        const getShips = async () => {
            const response = await axios.get(`${BASE_URL}/starships/`)
            setShips(response.data.results)
        }
        getShips()
    }, [])

    let navigate = useNavigate()

    const showShip = (key) => {navigate(`${key}`)}

    return (
        <div className='list-page'>
            <div className='list-title'>Ships</div>
            <div className='list-card-container'>
                {ships.map((ship, key) => (
                    <div key={key} className='list-card' onClick={() => showShip(parseInt(ship.url.substring(30,32)))}>
                        <Link to={`/ships/${key}`} className='list-card-title'>{ship.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}