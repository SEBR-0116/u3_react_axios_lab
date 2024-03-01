import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className='nav-links'>
            <Link to= "/"> Home </Link>
            <Link to= "/starships"> Starships </Link>
        </div>
    )
}