import StarshipItems from './StarshipItems'
import { Link } from 'react-router-dom'

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
                            <Link to={`/starships/${parseInt(starship.url.substring(32, 34))}`}>
                                <h3>{starship.name}</h3>
                            </Link>

                            {/* <h3>{starship.model}</h3>
                            <h3>{starship.manufacturer}</h3>
                            <h3>{starship.cost_in_credits}</h3> */}
                            {/* <button>View Starship</button> */}
                        </div>
                    ))
                }
            </div>
    )
}

}

export default StarshipList