import {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'
import {useNavigate} from 'react-router-dom'
import {Link, useParams} from 'react-router-dom'

export default function Character_Detail () {
    const [character, setCharacter] = useState()
    let {id} = useParams()

    useEffect (() => {
        const getCharacter = async () => {
            const response = await axios.get(`${BASE_URL}/people/${id}`)
            setCharacter(response.data)
        }
        getCharacter()
    }, [])

    return character ? (
        <div className='detail-page'>
            <div className='detail-card'>
                <div className='detail-card-title'>{character.name}</div>
                <div className='detail-card-info'>
                    {/* <div className='detail-card-info-main'>{character.homeworld}</div>
                    <div className='detail-card-info-main'>{character.species}</div> */}
                    <div className='detail-card-info-gen'>{character.birth_year}</div>
                    <div className='detail-card-info-gen'>{character.hair_color}</div>
                    <div className='detail-card-info-gen'>{character.skin_color}</div>
                    <div className='detail-card-info-gen'>{character.eye_color}</div>
                    <div className='detail-card-info-gen'>{character.height}</div>

                </div>
                <Link to='/characters' className='detail-button-back'>Back to Characters</Link>
            </div>
        </div>
    ) : (
        <div className='loading'>Loading...</div>
    )
}