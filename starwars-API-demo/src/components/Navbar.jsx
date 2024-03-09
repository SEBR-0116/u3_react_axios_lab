import {Link} from 'react-router-dom'

export default function Navbar () {
    return (
        <div className='navbar'>
            <Link to="/films">Films</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/planets">Planets</Link>
            <Link to="/species">Species</Link>
            <Link to="/ships">Ships</Link>
            <Link to="/vehicles">Vehicles</Link>
        </div>
    )
}
