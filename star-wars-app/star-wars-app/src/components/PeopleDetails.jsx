import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function PeopleDetails (props){


    let {index}=useParams()
    const [people, setPeople]=useState('')

    useEffect(()=>{
        let selectedPerson=props.people.find(
            (person)=> props.people.indexOf(person)===parseInt(index)
        )
        setPeople(selectedPerson)
    })
    return people ? (
        <div className='detail'>
            <div className='detail-header'>
                <h1>Name: {people.name}</h1>
                <h3>Height: {people.height}</h3>
                <h3>Birth Year: {people.birth_year}</h3>



            </div>

        </div>
    ) : null
}
