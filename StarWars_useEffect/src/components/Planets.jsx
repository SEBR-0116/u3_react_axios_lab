const Planets = (props) => {
    console.log(props)

    if(!props.planets){
         return <h1>Loading please wait</h1>
    } else {
    
        return (
        <div className="grid">
            {
                props.planets.map((planet) =>
                    <div className="card" key={planet.name}>
                        {planet.name} {planet.population}
    
                    </div>
                )
            }
        </div>
    )}
    }
    
    export default Planets