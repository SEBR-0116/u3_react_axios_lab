import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import {BASE_URL} from '../globals'

export default function Film_Detail () {
    const [film, setFilm] = useState('')

    let {id} = useParams()
    console.log(id)

    useEffect(() => {
        const getFilm = async() => {
            const response = await axios.get(`${BASE_URL}/films/${id}`)
            setFilm(response.data)
            console.log(response.data)
        }
        getFilm()
    }, [id])

    return film ? (
        <div className='detail-page'>
            <div className='detail-card'>
                <div className='detail-card-title'>{film.title}</div>
                <div className='detail-card-info'>
                    <div className='detail-card-info-gen'>{film.episode_id}</div>
                    <div className='detail-card-info-main'>{film.opening_crawl}</div>
                    <div className='detail-card-info-gen'>{film.release_date}</div>
                    <div className='detail-card-info-gen'>{film.director}</div>
                    <div className='detail-card-info-gen'>{film.producer}</div>
                </div>
                <Link to='/films' className='detail-button-back'>Back to Films</Link>
            </div>
        </div>
    ) : (
        <div className='loading'>Loading...</div>
    )
}