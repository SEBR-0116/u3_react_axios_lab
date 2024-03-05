import { Link, link } from 'react-router-dom'
import '../style/Nav.css'

export default function Nav (){
    return(
        <nav>
            <ul>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/StarshipList'> Starship List</Link></li>
                <li><Link to='/films'>Films</Link> </li>
                <li><Link to='/planets'>Planets</Link></li>
                <li><Link to='/characters'>Characters</Link></li>
                <li><Link to='/vehicles'>Vehicles</Link></li>
                <li><Link to='/Species'>Species</Link></li>
            </ul>            

        </nav>
    )
}