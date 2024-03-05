import { useEffect, useState } from 'react'
import { Link,  useParams } from 'react-router-dom'
import axios from "axios"


const SpeciesPage = () => {

    const [specie, setSpecie] = useState('')
    const [homeworld, setHomeworld] = useState('')

    let {id} = useParams()
    console.log(id) 
    
    useEffect(() => {
        const getSpecie = async() => {
            const response = await axios.get(`https://swapi.dev/api/species/${id}`)
            setSpecie(response.data)
            console.log(response.data)

            if (response.data.homeworld) {
                const homeworldResponse = await axios.get(response.data.homeworld)
                setHomeworld(homeworldResponse.data.name)
            }
        }
        getSpecie()
        
    }, [id])

    

    return specie ? (
        <div>
            <div className="item-container">
                <div className="item-header">
                    <h1>{specie.name}</h1>
                </div>
                <h3 className="info-title">Species details</h3>
                <div className="info-wrapper">
                    <h3>-- Classification: {specie.classification}</h3>
                    <h3>-- Designation: {specie.designation}</h3>
                    <h3>-- Avg Height: {specie.average_height} cm</h3>
                    <h3>-- Avg Lifespan: {specie.average_lifespan} SY</h3>
                    <h3>-- Language: {specie.language}</h3>
                    <h3>-- Homeworld: {homeworld}</h3>
                </div>
            </div>
            <div className="goback-link">
            <Link to="/species">Go Back</Link>
            </div>
        </div>
        
    ) : null 
}
 export default SpeciesPage