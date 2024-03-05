import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarshipList from './StarshipList'//is something like this needed to pass the props since not defined at route in main?

const StarshipDetail = (props) => {
    //is there props that get passed down here?
    console.log(starships)

    const [starship, setStarship] = useState('')

    let { id } = useParams()
    useEffect(() => {
    let selectedStarship = props.starships.find((starship) => starship.id===parseInt(id))

    setStarship(selectedStarship)
    }, [props.starships, id])

    // useEffect(() => {
    //     let selectedStarship = starships.find((starship) => starship.id===parseInt(id))
    
    //     setStarship(selectedStarship)
    //     }, [starships, id])

    return starship ? (
        <div key={starship.id}>
            <h1>{starship.name}</h1>
        </div>
    ) : <h1>Starship not found</h1>; //could also be null
}
export default StarshipDetail