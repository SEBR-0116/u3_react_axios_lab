import '../style/StarshipList.css'

export default function StarshipList ({starships}){
    //console.log("Start ship",starships)
    let startshiplist = starships
    // console.log("Test",startshiplist)
    // if (!starships || !starships.data || !starships.data.results) {
        if (!startshiplist) {
        // If any of the properties are undefined, return a loading state or an error message
        return <div>Page Loading please wait...</div>
      }else{
    return(
        
        <div className='main-container'>
            
            <h1 className='page-title'>List of Startship</h1>
               
                {startshiplist.map((starship,index) => (
                    <div className='list-container' key={index}>
                        <ul className="data-list-ul">
                        {/* <li key={starship.name}><span className="list-style" >Name : </span> {starship.name}</li> */}
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
                    ))}
            
            
        </div>
        
    )}
}