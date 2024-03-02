export default function StarshipList (props) {
  console.log(props)

  if (!props.starships) {
    return <h1> Loading Please Wait </h1>
  } else {
    return (
      <div>
        {
          props.starships.map((starship, index) => (
            <div key={index}>
              <h1> Name: {starship.name}</h1>
              <h2> Model: {starship.model}</h2>
              <h3> Class: {starship.starship_class}</h3>
              <h3> By: {starship.manufacturer}</h3>
              <h3> Crew Members: {starship.crew}</h3>
              <h3> Passanger Capacity: {starship.passengers}</h3>
              <h3> Cargo Capacity: {starship.cargo_capacity}</h3>
              <h3> Max Atmosphering Speed: {starship.max_atmosphering_speed}</h3>
              <h3> Hyperdrive Rating: {starship.hyperdrive_rating}</h3>
            </div>
          ))
        }
      </div>
    )
  }
}