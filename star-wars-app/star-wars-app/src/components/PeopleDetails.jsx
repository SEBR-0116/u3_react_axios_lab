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
                <h1>{people.name}</h1>



            </div>

        </div>
    ) : null
}
