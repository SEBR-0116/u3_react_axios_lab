import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { STATES } from "mongoose";
import { BASE_URL} from '../global'


export default function StarshipPage(props){

   //setting up the individiual starship in state
const [starship, setStarship] = useState()
//setting up the param to pull to be the ship's ID
let {id} = useParams()


useEffect(() => {
    const getStarship = async() => {
        const response = await axios.get(`${BASE_URL}starships/${id}`)
        // console.log(response)
        setStarship(response.data)
      }
      getStarship()
    },[])

return starship ? (
    <div className="detail">
    <div className="detail-header">
      {/* <img src={state.img} alt={state.name} /> */}
      <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1>{starship.name}</h1>
      </div> 
    </div>
    <div className="info-wrapper">
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <ul  className="data-list-ul">
            <li><span className="list-style" >Name : </span> {starship.name}</li>
            <li><span className="list-style" >Model : </span> {starship.model}</li>
            <li><span className="list-style" >Starship Class : </span>{starship.starship_class}</li>
            <li><span className="list-style" >Manufacturer : </span>{starship.manufacturer}</li>
            <li><span className="list-style" >Max Atmosphering Speed : </span>{starship.max_atmosphering_speed}</li>
            <li><span className="list-style" >Passengers : </span>{starship.passengers}</li>
            <li><span className="list-style" >Hyperdrive Rating : </span>{starship.hyperdrive_rating}</li>
            <li><span className="list-style" >Length : </span>{starship.length}</li>
            <li><span className="list-style" >Crew : </span>{starship.crew}</li>
            <li><span className="list-style" >Cost in Credits : </span>{starship.cost_in_credits}</li>
            <li><span className="list-style" >Consumables : </span>{starship.consumables}</li>
            <li><span className="list-style" >Cargo Capacity : </span>{starship.cargo_capacity}</li>
            <li><span className="list-style" >MGLT : </span>{starship.MGLT}</li>
            <li><span className="list-style" >Films : </span>{starship.films[0]}</li>
            <li><span className="list-style" >Pilots : </span>{starship.pilots[0]}</li>
        </ul>       
      </div>
      {/* <p>{state.description}</p> */}
    </div>
  </div>
) : null;

}