import '../componentsStyles/starships.css'

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
              <div className='starship-info'>
                <div className='starship-name'>
                  <div className='label'>Name:</div>
                  <div className='value'>{starship.name}</div>                  
                </div>
              </div>
              <div className='model'> Model: {starship.model}</div>
              <div className='class'> Class: {starship.starship_class}</div>
              <div className='manufacture'> By: {starship.manufacturer}</div>
              <div className='crew'> Crew Members: {starship.crew}</div>
              <div className='pass-capacity'> Passanger Capacity: {starship.passengers}</div>
              <div className='cargo-capacity'> Cargo Capacity: {starship.cargo_capacity}</div>
              <div className='atmospher'> Max Atmosphering Speed: {starship.max_atmosphering_speed}</div>
              <div className='hyperdrive'> Hyperdrive Rating: {starship.hyperdrive_rating}</div>
            </div>
          ))
        }
      </div>
    )
  }
}