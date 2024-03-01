import { useState, useEffect } from "react";

export default function StarshipList(props) {
  //I got this function from ChatGPT to add commas to every 3 numbers from right to left
  function addCommasToNumber(number) {
    // Convert number to string
    let numString = number.toString();

    // Use regular expression to insert commas every three digits from the right
    numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return numString;
  }
  if (!props.starShips) {
    return <h1>Loading starships, please wait</h1>;
  } else {
    return (
      <div className="grid">
        {props.starShips.map((starShip, index) => (
          <div className="card" key={index}>
            <h1>{starShip.name}</h1>
            <h3>Model: {starShip.model}</h3>
            <h3>Manufacturer: {starShip.manufacturer}</h3>
            <h3>Cost: ᖬ{addCommasToNumber(starShip.cost_in_credits)}</h3>
            <h3>Max Speed: {addCommasToNumber(starShip.max_atmosphering_speed)}</h3>
          </div>
        ))}
      </div>
    );
  }
}
