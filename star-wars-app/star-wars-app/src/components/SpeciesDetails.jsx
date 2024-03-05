import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function SpeciesDetails (props){


    let {index}=useParams()
    const [species, setSpecies]=useState('')

    useEffect(()=>{
        let selectedSpecies=props.species.find(
            (specie)=> props.species.indexOf(specie)===parseInt(index)
        )
        setSpecies(selectedSpecies)
    })
    return species ? (
        <div className='detail'>
            <div className='detail-header'>
                <h1>Name: {species.name}</h1>
                <h3>Classification: {species.classification}</h3>
                <h3>Average Height: {species.average_height}</h3>
                <h3>Language: {species.language}</h3>



            </div>

        </div>
    ) : null
}
