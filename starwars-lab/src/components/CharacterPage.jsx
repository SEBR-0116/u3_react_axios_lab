import { useEffect, useState } from 'react'
import { Link,  useParams } from 'react-router-dom'
import axios from "axios"


const CharacterPage = () => {

    const [character, setCharacter] = useState('')
    const [species, setSpecies] = useState('')
    const [homeworld, setHomeworld] = useState('')

    let {id} = useParams()
    console.log(id)

    useEffect(() => {
        const getCharacter = async () => {
            try {
                const response = await axios.get(`https://swapi.dev/api/people/${id}`)
                setCharacter(response.data)
                console.log(response.data)

                if (response.data.species) {
                    const speciesResponse = await axios.get(response.data.species)
                    setSpecies(speciesResponse.data.name)
                }

                if (response.data.homeworld) {
                    const homeworldResponse = await axios.get(response.data.homeworld)
                    setHomeworld(homeworldResponse.data.name)
                }
            } catch (error) {
                console.error("Error fetching character:", error)
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
                    <h3>-- Species: {species}</h3>
                    <h3>-- Homeworld: {homeworld}</h3>
                    <h3>-- Height: {character.height} cm</h3>
                    <h3>-- Mass: {character.mass} kg</h3>
                    <h3>-- Hair Color: {character.hair_color}</h3>
                    <h3>-- Skin Color: {character.skin_color}</h3>
                    <h3>-- Eye Color: {character.eye_color}</h3>
                    <h3>-- Birth Year: {character.birth_year}</h3>
                    <h3>-- Gender: {character.gender}</h3>
                </div>
            </div>
            <div className="goback-link">
            <Link to="/characters">Go Back</Link>
            </div>
        </div>
        
    ) : null 
}
 export default CharacterPage