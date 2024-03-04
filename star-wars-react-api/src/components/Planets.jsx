import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'

const Planets = () => {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
    const getPlanets = async ()  => {
    const response = await axios.get(`${BASE_URL}/api/planets`)
    console.log(response)
    setPlanets(response.data.results)

    } 
        getPlanets()
    }, [])

    return (
    <div className='listItemHolder'>
        <h2>Star Wars Planets</h2>
        <div>
            {
            planets.map((planet) => (
                <div key={planet.name} className='listItem'>
                    
                    <h3>{planet.name}</h3>
                    <ul>
                        <li>Climate: {planet.climate}</li>
                        <li>Terrain: {planet.terrain}</li>
                        <li>Population: {planet.population}</li>
                        
                    </ul> 
                </div>
            ))
            }
        </div>
    </div>
    )
}

export default Planets