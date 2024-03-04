import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav'>
            <Link to="/" className='link'>Home </Link>
            <Link to="/starshipsList" className='link'>Starships List </Link>
            <Link to="/films" className='link'>Films </Link>
            <Link to="/planets" className='link'>Planets </Link>
            <Link to="/characters" className='link'>Characters </Link>    
        </div>
    )
}

export default Nav