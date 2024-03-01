import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to="/starships">Starships </Link>
      <Link to="/">Home</Link>
    </div>
  );
}
