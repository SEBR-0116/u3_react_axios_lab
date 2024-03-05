import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function StarshipList(props) {
  //I got this function from ChatGPT to add commas to every 3 numbers from right to left
  

  let navigate=useNavigate()

  let showItem=(index)=>{
      navigate(`${index}`)
  }
  if (!props.starShips) {
    return <h1>Loading starships, please wait</h1>;
  } else {
    return (
      <div className="grid">
        {props.starShips.map((starShip, index) => (
          <div className="card" key={index} onClick={()=> showItem(index)}>
            <h1>{starShip.name}</h1>
            {/* <h3>Model: {starShip.model}</h3>
            <h3>Manufacturer: {starShip.manufacturer}</h3>
            <h3>Cost: ᖬ{addCommasToNumber(starShip.cost_in_credits)}</h3>
            <h3>Max Speed: {addCommasToNumber(starShip.max_atmosphering_speed)}</h3> */}
          </div>
        ))}
      </div>
    );
  }
}
