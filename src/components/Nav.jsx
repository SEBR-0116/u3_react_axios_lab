import { Link } from "react-router-dom";

export default function Nav (){
    return(
    <nav>
    <ul>
    <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/starships">StarshipList</Link>
      </li>

      <li>
        <Link to="/films">Films</Link>
      </li>
      <li>
        <Link to="/planets">Planets</Link>
      </li>
      <li>
        <Link to="/characters">Characters</Link>
      </li>
    </ul>
  </nav>
   );

}