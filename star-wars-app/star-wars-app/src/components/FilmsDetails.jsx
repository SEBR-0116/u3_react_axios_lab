import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function FilmsDetails (props){


    let {index}=useParams()
    const [films, setFilms]=useState('')

    useEffect(()=>{
        let selectedFilm=props.films.find(
            (film)=> props.films.indexOf(film)===parseInt(index)
        )
        setFilms(selectedFilm)
    })
    return films ? (
        <div className='detail'>
            <div className='detail-header'>
                <h1>Title: {films.title}</h1>
                <h3>Episode: {films.episode_id}</h3>
                <h3>Director: {films.director}</h3>
                <h3>Release Date: {films.release_date}</h3>



            </div>

        </div>
    ) : null
}
