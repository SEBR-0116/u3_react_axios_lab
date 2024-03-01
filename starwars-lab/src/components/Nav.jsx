import { Link } from 'react-router-dom'
import StarshipList from './StarshipList'
import Home from './Home'

const Nav = () => {
    return (
        <div>
            
                <Link to="/">Home</Link>
                <Link to="/starships">Starships</Link>
           
        </div>
    )
}

export default Nav