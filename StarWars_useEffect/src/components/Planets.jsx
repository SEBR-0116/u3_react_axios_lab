import planet from '../images/planet.png'

const Planets = (props) => {

    if(!props.planets){
         return <h1>Loading please wait</h1>
    } else {
    
        return (
        <div className="grid">
            <img src={planet} width="150px;"></img>
            {
                props.planets.map((planet) =>
                    <div className="card" key={planet.name}>
                        <h4>{planet.name}</h4>
                        <p>Population: {planet.population}</p>
                    </div>
                )
            }
        </div>
    )}
    }
    
    export default Planets