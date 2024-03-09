import {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'
import {useNavigate} from 'react-router-dom'
import {Link, useParams} from 'react-router-dom'

export default function Species_Detail () {
    const [specie, setSpecie] = useState('')
    let {id} = useParams()

    useEffect (() => {
        const getSpecie = async () => {
            const response = await axios.get(`${BASE_URL}/species/${id}`)
            setSpecie(response.data)
        }
        getSpecie()
    }, [])

    return specie ? (
        <div className='detail-page'>
            <div className='detail-card'>
                <div className='detail-card-title'>{specie.name}</div>
                <div className='detail-card-info'>
                    {/* <div className='detail-card-info-main'>{specie.homeworld}</div> */}
                    <div className='detail-card-info-main'>{specie.language}</div>
                    {/* <div className='detail-card-info-gen'>{specie.people}</div>
                    <div className='detail-card-info-gen'>{specie.films}</div> */}
                    <div className='detail-card-info-gen'>{specie.classification}</div>
                    <div className='detail-card-info-gen'>{specie.average_height}</div>
                    <div className='detail-card-info-gen'>{specie.average_lifespan}</div>
                    <div className='detail-card-info-gen'>{specie.eye_colors}</div>
                    <div className='detail-card-info-gen'>{specie.hair_colors}</div>
                    <div className='detail-card-info-gen'>{specie.skin_colors}</div>
                </div>
                <Link to='/species/' className='detail-button-back'>Back to Species</Link>
            </div>
        </div>
    ) : (
        <div className='loading'>Loading...</div>
    )
}