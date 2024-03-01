

const StarshipList = (props) => {
    console.log(props.starships)

    if (!props.starships) {
        return <h3>Loading puhleeze wait</h3>
    } else {

        return (
            <div className="starship-list">
                {
                    props.starships.map((starship) => (
                        <div className="ship" key={starship.id}>
                            <h3>{starship.name}</h3>
                            <h3>{starship.model}</h3>
                            <h3>{starship.manufacturer}</h3>
                            <h3>{starship.cost_in_credits}</h3>
                            <button>View Starship</button>
                        </div>
                    ))
                }
            </div>
    )
}

}

export default StarshipList