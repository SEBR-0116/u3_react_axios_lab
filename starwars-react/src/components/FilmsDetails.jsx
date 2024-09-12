import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function Films (props) {

  const [films, setFilms] = useState([])
  const BASE_URL = 'https://swapi.dev/api/'
  let {id} = useParams()

  useEffect(()=>{
    const getFilms = async() => {
    const response = await axios.get(`${BASE_URL}films/${id}`)
    console.log(response)
    setFilms(response.data)
  }
  getFilms()
},[])

  if (!films) {
    return <h1> Loading Please Wait </h1>
  } else {
    return (
    <div>
      {
          <div key={id}>
            <div className='film-info'>
              <div className='film-name'>
                <div className='label'>Name:</div>
                <div className='value'>{films.title}</div>
              </div>
              <div className='director'> Director: {films.director}</div>
              <div className='producer'> Producer: {films.director}</div>
              <div className='date'> Release Date: {films.director}</div>
            </div>
            <Link to="/filmlist"> Return to film list</Link>
          </div>
      }
    </div>
  )
}
}