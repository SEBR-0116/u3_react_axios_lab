

const Planets = (props) => {
    console.log(props.planets)

    if (!props.planets) {
        return <h3>Loading puhleeze wait</h3>
    } else {

        return (
            <div className="film-list">
                {
                    props.planets.map((planet) => (
                        <div className="planets" key={planet.name}>
                            <h3>{planet.name}</h3>
                            <h3>{planet.climate}</h3>
                            <h3>{planet.terrain}</h3>
                            <h3>{planet.gravity}</h3>
                            <h3>{planet.population}</h3>
                            <h3>{planet.surface_water}</h3>
                            <button>View Planets</button>
                        </div>
                    ))
                }
            </div>
    )
}

}

export default Planets