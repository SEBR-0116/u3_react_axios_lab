import { useNavigate } from 'react-router-dom'
import ship_image from '../images/ship_image.webp'

const StarshipList = (props) => {

    let navigate = useNavigate()

    const showShip = (ship) => {
        navigate (`${ship.name}`)
    }

console.log(props)
if(!props.starships){
     return <h1>Loading please wait</h1>
} else {

    return (
    <>
    <div className="grid">
    <img src={ship_image} className="ship" width="450px;"></img>
        {
            props.starships.map((starship)=>
                <div className="card" onClick = {() => showShip(starship)} key={starship.name}>
                    <h4>{starship.name}</h4>
                    <p>Passenger Capacity: {starship.passengers}</p>
                </div>
            )
        }
    </div>
    </>
)}
}

export default StarshipList