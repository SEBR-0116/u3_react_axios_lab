import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const StarshipItems = (props) => {
    const [starship, setStarship] = useState(null)
    const { id } = useParams()

    let navigate = useNavigate()

    useEffect(() => {
        const getStarship = async() => {
            const response = await axios.get(`https://swapi.dev/api/starships`)
            setStarship(response.data.results[id])
        }
        getStarship()

    }, [])

    return starship ? (
        <div className='staritems'>
            <div className='staritems-header'>
                <h1>{starship.name}</h1>
            </div>
            <div className='info-wrapper'>
                <h3>Name: {starship.name}</h3>
                <h3>Model: {starship.model}</h3>
                <h4>Cost in credits: {starship.cost_in_credits}</h4>
                <h4>Passengers: {starship.passengers}</h4>
                <h4>Consumables: {starship.consumables}</h4>
            </div>
            <button id='starship' onClick={() => navigate('/starships')}> Back </button>
        </div>
    ) : (
        <h2>Starship NOT FOUND</h2>
    )
}

export default StarshipItems