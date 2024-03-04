import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'


const StarshipList = (props) => {

  const [starships, setStarships] = useState([])

  useEffect(() => {
    const getStarships = async () => {
      const response1 = await axios.get(`${BASE_URL}starships`)
      const response2 = await axios.get(`${BASE_URL}starships/?page=2`)
      const response3 = await axios.get(`${BASE_URL}starships/?page=3`)
      const response4 = await axios.get(`${BASE_URL}starships/?page=4`)

      const allStarships = response1.data.results.concat(response2.data.results.concat(response3.data.results.concat(response4.data.results)))
      
      const sortedStarships = allStarships.toSorted((a, b) =>
          a.name.localeCompare(b.name))
      setStarships(sortedStarships)
    }

    getStarships()
  }, [])

  console.log(starships)

  if (starships.length === 0) {
    return <h1 className="retrieving-text">Retrieving from far, far away...</h1>
  } else {
    return (
      <div>
        <h1 className="page-title">Starships</h1>
        <div className="card-container">
        {
          starships.map((starship) => (
            <div key={starship.name} className="card">
              <div className="first-display">
                <div className='category-container'>
                    <h2 className="Droid-text">Starship</h2>
                    <div className="category-lines">
                      <div className="category-line1"></div>
                      <div className="category-line2"></div>
                    </div>
                </div>
                <h2 className="ship-name">{starship.name}</h2>
                  <ul className='second-display'>
                    <div className='details-container'>
                      <h3>Cost -- {starship.cost_in_credits} c</h3>
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
export default StarshipList