import { useEffect, useState } from 'react'
import { Link,  useParams } from 'react-router-dom'
import axios from "axios"


const CharacterPage = () => {

    const [character, setCharacter] = useState('')
    const [species, setSpecies] = useState('')

    let {id} = useParams()
    console.log(id)

    useEffect(() => {
        const getSCharacter = async() => {
            const response = await axios.get(`https://swapi.dev/api/people/${id}`)
            setCharacter(response.data)
            console.log(response.data)

            if (response.data.species) {
                const characterResponse = await axios.get(response.data.species)
                setSpecies(characterResponse.data.name)
            }
        }
        getCharacter()
        
    }, [id])

    

    return character ? (
        <div>
            <div className="item-container">
                <div className="item-header">
                    <h1>{character.name}</h1>
                </div>
                <h3 className="info-title">Character details</h3>
                <div className="info-wrapper">
                    <h3>-- Species {species}</h3>
                    <h3>-- Designation: {character.designation}</h3>
                    <h3>-- Avg Height: {character.average_height} cm</h3>
                    <h3>-- Avg Lifespan: {character.average_lifespan} SY</h3>
                    <h3>-- Language: {character.language}</h3>
                    <h3>-- Homeworld: {homeworld}</h3>
                </div>
            </div>
            <div className="goback-link">
            <Link to="/species">Go Back</Link>
            </div>
        </div>
        
    ) : null 
}
 export default CharacterPage