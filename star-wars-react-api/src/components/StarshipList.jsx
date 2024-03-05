import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'
import { useNavigate } from "react-router-dom"

const StarshipList = () => {

    const [starships, setStarships] = useState([])

    useEffect(() => {
    const getStarship = async ()  => {
    const response = await axios.get(`${BASE_URL}/api/starships`)
    console.log(response)
    setStarships(response.data.results)

    } 
        getStarship()
    }, [])

    let navigate = useNavigate()

    const showStarship = (starship) => {
        navigate(`${starship.id}`)
    }

    return (
        <div className='listItemHolder'>
            
            <h2>Star Wars Starships</h2>
                {
                starships.map((starship) => (
                    <div key={starship.id} className='listItem' onClick={() => showStarship(starship)}>
                        
                        <h3>{starship.name}</h3>
                        <ul>
                            <li>Model: {starship.model}</li>
                            <li>Manufacturer: {starship.manufacturer}</li>
                            <li>Model: {starship.model}</li>
                        </ul> 
                    </div>
                ))
                }
        </div>
    )
}

export default StarshipList