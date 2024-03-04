import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'

const StarshipList = () => {

    const [starships, setStarships] = useState([])
    //const [selectedStarship, setSelectedStarship] = useState(null)

    useEffect(() => {
    const getStarship = async ()  => {
    const response = await axios.get(`${BASE_URL}/api/starships`)
    console.log(response)
    setStarships(response.data.results)

    } 
        getStarship()
    }, [])
    return (
    <div className='listItemHolder'>
        <h2>Star Wars Starships</h2>
        <div>
            {
            starships.map((starship) => (
                <div key={starship.name} className='listItem'>
                    
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
    </div>
    )
}

export default StarshipList