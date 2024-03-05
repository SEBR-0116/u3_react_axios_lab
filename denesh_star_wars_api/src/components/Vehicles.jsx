import "../style/StarshipList.css"

export default function Vehicles({vehicles}){
    // console.log(vehicles)
    if(!vehicles){
        return <div> Page loading please wait</div>
    }else{
    return(
        <div className='main-container'>
        <h1 className='page-title'>List of Vehicles</h1>

        {vehicles.map((vehicle,index) => (
            <div className='list-container' key={index}>
                <ul className='data-list-ul'>
                    <li><span className='list-style'>Name : </span>{vehicle.name}</li>                  
                    <li><span className='list-style'>Model : </span>{vehicle.model}</li>                  
                    <li><span className='list-style'>Manufacturer : </span>{vehicle.manufacturer}</li>                  
                    <li><span className='list-style'>Cost in Cedits : </span>{vehicle.cost_in_credits}</li>                  
                    <li><span className='list-style'>Length : </span>{vehicle.length}</li>
                    <li><span className='list-style'>Max Atmosphering Speed : </span>{vehicle.max_atmosphering_speed}</li>                  
                    <li><span className='list-style'>Crew : </span>{vehicle.crew}</li>
                    <li><span className='list-style'>passengers : </span>{vehicle.passengers}</li>
                    <li><span className='list-style'>Cargo Capacity : </span>{vehicle.cargo_capacity}</li>
                    <li><span className='list-style'>Consumables : </span>{vehicle.consumables}</li>
                    <li><span className='list-style'>Vehicle Class : </span>{vehicle.vehicle_class}</li>
                    <li><span className='list-style'>Pilots : </span>{vehicle.pilots}</li>
                    <li><span className='list-style'>Films : </span>{vehicle.films[0]}</li>
                </ul>

            </div>

        ))}
        </div>
    )
    }
}