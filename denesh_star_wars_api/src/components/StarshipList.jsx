import '../style/StarshipList.css'
import React, {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function StarshipList ({starships}){
    let navigate = useNavigate()

    //console.log("Start ship",starships)
    let startshiplist = starships
    // console.log("Test",startshiplist)
    // if (!starships || !starships.data || !starships.data.results) {
        if (!startshiplist) {
        // If any of the properties are undefined, return a loading state or an error message
        return <div>Page Loading please wait...</div>
      }else{

        
        const showStarshipDetails = (showDetails) => {
            navigate(`/StarshipList/${showDetails}`)
        }


    return(
        
        <div className='main-container'>
            
            <h1 className='page-title'>List of Startship</h1>
               
                {startshiplist.map((starship) => (
                    <div className='list-container' onClick={() => showStarshipDetails(parseInt(starship.url.substring(32,34)))} key={parseInt(starship.url.substring(32,34))}>
                        <ul className="data-list-ul">                    
                            <li><span className="list-style" >Name : </span> {starship.name}</li>
                            <li><span className="list-style" >Model : </span> {starship.model}</li>                           
                        </ul>
                    </div>
                    ))}
            
            
        </div>
        
    )}
}