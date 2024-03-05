import { useEffect, useState } from "react";
import { useParams, Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import { STATES } from "mongoose";
import { BASE_URL} from '../global'
import '../style/StarshipList.css'


export default function StarshipPage(props){

   //setting up the individiual starship in state
const [starship, setStarship] = useState()
const [filmTitles , setFilms] = useState([])
const [pilots, setPilots] = useState([])

//setting up the param to pull to be the ship's ID
let {id} = useParams()
let navigate = useNavigate()

useEffect(() => {
    
    const getStarship = async() => {
        try{
       const  response = await axios.get(`${BASE_URL}starships/${id}`)
        // console.log("1st",response)
        setStarship(response.data)
        }catch(error){
            if(error.response && error.response.status===404){
                navigate("/Error404")
            }
        }
      }

    const getListofFilms = async () =>  {
        try{
        const  response = await axios.get(`${BASE_URL}starships/${id}`)
        // console.log("1st",response.data.films)
        const arrayFilms = response.data.films
        // console.log("1st",arrayFilms)

        let filmsTitle = []
        
        arrayFilms.map(async (film) => {
             let responseFilmsTitles = await axios.get(`${film}`)
            //  console.log(responseF.data.title)
            filmsTitle.push(responseFilmsTitles.data.title)
        })
       
        setFilms(filmsTitle)
        }catch(error){
            if(error.response && error.response.status===404){
                navigate("/Error404")
            }
        }
    }

    const getPilots = async () => {
    try{
        const  response = await axios.get(`${BASE_URL}starships/${id}`)
         console.log(response.data.pilots)
        const arrayPilots = response.data.pilots

        let pilotNames = []
        if(arrayPilots.length > 0){
            arrayPilots.map(async (pilot) => {
                let responsePilotName = await axios.get({pilot})
                console.log(responsePilotName.data)
                pilotNames.push(responsePilotName.data)
        })
        }else{
            pilotNames.push('No pilot assigned')
        }
        setPilots(pilotNames)
        }catch(error){
        if(error.response && error.response.status===404){
            navigate("/Error404")
        }
    }
    }


      getStarship()
      getListofFilms()
      getPilots()

    },[])

//    console.log(filmTitles)
// console.log(pilots)

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
            <li><span className="list-style" >Films : </span></li>
            <li><span className="list-style " > </span>{filmTitles.map((element, index) => (  <span className="film-title card" key={index}>{element}</span>))}</li>
            <li><span className="list-style" >Pilots : </span></li>
            <li><span className="list-style" ></span>{pilots.map((element,index) => ( <span className="pilot-name card" key={index}>{element}</span>))}</li>
        </ul>       
      </div>
      <h3 className="back-to-starship-list"><Link to='/StarshipList'>Bact to Starship List</Link></h3>
    </div>
  </div>
) : null;

}