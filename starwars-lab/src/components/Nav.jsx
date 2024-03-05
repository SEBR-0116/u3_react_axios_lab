import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <div className="navbar">           
                <Link to="/">Home</Link>
                <Link to="/starships">Starships</Link>
                <Link to="/films">Films</Link>
                <Link to="/planets">Planets</Link>
                <Link to="/characters">Characters</Link>
                <Link to="/vehicles">Vehicles</Link>   
                <Link to="/species">Species</Link>        
        </div>
    )
}

export default Nav