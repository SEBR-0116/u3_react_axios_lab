
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"



export default function Films (){
    
const [films, setFilms] = useState ([])
useEffect (()=>{
    const getFilms = async () => {
        const response = await axios.get(`https://swapi.dev/api/films/`)
        setFilms(response.data.results)
        console.log(response)
    }

getFilms()

},[])

let navigate =useNavigate()

const showFilm = (key)=> {
    navigate(`${key}`)
}
return(
    <>
    <h2> Films </h2>
    <div className="Films">
    {
        films.map((film, key)=>(
            <div key={key} onClick={()=>showShip(key)} className="card">  
            <h3>{film.title}</h3>
            <h4>Director : {film.director}</h4>
            <h4>Producer: {film.producer}</h4>
            <h4>Release Date: {film.release_date}</h4>
            </div>
        ))
    }


    </div>
    
    </>
)



}