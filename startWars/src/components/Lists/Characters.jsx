
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Characters (){
const[people , setPeople] = useState ([])

useEffect (()=>{
    const getPeople =async() =>{
        const response = await axios.get(`https://swapi.dev/api/people/`) //how to get all pages ?
        setPeople(response.data.results)
        console.log(response)
    }
    getPeople()

},[])

let navigate = useNavigate ()

const showPerson = (key) =>{
    navigate(`${key}`)
}

return(
<>
    <h1> List of Characters </h1>
    <div className='people'>
        {
            people.map((person, key)=>(

                <div key={key} onClick={()=> showPerson(key)} className='card'>
                    <h3>{person.name}</h3>
                    <h4> Height:{person.height}</h4>
                    <h4>Hair Color:{person.hair_color} </h4>
                    <h4> Eye Color: {person.eye_color}</h4>
                    <h4>Birth Year: {person.birth_year}</h4>
                    <h4>Gender: {person.gender}</h4>
                    
                    </div>
            ))
        }   





    </div>

    </>
)
   
}