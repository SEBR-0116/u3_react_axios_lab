import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'


const SpeciesList = (props) => {

  const [species, setSpecies] = useState([])

  useEffect(() => {
    const getSpecies = async () => {
      const response1 = await axios.get(`${BASE_URL}species`)
      const response2 = await axios.get(`${BASE_URL}species/?page=2`)
      const response3 = await axios.get(`${BASE_URL}species/?page=3`)
      const response4 = await axios.get(`${BASE_URL}species/?page=4`)

      const allSpecies = response1.data.results.concat(response2.data.results.concat(response3.data.results.concat(response4.data.results)))
      
      const sortedSpecies = allSpecies.toSorted((a, b) =>
          a.name.localeCompare(b.name))
      setSpecies(sortedSpecies)
    }

    getSpecies()
  }, [])

  console.log(species)

  let navigate=useNavigate()

  const showSpecies = (key) => {
    navigate(`${key}`)

    console.log(key)
  }

  if (species.length === 0) {
    return <h1 className="retrieving-text">Retrieving from far, far away...</h1>
  } else {
    return (
      <div>
        <h1 className="page-title">Species</h1>
        <div className='card-container'>
        {
          species.map((specie, key) => (
            <div key={key} className="card" onClick={() => showSpecies(parseInt(specie.url.substring(30,32)))}>
              <div className="first-display">
                <div className='category-container'>
                  <h2 className="Droid-text">Species</h2>
                  <div className='category-lines'>
                    <div className="category-line1"></div>
                    <div className="category-line2"></div>
                  </div>
                </div>
                  <h2 className="name">{specie.name}</h2>
                  <ul className="second-display">
                    <div className="details-container">
                      <h3>{specie.classification}</h3>
                      <div className="detail-line"></div>
                    </div>
                  </ul>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    )
}
}
export default SpeciesList