import Navbar from './Navbar'
import {Link} from 'react-router-dom'

export default function Header () {
    return (
        <div className='header'>
            <Link to='/' className='header-title'>Star Wars Database</Link>
            <div className='header-nav'>
                <Navbar/>
            </div>
        </div>
    )
}