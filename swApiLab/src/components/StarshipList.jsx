

const StarshipList = (props) => {
    console.log(props)

    if(!props.starships) {
        return <h1>LOADING...</h1>

    } else {
        return (
        <div className="starship-list-container">
        <ul className='starships-list'>
            {
                props.starships.map((starship) => (
                    <li className="starship-card" key={starship.name}>
                        <h3 className="card-labels">Name: <span className='card-details'>{starship.name}</span></h3>
                        <h3 className="card-labels">Model: <span className='card-details'>{starship.model}</span></h3>
                        <h3 className="card-labels">Manufacturer: <span className='card-details'>{starship.manufacturer}</span></h3>
                        <h3 className="card-labels">Price: <span className='card-details'>{starship.cost_in_credits} credits</span></h3>
                    </li>
                ))
            }
        </ul>
        </div>
    )}

    
}

export default StarshipList
