import {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Character_List (props) {
    const [characters, setCharacters] = useState([])
    
    useEffect(() => {
        const getCharacters = async () => {
            const response = await axios.get(`${BASE_URL}/people/`)
            setCharacters(response.data.results)
        }
        getCharacters()
    }, [])

    let navigate = useNavigate()

    const showCharacter = (key) => {navigate(`${key}`)}

    return (
        <div className='list-page'>
            <div className='list-title'>Characters</div>
            <div className='list-card-container'>
                {characters.map((character, key) => (
                    <div key={key} className='list-card' onClick={() => showCharacter(parseInt(character.url.substring(29,31)))}>
                        <Link to={`/characters/${key}`} className='list-card-title'>{character.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}