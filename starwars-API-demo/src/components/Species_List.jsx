import {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Species_List (props) {
    const [species, setSpecies] = useState([])
    
    useEffect(() => {
        const getSpecies = async () => {
            const response = await axios.get(`${BASE_URL}/species/`)
            setSpecies(response.data.results)
        }
        getSpecies()
    }, [])

    let navigate = useNavigate()

    const showSpecies = (key) => {navigate(`${key}`)}

    return (
        <div className='list-page'>
            <div className='list-title'>Species</div>
            <div className='list-card-container'>
                {species.map((specie, key) => (
                    <div key={key} className='list-card' onClick={() => showSpecies(parseInt(specie.url.substring(30,32)))}>
                        <Link to={`/species/${key}`} className='list-card-title'>{specie.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}