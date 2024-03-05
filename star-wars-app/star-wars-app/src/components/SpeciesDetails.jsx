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
                <h1>{species.name}</h1>



            </div>

        </div>
    ) : null
}
