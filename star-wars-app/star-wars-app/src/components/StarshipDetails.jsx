import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function StarshipDetails (props){
    function addCommasToNumber(number) {
        // Convert number to string
        let numString = number.toString();

        // Use regular expression to insert commas every three digits from the right
        numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return numString;
      }

console.log(props.starShips)

    let {index}=useParams()
    const [starShip, setStarShip]=useState('')

    useEffect(()=>{
        let selectedStarShip=props.starShips.find(
            (ship)=> props.starShips.indexOf(ship)===parseInt(index)
        )
        setStarShip(selectedStarShip)
    })
    return starShip ? (
        <div className='detail'>
            <div className='detail-header'>
                {/* {ship.map((border)=>(
                    <h1></h1>
                ))} */}
                <h1>{starShip.name}</h1>
                <h3>Model: {starShip.model}</h3>
            <h3>Manufacturer: {starShip.manufacturer}</h3>
            <h3>Cost: ᖬ{addCommasToNumber(starShip.cost_in_credits)}</h3>
            <h3>Max Speed: {addCommasToNumber(starShip.max_atmosphering_speed)}</h3>



            </div>

        </div>
    ) : null
}
