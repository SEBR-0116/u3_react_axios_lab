import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Base_URL } from '../globals'

const PeopleList = () => {
    const [people, setPeople] = useState([])
    const [selectedPerson, setSelectedPerson] = useState(null)

    useEffect(() => {
        axios.get(`${Base_URL}/people`)
            .then(response => {
                setPeople(response.data.results)
            })
            .catch(error => {
                console.error("Error fetching people:", error)
            })
    }, [])

    const handlePersonClick = (person) => {
        // Toggle detail view: if clicked person is already selected, deselect it; otherwise, select it
        if (selectedPerson && selectedPerson.name === person.name) {
            setSelectedPerson(null)
        } else {
            setSelectedPerson(person)
        }
    }

    return (
        <div>
            <h2>People</h2>
            {people.map(person => (
                <div key={person.name}>
                    <p style={{cursor: 'pointer'}} onClick={() => handlePersonClick(person)}>
                        {person.name}
                    </p>
                    {selectedPerson && selectedPerson.name === person.name && (
                        <div>
                            <p>Height: {person.height}</p>
                            <p>Mass: {person.mass}</p>
                            {/* Render more details as needed */}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default PeopleList